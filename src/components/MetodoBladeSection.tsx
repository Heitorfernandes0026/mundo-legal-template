import metodoBackground from "@/assets/metodo-blade-bg.jpeg";

const MetodoBladeSection = () => {
  const pilares = [
    {
      numero: "01",
      titulo: "Avaliação Completa",
      descricao:
        "Nada começa sem entender a pessoa. Antes de qualquer treino, eu avalio histórico, rotina, limitações, nível real de treino, postura, objetivos e comportamento. Essa avaliação não é superficial, porque é ela que define todas as decisões depois.",
    },
    {
      numero: "02",
      titulo: "Planejamento Estratégico do Treino",
      descricao:
        "O treino não é genérico, não é ficha pronta e não é adaptado de outro aluno. Ele é pensado do zero, para aquele corpo, aquela rotina e aquele momento. A divisão de treino, os exercícios, séries, repetições, intervalos e cadência fazem parte de uma estratégia, não de um modelo pronto.",
    },
    {
      numero: "03",
      titulo: "Ajustes no Momento Certo",
      descricao:
        "Esse é o ponto central do método. No mercado, o que eu mais vejo é troca de treino por ansiedade: a pessoa acha que parou de evoluir, troca tudo, se perde e desiste. No Método Blade, o treino não é trocado por impulso. Ele é ajustado quando o corpo dá sinais reais de que precisa de ajuste. Tudo é baseado em observação, histórico e resposta ao treino.",
    },
  ];

  return (
    <section id="metodo" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${metodoBackground})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest text-sm mb-4 block uppercase">
            A metodologia
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-gradient-neon mb-8 leading-none">
            O MÉTODO BLADE
          </h2>
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Ele nasceu da prática, não de teoria. De anos atendendo pessoas diferentes e 
            percebendo um padrão muito claro: a maioria não falha porque não se esforça, 
            ela falha porque não tem <span className="text-primary font-semibold">método</span>, 
            <span className="text-primary font-semibold"> direção</span> e 
            <span className="text-primary font-semibold"> acompanhamento real</span>.
          </p>
        </div>

        {/* Pilares subtitle */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
            O Método Blade possui <span className="text-primary">3 pilares</span>:
          </h3>
        </div>

        {/* Pilares Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((pilar) => (
            <div
              key={pilar.numero}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <span className="font-display text-5xl text-primary/30 mb-4 block">
                {pilar.numero}
              </span>
              <h4 className="font-display text-xl md:text-2xl text-foreground mb-4">
                {pilar.titulo}
              </h4>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                {pilar.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodoBladeSection;
