import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* 3D Spline Background (Desktop only) */}
      {!isMobile ? (
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none select-none">
          {/* @ts-ignore */}
          <spline-viewer loading="lazy" url="https://prod.spline.design/fTnTYX3wQP0PcUq8/scene.splinecode"></spline-viewer>
        </div>
      ) : (
        /* High-performance CSS ambient glow on mobile for absolute fluidity */
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#020202]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-[#D6BFA3]/[0.05] filter blur-[60px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[90vw] h-[90vw] rounded-full bg-[var(--color-primary)]/[0.04] filter blur-[100px]" />
        </div>
      )}

      {/* Deep Ocean Depths Overlay */}
      <div className="absolute inset-x-0 top-0 h-[20vh] bg-black z-[5] pointer-events-none"></div>
      <div className="absolute inset-0 z-[5] pointer-events-none select-none bg-gradient-to-t from-black via-[#080c14]/40 to-black"></div>
      <div className="absolute right-0 bottom-0 z-[6] pointer-events-none select-none w-full md:w-3/4 h-[50vh] md:h-[70vh] bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start text-left w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <span className="eyebrow items-start text-white uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-xs">CAMPANHA DIGITAL 2026</span>
          </motion.div>

          <motion.h1 
            className="text-[32px] sm:text-[44px] md:text-[68px] leading-[1.1] font-bold text-white tracking-tighter mb-6 md:mb-8 max-w-3xl font-display uppercase break-words"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Mais do que um desafio, uma <span className="display-accent italic font-accent text-[var(--color-secondary)] normal-case">experiência</span> para testar sua evolução.
          </motion.h1>
          
          <motion.p 
            className="text-[15px] sm:text-[17px] md:text-[20px] font-light text-white/70 max-w-2xl mb-10 md:mb-12 leading-relaxed font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Uma jornada criada para transformar disciplina em orgulho, evolução em rotina e uma conquista que ficará marcada em você pra sempre.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#desafio" className="btn-primary px-10 py-4 sm:px-12 sm:py-4 text-sm sm:text-base hover:scale-105 transition-transform duration-300">
              começar <MoveRight className="ml-3 inline-block w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3"
      >
        <span className="text-[9px] uppercase tracking-widest text-white/30 font-semibold">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}
