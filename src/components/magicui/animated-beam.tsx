"use client";

import React, { useEffect, useRef } from "react";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  duration?: number;
  curvature?: number;
  endYOffset?: number;
}

export const AnimatedBeam = ({
  containerRef,
  fromRef,
  toRef,
  duration = 3,
}: AnimatedBeamProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const from = fromRef.current;
    const to = toRef.current;
    const path = pathRef.current;

    if (!container || !from || !to || !path) return;

    const updatePath = () => {
      const containerRect = container.getBoundingClientRect();
      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top + toRect.height / 2 - containerRect.top;

      const deltaX = x2 - x1;
      const deltaY = y2 - y1;
      const curvature = 0.25;

      const hx1 = x1 + curvature * deltaX;
      const hy1 = y1;
      const hx2 = x2 - curvature * deltaX;
      const hy2 = y2;

      const d = `M ${x1},${y1} C ${hx1},${hy1} ${hx2},${hy2} ${x2},${y2}`;
      path.setAttribute("d", d);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [containerRef, fromRef, toRef]);

  return (
    <svg className="absolute left-0 top-0 h-full w-full overflow-visible pointer-events-none">
      <defs>
        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        stroke="url(#beam-gradient)"
        strokeWidth="3"
        fill="none"
        className="animate-pulse"
      />
    </svg>
  );
};

