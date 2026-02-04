import { useRef, useEffect, useState } from "react";
import story1 from "@/assets/story-1.jpeg";
import story2 from "@/assets/story-2.jpeg";
import story3 from "@/assets/story-3.jpeg";
import story4 from "@/assets/story-4.jpeg";

const SuccessStoriesSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stories = [
    {
      name: "Lucas Mendes",
      result: "Perdeu 18kg em 6 meses",
      highlight: "-18kg",
      image: story1,
    },
    {
      name: "Fernanda Costa",
      result: "Ganhou 6kg de massa magra",
      highlight: "+6kg",
      image: story2,
    },
    {
      name: "Ricardo Alves",
      result: "Voltou a treinar após lesão",
      highlight: "100%",
      image: story3,
    },
    {
      name: "Mariana Silva",
      result: "Definição muscular em 4 meses",
      highlight: "4 meses",
      image: story4,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="historias" className="relative py-16 md:py-24 bg-card/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            Resultados reais
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-neon mb-4 md:mb-6 leading-none">
            HISTÓRIAS DE SUCESSO
          </h2>
          <p className="text-foreground/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Pessoas reais, transformações reais. Conheça quem já passou pelo Método Blade.
          </p>
        </div>

        {/* Stories Grid - Photos in Highlight */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12">
          {stories.map((story, index) => (
            <div
              key={story.name}
              className="group relative overflow-hidden rounded-lg md:rounded-xl border-2 border-primary/30 hover:border-primary transition-all duration-300"
            >
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden bg-card">
                {isInView ? (
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-card animate-pulse" />
                )}
              </div>

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* Highlight Badge */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-primary text-primary-foreground font-display text-sm md:text-xl lg:text-2xl px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg">
                {story.highlight}
              </div>

              {/* Info at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl text-foreground mb-0.5 md:mb-1">
                  {story.name}
                </h3>
                <p className="text-foreground/70 text-[10px] sm:text-xs md:text-sm">
                  {story.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground/60 text-xs md:text-sm mb-3 md:mb-4">
            Pronto para escrever sua própria história de sucesso?
          </p>
          <button className="bg-primary text-primary-foreground font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 neon-glow text-sm md:text-base">
            Quero o Método Blade
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;