"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={`z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className || ""}`}
  >
    {children}
  </div>
));
Circle.displayName = "Circle";

export function HawalaBitFlowVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const senderRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const receiverRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center gap-14 py-24 px-6"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Sender */}
      <div className="flex flex-col items-center gap-2">
        <Circle ref={senderRef}>💸</Circle>
        <p className="text-white text-sm">Sender</p>
      </div>

      {/* Hub */}
      <div className="flex flex-col items-center gap-2">
        <Circle ref={hubRef} className="bg-blue-600 text-white shadow-blue-500/30 shadow-md">🪙</Circle>
        <p className="text-white text-sm">HawalaBit (USDT)</p>
      </div>

      {/* Receiver */}
      <div className="flex flex-col items-center gap-2">
        <Circle ref={receiverRef}>✅</Circle>
        <p className="text-white text-sm">Receiver</p>
      </div>

      {/* Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={senderRef} toRef={hubRef} curvature={0} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={receiverRef} curvature={0} endYOffset={-10} />
    </div>
  );
}
