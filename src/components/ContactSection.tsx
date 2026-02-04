import { Instagram, MessageCircle, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "5531991607563";
  const whatsappMessage = encodeURIComponent("Olá Ronald! Vim pelo site e gostaria de saber mais sobre a consultoria.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://instagram.com/blade_treinador";

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Transforme seu corpo agora
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 leading-none">
            PRONTO PARA <span className="text-gradient-neon">COMEÇAR?</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto">
            Entre em contato e dê o primeiro passo para a sua transformação física e mental.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                FALE COM RONALD
              </h3>
              <p className="text-foreground/60 mb-6">
                Tire suas dúvidas diretamente pelo WhatsApp e receba um atendimento personalizado.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                <span>Conversar agora</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                SIGA NO INSTAGRAM
              </h3>
              <p className="text-foreground/60 mb-6">
                Acompanhe conteúdos exclusivos, dicas de treino e resultados de alunos.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                <span>@blade_treinador</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/40 text-sm">
            © 2024 Ronald Blade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
