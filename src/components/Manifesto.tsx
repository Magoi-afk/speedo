import { Section } from "./Section";
import { motion } from "motion/react";

export default function Manifesto() {
  return (
    <Section id="manifesto" className="text-left py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-24"
        >
          <span className="eyebrow mb-8 items-start">O Estado de Flow</span>
          <h2 className="text-6xl md:text-[8rem] leading-[0.8] mb-12 font-display font-semibold tracking-tighter max-w-4xl">
             Mergulhe na sua <br/><span className="display-accent italic font-accent italic">essência.</span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-xl font-body">A natação como um manifesto tátil de presença e movimento.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-16 border-t border-white/5 pt-20">
          <div className="space-y-6 group">
            <div className="text-[var(--color-secondary)] font-display text-4xl italic opacity-40 group-hover:opacity-100 transition-opacity">01.</div>
            <h3 className="text-xl font-medium text-white tracking-tight uppercase tracking-wider font-body">O Silêncio</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)] font-light font-body">
              O momento em que o ruído do mundo desaparece e tudo o que existe é o compasso da sua respiração.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="text-[var(--color-secondary)] font-display text-4xl italic opacity-40 group-hover:opacity-100 transition-opacity">02.</div>
            <h3 className="text-xl font-medium text-white tracking-tight uppercase tracking-wider font-body">O Ritmo</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)] font-light font-body">
              A braçada vira reflexo. A água deixa de resistir e passa a ser o motor do seu deslocamento.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="text-[var(--color-secondary)] font-display text-4xl italic opacity-40 group-hover:opacity-100 transition-opacity">03.</div>
            <h3 className="text-xl font-medium text-white tracking-tight uppercase tracking-wider font-body">O Fluxo</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)] font-light font-body">
              Sustentar o impossível. Quando a mente desacelera e o corpo atinge o ápice da eficiência sem sentir o peso do esforço.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
