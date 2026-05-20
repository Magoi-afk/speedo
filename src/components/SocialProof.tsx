import { Section } from "./Section";
import { Zap, Share2, Heart, TrendingUp } from "lucide-react";

export default function SocialProof() {
  const insights = [
    {
      icon: <Zap className="w-6 h-6 text-[var(--color-secondary)]" />,
      title: "Blindagem Mental",
      desc: "Desenvolva consistência ao silenciar a mente e focar estritamente em cada respiração."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[var(--color-secondary)]" />,
      title: "Ritmo Consistente",
      desc: "Aprenda a mapear e controlar sua velocidade ideal para nadar maiores distâncias."
    },
    {
      icon: <Heart className="w-6 h-6 text-[var(--color-secondary)]" />,
      title: "Estilo Refinado",
      desc: "Melhore o alinhamento corporal e hidrodinâmica para cortar a água com menos esforço."
    },
    {
      icon: <Share2 className="w-6 h-6 text-[var(--color-secondary)]" />,
      title: "Comunidade Ativa",
      desc: "Divida a evolução com outras pessoas com o mesmo nível de ambição esportiva."
    }
  ];

  return (
    <Section id="sobre" className="border-t border-white/5 py-40" hasRipple>
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="eyebrow mb-8 items-start text-white uppercase tracking-widest font-bold">O Movimento</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter font-display font-semibold mb-10 leading-tight uppercase break-words">
             Uma experiência criada para <br className="hidden sm:block" />
             <span className="display-accent italic font-accent normal-case">quem decidiu evoluir de verdade.</span>
          </h2>
          <p className="text-lg text-white/70 font-light leading-relaxed max-w-lg mb-12 font-body">
            Foque no seu ritmo, supere os limites que travam o seu progresso e faça parte de um grupo focado no mesmos objetivos que você. Um ecossistema completo desenhado para blindar seu foco e acelerar cada etapa da sua jornada.
          </p>
          
          <div className="flex items-center gap-12">
             <div className="flex flex-col">
                <span className="text-5xl text-white font-display font-bold">100%</span>
                <span className="text-[10px] uppercase text-white/40 font-bold tracking-[0.4em] mt-3 font-body">Foco no Processo</span>
             </div>
             <div className="w-[1px] h-12 bg-white/10" />
             <div className="flex flex-col">
                <span className="text-5xl text-white font-display font-bold">21 Dias</span>
                <span className="text-[10px] uppercase text-white/40 font-bold tracking-[0.4em] mt-3 font-body">Consistência Diária</span>
             </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {insights.map((insight, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[var(--color-primary)]/20 transition-all group">
              <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform group-hover:bg-[var(--color-primary-soft)]">
                {insight.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 tracking-tight font-body uppercase tracking-wider">{insight.title}</h4>
              <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed font-body">{insight.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
