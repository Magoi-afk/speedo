import { Section } from "./Section";
import { MessageCircle } from "lucide-react";
import { Backlight } from "@/registry/magicui/backlight";

export function BacklightVideoDemo() {
  return (
    <Backlight blur={40} className="w-full max-w-lg mx-auto lg:mr-0">
      <iframe
        className="w-full aspect-video rounded-2xl block border-0"
        src="https://www.youtube.com/embed/HxzR9OnuAHU?si=krZwyqWfXKkeVvOK"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Backlight>
  );
}

export default function FooterCTA() {
  return (
    <Section className="relative bg-[#080808] border-t border-white/5" fullWidth hasRipple>
      <div className="container mx-auto px-6 text-left py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text and CTA */}
          <div className="flex flex-col items-start">
            <span className="eyebrow mb-6 items-start text-white uppercase tracking-widest font-bold">Próximo Passo</span>
            <h2 className="text-3xl md:text-5xl text-white tracking-tighter font-display font-semibold mb-6 leading-tight max-w-2xl uppercase">
               Os próximos <span className="display-accent italic font-accent normal-case text-[var(--color-secondary)]">30 dias</span> podem começar hoje.
            </h2>
            <p className="text-base text-white/70 font-light max-w-xl mb-10 leading-relaxed font-body">
              As instruções completas serão liberadas dentro do grupo de participantes.
            </p>
            
            <div className="flex flex-col items-start gap-4">
               <a href="https://wa.me/yourlink" target="_blank" rel="noreferrer" className="btn-primary px-10 py-4 text-base hover:scale-105 transition-transform duration-300">
                  desbloquear desafio
               </a>
               <span className="text-[var(--color-text-faint)] text-[10px] uppercase tracking-[0.4em] font-bold font-body">
                  Entrada simplificada e 100% gratuita
               </span>
            </div>
          </div>

          {/* Right Column: Ambient Glowing Backlight Video */}
          <div className="w-full flex justify-center lg:justify-end">
            <BacklightVideoDemo />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
         <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-[var(--color-primary-soft)] blur-[120px]" />
      </div>
      
      {/* Footer styled exactly like user request and photo */}
      <footer className="border-t border-white/5 bg-[#080808]/90 backdrop-blur-md w-full mt-24 pt-24 pb-12 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            {/* Branding Column */}
            <div className="col-span-2 lg:col-span-2 flex flex-col justify-between gap-8">
              <div>
                <img src="/Speedo.png" alt="Speedo" className="h-8 w-auto object-contain" />
                <p className="text-sm text-white/50 mt-4 max-w-sm leading-relaxed font-body font-light">
                  Uma jornada feita de disciplina, ritmo e consistência absoluta. Desperte sua melhor versão dentro e fora da água.
                </p>
              </div>
              <p className="text-xs text-white/30 font-body tracking-wider">
                © copyright Speedo 2026. All rights reserved.
              </p>
            </div>

            {/* Menu Col 1 */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white font-bold mb-6 font-body">Páginas</h4>
              <ul className="space-y-4 text-xs font-body text-white/40">
                <li><a href="#manifesto" className="hover:text-[var(--color-secondary)] transition-all duration-200">Manifesto</a></li>
                <li><a href="#desafio" className="hover:text-[var(--color-secondary)] transition-all duration-200">Desafio</a></li>
                <li><a href="#sobre" className="hover:text-[var(--color-secondary)] transition-all duration-200">Estratégia</a></li>
                <li><a href="#jornada" className="hover:text-[var(--color-secondary)] transition-all duration-200">Jornada</a></li>
              </ul>
            </div>

            {/* Menu Col 2 */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white font-bold mb-6 font-body">Redes Sociais</h4>
              <ul className="space-y-4 text-xs font-body text-white/40">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-secondary)] transition-all duration-200">Instagram</a></li>
                <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-secondary)] transition-all duration-200">TikTok</a></li>
                <li><a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-secondary)] transition-all duration-200">WhatsApp</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-secondary)] transition-all duration-200">YouTube</a></li>
              </ul>
            </div>

            {/* Menu Col 3 */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white font-bold mb-6 font-body">Legal</h4>
              <ul className="space-y-4 text-xs font-body text-white/40">
                <li><a href="#" className="hover:text-[var(--color-secondary)] transition-all duration-200">Políticas de Privacidade</a></li>
                <li><a href="#" className="hover:text-[var(--color-secondary)] transition-all duration-200">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-[var(--color-secondary)] transition-all duration-200">Regulamento</a></li>
              </ul>
            </div>
          </div>

          {/* Large stylized watermark brand label */}
          <div className="w-full text-center border-t border-white/5 pt-12 overflow-hidden select-none">
            <span className="text-[13vw] font-display font-black leading-none tracking-tighter text-white/[0.02] uppercase block translate-y-4">
              SPEEDO
            </span>
          </div>
        </div>
      </footer>
    </Section>
  );
}
