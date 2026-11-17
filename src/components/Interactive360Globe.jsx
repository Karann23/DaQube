import React, { useRef, useState, useEffect, useCallback } from "react";

export function Interactive360Globe({
  videoSrc = "/videos/global-network.mp4",
  className = "",
  size = 420
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const reqAnimRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Drag & rotation tracking ref
  const animRef = useRef({
    isDown: false,
    startX: 0,
    lastX: 0,
    targetAngle: 0,
    currentAngle: 0,
    velocity: 0,
    lastTime: 0,
    autoRotate: true,
    idleTimer: null,
  });

  // Ensure video metadata is loaded
  const handleLoadedMetadata = () => {
    setIsReady(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  };

  // Sync video currentTime to rotation angle (0 - 360 deg -> 0 - video.duration)
  const syncAngleToVideo = useCallback((angle) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // Normalize angle to [0, 360)
    let normalized = angle % 360;
    if (normalized < 0) normalized += 360;

    const progress = normalized / 360;
    const targetTime = progress * video.duration;

    // Fast seek video to target time
    if (Math.abs(video.currentTime - targetTime) > 0.015) {
      video.currentTime = targetTime;
    }
  }, []);

  // Main 60fps animation / lerp / inertia loop
  useEffect(() => {
    let prevTime = performance.now();

    const loop = (now) => {
      const dt = Math.min((now - prevTime) / 1000, 0.05);
      prevTime = now;

      const state = animRef.current;

      if (state.isDown) {
        // While dragging: ultra-smooth lerp towards target angle
        const diff = state.targetAngle - state.currentAngle;
        state.currentAngle += diff * 0.22;
        syncAngleToVideo(state.currentAngle);
      } else if (Math.abs(state.velocity) > 0.05) {
        // Inertia glide when released
        state.currentAngle += state.velocity;
        state.targetAngle = state.currentAngle;
        state.velocity *= 0.94; // Smooth friction decay
        syncAngleToVideo(state.currentAngle);
      } else if (state.autoRotate) {
        // Gentle, seamless continuous auto-rotation (18 deg/sec)
        state.currentAngle = (state.currentAngle + dt * 20) % 360;
        state.targetAngle = state.currentAngle;
        syncAngleToVideo(state.currentAngle);
      }

      reqAnimRef.current = requestAnimationFrame(loop);
    };

    reqAnimRef.current = requestAnimationFrame(loop);

    return () => {
      if (reqAnimRef.current) cancelAnimationFrame(reqAnimRef.current);
    };
  }, [syncAngleToVideo]);

  // Pointer Down (Mouse or Touch)
  const handlePointerDown = (e) => {
    const state = animRef.current;
    state.isDown = true;
    state.startX = e.clientX;
    state.lastX = e.clientX;
    state.velocity = 0;
    state.lastTime = performance.now();
    state.autoRotate = false;

    if (state.idleTimer) clearTimeout(state.idleTimer);

    setIsDragging(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  // Pointer Move (Smooth Dragging or subtle Cursor Tracking)
  const handlePointerMove = (e) => {
    const state = animRef.current;
    const now = performance.now();

    if (state.isDown) {
      const deltaX = e.clientX - state.lastX;
      state.lastX = e.clientX;

      // Natural drag sensitivity
      const sensitivity = 0.55;
      state.targetAngle -= deltaX * sensitivity;

      const dt = Math.max(now - state.lastTime, 16);
      state.velocity = (-deltaX * sensitivity * 16) / dt;
      state.lastTime = now;
    } else {
      // Soft cursor hovering tracking when inside container
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const normalizedX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to +0.5
      state.targetAngle += normalizedX * 0.4;
    }
  };

  // Pointer Up / Cancel
  const handlePointerUp = (e) => {
    const state = animRef.current;
    state.isDown = false;
    setIsDragging(false);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch (_) {}

    // Resume gentle auto-rotation after 2.5 seconds of inactivity
    if (state.idleTimer) clearTimeout(state.idleTimer);
    state.idleTimer = setTimeout(() => {
      state.autoRotate = true;
    }, 2500);
  };

  const handleMouseEnter = () => {
    const state = animRef.current;
    if (state.idleTimer) clearTimeout(state.idleTimer);
  };

  const handleMouseLeave = () => {
    const state = animRef.current;
    if (!state.isDown) {
      if (state.idleTimer) clearTimeout(state.idleTimer);
      state.idleTimer = setTimeout(() => {
        state.autoRotate = true;
      }, 1500);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none touch-none flex flex-col items-center justify-center transition-transform duration-300 will-change-transform ${className}`}
      style={{
        width: "100%",
        maxWidth: `${size}px`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {/* Outer Glow Halo & Glassmorphism Backdrop */}
      <div className="relative w-full aspect-square rounded-full p-2 bg-gradient-to-b from-[#12151A]/95 to-[#1E232B]/95 shadow-[0_20px_50px_rgba(18,21,26,0.25)] border border-[rgba(255,255,255,0.12)] hover:border-[#EC5E27]/40 transition-all duration-300">
        
        {/* Ambient Radial Accent Glows */}
        <div
          className="absolute -inset-1 rounded-full opacity-35 blur-xl pointer-events-none transition-opacity duration-500 hover:opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(236, 94, 39, 0.45) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 75%)",
          }}
        />

        {/* Circular Viewport for 360 Video Globe - Clean and Pure */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center shadow-inner">
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            webkit-playsinline="true"
            muted
            preload="auto"
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover pointer-events-none transform scale-[1.03]"
          />

          {/* Spherical Atmospheric Depth Vignette */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, transparent 60%, rgba(0, 0, 0, 0.35) 85%, rgba(0, 0, 0, 0.8) 100%)",
              boxShadow: "inset 0 0 25px rgba(236, 94, 39, 0.2)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
