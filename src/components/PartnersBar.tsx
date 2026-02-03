import { Circle, Sparkles, Hexagon, Target, Compass } from "lucide-react";

const partners = [
  { name: "Border", icon: Circle },
  { name: "Inspire", icon: Sparkles },
  { name: "luminous", icon: Hexagon },
  { name: "Scale", icon: Target },
  { name: "Trace", icon: Compass },
];

const PartnersBar = () => {
  return (
    <section className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between flex-wrap gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <partner.icon className="w-5 h-5" />
              <span className="font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
