import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./MarqueeButton.css";

const MarqueeButton: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const isInView = useIntersectionObserver(btnRef, { rootMargin: '50px' });

  return (
    <Link to="/contact" style={{ textDecoration: "none" }}>
      <button ref={btnRef} className="cta-primary marquee-btn">
        <div
          className="marquee-track"
          style={{ animationPlayState: isInView ? "running" : "paused" }}
        >
          {/* Using &nbsp; to ensure consistent spacing without CSS padding causing gaps */}
          <span className="marquee-text">
            Hire Me &nbsp;
            <img src="arrow.gif" alt="arrow" width={20} height={20} />
            &nbsp; Hire Me &nbsp;
            <img src="arrow.gif" alt="arrow" width={20} height={20} />
            &nbsp; Hire Me &nbsp;
            <img src="arrow.gif" alt="arrow" width={20} height={20} />
            &nbsp; Hire Me &nbsp;
            <img src="arrow.gif" alt="arrow" width={20} height={20} />
            &nbsp;
          </span>
          <span className="marquee-text">
            Hire Me &nbsp;
            <img src="arrow.gif" alt="arrow" width={20} height={20} />
            &nbsp; Hire Me &nbsp;
            <img src="arrow.gif" alt="arrow" width={20} height={20} />
            &nbsp; Hire Me &nbsp;
            <img src="arrow.gif" alt="arrow" width={20} height={20} />
            &nbsp;
          </span>
        </div>
      </button>
    </Link>
  );
};

export default MarqueeButton;
