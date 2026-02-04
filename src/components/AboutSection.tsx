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
            RONALD<br />BLADE
          </h2>
          <div className="w-16 md:w-24 h-1 bg-primary md:ml-auto mb-6 md:mb-8" />
          
          <p className="text-foreground/90 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
            Minha missão é transformar o seu esforço em resultado real. 
            Com mais de <span className="text-primary font-semibold">6 anos de atuação</span> e 
            <span className="text-primary font-semibold"> centenas de vidas impactadas</span>, desenvolvi um método 
            baseado em ciência e estratégia, fugindo do "achismo".
          </p>
          
          <div className="mb-6 md:mb-8">
            <p className="text-foreground/80 text-xs md:text-sm lg:text-base font-medium mb-3 md:mb-4">No meu método:</p>
            <ul className="space-y-2 md:space-y-3 text-foreground/70 text-xs md:text-sm lg:text-base">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-primary mt-0.5 md:mt-1">–</span>
                <span>cada aluno tem um <span className="text-primary font-semibold">treino individual</span></span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-primary mt-0.5 md:mt-1">–</span>
                <span>cada ajuste tem um <span className="text-primary font-semibold">motivo claro</span></span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-primary mt-0.5 md:mt-1">–</span>
                <span>cada decisão é baseada em <span className="text-primary font-semibold">dados e observação</span></span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-primary mt-0.5 md:mt-1">–</span>
                <span>o acompanhamento faz parte do serviço, <span className="text-primary font-semibold">não é extra</span></span>
              </li>
            </ul>
          </div>
          
          <p className="text-foreground/70 text-xs md:text-sm lg:text-base leading-relaxed">
            Aqui, não entregamos apenas treinos, mas um sistema completo de acompanhamento 
            para quem busca alta performance e uma mudança estética definitiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;