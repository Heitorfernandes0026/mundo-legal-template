import { useRef, useEffect, useState } from "react";
import aboutBackground from "@/assets/ronald-about.jpeg";

const AboutSection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasStartedLoading = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedLoading.current) {
          hasStartedLoading.current = true;
          const img = new Image();
          img.src = aboutBackground;
          img.onload = () => setBgLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" } // Increased for earlier preload
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative min-h-[60vh] md:min-h-[80vh] overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-card" />
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 ${bgLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${aboutBackground})` }}
      />
      {/* Gradient overlay for text readability - responsive */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background via-background/80 md:via-background/60 to-background/30 md:to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10 flex flex-col md:flex-row md:justify-end items-end md:items-start">
        <div className="max-w-xl text-left md:text-right">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            Conheça o treinador
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-neon mb-4 md:mb-6 leading-none">
            CONHEÇA O<br />TREINADOR
          </h2>
          <div className="w-16 md:w-24 h-1 bg-primary md:ml-auto mb-6 md:mb-8" />
          
          <p className="text-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 italic">
            Por trás de cada resultado consistente, existe <span className="text-primary font-semibold">direção</span>, <span className="text-primary font-semibold">critério</span> e <span className="text-primary font-semibold">experiência aplicada</span>.
          </p>

          <p className="text-foreground/90 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
            Com mais de <span className="text-primary font-semibold">6 anos de atuação prática</span> e centenas de alunos acompanhados, Ronald Blade construiu sua autoridade não apenas pelos resultados entregues, mas pela capacidade de analisar, ajustar e conduzir cada processo com precisão.
          </p>

          <p className="text-foreground/90 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
            Sua formação é construída de forma contínua, com aprofundamento em métodos avançados de treinamento, hipertrofia e emagrecimento, sempre com foco em <span className="text-primary font-semibold">aplicação prática e resultado real</span>.
          </p>

          <p className="text-foreground/90 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
            Seu trabalho vai além da prescrição de treinos. Ele atua diretamente na leitura da evolução individual, identificando rapidamente o que precisa ser ajustado e tomando <span className="text-primary font-semibold">decisões estratégicas</span> para manter o progresso constante.
          </p>

          <p className="text-foreground/90 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
            Cada aluno é tratado de forma única, com um acompanhamento próximo e direcionado — seja no presencial ou na consultoria online — garantindo <span className="text-primary font-semibold">clareza, eficiência e evolução contínua</span>.
          </p>

          <p className="text-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed mb-2 font-semibold">
            Aqui, não existe aleatoriedade.
          </p>
          <p className="text-primary text-sm md:text-base lg:text-lg leading-relaxed font-bold">
            Existe método, critério e responsabilidade sobre o resultado entregue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;