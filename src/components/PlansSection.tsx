import { Check } from "lucide-react";
import plansBg from "@/assets/plans-bg.jpeg";

const PlansSection = () => {
  const plans = [
    {
      name: "Blade Start",
      subtitle: "Comece certo",
      description:
        "Para quem quer começar com direção. Ideal para quem está saindo do zero ou voltando a treinar e precisa de estrutura.",
      features: [
        "Avaliação completa",
        "Treino personalizado",
        "Acesso à plataforma",
        "Direção inicial estruturada",
      ],
      highlighted: false,
    },
    {
      name: "Blade Confort",
      subtitle: "Acompanhamento estratégico",
      description:
        "Constância, correção e evolução real. Esse plano existe para evitar estagnação e abandono.",
      features: [
        "Tudo do Blade Start",
        "Feedbacks semanais",
        "Acompanhamento do progresso",
        "Ajustes estratégicos",
        "Reavaliação por fotos",
      ],
      highlighted: true,
    },
    {
      name: "Blade Diamond",
      subtitle: "Acompanhamento premium",
      description:
        "Evolução contínua de médio e longo prazo. Para quem entendeu que resultado vem da constância com direção.",
      features: [
        "Tudo do Blade Confort",
        "Ajustes periódicos de treino",
        "Acompanhamento constante",
        "Reavaliações recorrentes",
        "Análise profunda do histórico",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="planos" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${plansBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/90" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest text-sm mb-4 block uppercase">
            Escolha seu plano
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gradient-neon mb-6 leading-none">
            PLANOS DA CONSULTORIA BLADE
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
            Cada plano foi pensado para um momento diferente da sua jornada.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary/10 border-2 border-primary scale-105"
                  : "bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                  Mais popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="font-display text-3xl md:text-4xl text-gradient-neon mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  {plan.subtitle}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/50 mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
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
        <p className="text-center text-foreground/50 text-sm mt-12">
          Tem dúvidas sobre qual plano escolher? Entre em contato para uma
          análise personalizada.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
