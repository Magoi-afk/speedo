import React from "react";

interface BacklightProps {
  children?: React.ReactNode;
  blur?: number;
  className?: string;
}

export function Backlight({ children, blur = 40, className = "" }: BacklightProps) {
  return (
    <div className={`relative ${className} group`}>
      {/* Ambient gradient back glow behind user content */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[rgba(214,191,163,0.35)] to-[rgba(214,191,163,0.05)] opacity-80 group-hover:opacity-100 transition-all duration-500 scale-95"
        style={{
          filter: `blur(${blur}px)`,
          zIndex: 0,
        }}
      />
      
      {/* Front-facing content container */}
      <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121212]/80 backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:border-white/20">
        {children}
      </div>
    </div>
  );
}
