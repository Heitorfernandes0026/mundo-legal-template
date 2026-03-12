import { useRef, useEffect, useState } from "react";
import metodoBackground from "@/assets/metodo-blade-bg.jpeg";

const MetodoBladeSection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = metodoBackground;
          img.onload = () => setBgLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="metodo" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${bgLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${metodoBackground})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            A metodologia
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-neon mb-6 md:mb-8 leading-none">
            COMO FUNCIONA O MÉTODO
          </h2>
          <p className="text-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            Ele nasceu da prática, não de teoria. De anos atendendo pessoas diferentes e 
            percebendo um padrão muito claro: a maioria não falha porque não se esforça, 
            ela falha porque não tem <span className="text-primary font-semibold">método</span>, 
            <span className="text-primary font-semibold"> direção</span> e 
            <span className="text-primary font-semibold"> acompanhamento real</span>.
          </p>
        </div>

        {/* Pilares subtitle */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-2">
            O Método Blade possui <span className="text-primary">3 pilares</span>:
          </h3>
        </div>

        {/* Pilares Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {pilares.map((pilar) => (
            <div
              key={pilar.numero}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <span className="font-display text-4xl md:text-5xl text-primary/30 mb-3 md:mb-4 block">
                {pilar.numero}
              </span>
              <h4 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mb-3 md:mb-4">
                {pilar.titulo}
              </h4>
              <p className="text-foreground/70 text-xs sm:text-sm md:text-base leading-relaxed">
                {pilar.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center max-w-4xl mx-auto border-t border-border/30 pt-8 md:pt-12 px-2">
          <blockquote className="relative">
            <span className="text-primary text-4xl md:text-6xl font-display absolute -top-6 md:-top-8 left-0 opacity-30">"</span>
            <p className="text-foreground/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed italic pl-6 pr-4 md:pl-8 md:pr-8">
              O que diferencia o Método Blade do que existe hoje no mercado é exatamente isso:
              <span className="text-primary font-semibold not-italic"> a maioria dos profissionais entrega treino; eu entrego processo.</span>
            </p>
            <footer className="mt-4 md:mt-6 text-foreground/60 text-xs md:text-sm uppercase tracking-widest">
              — Ronald Blade
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default MetodoBladeSection;