import storyLaunelina from "@/assets/story-launelina.jpeg";
import storyReila from "@/assets/story-reila.png";
import storyValeria from "@/assets/story-valeria.png";
import storyMari from "@/assets/story-mari.jpeg";

interface Story {
  name: string;
  highlight: string;
  image: string;
}

const SuccessStoriesSection = () => {
  const stories: Story[] = [
    { name: "Launelina", highlight: "-30kg", image: storyLaunelina },
    { name: "Reila", highlight: "-20kg", image: storyReila },
    { name: "Valéria", highlight: "-7,8% gordura", image: storyValeria },
    { name: "Mari", highlight: "-10kg", image: storyMari },
  ];

  return (
    <section id="historias" className="relative py-16 md:py-24 bg-card/30 overflow-hidden">
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

        {/* Stories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg md:rounded-xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 bg-card"
            >
              {/* Photo - No overlay */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Highlight Badge - Bottom Right */}
                <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-primary text-primary-foreground font-display text-sm md:text-xl lg:text-2xl px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg">
                  {story.highlight}
                </div>
              </div>

              {/* Info below photo */}
              <div className="p-3 md:p-4">
                <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl text-foreground mb-0">
                  {story.name}
                </h3>
                {story.subtitle && (
                  <p className="text-foreground/60 text-[10px] sm:text-xs mb-1 md:mb-2">
                    {story.subtitle}
                  </p>
                )}
                
                {/* Weight and Date Info */}
                {story.weightBefore && story.weightAfter && (
                  <div className="flex items-center gap-2 mb-1 text-[10px] sm:text-xs">
                    <span className="text-foreground/60">{story.weightBefore}</span>
                    <span className="text-primary">→</span>
                    <span className="text-primary font-semibold">{story.weightAfter}</span>
                  </div>
                )}
                {story.dateBefore && story.dateAfter && (
                  <div className="flex items-center gap-2 mb-2 md:mb-3 text-[9px] sm:text-[10px]">
                    <span className="text-foreground/50">{story.dateBefore}</span>
                    <span className="text-foreground/50">|</span>
                    <span className="text-foreground/50">{story.dateAfter}</span>
                  </div>
                )}
                
                <p className="text-foreground/70 text-[10px] sm:text-xs md:text-sm">
                  {story.testimonial}
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
