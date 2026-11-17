import React, { useEffect, useRef, useState } from "react";
import ThreeGlobe from "three-globe";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
  PointLight,
  Vector3,
  Quaternion,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import fallbackCountriesData from "../data/globe-data-min.json";

// Regional coordinates for programmatic globe navigation
const REGION_COORDS = [
  { region: "North America", lat: 39.0, lng: -98.0 },
  { region: "Europe & UK", lat: 50.5, lng: 10.0 },
  { region: "Asia-Pacific", lat: 23.0, lng: 110.0 },
  { region: "Latin America", lat: -14.0, lng: -55.0 },
  { region: "Middle East & Africa", lat: 18.0, lng: 38.0 },
];

// Curated DaQube global enterprise contributor hubs
const DAQUBE_HUBS = [
  { city: "San Francisco", lat: 37.77, lng: -122.41, size: 1.2 },
  { city: "New York", lat: 40.71, lng: -74.0, size: 1.2 },
  { city: "London", lat: 51.5, lng: -0.12, size: 1.2 },
  { city: "Berlin", lat: 52.52, lng: 13.4, size: 1.1 },
  { city: "Paris", lat: 48.85, lng: 2.35, size: 1.0 },
  { city: "Bangalore", lat: 12.97, lng: 77.59, size: 1.3 },
  { city: "Tokyo", lat: 35.67, lng: 139.65, size: 1.2 },
  { city: "Seoul", lat: 37.56, lng: 126.97, size: 1.1 },
  { city: "Singapore", lat: 1.35, lng: 103.81, size: 1.2 },
  { city: "Sydney", lat: -33.86, lng: 151.2, size: 1.1 },
  { city: "São Paulo", lat: -23.55, lng: -46.63, size: 1.2 },
  { city: "Dubai", lat: 25.2, lng: 55.27, size: 1.2 },
  { city: "Nairobi", lat: -1.28, lng: 36.82, size: 1.0 },
  { city: "Johannesburg", lat: -26.2, lng: 28.04, size: 1.1 },
];

// Data pipelines connecting contributor hubs
const DAQUBE_ARCS = [
  { startLat: 37.77, startLng: -122.41, endLat: 40.71, endLng: -74.0, status: true, order: 1, arcAlt: 0.15 },
  { startLat: 40.71, startLng: -74.0, endLat: 51.5, endLng: -0.12, status: true, order: 2, arcAlt: 0.22 },
  { startLat: 51.5, startLng: -0.12, endLat: 52.52, endLng: 13.4, status: true, order: 3, arcAlt: 0.1 },
  { startLat: 51.5, startLng: -0.12, endLat: 12.97, endLng: 77.59, status: false, order: 4, arcAlt: 0.28 },
  { startLat: 12.97, startLng: 77.59, endLat: 1.35, endLng: 103.81, status: true, order: 5, arcAlt: 0.16 },
  { startLat: 1.35, startLng: 103.81, endLat: 35.67, endLng: 139.65, status: true, order: 6, arcAlt: 0.2 },
  { startLat: 35.67, startLng: 139.65, endLat: 37.77, endLng: -122.41, status: false, order: 7, arcAlt: 0.32 },
  { startLat: 40.71, startLng: -74.0, endLat: -23.55, endLng: -46.63, status: true, order: 8, arcAlt: 0.26 },
  { startLat: 51.5, startLng: -0.12, endLat: 25.2, endLng: 55.27, status: true, order: 9, arcAlt: 0.2 },
  { startLat: 25.2, startLng: 55.27, endLat: -26.2, endLng: 28.04, status: false, order: 10, arcAlt: 0.24 },
  { startLat: 1.35, startLng: 103.81, endLat: -33.86, endLng: 151.2, status: true, order: 11, arcAlt: 0.22 },
  { startLat: 35.67, startLng: 139.65, endLat: 37.56, endLng: 126.97, status: true, order: 12, arcAlt: 0.08 },
];

// Fixed distance at 390 (30% smaller globe, NO zoom in / zoom out)
const FIXED_DISTANCE = 390;

export function GithubGlobe({ selectedRegionIndex = 0, className = "" }) {
  const mountRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const controlsRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Smooth orbital navigation state (constant distance, no zoom in/out)
  const navAnimRef = useRef({
    isNavigating: false,
    startTime: 0,
    duration: 1200, // 1.2s smooth orbital flight
    startCamDir: new Vector3(0, 0, 1),
    targetCamDir: new Vector3(0, 0, 1),
  });

  // When selectedRegionIndex changes, navigate smoothly to center coordinates
  useEffect(() => {
    if (selectedRegionIndex === undefined || selectedRegionIndex < 0) return;
    const target = REGION_COORDS[selectedRegionIndex];
    if (!target || !globeInstanceRef.current || !cameraRef.current) return;

    const globe = globeInstanceRef.current;

    // 1. Get exact Cartesian coordinates on globe surface for target lat & lng
    const coords = globe.getCoords(target.lat, target.lng, 0);
    const localPt = new Vector3(coords.x, coords.y, coords.z);

    // 2. Transform local surface point to World coordinates taking globe orientation into account
    const worldPt = localPt.clone();
    globe.localToWorld(worldPt);

    // 3. Target direction directly facing the coordinate
    const targetDir = worldPt.clone().normalize();
    const startDir = cameraRef.current.position.clone().normalize();

    // 4. Trigger orbital flight to center position at strictly constant distance (no zoom)
    navAnimRef.current = {
      isNavigating: true,
      startTime: performance.now(),
      duration: 1200,
      startCamDir: startDir,
      targetCamDir: targetDir,
    };

    if (controlsRef.current) {
      controlsRef.current.autoRotate = false;
    }
  }, [selectedRegionIndex]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || width || 500;

    // 1. Scene setup
    const scene = new Scene();
    sceneRef.current = scene;
    scene.fog = new Fog(0x060c1d, 400, 2500);

    // 2. Camera setup - set at FIXED_DISTANCE (390, ~30% smaller, clear & compact)
    const camera = new PerspectiveCamera(45, width / height, 1, 2500);
    camera.position.set(0, 0, FIXED_DISTANCE);
    cameraRef.current = camera;

    // 3. Renderer with transparent background (no borders, alpha: true)
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // 100% transparent background
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting matching classic GitHub Globe specification
    const ambientLight = new AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const dLight = new DirectionalLight(0xffffff, 1.5);
    dLight.position.set(-800, 2000, 400);
    camera.add(dLight);

    const dLight1 = new DirectionalLight(0x7982f6, 1.8); // Periwinkle Blue Key Light
    dLight1.position.set(-200, 500, 200);
    camera.add(dLight1);

    const pLight = new PointLight(0x38bdf8, 1.4); // Cyan-Blue Point Glow
    pLight.position.set(300, -200, 200);
    camera.add(pLight);

    scene.add(camera);

    // 5. OrbitControls with smooth damping and continuous rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = false; // Disable wheel zoom so the page scrolls smoothly
    controls.rotateSpeed = 0.75;
    controls.autoRotate = true; // Continuous smooth rotation
    controls.autoRotateSpeed = 0.6;
    controls.minPolarAngle = Math.PI / 4.5;
    controls.maxPolarAngle = Math.PI - Math.PI / 4.5;
    controlsRef.current = controls;

    // 6. Initialize ThreeGlobe with Default Blue Theme
    const globe = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: true,
    });

    globe.rotateY(-Math.PI * (5 / 9));
    globe.rotateZ(-Math.PI / 6);

    const globeMaterial = globe.globeMaterial();
    globeMaterial.color = new Color(0x0e1b38); // Deep royal space navy
    globeMaterial.emissive = new Color(0x050d22); // Deep rich blue emissive
    globeMaterial.emissiveIntensity = 0.3;
    globeMaterial.shininess = 0.95;

    // Default GitHub electric cyan-blue atmosphere
    globe
      .showAtmosphere(true)
      .atmosphereColor("#38bdf8")
      .atmosphereAltitude(0.25);

    scene.add(globe);
    globeInstanceRef.current = globe;

    // Helper to configure globe layers once countries data is available
    const setupGlobeData = (countries) => {
      // Hexagonal Country Polygons - ultra-crisp contrast so all continents are clearly visible
      globe
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.65)
        .hexPolygonColor((e) => {
          const activeCountries = [
            "USA", "CAN", "MEX", "GBR", "DEU", "FRA", "ESP", "ITA",
            "IND", "JPN", "KOR", "SGP", "VNM", "AUS", "BRA", "COL",
            "ARE", "SAU", "EGY", "NGA", "KEN", "ZAF",
          ];
          if (activeCountries.includes(e.properties.ISO_A3)) {
            return "rgba(255, 255, 255, 1)"; // Key regions: brilliant, high-contrast pure white
          }
          return "rgba(147, 197, 253, 0.85)"; // All continents: luminous sky-blue (#93c5fd)
        });

      // Animated Arcs with GitHub-inspired default cyan and electric periwinkle
      globe
        .arcsData(DAQUBE_ARCS)
        .arcColor((e) => (e.status ? "#38bdf8" : "#818cf8"))
        .arcAltitude((e) => e.arcAlt || 0.18)
        .arcStroke((e) => (e.status ? 0.8 : 0.5))
        .arcDashLength(0.9)
        .arcDashGap(3.5)
        .arcDashAnimateTime(1100)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap((e) => (e.order || 1) * 0.8);

      // Contributor Hub Points and Labels
      globe
        .pointsData(DAQUBE_HUBS)
        .pointColor(() => "#ffffff")
        .pointsMerge(false)
        .pointAltitude(0.06)
        .pointRadius(0.24)
        .labelsData(DAQUBE_HUBS)
        .labelColor(() => "#ffffff")
        .labelDotRadius(0.35)
        .labelSize(1.4)
        .labelText("city")
        .labelResolution(6)
        .labelAltitude(0.018);

      // Glowing Hub Rings in cyan-blue
      globe
        .ringsData(DAQUBE_HUBS)
        .ringColor(() => "#38bdf8")
        .ringMaxRadius(2.5)
        .ringPropagationSpeed(1.8)
        .ringRepeatPeriod(850);

      setIsLoading(false);
    };

    // Attempt fetch first with seamless fallback
    fetch("/data/globe-data-min.json")
      .then((r) => r.json())
      .then((data) => setupGlobeData(data))
      .catch(() => {
        // Fallback to bundled json
        setupGlobeData(fallbackCountriesData);
      });

    // 7. Animation loop: handles smooth orbital navigation and continuous rotation (constant distance)
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      const now = performance.now();
      const nav = navAnimRef.current;

      if (nav.isNavigating) {
        const elapsed = now - nav.startTime;
        const p = Math.min(1, Math.max(0, elapsed / nav.duration));
        // Smooth cubic ease-in-out curve
        const ease =
          p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

        // Quaternion spherical interpolation to position the coordinate in the exact middle of screen
        const qStart = new Quaternion().setFromUnitVectors(new Vector3(0, 0, 1), nav.startCamDir);
        const qTarget = new Quaternion().setFromUnitVectors(new Vector3(0, 0, 1), nav.targetCamDir);
        const qCurrent = qStart.clone().slerp(qTarget, ease);
        const currentDir = new Vector3(0, 0, 1).applyQuaternion(qCurrent);

        // Constant distance at FIXED_DISTANCE (390) - strictly NO zoom in / zoom out!
        camera.position.copy(currentDir.multiplyScalar(FIXED_DISTANCE));
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);

        if (p >= 1) {
          nav.isNavigating = false;
          // Re-enable smooth auto-rotation
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.6;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 8. Resize Observer for dynamic responsiveness without clipping
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height || w;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animId);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full h-full select-none overflow-visible flex items-center justify-center ${className}`}
    >
      {/* Outer ambient glow halo without borders (seamless background bleed) */}
      <div
        className="absolute -inset-8 rounded-full pointer-events-none blur-3xl opacity-45 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.35) 0%, rgba(30, 58, 138, 0.2) 50%, transparent 72%)",
        }}
      />

      {/* 3D Canvas element - 100% borderless, transparent, free-floating */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing overflow-visible flex items-center justify-center"
      />

      {/* Minimal clean loading indicator without any box borders */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="w-9 h-9 border-2 border-[#38bdf8] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
