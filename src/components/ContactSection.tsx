import { Instagram, MessageCircle } from "lucide-react";
import contactBg from "@/assets/contact-bg.png";

const ContactSection = () => {
  const whatsappNumber = "5531991607563";
  const whatsappMessage = encodeURIComponent("Olá Ronald! Vim pelo site e gostaria de saber mais sobre a consultoria.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://instagram.com/blade_treinador";

  return (
    <section id="contato" className="relative min-h-[80vh] md:min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="container mx-auto px-6 relative z-10 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient-neon mb-6 leading-none">
            VENHA FAZER PARTE DA CONSULTORIA RONALD BLADE
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        </div>

        {/* Contact Options */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Instagram */}
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors duration-300 group"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <span className="text-lg">@blade_treinador</span>
            </a>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-border/50" />

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 neon-glow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar diretamente com Ronald no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
