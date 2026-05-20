import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "motion/react";

export default function GogglesExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Monitor scroll progress relative to the container
  // [start start] means when top of container hits top of viewport
  // [end end] means when bottom of container hits bottom of viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Linear mapping: scroll progress (0..1) -> opacity/transform
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.5], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.9, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);

  const handleLoadedMetadata = () => {
    setIsVideoLoaded(true);
  };

  // Sync video time with scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && isVideoLoaded) {
      const duration = videoRef.current.duration;
      if (!isNaN(duration) && duration > 0) {
        // We use a small lag or smoothing if needed, but linear is requested
        videoRef.current.currentTime = latest * duration;
      }
    }
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-black">
      {/* Sticky container that keeps the video fixed in the viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src="/oculos.mp4"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_0%,black_100%) opacity-50 pointer-events-none" />

        {/* Cinematic Titles */}
        <motion.div 
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute inset-0 flex items-center justify-center text-center p-6 z-20"
        >
          <div className="max-w-5xl">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[var(--color-primary)] font-bold mb-12 block">Optical Precision</span>
            <h2 className="text-7xl md:text-[12rem] font-display font-semibold text-white tracking-tighter leading-none italic uppercase">
               Hyper <br/><span className="display-accent italic font-accent">Elite.</span>
            </h2>
          </div>
        </motion.div>

        {/* Product Details - Revealed later in scroll */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex items-center justify-center z-20 p-6"
        >
          <div className="max-w-2xl text-center">
            <h3 className="text-4xl md:text-6xl text-white font-display font-bold mb-8 italic tracking-tighter uppercase">Vedação Extrema</h3>
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed font-body">
              Óculos que oferecem visão nítida e estável, sem distração, para você sustentar o ritmo por mais tempo. O silêncio absoluto sob a superfície.
            </p>
          </div>
        </motion.div>

        {/* Scroll Progress Bar (Subtle) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/10">
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="absolute inset-0 bg-[var(--color-primary)] origin-left"
          />
        </div>
      </div>
    </section>
  );
}
