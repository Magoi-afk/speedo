import React, { CSSProperties } from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.35,
  numCircles = 8,
  className = "",
}: RippleProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
    >
      {/* Gentle center glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D6BFA3]/[0.02] filter blur-[100px]" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
        {Array.from({ length: numCircles }).map((_, i) => {
          const size = mainCircleSize + i * 140;
          const opacity = mainCircleOpacity - i * 0.04;
          const delay = `${i * 0.35}s`;

          return (
            <div
              key={i}
              className="absolute rounded-full border border-dashed border-[#D6BFA3]/30 animate-ripple-glow"
              style={
                {
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: Math.max(opacity, 0.02),
                  animationDelay: delay,
                  animationDuration: "10s",
                  "--i": i,
                  boxShadow: "0 0 20px rgba(214, 191, 163, 0.02)",
                } as CSSProperties
              }
            />
          );
        })}
      </div>
    </div>
  );
}

