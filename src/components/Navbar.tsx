import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#about" },
  { label: "Planos", href: "#pricing" },
  { label: "Estrutura", href: "#facilities" },
  { label: "Blog", href: "#blogs" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-center gap-8">
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <Button variant="neon" size="sm">
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
