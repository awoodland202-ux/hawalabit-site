"use client";

import React, { useRef, useEffect, useState } from "react";

interface AnimatedGridProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
}

export function AnimatedGridPattern({
  numSquares = 30,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1,
  className = "",
}: AnimatedGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(40);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateSize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      setSize(containerWidth / numSquares);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [numSquares]);

  const squares = [numSquares, numSquares];

  if (!isMounted) return null;

  return (
    <div ref={containerRef} className={`absolute ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size * squares[0]} ${size * squares[1]}`}
        preserveAspectRatio="xMidYMid slice"
        style={{
          pointerEvents: "none",
          maskImage: "radial-gradient(500px circle at center, white, transparent)",
          WebkitMaskImage:
            "radial-gradient(500px circle at center, white, transparent)",
        }}
        role="presentation"
        aria-hidden="true"
      >
        <g transform="skewY(8)">
          {Array.from({ length: squares[0] * squares[1] }).map((_, index) => {
            const x = (index % squares[0]) * size;
            const y = Math.floor(index / squares[0]) * size;
            const delay = (Math.random() * repeatDelay).toFixed(2);
            const dur = (duration + Math.random() * 2).toFixed(2);

            return (
              <rect
                key={index}
                x={x}
                y={y}
                width={size}
                height={size}
                fill="transparent"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeOpacity={maxOpacity}
              >
                <animate
                  attributeName="fill"
                  values="transparent;rgba(59,130,246,0.08);transparent"
                  dur={`${dur}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </rect>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default AnimatedGridPattern;