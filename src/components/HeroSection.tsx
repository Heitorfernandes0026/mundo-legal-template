import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import heroAthlete from "@/assets/hero-athlete.png";
import heroBackground from "@/assets/hero-background.jpeg";

const stats = [
  { value: "1200+", label: "Member" },
  { value: "12+", label: "Trainer" },
  { value: "20+", label: "Year Service" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Neon curved lines decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-20 right-0 w-[800px] h-[800px] opacity-60"
          viewBox="0 0 800 800"
          fill="none"
        >
          <path
            d="M400 100 C600 100, 700 300, 700 400 C700 500, 600 700, 400 700"
            stroke="hsl(72 100% 50%)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse-neon"
          />
          <path
            d="M350 150 C550 150, 650 320, 650 400 C650 480, 550 650, 350 650"
            stroke="hsl(72 100% 50%)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Badge decoration */}
      <div className="absolute top-32 right-24 hidden lg:block">
        <div className="w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center rotate-12 animate-float">
          <div className="text-center">
            <div className="text-primary text-xs font-bold">GYM</div>
            <div className="text-[8px] text-muted-foreground">BODYBUILDING</div>
            <div className="w-8 h-8 mx-auto mt-1">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <circle cx="12" cy="12" r="10" stroke="hsl(72 100% 50%)" strokeWidth="1" />
                <path d="M8 12h8M12 8v8" stroke="hsl(72 100% 50%)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide">
              <span className="text-foreground">YOUR BODY </span>
              <span className="text-gradient-neon">CAN</span>
              <br />
              <span className="text-gradient-neon">STAND</span>
              <span className="text-foreground"> ALMOST</span>
              <br />
              <span className="text-foreground">ANYTHING.</span>
            </h1>

            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Welcome to Fitix - Your Ultimate Fitness Companion! Step into a world 
              where each stride takes you nearer to your fitness aspirations. Join our lively 
              community and tap into the magic of transformation. Dive into the Fitix 
              journey and unleash your true potential!
            </p>

            {/* Stats */}
            <div className="flex gap-12 py-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4">
              <Button variant="neon" size="lg" className="gap-2">
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5">
                Explore More
              </Button>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroAthlete}
                alt="Professional athlete"
                className="relative z-10 h-[500px] md:h-[600px] object-cover object-top"
              />
              {/* Neon glow effect behind athlete */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
