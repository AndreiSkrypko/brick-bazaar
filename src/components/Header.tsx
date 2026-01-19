import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg shadow-brick flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">B</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">BrickShop</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="font-medium text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#" className="font-medium text-foreground hover:text-primary transition-colors">Оригинал</a>
            <a href="#" className="font-medium text-foreground hover:text-primary transition-colors">Аналоги</a>
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
              <a href="#" className="font-medium text-foreground hover:text-primary transition-colors py-2">Каталог</a>
              <a href="#" className="font-medium text-foreground hover:text-primary transition-colors py-2">Оригинал</a>
              <a href="#" className="font-medium text-foreground hover:text-primary transition-colors py-2">Аналоги</a>
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
