import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none select-none">
        {/* @ts-ignore */}
        <spline-viewer url="https://prod.spline.design/fTnTYX3wQP0PcUq8/scene.splinecode"></spline-viewer>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start"
        >
          <motion.h1 
            className="text-[var(--text-hero)] leading-[0.82] font-light text-white tracking-tighter mb-8 max-w-4xl font-body"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Entre no<br />
            <span className="text-[var(--color-secondary)] italic font-display">Flow.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light text-white/50 max-w-lg mb-16 leading-relaxed font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Quando o esforço some, só resta você e a água.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#desafio" className="btn-primary px-12 py-5 text-base">
              Entrar no desafio
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}
