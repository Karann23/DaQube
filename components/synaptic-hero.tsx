"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check } from "lucide-react";

export function SynapticHero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero synaptic-dark-hero"
      aria-label="DaQube Human-Centered AI Data Hero"
    >
      {/* Background High-Tech Grid & Ambient Crimson Glow */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-ambient-glow" aria-hidden="true" />

      {/* Layer 1: Central Content Layer (Z-Index: 10) */}
      <div className="container hero-content-layer">
        <div
          className="hero-text-box"
          style={{
            transform: `translate(${parallax.x * -6}px, ${parallax.y * -4}px)`
          }}
        >
          {/* Kicker from Image 1 */}
          <div className="hero-kicker">
            <span className="pulse-dot" /> HUMAN-CENTERED AI DATA
          </div>

          {/* Headline from Image 1 */}
          <h1 className="hero-headline">
            The data behind <span className="text-crimson">intelligence.</span>
          </h1>

          {/* Lead Copy from Image 1 */}
          <p className="hero-lead">
            High-quality human-generated data and expert workflows for teams building, training and evaluating AI.
          </p>

          {/* CTAs from Image 1 */}
          <div className="hero-actions">
            <Link className="button button-crimson" href="/contact">
              Discuss your project <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link text-link-silver" href="#services-section">
              Explore our services <ArrowRight size={17} />
            </Link>
          </div>

          {/* Proof Points from Image 1 */}
          <div className="hero-proof">
            <span>
              <Check size={15} /> Project-specific workflows
            </span>
            <span>
              <Check size={15} /> Human-led quality review
            </span>
          </div>
        </div>
      </div>

      {/* Layer 2: 3D Hands Motion Layer (Z-Index: 20) — OVERLAPPING IN FRONT OF THE TEXT */}
      <div
        className="hero-hands-overlap-layer"
        style={{
          transform: `perspective(1200px) rotateX(${parallax.y * -2.5}deg) rotateY(${parallax.x * 3.5}deg) translateZ(0)`
        }}
        aria-hidden="true"
      >
        <video
          className="hero-hands-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/synaptic-hands-alpha-poster.png"
        >
          <source src="/videos/synaptic-hands-alpha.webm" type="video/webm" />
          <source src="/videos/synaptic-hands-dark.mp4" type="video/mp4" />
        </video>

        {/* Caption from Image 1 */}
        <div className="hero-floating-caption">
          HUMAN INPUT <span>→</span> MODEL INTELLIGENCE
        </div>
      </div>

      {/* Bottom Status Banner from Image 1 */}
      <div className="container hero-bottom-bar">
        <span>BUILT AROUND YOUR MODEL'S NEEDS</span>
        <div className="hero-bottom-line" />
        <span>SCOPED. REVIEWED. READY.</span>
        <ArrowDownRight size={18} />
      </div>
    </section>
  );
}
