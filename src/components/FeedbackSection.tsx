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
    <section id="feedback" className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            O que dizem sobre o método
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-neon mb-4 md:mb-6 leading-none px-2">
            FEEDBACK DOS MENTORADOS BLADE
          </h2>
        </div>

        {/* Video Container */}
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          {/* Video with yellow frame */}
          <div className="relative p-1.5 md:p-2 bg-primary rounded-xl md:rounded-2xl">
            <video
              ref={videoRef}
              src={feedbackVideo}
              controls={isPlaying}
              className="w-full rounded-lg md:rounded-xl"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-1.5 md:inset-2 flex items-center justify-center bg-background/40 rounded-lg md:rounded-xl transition-all duration-300 hover:bg-background/30 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary flex items-center justify-center neon-glow transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-foreground ml-0.5 md:ml-1" fill="currentColor" />
                </div>
              </button>
            )}
          </div>

          {/* Student Name */}
          <p className="text-center text-foreground/80 text-sm md:text-lg lg:text-xl mt-4 md:mt-6 font-medium">
            Aluno Osmar Colen - Mentoria Blade Presencial
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
