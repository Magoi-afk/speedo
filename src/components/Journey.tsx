import { Section } from "./Section";

export default function Journey() {
  const steps = [
    {
      title: "O Começo",
      desc: "Primeiros treinos, focados em se adaptar ao ritmo e dominar a respiração básica."
    },
    {
      title: "Resistência",
      desc: "Superar as dores iniciais e estabilizar seu fôlego ao longo das raias."
    },
    {
      title: "Construindo Hábito",
      desc: "Quando o esforço vira disciplina e a piscina vira o seu refúgio diário."
    },
    {
      title: "Aceleração",
      desc: "Ganhar consistência ideal, diminuir o tempo das séries e sentir o deslize leve."
    },
    {
      title: "Estabilidade",
      desc: "Sincronia corporal perfeita na água, controlando o cansaço e a mente."
    },
    {
      title: "O Domínio",
      desc: "Orgulho indescritível de concluir um ciclo completo e dominar cada braçada."
    }
  ];

  return (
    <Section className="bg-black/20" id="jornada" fullWidth hasRipple>
      <div className="container mx-auto px-6">
        <div className="text-left mb-24 max-w-3xl">
          <span className="eyebrow mb-8 items-start text-white uppercase tracking-widest font-bold">A Jornada de Evolução</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter font-display font-semibold leading-tight mb-8 uppercase">
             No final, não será apenas <br /><span className="display-accent italic font-accent normal-case text-[var(--color-secondary)]">sobre natação.</span>
          </h2>
          <p className="text-lg text-white/70 font-light font-body leading-relaxed">
            Será sobre olhar para trás e perceber que você conseguiu continuar.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute top-5 left-0 w-full h-[1px] bg-white/5 hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-start text-left">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-bg)] border border-[var(--color-secondary)]/30 shadow-[var(--glow-gold)] mb-6 flex items-center justify-center text-[var(--color-secondary)] font-body font-bold text-sm z-20">
                  {i+1}
                </div>
                <div className="glass-card p-6 w-full hover:border-[var(--color-secondary)] transition-all duration-300 min-h-[180px] flex flex-col justify-start">
                   <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2 font-body font-bold">Fase {i+1}</span>
                   <span className="text-sm font-semibold text-white font-body uppercase tracking-wider leading-tight mb-2">{step.title}</span>
                   <p className="text-xs text-white/50 font-light font-body leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
