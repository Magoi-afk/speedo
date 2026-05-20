import { Section } from "./Section";

export default function Journey() {
  const steps = [
    "Impacto visual",
    "CTA estratégico",
    "Comunidade WhatsApp",
    "Desafio 15 dias",
    "Publicação UGC",
    "Premiação & alcance"
  ];

  return (
    <Section className="bg-black/20" fullWidth>
      <div className="container mx-auto px-6">
        <div className="text-left mb-24 max-w-3xl">
          <span className="eyebrow mb-8 items-start text-white uppercase tracking-widest font-bold">Experiência do Usuário</span>
          <h2 className="text-6xl md:text-8xl text-white tracking-tighter font-display font-semibold leading-[0.82] mb-8">O funil de<br /><span className="display-accent italic font-accent">conversão.</span></h2>
          <p className="text-xl text-white/50 font-light font-body">Uma jornada linear pensada para maximizar engajamento e retenção.</p>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-start lg:items-center text-left lg:text-center">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-bg)] border border-[var(--color-secondary)]/30 shadow-[var(--glow-gold)] mb-8 flex items-center justify-center text-[var(--color-secondary)] font-body font-bold text-sm z-20">
                  {i+1}
                </div>
                <div className="glass-card p-6 w-full hover:border-[var(--color-primary)] transition-colors min-h-[120px] flex flex-col justify-center">
                   <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2 font-body font-bold">Passo 0{i+1}</span>
                   <span className="text-sm font-semibold text-white font-body uppercase tracking-wider leading-tight">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
