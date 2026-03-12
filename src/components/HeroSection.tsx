import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import ronaraAntes from "@/assets/ronara-antes.jpeg";
import ronaraDepois from "@/assets/ronara-depois.jpeg";

const HeroSection = () => {
  const scrollToPlans = () => {
    const el = document.getElementById("planos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5500000000000", "_blank");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle background texture */}
      <div className="absolute inset-0 top-16 bg-gradient-to-br from-background via-card/30 to-background" />

      {/* Neon curved lines decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-20 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] opacity-20"
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

      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-8 relative z-10 flex flex-col min-h-[calc(100vh-48px)]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 flex-1">
          {/* Left content - Text */}
          <div className="space-y-5 md:space-y-6 text-center lg:text-left flex-1 max-w-xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-wide">
              <span className="text-gradient-neon">MÉTODO BLADE</span>
            </h1>
            <p className="text-foreground text-lg sm:text-xl md:text-2xl font-display tracking-wide">
              O método que transforma vidas reais
            </p>

            <div className="space-y-2">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Você não precisa de mais um treino.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Você precisa de <span className="text-primary font-semibold">direção</span>, <span className="text-primary font-semibold">estratégia</span> e <span className="text-primary font-semibold">acompanhamento certo</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button variant="neon" size="lg" className="gap-2 text-sm md:text-base" onClick={openWhatsApp}>
                Saiba mais
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 text-sm md:text-base"
                onClick={scrollToPlans}
              >
                Quero iniciar minha transformação
              </Button>
            </div>
          </div>

          {/* Right content - Before/After */}
          <div className="flex items-end gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
            {/* Before */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border-2 border-border/50 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
                <div className="aspect-[3/4]">
                  <img
                    src={ronaraAntes}
                    alt="Ronara - Antes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-background/80 backdrop-blur-sm py-1.5 text-center">
                  <span className="text-muted-foreground text-xs sm:text-sm font-medium">ANTES</span>
                </div>
              </div>
            </div>

            {/* After - slightly larger and elevated */}
            <div className="relative -mb-2">
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/60 w-[155px] sm:w-[200px] md:w-[245px] lg:w-[290px] shadow-[0_0_30px_hsl(50_100%_50%_/_0.15)]">
                <div className="aspect-[3/4]">
                  <img
                    src={ronaraDepois}
                    alt="Ronara - Depois"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-background/80 backdrop-blur-sm py-1.5 text-center">
                  <span className="text-primary text-xs sm:text-sm font-bold">DEPOIS</span>
                </div>
              </div>

              {/* -33kg badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-primary text-primary-foreground font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3 py-1 sm:px-4 sm:py-2 rounded-lg neon-glow z-10">
                -33kg
              </div>
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
