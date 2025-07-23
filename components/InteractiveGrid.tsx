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
  width="100%"
  height="800"
  viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
  preserveAspectRatio="xMidYMid slice"
  style={{ background: "red" }}
  className="pointer-events-auto"
  role="presentation"
  aria-hidden="true"
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
            fill="blue"
            stroke="blue"
          />
        );
      })}
    </svg>
  );
}
