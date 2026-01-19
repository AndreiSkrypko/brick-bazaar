import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Filter, X, Star, Sparkles } from "lucide-react";
import { useState, useMemo } from "react";

const categories = [
  { id: "all", name: "Все детали" },
  { id: "bricks", name: "Кирпичики" },
  { id: "plates", name: "Пластины" },
  { id: "technic", name: "Техник (оси, шестерни)" },
  { id: "special", name: "Специальные" },
  { id: "minifigs", name: "Минифигурки" },
];

const brandTypes = [
  { id: "all", name: "Все", icon: null },
  { id: "original", name: "Оригинал LEGO", icon: <Star className="h-4 w-4" /> },
  { id: "analog", name: "Аналоги", icon: <Sparkles className="h-4 w-4" /> },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  "Красный": { bg: "bg-red-500", text: "text-white" },
  "Синий": { bg: "bg-blue-500", text: "text-white" },
  "Белый": { bg: "bg-white border border-border", text: "text-foreground" },
  "Жёлтый": { bg: "bg-yellow-400", text: "text-black" },
  "Серый": { bg: "bg-gray-400", text: "text-white" },
  "Зелёный": { bg: "bg-green-500", text: "text-white" },
  "Чёрный": { bg: "bg-black", text: "text-white" },
  "Коричневый": { bg: "bg-amber-700", text: "text-white" },
  "Оранжевый": { bg: "bg-orange-500", text: "text-white" },
};

const parts = [
  // Оригинал LEGO - Кирпичики
  { id: 1, name: "Кирпичик 2x4", category: "bricks", brand: "original", color: "Красный", price: 35, qty: 120, size: "2x4", image: "🧱" },
  { id: 2, name: "Кирпичик 2x2", category: "bricks", brand: "original", color: "Синий", price: 25, qty: 85, size: "2x2", image: "🟦" },
  { id: 3, name: "Кирпичик 1x2", category: "bricks", brand: "original", color: "Белый", price: 18, qty: 200, size: "1x2", image: "⬜" },
  { id: 4, name: "Кирпичик 1x4", category: "bricks", brand: "original", color: "Жёлтый", price: 28, qty: 64, size: "1x4", image: "🟨" },
  
  // Аналоги - Кирпичики
  { id: 5, name: "Кирпичик 2x4", category: "bricks", brand: "analog", color: "Красный", price: 12, qty: 300, size: "2x4", image: "🧱" },
  { id: 6, name: "Кирпичик 2x2", category: "bricks", brand: "analog", color: "Синий", price: 8, qty: 250, size: "2x2", image: "🟦" },
  { id: 7, name: "Кирпичик 1x2", category: "bricks", brand: "analog", color: "Зелёный", price: 5, qty: 400, size: "1x2", image: "🟩" },
  { id: 8, name: "Кирпичик 2x6", category: "bricks", brand: "analog", color: "Оранжевый", price: 15, qty: 150, size: "2x6", image: "🟧" },

  // Оригинал LEGO - Пластины
  { id: 9, name: "Пластина 4x8", category: "plates", brand: "original", color: "Зелёный", price: 55, qty: 45, size: "4x8", image: "🟩" },
  { id: 10, name: "Пластина 2x4", category: "plates", brand: "original", color: "Чёрный", price: 32, qty: 78, size: "2x4", image: "⬛" },
  { id: 11, name: "Пластина 8x16", category: "plates", brand: "original", color: "Серый", price: 120, qty: 22, size: "8x16", image: "🔲" },
  
  // Аналоги - Пластины
  { id: 12, name: "Пластина 4x8", category: "plates", brand: "analog", color: "Зелёный", price: 22, qty: 180, size: "4x8", image: "🟩" },
  { id: 13, name: "Пластина 2x4", category: "plates", brand: "analog", color: "Чёрный", price: 10, qty: 220, size: "2x4", image: "⬛" },
  { id: 14, name: "Пластина 16x32", category: "plates", brand: "analog", color: "Серый", price: 85, qty: 50, size: "16x32", image: "🔲" },

  // Оригинал LEGO - Техник
  { id: 15, name: "Ось 4L", category: "technic", brand: "original", color: "Чёрный", price: 18, qty: 95, size: "4 шипа", image: "➖" },
  { id: 16, name: "Шестерня 24 зуба", category: "technic", brand: "original", color: "Серый", price: 75, qty: 35, size: "24z", image: "⚙️" },
  { id: 17, name: "Коннектор угловой", category: "technic", brand: "original", color: "Серый", price: 35, qty: 60, size: "90°", image: "🔗" },
  
  // Аналоги - Техник
  { id: 18, name: "Ось 4L", category: "technic", brand: "analog", color: "Чёрный", price: 6, qty: 300, size: "4 шипа", image: "➖" },
  { id: 19, name: "Шестерня 24 зуба", category: "technic", brand: "analog", color: "Серый", price: 25, qty: 120, size: "24z", image: "⚙️" },
  { id: 20, name: "Балка 15L", category: "technic", brand: "analog", color: "Чёрный", price: 18, qty: 200, size: "15 шипов", image: "🔧" },

  // Оригинал - Специальные
  { id: 21, name: "Скос 45° 2x2", category: "special", brand: "original", color: "Красный", price: 28, qty: 55, size: "2x2", image: "📐" },
  { id: 22, name: "Арка 1x4", category: "special", brand: "original", color: "Коричневый", price: 38, qty: 32, size: "1x4", image: "🌉" },
  
  // Аналоги - Специальные
  { id: 23, name: "Скос 45° 2x2", category: "special", brand: "analog", color: "Красный", price: 10, qty: 150, size: "2x2", image: "📐" },
  { id: 24, name: "Окно 1x2x2", category: "special", brand: "analog", color: "Белый", price: 15, qty: 100, size: "1x2x2", image: "🪟" },

  // Оригинал - Минифигурки
  { id: 25, name: "Торс рыцаря", category: "minifigs", brand: "original", color: "Серый", price: 95, qty: 12, size: "-", image: "🛡️" },
  { id: 26, name: "Голова улыбка", category: "minifigs", brand: "original", color: "Жёлтый", price: 55, qty: 28, size: "-", image: "😊" },
  
  // Аналоги - Минифигурки
  { id: 27, name: "Торс солдата", category: "minifigs", brand: "analog", color: "Зелёный", price: 35, qty: 45, size: "-", image: "🎖️" },
  { id: 28, name: "Голова серьёзная", category: "minifigs", brand: "analog", color: "Жёлтый", price: 18, qty: 80, size: "-", image: "😐" },
];

const NewParts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBrand, setActiveBrand] = useState("all");
  const [activeColor, setActiveColor] = useState<string | null>(null);

  // Подсчёт по категориям
  const categoryCounts = useMemo(() => {
    let filtered = parts;
    if (activeBrand !== "all") filtered = filtered.filter(p => p.brand === activeBrand);
    if (activeColor) filtered = filtered.filter(p => p.color === activeColor);
    
    const counts: Record<string, number> = { all: filtered.length };
    categories.slice(1).forEach(cat => {
      counts[cat.id] = filtered.filter(p => p.category === cat.id).length;
    });
    return counts;
  }, [activeBrand, activeColor]);

  // Подсчёт по брендам
  const brandCounts = useMemo(() => {
    let filtered = parts;
    if (activeCategory !== "all") filtered = filtered.filter(p => p.category === activeCategory);
    if (activeColor) filtered = filtered.filter(p => p.color === activeColor);
    
    return {
      all: filtered.length,
      original: filtered.filter(p => p.brand === "original").length,
      analog: filtered.filter(p => p.brand === "analog").length,
    };
  }, [activeCategory, activeColor]);

  // Подсчёт по цветам
  const colorCounts = useMemo(() => {
    let filtered = parts;
    if (activeCategory !== "all") filtered = filtered.filter(p => p.category === activeCategory);
    if (activeBrand !== "all") filtered = filtered.filter(p => p.brand === activeBrand);
    
    const counts: Record<string, number> = {};
    filtered.forEach(part => {
      counts[part.color] = (counts[part.color] || 0) + part.qty;
    });
    return counts;
  }, [activeCategory, activeBrand]);

  const filteredParts = parts.filter(p => {
    const matchCategory = activeCategory === "all" || p.category === activeCategory;
    const matchBrand = activeBrand === "all" || p.brand === activeBrand;
    const matchColor = !activeColor || p.color === activeColor;
    return matchCategory && matchBrand && matchColor;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-lego-blue py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
            Новые детали LEGO
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Оригинальные детали LEGO и качественные аналоги по выгодным ценам
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-2xl shadow-card p-5 sticky top-20">
              
              {/* Фильтр Оригинал/Аналог */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-lego-yellow" />
                  <h2 className="font-display font-bold text-lg">Тип</h2>
                </div>
                <div className="space-y-1">
                  {brandTypes.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => setActiveBrand(brand.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex justify-between items-center ${
                        activeBrand === brand.id
                          ? brand.id === "original" 
                            ? "bg-lego-yellow text-black" 
                            : brand.id === "analog"
                            ? "bg-lego-blue text-white"
                            : "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-foreground"
                      }`}
                    >
                      <span className="font-medium flex items-center gap-2">
                        {brand.icon}
                        {brand.name}
                      </span>
                      <span className={`text-sm ${
                        activeBrand === brand.id 
                          ? brand.id === "original" ? "text-black/70" : "text-white/80"
                          : "text-muted-foreground"
                      }`}>
                        {brandCounts[brand.id as keyof typeof brandCounts] || 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Категории */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="h-5 w-5 text-primary" />
                  <h2 className="font-display font-bold text-lg">Категории</h2>
                </div>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex justify-between items-center ${
                        activeCategory === cat.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-foreground"
                      }`}
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className={`text-sm ${activeCategory === cat.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {categoryCounts[cat.id] || 0}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Фильтр по цвету */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-bold text-sm">По цвету</h3>
                  {activeColor && (
                    <button 
                      onClick={() => setActiveColor(null)}
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      <X className="h-3 w-3" /> Сбросить
                    </button>
                  )}
                </div>
                <div className="space-y-1.5">
                  {Object.entries(colorCounts).sort((a, b) => b[1] - a[1]).map(([color, count]) => (
                    <button
                      key={color}
                      onClick={() => setActiveColor(activeColor === color ? null : color)}
                      className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors ${
                        activeColor === color 
                          ? "bg-secondary ring-2 ring-primary" 
                          : "hover:bg-secondary/50"
                      }`}
                    >
                      <span className={`w-5 h-5 rounded ${colorMap[color]?.bg || "bg-gray-300"}`} />
                      <span className="text-sm font-medium flex-1 text-left">{color}</span>
                      <span className="text-xs text-muted-foreground">{count} шт</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Info box */}
              <div className="mt-6 p-4 bg-accent/20 rounded-xl">
                <p className="text-sm text-foreground font-medium mb-1">⭐ Оригинал vs Аналог</p>
                <p className="text-xs text-muted-foreground">
                  Оригинал LEGO — премиум качество. Аналоги — отличная совместимость по доступной цене
                </p>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Найдено: <span className="font-bold text-foreground">{filteredParts.length}</span> деталей
              </p>
              <div className="flex gap-2">
                {activeBrand === "original" && (
                  <Badge className="bg-lego-yellow text-black">
                    <Star className="h-3 w-3 mr-1" />
                    Оригинал
                  </Badge>
                )}
                {activeBrand === "analog" && (
                  <Badge className="bg-lego-blue text-white">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Аналог
                  </Badge>
                )}
                {activeBrand === "all" && (
                  <Badge variant="secondary">Все типы</Badge>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredParts.map((part) => (
                <div
                  key={part.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className={`h-24 flex items-center justify-center relative ${
                    part.brand === "original" 
                      ? "bg-gradient-to-br from-lego-yellow/20 to-lego-yellow/5" 
                      : "bg-gradient-to-br from-lego-blue/20 to-lego-blue/5"
                  }`}>
                    <span className="text-4xl group-hover:scale-110 transition-transform">
                      {part.image}
                    </span>
                    <span className={`absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-medium ${
                      part.brand === "original" 
                        ? "bg-lego-yellow text-black" 
                        : "bg-lego-blue text-white"
                    }`}>
                      {part.brand === "original" ? "LEGO" : "Аналог"}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-muted-foreground mb-1">{part.color} • {part.size}</p>
                    <h3 className="font-display font-bold text-sm text-foreground line-clamp-1 mb-2">
                      {part.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-display font-bold text-lg text-primary">{part.price}₽</span>
                        <span className="text-xs text-muted-foreground ml-1">/ шт</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{part.qty} шт</span>
                    </div>
                    <Button size="sm" className="w-full mt-2 bg-primary hover:bg-primary/90 shadow-brick text-xs">
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      В корзину
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewParts;
