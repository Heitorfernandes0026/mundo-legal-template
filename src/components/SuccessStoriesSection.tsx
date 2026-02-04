import story1 from "@/assets/story-1.jpeg";
import story2 from "@/assets/story-2.jpeg";
import story3 from "@/assets/story-3.jpeg";
import story4 from "@/assets/story-4.jpeg";

const SuccessStoriesSection = () => {
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

  return (
    <section id="historias" className="relative py-24 bg-card/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest text-sm mb-4 block uppercase">
            Resultados reais
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gradient-neon mb-6 leading-none">
            HISTÓRIAS DE SUCESSO
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
            Pessoas reais, transformações reais. Conheça quem já passou pelo Método Blade.
          </p>
        </div>

        {/* Stories Grid - Photos in Highlight */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stories.map((story) => (
            <div
              key={story.name}
              className="group relative overflow-hidden rounded-xl border-2 border-primary/30 hover:border-primary transition-all duration-300"
            >
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* Highlight Badge */}
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground font-display text-xl md:text-2xl px-3 py-1 rounded-lg">
                {story.highlight}
              </div>

              {/* Info at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg md:text-xl text-foreground mb-1">
                  {story.name}
                </h3>
                <p className="text-foreground/70 text-xs md:text-sm">
                  {story.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground/60 text-sm mb-4">
            Pronto para escrever sua própria história de sucesso?
          </p>
          <button className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 neon-glow">
            Quero o Método Blade
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
