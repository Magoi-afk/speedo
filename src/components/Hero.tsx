import { motion } from "motion/react";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none select-none">
        {/* @ts-ignore */}
        <spline-viewer loading="lazy" url="https://prod.spline.design/fTnTYX3wQP0PcUq8/scene.splinecode"></spline-viewer>
      </div>

      {/* Deep Ocean Depths Overlay */}
      <div className="absolute inset-x-0 top-0 h-[20vh] bg-black z-[5] pointer-events-none"></div>
      <div className="absolute inset-0 z-[5] pointer-events-none select-none bg-gradient-to-t from-black via-[#080c14]/40 to-black"></div>
      <div className="absolute right-0 bottom-0 z-[6] pointer-events-none select-none w-full md:w-3/4 h-[50vh] md:h-[70vh] bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="eyebrow items-start text-white uppercase tracking-[0.5em] font-bold">CAMPANHA DIGITAL 2026</span>
          </motion.div>

          <motion.h1 
            className="text-[70px] md:text-[90px] leading-[0.8] font-bold text-white tracking-tighter mb-10 max-w-4xl font-display uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Entre no<br />
            <span className="display-accent italic font-accent normal-case lowercase">Flow.</span>
          </motion.h1>
          
          <motion.p 
            className="text-[20px] font-light text-white/50 max-w-xl mb-16 leading-relaxed font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Quando o esforço some, só restam você e a água.<br />
            Um manifesto tátil de presença e movimento absoluto.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#desafio" className="btn-primary px-10 py-4 text-base hover:scale-105 transition-transform duration-300">
              Entrar no desafio <MoveRight className="ml-3 inline-block w-4 h-4" />
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
