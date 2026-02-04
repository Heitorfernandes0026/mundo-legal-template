import { Check } from "lucide-react";
import plansBg from "@/assets/plans-bg.jpeg";

const PlansSection = () => {
  const plans = [
    {
      name: "BLADE START",
      subtitle: "Comece certo",
      description:
        "Esse plano é para quem quer começar certo. É direção inicial. A pessoa recebe avaliação completa, treino personalizado e acesso à plataforma. É ideal para quem está saindo do zero ou voltando a treinar e precisa de estrutura, não de acompanhamento contínuo ainda.",
      features: [
        "Avaliação completa",
        "Treino personalizado",
        "Acesso à plataforma",
      ],
      highlighted: false,
    },
    {
      name: "BLADE CONFORT",
      subtitle: "Acompanhamento estratégico",
      description:
        "Esse é o plano de acompanhamento estratégico. Aqui entra constância, correção e evolução real. O aluno recebe feedbacks semanais, acompanhamento do progresso, ajustes estratégicos quando necessário e reavaliação por fotos. Esse plano existe para evitar estagnação e abandono.",
      features: [
        "Feedbacks semanais",
        "Acompanhamento do progresso",
        "Ajustes estratégicos quando necessário",
        "Reavaliação por fotos",
      ],
      highlighted: true,
    },
    {
      name: "BLADE DIAMOND",
      subtitle: "Acompanhamento premium",
      description:
        "Esse é o acompanhamento premium, pensado para médio e longo prazo. Aqui o foco é evolução contínua. O aluno tem ajustes periódicos de treino, acompanhamento constante, reavaliações recorrentes e análise profunda do histórico. É para quem já entendeu que resultado vem da constância com direção, não da troca constante de treino.",
      features: [
        "Ajustes periódicos de treino",
        "Acompanhamento constante",
        "Reavaliações recorrentes",
        "Análise profunda do histórico",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="planos" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${plansBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/90" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            Escolha seu plano
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-neon mb-4 md:mb-6 leading-none px-2">
            PLANOS DA CONSULTORIA BLADE
          </h2>
          <p className="text-foreground/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Cada plano foi pensado para um momento diferente da sua jornada.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? "bg-primary/10 border-2 border-primary sm:scale-100 md:scale-105"
                  : "bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold px-3 md:px-4 py-0.5 md:py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Mais popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-4 md:mb-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-gradient-neon mb-3 md:mb-4">
                  {plan.name}
                </h3>
                <p className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
                  {plan.subtitle}
                </p>
                <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/50 mb-4 md:mb-6" />

              {/* Features */}
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-xs md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
                    : "bg-card border border-primary/50 text-primary hover:bg-primary/10"
                }`}
              >
                Quero esse plano
              </button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-foreground/50 text-xs md:text-sm mt-8 md:mt-12 px-2">
          Tem dúvidas sobre qual plano escolher? Entre em contato para uma
          análise personalizada.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
