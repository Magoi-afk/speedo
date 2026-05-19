import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section = ({ children, className = "", id, fullWidth = false }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative py-16 md:py-24 lg:py-32 overflow-hidden ${fullWidth ? "" : "container mx-auto px-6"} ${className}`}
    >
      {children}
    </motion.section>
  );
};
