import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpeg";

const stats = [
  { value: "1200+", label: "Member" },
  { value: "12+", label: "Trainer" },
  { value: "20+", label: "Year Service" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Image - Full visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Gradient overlay only on the left side for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      
      {/* Neon curved lines decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-20 right-0 w-[800px] h-[800px] opacity-40"
          viewBox="0 0 800 800"
          fill="none"
        >
          <path
            d="M400 100 C600 100, 700 300, 700 400 C700 500, 600 700, 400 700"
            stroke="hsl(72 100% 50%)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse-neon"
          />
          <path
            d="M350 150 C550 150, 650 320, 650 400 C650 480, 550 650, 350 650"
            stroke="hsl(72 100% 50%)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="flex items-center min-h-[80vh]">
          {/* Left content - Text aligned to the left */}
          <div className="space-y-8 text-left max-w-xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-none tracking-wide">
              <span className="text-gradient-neon">RESULTADOS REAIS</span>
              <br />
              <span className="text-foreground">EXIGEM </span>
              <span className="text-gradient-neon">MÉTODO.</span>
            </h1>

            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Estratégia, acompanhamento e evolução. Conheça o sistema estruturado 
              que vai levar seu corpo ao próximo nível.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="font-display text-3xl md:text-4xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4">
              <Button variant="neon" size="lg" className="gap-2">
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5">
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
