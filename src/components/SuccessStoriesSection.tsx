import { useState } from "react";
import story1 from "@/assets/story-1.jpeg";
import story2 from "@/assets/story-2.jpeg";
import story3 from "@/assets/story-3.jpeg";
import story4 from "@/assets/story-4.jpeg";

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      name: "Lucas Mendes",
      age: 28,
      result: "Perdeu 18kg em 6 meses",
      quote:
        "Eu já tinha tentado de tudo: academia sozinho, dietas da internet, apps de treino. Nada funcionava porque eu não tinha direção. Com o Método Blade, pela primeira vez eu entendi o porquê de cada exercício e cada ajuste. Resultado? Menos 18kg e uma disposição que eu nunca tive.",
      highlight: "-18kg",
      image: story1,
    },
    {
      name: "Fernanda Costa",
      age: 34,
      result: "Ganhou 6kg de massa magra",
      quote:
        "Sempre fui magra e achava impossível ganhar massa. O Ronald montou um plano específico pro meu corpo e minha rotina corrida. Em 8 meses, ganhei 6kg de músculo e finalmente me sinto forte e confiante.",
      highlight: "+6kg",
      image: story2,
    },
    {
      name: "Ricardo Alves",
      age: 42,
      result: "Voltou a treinar após lesão",
      quote:
        "Depois de uma lesão no joelho, achei que nunca mais ia conseguir treinar pesado. A avaliação detalhada do Ronald identificou exatamente o que eu podia fazer. Hoje treino melhor do que antes da lesão, sem dor nenhuma.",
      highlight: "100%",
      image: story3,
    },
    {
      name: "Mariana Silva",
      age: 31,
      result: "Definição muscular em 4 meses",
      quote:
        "Treinava há 3 anos e estava estagnada. Mudava de treino toda hora por ansiedade, como o Ronald fala. Quando ele assumiu, manteve o foco no processo. Em 4 meses, consegui a definição que eu buscava há anos.",
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

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={story.name}
              className={`group bg-card/50 backdrop-blur-sm border rounded-lg p-8 transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border/50 hover:border-primary/50"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Header with photo and highlight */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Photo */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                      {story.name}
                    </h3>
                    <p className="text-foreground/50 text-sm">
                      {story.age} anos • {story.result}
                    </p>
                  </div>
                </div>
                <span className="font-display text-3xl md:text-4xl text-primary">
                  {story.highlight}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="relative">
                <span className="text-primary/20 text-4xl font-display absolute -top-2 -left-2">
                  "
                </span>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed pl-4">
                  {story.quote}
                </p>
              </blockquote>

              {/* Decorative line */}
              <div
                className={`h-1 mt-6 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "bg-primary w-full"
                    : "bg-border/50 w-16 group-hover:w-24"
                }`}
              />
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
