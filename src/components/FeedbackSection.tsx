import feedbackVideo from "@/assets/feedback-osmar.mp4";

const FeedbackSection = () => {
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
        </div>

        {/* Video Container */}
        <div className="max-w-2xl mx-auto">
          {/* Video with yellow frame */}
          <div className="relative p-2 bg-primary rounded-2xl">
            <video
              src={feedbackVideo}
              controls
              className="w-full rounded-xl"
              playsInline
            />
          </div>

          {/* Student Name */}
          <p className="text-center text-foreground/80 text-lg md:text-xl mt-6 font-medium">
            Aluno Osmar Colen
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
