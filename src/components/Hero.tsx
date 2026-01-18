import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 md:py-24">
      {/* Decorative bricks */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-12 bg-white rounded-md" />
        <div className="absolute top-32 right-20 w-16 h-10 bg-white rounded-md" />
        <div className="absolute bottom-20 left-1/4 w-24 h-14 bg-white rounded-md" />
        <div className="absolute top-1/2 right-1/3 w-12 h-8 bg-white rounded-md" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-6 leading-tight">
            Мир LEGO в одном месте
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Оригинальные наборы, качественные аналоги и редкие детали. 
            Новые и б/у — найдётся всё!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-brick font-display font-bold text-lg px-8 py-6"
            >
              Смотреть каталог
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-display font-bold text-lg px-8 py-6"
            >
              Б/У детали
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 35C1248 40 1344 60 1392 70L1440 80V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(0 0% 98%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
