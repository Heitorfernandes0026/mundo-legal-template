import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpeg";

const stats = [
  { value: "150+", label: "Vidas Transformadas" },
  { value: "6+", label: "Anos de Experiência" },
  { value: "50+", label: "Treinos de Alta Performance" },
];

const HeroSection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload hero background with high priority
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroBackground;
    link.fetchPriority = "high";
    document.head.appendChild(link);

    const img = new Image();
    img.src = heroBackground;
    img.onload = () => setBgLoaded(true);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 top-16 bg-card" />
      {/* Background Image - Full visibility, starting below navbar */}
      <div 
        className={`absolute inset-0 top-16 bg-cover bg-top bg-no-repeat transition-opacity duration-300 ${bgLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Gradient overlay only on the left side for text readability */}
      <div className="absolute inset-0 top-16 bg-gradient-to-r from-background via-background/60 to-transparent" />
      
      {/* Neon curved lines decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-20 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] opacity-40"
          viewBox="0 0 800 800"
          fill="none"
        >
          <path
            d="M400 100 C600 100, 700 300, 700 400 C700 500, 600 700, 400 700"
            stroke="hsl(50 100% 50%)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse-neon"
          />
          <path
            d="M350 150 C550 150, 650 320, 650 400 C650 480, 550 650, 350 650"
            stroke="hsl(50 100% 50%)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-8 relative z-10">
        <div className="flex items-start min-h-[70vh] md:min-h-[80vh] pt-8 md:pt-12">
          {/* Left content - Text aligned to the left */}
          <div className="space-y-6 md:space-y-8 text-left max-w-xl">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none tracking-wide">
              <span className="text-gradient-neon">MAIS QUE</span>
              <span className="text-foreground"> UM</span>
              <br />
              <span className="text-foreground">TREINO, </span>
              <span className="text-gradient-neon">O SISTEMA</span>
              <br />
              <span className="text-foreground">DE </span>
              <span className="text-gradient-neon">EVOLUÇÃO</span>
            </h1>

            <p className="text-muted-foreground max-w-md text-xs sm:text-sm leading-relaxed">
              Estratégia, acompanhamento e evolução. Conheça o sistema de treino estruturado 
              que vai levar seu corpo ao próximo nível.
            </p>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-6 md:gap-8 py-2 md:py-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-8">
              <Button variant="neon" size="lg" className="gap-2 text-sm md:text-base">
                Quero o Método Blade
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5 text-sm md:text-base">
                Saber Mais
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa amarela contínua */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-2 md:py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-4 md:mx-8 text-primary-foreground font-display text-sm md:text-lg tracking-wider font-bold">
              RONALD BLADE | PERSONAL TRAINER
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;