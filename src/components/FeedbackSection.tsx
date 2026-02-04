import { useState, useRef } from "react";
import { Play } from "lucide-react";
import feedbackVideo from "@/assets/feedback-osmar.mp4";

const FeedbackSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
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
        </div>

        {/* Video Container */}
        <div className="max-w-2xl mx-auto">
          {/* Video with yellow frame */}
          <div className="relative p-2 bg-primary rounded-2xl">
            <video
              ref={videoRef}
              src={feedbackVideo}
              controls={isPlaying}
              className="w-full rounded-xl"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-2 flex items-center justify-center bg-background/40 rounded-xl transition-all duration-300 hover:bg-background/30 group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center neon-glow transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
            )}
          </div>

          {/* Student Name */}
          <p className="text-center text-foreground/80 text-lg md:text-xl mt-6 font-medium">
            Aluno Osmar Colen - Mentoria Blade Presencial
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
