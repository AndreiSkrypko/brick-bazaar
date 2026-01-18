import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "LEGO Technic Bugatti Chiron",
    price: 32990,
    oldPrice: 39990,
    badge: "Хит",
    badgeColor: "bg-primary",
    type: "Оригинал",
    image: "🏎️",
  },
  {
    id: 2,
    name: "Звёздный разрушитель",
    price: 8990,
    badge: "Аналог",
    badgeColor: "bg-lego-blue",
    type: "King",
    image: "🚀",
  },
  {
    id: 3,
    name: "Набор деталей 2x4 (100 шт)",
    price: 890,
    badge: "Б/У",
    badgeColor: "bg-lego-green",
    type: "Микс цветов",
    image: "🧱",
  },
  {
    id: 4,
    name: "LEGO City Полицейский участок",
    price: 5490,
    oldPrice: 6990,
    badge: "Скидка",
    badgeColor: "bg-accent text-accent-foreground",
    type: "Оригинал",
    image: "🏢",
  },
  {
    id: 5,
    name: "Минифигурка Бэтмен",
    price: 350,
    badge: "Новое",
    badgeColor: "bg-foreground",
    type: "Оригинал",
    image: "🦇",
  },
  {
    id: 6,
    name: "Средневековый замок",
    price: 4590,
    badge: "Аналог",
    badgeColor: "bg-lego-blue",
    type: "KING",
    image: "🏰",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Популярные товары
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Лучшие предложения этой недели
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
                <Badge className={`absolute top-4 left-4 ${product.badgeColor} font-medium`}>
                  {product.badge}
                </Badge>
              </div>

              <div className="p-5">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {product.type}
                </span>
                <h3 className="font-display font-bold text-lg text-foreground mt-1 mb-3 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-2xl text-primary">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                  <Button size="icon" className="bg-primary hover:bg-primary/90 shadow-brick">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" className="font-display font-bold px-8">
            Смотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
