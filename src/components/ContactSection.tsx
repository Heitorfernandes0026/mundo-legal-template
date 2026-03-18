import { Instagram, MessageCircle, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "5531991607563";
  const whatsappMessage = encodeURIComponent("Olá Ronald! Vim pelo site e gostaria de saber mais sobre a consultoria.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://instagram.com/blade_treinador";

  return (
    <section id="contato" className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute -top-20 md:-top-40 -right-20 md:-right-40 w-40 md:w-80 h-40 md:h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 w-40 md:w-80 h-40 md:h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block text-primary font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">
            PRONTO PARA COMEÇAR
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 md:mb-6 leading-none">
            Pronta para o seu <span className="text-gradient-neon">ponto de virada?</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto px-2">
            Entre em contato e dê o primeiro passo para a sua transformação física e mental.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-primary text-primary-foreground font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 neon-glow text-sm md:text-base"
          >
            Quero iniciar minha transformação
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-2 md:mb-3">
                FALE COM RONALD
              </h3>
              <p className="text-foreground/60 text-xs md:text-sm lg:text-base mb-4 md:mb-6">
                Tire suas dúvidas diretamente pelo WhatsApp e receba um atendimento personalizado.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base group-hover:gap-3 md:group-hover:gap-4 transition-all duration-300">
                <span>Conversar agora</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Instagram className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-2 md:mb-3">
                SIGA NO INSTAGRAM
              </h3>
              <p className="text-foreground/60 text-xs md:text-sm lg:text-base mb-4 md:mb-6">
                Acompanhe conteúdos exclusivos, dicas de treino e resultados de alunos.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base group-hover:gap-3 md:group-hover:gap-4 transition-all duration-300">
                <span>@blade_treinador</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-16">
          <p className="text-foreground/40 text-xs md:text-sm">
            © 2024 Ronald Blade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
