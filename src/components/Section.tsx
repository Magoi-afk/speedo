import { motion } from "motion/react";
import { ReactNode } from "react";
import { Ripple } from "@/registry/magicui/ripple";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  hasRipple?: boolean;
}

export const Section = ({ children, className = "", id, fullWidth = false, hasRipple = false }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative py-16 md:py-24 lg:py-32 overflow-hidden ${fullWidth ? "" : "container mx-auto px-6"} ${className}`}
    >
      {hasRipple && (
        <Ripple 
          mainCircleSize={180} 
          mainCircleOpacity={0.25} 
          numCircles={7} 
          className="opacity-100" 
        />
      )}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.section>
  );
};

