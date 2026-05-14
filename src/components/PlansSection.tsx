import { Check } from "lucide-react";
import { useState } from "react";
import plansBg from "@/assets/plans-bg.jpeg";

type Duration = {
  label: string;
  note: string;
  price: string;
  link: string;
  highlight?: string;
};

type Plan = {
  emoji: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  durations: Duration[];
  highlighted: boolean;
};

const PlansSection = () => {
  const plans: Plan[] = [
    {
      emoji: "🟢",
      name: "PONTO DE VIRADA",
      subtitle: "Estrutura inicial com análise e direcionamento individual",
      description:
        "Etapa voltada para organizar seu ponto de partida, entender sua realidade e definir uma estratégia clara para iniciar o processo.",
      features: [
        "Avaliação completa (fotos + rotina + histórico)",
        "Videochamada inicial estratégica",
        "Treino personalizado",
        "Definição da estratégia inicial",
        "Acesso à plataforma/app",
      ],
      durations: [
        {
          label: "45 DIAS",
          note: "Fase inicial para organização e direcionamento",
          price: "R$ 197,00",
          link: "https://app.primecoaching.com.br/checkout/plan/41779",
        },
      ],
      highlighted: false,
    },
    {
      emoji: "🟡",
      name: "PROCESSO BLADE",
      subtitle: "Acompanhamento estruturado com ajustes ao longo da evolução",
      description:
        "Estrutura voltada para manter consistência no processo, com acompanhamento periódico e ajustes conforme a resposta do corpo.",
      features: [
        "Inclui tudo do Ponto de Virada",
        "Avaliação inicial completa + acompanhamento da evolução",
        "Treino personalizado e progressivo",
        "Feedback semanal",
        "Ajustes estratégicos conforme evolução",
        "Reavaliação por fotos a cada 30 dias",
        "Suporte dentro do processo",
      ],
      durations: [
        {
          label: "3 MESES",
          note: "Período inicial de evolução com acompanhamento",
          price: "R$ 997,00",
          link: "https://app.primecoaching.com.br/checkout/plan/41784",
        },
        {
          label: "6 MESES",
          note: "Continuidade do processo com foco em resultado consistente",
          price: "R$ 1.697,00",
          link: "https://app.primecoaching.com.br/checkout/plan/41785",
          highlight: "MAIS ESCOLHIDO",
        },
      ],
      highlighted: true,
    },
    {
      emoji: "🔴",
      name: "TRANSFORMAÇÃO ACELERADA",
      subtitle:
        "Acompanhamento com maior frequência de revisão e tomada de decisão ao longo do processo",
      description:
        "Estrutura pensada para permitir ajustes mais frequentes, com acompanhamento contínuo da evolução e intervenções sempre que necessário.",
      features: [
        "Inclui tudo do Processo Blade",
        "Avaliação contínua com maior frequência de análise",
        "Feedback mais frequente (até 2x por semana)",
        "Ajustes realizados com menor intervalo de tempo",
        "Reavaliação por fotos a cada 15–20 dias",
        "Prioridade no suporte",
        "Monitoramento mais detalhado da evolução",
      ],
      durations: [
        {
          label: "3 MESES",
          note: "Período com maior frequência de acompanhamento e ajustes",
          price: "R$ 1.797,00",
          link: "https://app.primecoaching.com.br/checkout/plan/41786",
        },
        {
          label: "6 MESES",
          note: "Continuidade do processo com alto nível de acompanhamento",
          price: "R$ 2.997,00",
          link: "https://app.primecoaching.com.br/checkout/plan/41787",
          highlight: "TRANSFORMAÇÃO COMPLETA",
        },
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="planos" className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${plansBg})` }}
      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            Escolha seu plano
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-neon mb-4 md:mb-6 leading-none px-2">
            ESCOLHA SEU NÍVEL DE ACOMPANHAMENTO
          </h2>
          <p className="text-foreground/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            A diferença entre os planos não está no treino.
            <br />
            Está no nível de acompanhamento que você recebe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="text-center text-foreground/50 text-xs md:text-sm mt-8 md:mt-12 px-2">
          Tem dúvidas sobre qual plano escolher? Entre em contato para uma análise personalizada.
        </p>
      </div>
    </section>
  );
};

const PlanCard = ({ plan }: { plan: Plan }) => {
  const [selected, setSelected] = useState(
    plan.durations.findIndex((d) => d.highlight) >= 0
      ? plan.durations.findIndex((d) => d.highlight)
      : 0
  );
  const current = plan.durations[selected];

  return (
    <div
      className={`relative rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 transition-all duration-300 flex flex-col ${
        plan.highlighted
          ? "bg-primary/10 border-2 border-primary lg:scale-105"
          : "bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50"
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold px-3 md:px-4 py-0.5 md:py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
          Mais popular
        </div>
      )}

      <div className="text-center mb-4 md:mb-6">
        <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-gradient-neon mb-3 md:mb-4">
          <span className="mr-2">{plan.emoji}</span>
          {plan.name}
        </h3>
        <p className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
          {plan.subtitle}
        </p>
        <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
          👉 {plan.description}
        </p>
      </div>

      <div className="h-px bg-border/50 mb-4 md:mb-6" />

      <p className="text-foreground font-semibold text-xs md:text-sm mb-3">✔️ O que está incluso:</p>
      <ul className="space-y-2 md:space-y-3 mb-6 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 md:gap-3">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground/80 text-xs md:text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {plan.durations.length > 1 && (
        <div className="mb-4">
          <p className="text-foreground/60 text-xs uppercase tracking-wider mb-2">
            ⏱️ Escolha sua duração:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {plan.durations.map((d, i) => (
              <button
                key={d.label}
                onClick={() => setSelected(i)}
                className={`rounded-lg px-2 py-2 text-xs font-semibold transition-all ${
                  selected === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border/50 text-foreground/70 hover:border-primary/50"
                }`}
              >
                {d.label}
                {d.highlight && (
                  <span className="block text-[9px] font-normal mt-0.5 opacity-90">
                    {d.highlight}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {plan.durations.length === 1 && (
        <p className="text-foreground/60 text-xs uppercase tracking-wider mb-2">
          ⏱️ Duração: <span className="text-foreground font-semibold">{current.label}</span>
        </p>
      )}

      <p className="text-foreground/60 text-xs md:text-sm mb-4 italic">👉 {current.note}</p>

      <a
        href={current.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full block text-center py-3 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base ${
          plan.highlighted
            ? "bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
            : "bg-card border border-primary/50 text-primary hover:bg-primary/10"
        }`}
      >
        💰 {current.price} — Quero esse plano
      </a>
    </div>
  );
};

export default PlansSection;
