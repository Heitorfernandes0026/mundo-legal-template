import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqBg from "@/assets/faq-bg.jpeg";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso ter experiência em academia para começar?",
      answer:
        "Não. O Método Blade foi pensado para atender desde iniciantes até pessoas com anos de treino. A avaliação inicial identifica seu nível e o treino é montado especificamente para você, respeitando suas limitações e objetivos.",
    },
    {
      question: "Como funciona o acompanhamento online?",
      answer:
        "O acompanhamento é feito através de uma plataforma exclusiva onde você recebe seu treino, envia vídeos para correção de execução, registra seu progresso e se comunica diretamente comigo. Dependendo do plano, os feedbacks são semanais ou mais frequentes.",
    },
    {
      question: "Qual a diferença entre os planos?",
      answer:
        "O Blade Start é direção inicial para quem precisa começar certo. O Blade Confort adiciona acompanhamento estratégico com feedbacks semanais e ajustes. O Blade Diamond é o premium, com acompanhamento constante e análise profunda para evolução de médio e longo prazo.",
    },
    {
      question: "Em quanto tempo vou ver resultados?",
      answer:
        "Depende do seu ponto de partida, consistência e objetivo. Geralmente, em 4 a 8 semanas já é possível perceber mudanças significativas no corpo e na disposição. O mais importante é manter a constância com direção correta.",
    },
    {
      question: "O treino inclui dieta?",
      answer:
        "O foco principal é o treinamento estruturado. Para questões nutricionais específicas, recomendo acompanhamento com um nutricionista. Porém, oriento sobre princípios básicos de alimentação que complementam seu treino.",
    },
    {
      question: "Posso treinar em qualquer academia?",
      answer:
        "Sim. O treino é adaptado para os equipamentos disponíveis na sua academia ou até para treino em casa, se for o caso. Na avaliação inicial, mapeamos o que você tem disponível.",
    },
    {
      question: "Como faço para trocar de plano?",
      answer:
        "É simples. Basta entrar em contato que fazemos a migração para o plano desejado. Muitos alunos começam no Start e evoluem para o Confort ou Diamond conforme percebem a importância do acompanhamento contínuo.",
    },
    {
      question: "E se eu precisar pausar por um tempo?",
      answer:
        "Imprevistos acontecem. Conversamos sobre a melhor forma de lidar com pausas temporárias sem perder seu progresso. O importante é manter a comunicação aberta para encontrarmos a melhor solução.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${faqBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/95" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            Transforme seu corpo agora
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-neon mb-4 md:mb-6 leading-none">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-foreground/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Respostas para as dúvidas mais comuns sobre o Método Blade.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-primary bg-primary/5"
                  : "border-border/50 bg-card/30 hover:border-primary/50"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <span className="font-display text-base sm:text-lg md:text-xl text-foreground pr-3 md:pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-4 md:px-6 pb-4 md:pb-6 text-foreground/70 text-xs sm:text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
