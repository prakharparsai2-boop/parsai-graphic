import React, { useState, useEffect, useRef } from "react";
import { Box, Layers, Aperture, Film, Scissors } from "lucide-react";
import MarqueeButton from "./MarqueeButton";
import PausableAnimation from "./PausableAnimation";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./Hero.css";

const LOGOS = [
  { name: "CapCut", icon: Scissors },
  { name: "Davinci Resolve", icon: Aperture },
  { name: "Blender", icon: Box },
  { name: "After Effects", icon: Layers },
  { name: "Premiere Pro", icon: Film },
];

const Hero: React.FC = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const logosRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(logosRef);

  useEffect(() => {
    // Only animate on mobile and when intersecting
    if (window.innerWidth > 768 || !isIntersecting) return;

    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % LOGOS.length);
    }, 1000); // 1s as requested

    return () => clearInterval(interval);
  }, [isIntersecting]);

  return (
    <section className="hero-section">
      {/* 
        Layer 1: Typography (Behind Image)
      */}
      <header className="hero-text-layer">
        <h1 className="hero-title anim-title">PRAKHAR</h1>
        <div className="hero-subtitle-container">
          <p className="hero-subtitle anim-subtitle-left">VIDEO</p>
          <p className="hero-subtitle anim-subtitle-right">EDITOR</p>
        </div>
      </header>

      {/* 
        Layer 2: The Hero Image 
      */}
      <div className="hero-image-layer">
        <img
          src="/hero.png"
          alt="Prakhar"
          className="hero-image anim-image"
        />
        {/* Overlay removed */}
      </div>

      {/* 
        Layer 3: Foreground Content (Overlay)
      */}
      <div className="hero-content-layer">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Left Column: Intro & CTA */}
            <div className="hero-intro">
              <PausableAnimation className="status-badge anim-intro-item">
                <span className="status-dot-container">
                  <span className="status-ping"></span>
                  <span className="status-dot"></span>
                </span>
                <span className="status-text">Open for freelance works</span>
              </PausableAnimation>

              <p className="hero-description anim-intro-item">
                Hey there! I'm a Video Editor working in the global marketplace.
                I create visual stories that engage and inspire.
              </p>

              <div className="anim-intro-item">
                <MarqueeButton />
              </div>
            </div>

            {/* Spacer */}
            <div className="hero-spacer"></div>

            {/* Right Column: Stats */}
            <div className="hero-stats anim-stats">
              <div className="stat-label">Years of Experience</div>
              <div className="stat-value">02+</div>
            </div>
          </div>

          {/* Bottom Logo Strip */}
          <div className="hero-logos anim-logos" ref={logosRef}>
            {/* Desktop View: Show all */}
            <div className="logos-desktop">
              {LOGOS.map((logo, i) => (
                <div key={logo.name} className={`logo-item ${logo.name === "After Effects" ? "text-white" : ""}`}>
                  <logo.icon className="logo-icon-svg" />
                  <span className="logo-text-brand">{logo.name}</span>
                </div>
              ))}
            </div>

            {/* Mobile View: Show cycling single logo */}
            <div className="logos-mobile">
              {LOGOS.map((logo, i) => (
                <div
                  key={logo.name}
                  className={`logo-item-mobile ${currentLogoIndex === i ? "active" : ""} ${logo.name === "After Effects" ? "text-white" : ""}`}
                >
                  <logo.icon className="logo-icon-svg" />
                  <span className="logo-text-brand">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
