import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function WaterCursor() {
  const [isPointer, setIsPointer] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the "watery" lag effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);
  
  const trailX2 = useSpring(mouseX, { damping: 30, stiffness: 100, mass: 0.8 });
  const trailY2 = useSpring(mouseY, { damping: 30, stiffness: 100, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || 
        target.tagName === "BUTTON" || 
        target.tagName === "A"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Primary Glow / Cursor */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: 0.6,
        }}
        className="w-4 h-4 bg-[var(--color-primary)] rounded-full blur-[2px] shadow-[0_0_15px_var(--color-primary)]"
      />

      {/* Primary Trail (The Wake) */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-24 h-24 bg-[var(--color-primary)]/10 rounded-full blur-[40px]"
      />

      {/* Secondary Distant Trail (Deeper Ripple) */}
      <motion.div
        style={{
          x: trailX2,
          y: trailY2,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-40 h-40 bg-[var(--color-secondary)]/5 rounded-full blur-[60px]"
      />

      {/* Surface Disturbance Ripple */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-32 h-32 border border-[var(--color-primary)]/20 rounded-full blur-[10px]"
      />
    </div>
  );
}
