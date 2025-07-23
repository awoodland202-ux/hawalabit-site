import React, { useState } from "react";

interface InteractiveGridPatternProps {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [30, 30],
  className = "",
  squaresClassName = "",
}: InteractiveGridPatternProps) {
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const [horizontal, vertical] = squares;

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={`pointer-events-none absolute inset-0 z-0 hidden md:block ${className}`}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
  key={index}
  x={x}
  y={y}
  width={width}
  height={height}
  className={`stroke-blue-500/20 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000 ${
    hoveredSquare === index ? "fill-blue-500/20" : "fill-blue-500/10"
  } ${squaresClassName}`}
  onMouseEnter={() => setHoveredSquare(index)}
  onMouseLeave={() => setHoveredSquare(null)}
/>
        );
      })}
    </svg>
  );
}
