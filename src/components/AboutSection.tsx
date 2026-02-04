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
      
      <div className="container mx-auto px-6 py-24 relative z-10 flex justify-end">
        <div className="max-w-xl text-right">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-neon mb-8">
            SOBRE O RONALD
          </h2>
          
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            Sou o Ronald Blade, e minha missão é transformar o seu esforço em resultado real. 
            Com mais de 6 anos de atuação e centenas de vidas impactadas, desenvolvi um método 
            baseado em ciência e estratégia, fugindo do "achismo". Aqui, não entregamos apenas 
            treinos, mas um sistema completo de acompanhamento para quem busca alta performance 
            e uma mudança estética definitiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
