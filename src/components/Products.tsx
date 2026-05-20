import { Section } from "./Section";
import { motion } from "motion/react";

export default function Products() {
  return (
    <Section id="produtos" className="py-40 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-left mb-32 max-w-4xl">
          <span className="eyebrow mb-8 items-start text-white uppercase tracking-widest">
            Equipamento
          </span>
          <h2 className="text-6xl md:text-8xl text-white tracking-tighter font-display font-semibold mb-10 leading-[0.82]">
            Produtos que<br />
            sustentam o <span className="display-accent italic font-accent">Flow.</span>
          </h2>
          <p className="text-xl text-white/50 font-light font-body max-w-2xl leading-relaxed">
            Do corpo ao equipamento. Flow não é só técnica. É também tudo o que cerca o seu corpo na água. 
            Trajes e óculos de alta performance reduzem o arrasto, melhoram o deslize e mantêm o foco só no que importa: a próxima braçada.
            Os produtos Speedo foram pensados para transformar conforto, vedação e hidrodinâmica em mais tempo em estado de flow.
          </p>
        </div>

        <div className="grid md:grid-cols-1 max-w-4xl">
          {/* Product 1: Traje */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 flex flex-col md:flex-row gap-12 group overflow-hidden relative"
          >
            <div className="max-w-md relative z-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-secondary)] font-bold mb-6 block">Elite Series</span>
              <h3 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-tighter italic">LZR Pure Intent</h3>
              <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed font-body">
                Segunda pele que comprime na medida certa e ajuda a manter o corpo alinhado na água.
              </p>
            </div>
            
            <div className="h-[400px] w-full md:w-1/2 relative z-0 rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center">
               <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                  <spline-viewer loading="lazy" url="https://prod.spline.design/tUuUNtQnGl1N452E/scene.splinecode"></spline-viewer>
               </div>
               <div className="absolute bottom-8 right-8 pointer-events-none">
                  <span className="text-[80px] font-display font-bold text-white/[0.03] italic leading-none group-hover:text-white/[0.05 transition-colors">01</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
