import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-lego-blue to-lego-blue/80 p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-1/3 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent rounded-2xl shadow-brick flex items-center justify-center">
                <Gift className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-1">
                  Скидка 15% на первый заказ
                </h3>
                <p className="text-white/80 text-lg">
                  Используй промокод <span className="font-bold text-accent">BRICK15</span> при оформлении
                </p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-brick font-display font-bold text-lg px-8 whitespace-nowrap"
            >
              Получить скидку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
