import aboutBackground from "@/assets/ronald-about.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      />
      {/* Gradient overlay for text readability - from right */}
      <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent" />
      
      <div className="container mx-auto px-6 pt-48 md:pt-56 lg:pt-64 pb-24 relative z-10 flex justify-end">
        <div className="max-w-xl text-right">
          <span className="text-primary font-medium tracking-widest text-sm mb-4 block uppercase">
            Conheça o treinador
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-gradient-neon mb-6 leading-none">
            RONALD<br />BLADE
          </h2>
          <div className="w-24 h-1 bg-primary ml-auto mb-8" />
          
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-8">
            Minha missão é transformar o seu esforço em resultado real. 
            Com mais de <span className="text-primary font-semibold">6 anos de atuação</span> e 
            <span className="text-primary font-semibold"> centenas de vidas impactadas</span>, desenvolvi um método 
            baseado em ciência e estratégia, fugindo do "achismo".
          </p>
          
          <div className="mb-8">
            <p className="text-foreground/80 text-sm md:text-base font-medium mb-4">No meu método:</p>
            <ul className="space-y-3 text-foreground/70 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">–</span>
                <span>cada aluno tem um <span className="text-primary font-semibold">treino individual</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">–</span>
                <span>cada ajuste tem um <span className="text-primary font-semibold">motivo claro</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">–</span>
                <span>cada decisão é baseada em <span className="text-primary font-semibold">dados e observação</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">–</span>
                <span>o acompanhamento faz parte do serviço, <span className="text-primary font-semibold">não é extra</span></span>
              </li>
            </ul>
          </div>
          
          <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
            Aqui, não entregamos apenas treinos, mas um sistema completo de acompanhamento 
            para quem busca alta performance e uma mudança estética definitiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
