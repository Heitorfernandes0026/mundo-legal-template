import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedbacks = [
    {
      name: "Thiago Rocha",
      role: "Empresário",
      feedback:
        "O Ronald não é só um personal, é um estrategista. Ele entende que cada corpo responde diferente e adapta tudo de forma cirúrgica. Em 3 meses, já vi resultados que não consegui em 2 anos sozinho.",
      rating: 5,
    },
    {
      name: "Carolina Lima",
      role: "Advogada",
      feedback:
        "A comunicação é impecável. Ele explica o porquê de cada exercício, cada ajuste na dieta. Me sinto realmente acompanhada, não apenas mais uma aluna. Isso faz toda a diferença.",
      rating: 5,
    },
    {
      name: "Bruno Santos",
      role: "Médico",
      feedback:
        "Como profissional da saúde, sou criterioso. O método do Ronald é baseado em evidências, sem modismos. A periodização é inteligente e os resultados falam por si.",
      rating: 5,
    },
    {
      name: "Amanda Ferreira",
      role: "Arquiteta",
      feedback:
        "Finalmente encontrei um profissional que entende minha rotina corrida. Os treinos são otimizados, eficientes. Ganho de massa sem passar horas na academia.",
      rating: 5,
    },
    {
      name: "Pedro Henrique",
      role: "Atleta Amador",
      feedback:
        "Já passei por vários treinadores, mas nenhum teve a visão sistêmica do Ronald. Ele vê o todo: sono, estresse, alimentação. Minha performance nunca esteve tão boa.",
      rating: 5,
    },
  ];

  const nextFeedback = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <section id="feedback" className="relative py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest text-sm mb-4 block uppercase">
            O que dizem sobre o método
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gradient-neon mb-6 leading-none">
            FEEDBACK DOS MENTORADOS BLADE
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
            Depoimentos reais de quem vive a experiência do acompanhamento personalizado.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          {/* Main Feedback Card */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 mb-8">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            {/* Feedback Content */}
            <div className="relative z-10">
              <p className="text-foreground/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 pl-8">
                "{feedbacks[currentIndex].feedback}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pl-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-primary text-xl">
                    {feedbacks[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground">
                    {feedbacks[currentIndex].name}
                  </h4>
                  <p className="text-foreground/60 text-sm">
                    {feedbacks[currentIndex].role}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="ml-auto flex gap-1">
                  {[...Array(feedbacks[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-b-2xl" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevFeedback}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Feedback anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/70" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {feedbacks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-primary"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Ir para feedback ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextFeedback}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Próximo feedback"
            >
              <ChevronRight className="w-5 h-5 text-foreground/70" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
