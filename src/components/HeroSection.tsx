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
    window.open("https://wa.me/5531991607563", "_blank");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-[48px] md:pt-[56px]">

      {/* Full-section before/after images */}
      <div className="relative z-0 flex min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-56px)]">
        {/* Before image - left half */}
        <div className="relative w-1/2 min-h-full overflow-hidden bg-background">
          <img
            src={ronaraAntes}
            alt="Ronara - Antes"
            className="absolute inset-0 w-full h-full object-contain object-top"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/20" />
          {/* Label */}
          <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10">
            <span className="text-muted-foreground text-sm sm:text-lg md:text-xl font-display tracking-widest bg-background/60 backdrop-blur-sm px-4 py-1.5 rounded-md">
              ANTES
            </span>
          </div>
        </div>

        {/* After image - right half */}
        <div className="relative w-1/2 min-h-full overflow-hidden border-l-2 border-primary/40 bg-background">
          <img
            src={ronaraDepois}
            alt="Ronara - Depois"
            className="absolute inset-0 w-full h-full object-contain object-top"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/20" />
          {/* Label */}
          <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10">
            <span className="text-primary text-sm sm:text-lg md:text-xl font-display tracking-widest font-bold bg-background/60 backdrop-blur-sm px-4 py-1.5 rounded-md neon-glow">
              DEPOIS
            </span>
          </div>
          {/* -33kg badge */}
          <div className="absolute top-20 sm:top-24 right-3 sm:right-6 bg-primary text-primary-foreground font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-3 py-1 sm:px-5 sm:py-2 rounded-lg neon-glow z-10">
            -33kg
          </div>
        </div>
      </div>

      {/* Overlayed text content - no background card */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center pointer-events-auto px-6 py-8 sm:px-10 sm:py-10 max-w-xl mx-4">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-none tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            <span className="text-gradient-neon">MÉTODO BLADE</span>
          </h1>
          <p className="text-primary font-display text-base sm:text-xl md:text-2xl tracking-wide mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] whitespace-nowrap">
            O método que transforma vidas reais
          </p>

          <div className="mt-3 space-y-1">
            <p className="text-foreground text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              Você não precisa de mais um treino.
            </p>
            <p className="text-foreground text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              Você precisa de <span className="text-primary font-bold">direção</span>, <span className="text-primary font-bold">estratégia</span> e <span className="text-primary font-bold">acompanhamento certo</span>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 justify-center">
            <Button variant="neon" size="lg" className="gap-2 text-sm md:text-base" onClick={openWhatsApp}>
              Saiba mais
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 text-sm md:text-base backdrop-blur-sm"
              onClick={scrollToPlans}
            >
              Quero iniciar minha transformação
            </Button>
          </div>
        </div>
      </div>
      {/* Faixa amarela contínua */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-2 md:py-3 overflow-hidden z-20">
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
