import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Fallback inline SVG data URI for the logo to ensure it loads in dev
const logoData = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <rect width='100%' height='100%' fill='#1E6FF5'/>
    <text x='50%' y='55%' font-size='320' font-family='Fredoka, Nunito, Arial, Helvetica, sans-serif' font-weight='700' fill='white' text-anchor='middle' dominant-baseline='middle'>B</text>
  </svg>`
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="block w-10 h-10 rounded-lg overflow-hidden shadow-brick">
              <img src={logoData} alt="BrickShop logo" className="w-full h-full object-cover" />
            </a>
            <span className="font-display font-bold text-xl text-foreground">BrickShop</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="font-medium text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="/new-parts" className="font-medium text-foreground hover:text-primary transition-colors">Новые детали</a>
            <a href="/used-parts" className="font-medium text-foreground hover:text-primary transition-colors">Б/У детали</a>
            <a href="/contacts" className="font-medium text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-muted-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <a href="/" className="font-medium text-foreground hover:text-primary transition-colors py-2">Главная</a>
              <a href="/new-parts" className="font-medium text-foreground hover:text-primary transition-colors py-2">Новые детали</a>
              <a href="/used-parts" className="font-medium text-foreground hover:text-primary transition-colors py-2">Б/У детали</a>
              <a href="/contacts" className="font-medium text-foreground hover:text-primary transition-colors py-2">Контакты</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
