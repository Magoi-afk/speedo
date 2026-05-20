import { Section } from "./Section";
import { Zap, Share2, Heart, TrendingUp } from "lucide-react";

export default function SocialProof() {
  const insights = [
    {
      icon: <Zap className="w-6 h-6 text-[var(--color-primary)]" />,
      title: "UGC em escala",
      desc: "Conteúdo real, orgânico e autêntico que converte mais que qualquer anúncio institucional."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[var(--color-primary)]" />,
      title: "Alcance exponencial",
      desc: "Cada participante se torna um canal de mídia espontânea para a Speedo."
    },
    {
      icon: <Heart className="w-6 h-6 text-[var(--color-primary)]" />,
      title: "Pertencimento",
      desc: "O desafio cria uma comunidade de praticantes que compartilham o mesmo flow."
    },
    {
      icon: <Share2 className="w-6 h-6 text-[var(--color-primary)]" />,
      title: "Relevância cultural",
      desc: "Posiciona a Speedo no centro das conversas sobre lifestyle esportivo digital."
    }
  ];

  return (
    <Section id="sobre" className="border-t border-white/5 py-40">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="eyebrow mb-8 items-start text-white uppercase tracking-widest font-bold">Valor de Marca</span>
          <h2 className="text-6xl md:text-8xl text-white tracking-tighter font-display font-semibold mb-10 leading-[0.82]">
             Da campanha à<br />
             <span className="display-accent italic font-accent">comunidade.</span>
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed max-w-lg mb-12 font-body">
            Não estamos apenas vendendo produtos. Estamos orquestrando um movimento cultural em que cada mergulho vira prova social.
          </p>
          
          <div className="flex items-center gap-12">
             <div className="flex flex-col">
                <span className="text-6xl text-white font-display font-bold">92%</span>
                <span className="text-[10px] uppercase text-white/40 font-bold tracking-[0.4em] mt-3 font-body">Confiam em pessoas</span>
             </div>
             <div className="w-[1px] h-12 bg-white/10" />
             <div className="flex flex-col">
                <span className="text-6xl text-white font-display font-bold">15D</span>
                <span className="text-[10px] uppercase text-white/40 font-bold tracking-[0.4em] mt-3 font-body">Ciclo de hábito</span>
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
