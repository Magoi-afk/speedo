import { Section } from "./Section";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";

export default function Challenge() {
  const steps = [
    {
      title: "Garanta seu Acesso",
      desc: "Clique no botão de começar nesta página para iniciar sua jornada e registrar seus dados de evolução."
    },
    {
      title: "Participe da Comunidade",
      desc: "Entre no nosso grupo oficial do WhatsApp onde os participantes trocam experiências diárias e recebem avisos rápidos."
    },
    {
      title: "Onboarding Automatizado",
      desc: "Assista ao vídeo explicativo oficial enviado pelo nosso robô de boas-vindas com todas as metas do programa."
    },
    {
      title: "Pratique Consequentemente",
      desc: "Siga a sequência sugerida de hábitos por 21 dias para transformar de vez seus novos padrões e manter a consistência."
    },
    {
      title: "Registre suas Conquistas",
      desc: "Poste sua rotina de evolução em suas redes sociais (Instagram ou TikTok) marcando a hashtag oficial ##EntreNoFlow."
    },
    {
      title: "Conquiste suas Recompensas",
      desc: "Após comprovar sua consistência, ganhe um cupom de desconto exclusivo de conclusão e concorra a kits premium."
    }
  ];

  return (
    <Section id="desafio" className="bg-[#121212]/50 rounded-[3rem] my-24 border border-white/5 relative" fullWidth hasRipple>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-left max-w-4xl mb-24">
          <span className="eyebrow mb-8 items-start text-white uppercase tracking-widest font-bold">Como Funciona</span>
          <h2 className="text-4xl md:text-6xl text-white tracking-tighter font-display font-semibold mb-10 leading-tight">
             Mais do que um desafio, uma <span className="display-accent italic font-accent text-[var(--color-secondary)]">experiência</span> criada para testar sua evolução.
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl font-body leading-relaxed">
            Uma jornada criada para transformar disciplina em orgulho, evolução em rotina e uma conquista que ficará marcada em você pra sempre.
          </p>
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
              explorar <MoveRight className="ml-3" />
            </a>
        </div>
      </div>
    </Section>
  );
}
