import { Section } from "./Section";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";

export default function Challenge() {
  const steps = [
    {
      title: "Entrar no desafio",
      desc: "Inicie seu fluxo pelo site e conecte-se ao ecossistema exclusivo."
    },
    {
      title: "Grupo no WhatsApp",
      desc: "Entre na comunidade onde a jornada de 15 dias acontece em tempo real."
    },
    {
      title: "Vídeo explicativo",
      desc: "Receba o onboarding completo via chatbot com as diretrizes de imersão."
    },
    {
      title: "Postar no TikTok/IG",
      desc: "Compartilhe sua vivência, rotina ou evolução ao final do ciclo."
    },
    {
      title: "Marcar Speedo",
      desc: "Use #EntreNoFlow para validar sua participação e ser visto pela marca."
    },
    {
      title: "Ganhar recompensa",
      desc: "Receba brindes simbólicos e concorra a kits premium Elite Speedo."
    }
  ];

  return (
    <Section id="desafio" className="bg-[#121212]/50 rounded-[3rem] my-24 border border-white/5 relative" fullWidth>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-left max-w-4xl mb-24">
          <span className="eyebrow mb-8 items-start text-white uppercase tracking-widest font-bold">Estratégia de Ativação</span>
          <h2 className="text-6xl md:text-8xl text-white tracking-tighter font-display font-semibold mb-10 leading-[0.82]">
             A jornada do<br />
             <span className="display-accent italic font-accent">participante.</span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-xl font-body">Mecânica proprietária para gerar conteúdo orgânico e construir comunidade.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="glass-card p-10 group hover:border-[var(--color-secondary)]/30 transition-all duration-500">
               <div className="text-[var(--color-secondary)] font-display text-5xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
               <h3 className="text-lg font-bold text-white mb-4 tracking-widest uppercase font-body">{step.title}</h3>
               <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed font-body">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-start">
            <a href="https://wa.me/yourlink" target="_blank" rel="noreferrer" className="btn-primary px-16 py-6 scale-110 origin-left">
              Entrar no grupo oficial <MoveRight className="ml-3" />
            </a>
        </div>
      </div>
    </Section>
  );
}
