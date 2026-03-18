import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  videoSrc: string;
  studentName: string;
  shouldLoad: boolean;
}

const VideoCard = ({ videoSrc, studentName, shouldLoad }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex-1 min-w-0">
      {/* Video with yellow frame */}
      <div className="relative p-1.5 md:p-2 bg-primary rounded-xl md:rounded-2xl">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg md:rounded-xl bg-background/50">
          {shouldLoad ? (
            <video
              ref={videoRef}
              src={videoSrc}
              controls={isPlaying}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isVideoLoaded ? "opacity-100" : "opacity-50"}`}
              playsInline
              preload="metadata"
              onLoadedData={() => setIsVideoLoaded(true)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
          ) : (
            <div className="absolute inset-0 animate-pulse" />
          )}
          
          {/* Play Button Overlay */}
          {!isPlaying && shouldLoad && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-background/40 transition-all duration-300 hover:bg-background/30 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-primary flex items-center justify-center neon-glow transition-transform duration-300 group-hover:scale-110">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground ml-0.5" fill="currentColor" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Student Name */}
      <p className="text-center text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg mt-3 md:mt-4 font-medium">
        {studentName}
      </p>
    </div>
  );
};

const FeedbackSection = () => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const videos = [
    {
      videoSrc: "/feedback-osmar.mp4",
      studentName: "Aluno Osmar Colen - Mentoria Blade Presencial",
    },
    {
      videoSrc: "/feedback-video-2.mp4",
      studentName: "Aluna Bárbara - Mentoria Blade",
    },
    {
      videoSrc: "/feedback-ronara.mp4",
      studentName: "Aluna Ronara - Mentoria Blade",
    },
  ];

  // Lazy load video when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="feedback" className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            Quem fez, validou e transformou.
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-neon mb-4 md:mb-6 leading-none px-2">
            TIME DE VENCEDORES
          </h2>
        </div>

        {/* Videos Container - Side by Side */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                videoSrc={video.videoSrc}
                studentName={video.studentName}
                shouldLoad={shouldLoadVideo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
