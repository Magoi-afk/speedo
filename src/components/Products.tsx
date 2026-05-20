import { Section } from "./Section";
import { motion } from "motion/react";

export default function Products() {
  return (
    <Section id="produtos" className="py-32 border-t border-white/5" hasRipple>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Fixed/Sticky layout containing narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start text-left justify-center">
            <span className="eyebrow mb-6 items-start text-white uppercase tracking-widest font-bold">
              Equipamento & Foco
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter font-display font-semibold mb-8 leading-tight uppercase">
              O equipamento <br />
              que te une <br />
              <span className="display-accent italic font-accent normal-case text-[var(--color-secondary)]">à água.</span>
            </h2>
            
            <p className="text-base text-white/70 font-light font-body leading-relaxed mb-6">
              Para dominar a jornada de 21 dias e testar sua evolução com consistência, cada fração de segundo conta. O desgaste mental e físico começa onde o equipamento falha.
            </p>
            
            <p className="text-base text-white/50 font-light font-body leading-relaxed">
              Desenvolvemos tecnologia para blindar o seu corpo contra distrações. Trajes de compressão inteligente e óculos com vedação cirúrgica reduzem o arrasto e maximizam sua hidrodinâmica. Quando nada te incomoda, o esforço some. Resta apenas você, o movimento e o flow absoluto.
            </p>
          </div>

          {/* Right Column: One highly polished, interactive product showcasing card representing the Big Swim Cap - ROSA */}
          <div className="lg:col-span-7 flex flex-col justify-center w-full">
            
            {/* Product 1: Touca de natação Big Swim Cap - ROSA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 group overflow-hidden relative border border-white/5 hover:border-[var(--color-secondary)]/30 transition-all duration-300 rounded-2xl"
            >
              <div className="flex-1 relative z-10 flex flex-col justify-center text-left">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-secondary)] font-bold mb-3 block">Conforto & Vedação</span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 uppercase tracking-tighter italic">
                  Touca Big Swim Cap - ROSA
                </h3>
                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed font-body">
                  Desenvolvida especialmente para quem tem grande volume de cabelo, a Touca de Natação Speedo Big Cap oferece conforto, proteção e praticidade para suas sessões na piscina. Ideal para eliminar distrações e manter o seu foco inabalável, garantindo que nada tire você do seu estado de flow e da busca pela consistência absoluta a cada braçada.
                </p>
              </div>
              
              <div className="h-[200px] md:h-[220px] w-full md:w-[170px] shrink-0 relative z-0 rounded-xl overflow-hidden bg-gradient-to-br from-rose-950/20 to-[#0a0a0a] flex items-center justify-center border border-white/5">
                 {/* Subtle pink atmospheric back light for the ROSA product */}
                 <div className="absolute inset-0 bg-rose-500/10 mix-blend-color" />
                 <div className="absolute w-24 h-24 rounded-full bg-rose-500/10 blur-xl" />
                 <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                    <spline-viewer loading="lazy" url="https://prod.spline.design/tUuUNtQnGl1N452E/scene.splinecode"></spline-viewer>
                 </div>
                 <div className="absolute bottom-3 right-3 pointer-events-none select-none">
                    <span className="text-4xl font-display font-bold text-rose-500/10 italic leading-none group-hover:text-rose-500/20 transition-colors">01</span>
                 </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </Section>
  );
}
