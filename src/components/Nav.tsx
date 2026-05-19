import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center pointer-events-none ${
        scrolled ? "pt-4" : "pt-8"
      }`}
    >
      <div 
        className={`flex items-center justify-between px-8 py-3 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border pointer-events-auto ${
          scrolled 
            ? "max-w-4xl bg-[#1E1E1E]/80 backdrop-blur-xl rounded-full border-[var(--color-border)] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)]" 
            : "max-w-7xl bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center">
          <img 
            src="/Speedo.png" 
            alt="Speedo" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-semibold text-white/50">
          <a href="#manifesto" className="hover:text-[var(--color-secondary)] transition-colors">Manifesto</a>
          <a href="#desafio" className="hover:text-[var(--color-secondary)] transition-colors">Desafio</a>
          <a href="#sobre" className="hover:text-[var(--color-secondary)] transition-colors">Estratégia</a>
        </div>
        
        <a href="#desafio" className="px-6 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-secondary)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--color-secondary-soft)] transition-all">
          Participar
        </a>
      </div>
    </motion.nav>
  );
}
