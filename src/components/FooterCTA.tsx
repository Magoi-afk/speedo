import { Section } from "./Section";
import { MessageCircle } from "lucide-react";

export default function FooterCTA() {
  return (
    <Section className="relative bg-[#121212] border-t border-white/5" fullWidth>
      <div className="container mx-auto px-6 text-left py-32 relative z-10">
        <span className="eyebrow mb-12 items-start">Próximo Passo</span>
        <h2 className="text-6xl md:text-[8rem] text-white tracking-tighter font-body font-light mb-12 leading-[0.85] max-w-4xl">
           Seu flow pode <span className="display-accent italic font-display">inspirar</span> o próximo.
        </h2>
        <p className="text-2xl text-white/40 font-light max-w-2xl mb-16 leading-relaxed font-body">
          Junte-se à Speedo e faça parte de um movimento que celebra a natação como cultura, esforço e presença absoluta.
        </p>
        
        <div className="flex flex-col items-start gap-8">
           <a href="https://wa.me/yourlink" target="_blank" rel="noreferrer" className="btn-primary px-16 py-6 text-xl scale-110 origin-left">
              Entrar no grupo oficial
           </a>
           <span className="text-[var(--color-text-faint)] text-[10px] uppercase tracking-[0.5em] font-bold font-body">
              Vagas limitadas por ciclo de imersão
           </span>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
         <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-[var(--color-primary-soft)] blur-[120px]" />
      </div>
      
      <footer className="container mx-auto px-6 pt-20 pb-12 mt-12 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 opacity-80">
          <img src="/Speedo.png" alt="Speedo" className="h-6 w-auto object-contain" />
          <span className="text-sm not-italic opacity-60 ml-2">© 2026</span>
        </div>
        <div className="flex gap-8 text-[var(--color-text-faint)] text-sm uppercase tracking-widest font-medium">
           <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
           <a href="#" className="hover:text-[var(--color-primary)] transition-colors">TikTok</a>
           <a href="#" className="hover:text-[var(--color-primary)] transition-colors">WhatsApp</a>
        </div>
      </footer>
    </Section>
  );
}
