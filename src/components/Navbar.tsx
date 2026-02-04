import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoNavbar from "@/assets/logo-navbar.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#about" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logoNavbar} alt="Ronald Blade" className="h-8 md:h-10" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
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

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 text-foreground">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background border-border">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop spacer for balance */}
        <div className="hidden md:block w-10 flex-shrink-0" />
      </div>
    </nav>
  );
};

export default Navbar;