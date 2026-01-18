import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Filter, X } from "lucide-react";
import { useState, useMemo } from "react";

const categories = [
  { id: "all", name: "Все детали" },
  { id: "bricks", name: "Кирпичики" },
  { id: "plates", name: "Пластины" },
  { id: "technic", name: "Техник (оси, шестерни)" },
  { id: "special", name: "Специальные" },
  { id: "minifigs", name: "Минифигурки" },
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
};

const parts = [
  // Кирпичики
  { id: 1, name: "Кирпичик 2x4", category: "bricks", color: "Красный", price: 15, qty: 48, size: "2x4", image: "🧱" },
  { id: 2, name: "Кирпичик 2x2", category: "bricks", color: "Синий", price: 10, qty: 65, size: "2x2", image: "🟦" },
  { id: 3, name: "Кирпичик 1x2", category: "bricks", color: "Белый", price: 8, qty: 120, size: "1x2", image: "⬜" },
  { id: 4, name: "Кирпичик 1x4", category: "bricks", color: "Жёлтый", price: 12, qty: 34, size: "1x4", image: "🟨" },
  { id: 5, name: "Кирпичик 2x6", category: "bricks", color: "Серый", price: 20, qty: 22, size: "2x6", image: "⬜" },
  { id: 21, name: "Кирпичик 2x4", category: "bricks", color: "Синий", price: 15, qty: 38, size: "2x4", image: "🟦" },
  { id: 22, name: "Кирпичик 1x1", category: "bricks", color: "Красный", price: 5, qty: 95, size: "1x1", image: "🟥" },
  
  // Пластины
  { id: 6, name: "Пластина 4x8", category: "plates", color: "Зелёный", price: 25, qty: 18, size: "4x8", image: "🟩" },
  { id: 7, name: "Пластина 2x4", category: "plates", color: "Чёрный", price: 12, qty: 45, size: "2x4", image: "⬛" },
  { id: 8, name: "Пластина 6x12", category: "plates", color: "Серый", price: 45, qty: 8, size: "6x12", image: "🔲" },
  { id: 23, name: "Пластина 4x4", category: "plates", color: "Красный", price: 18, qty: 24, size: "4x4", image: "🟥" },
  
  // Техник
  { id: 9, name: "Ось 4L", category: "technic", color: "Чёрный", price: 8, qty: 56, size: "4 шипа", image: "➖" },
  { id: 10, name: "Ось 8L", category: "technic", color: "Чёрный", price: 12, qty: 34, size: "8 шипов", image: "➖" },
  { id: 11, name: "Шестерня 24 зуба", category: "technic", color: "Серый", price: 35, qty: 12, size: "24z", image: "⚙️" },
  { id: 12, name: "Коннектор угловой", category: "technic", color: "Серый", price: 15, qty: 28, size: "90°", image: "🔗" },
  { id: 13, name: "Шестерня 8 зубов", category: "technic", color: "Серый", price: 18, qty: 40, size: "8z", image: "⚙️" },
  { id: 14, name: "Ось с стопором", category: "technic", color: "Красный", price: 10, qty: 22, size: "2L", image: "🔴" },
  
  // Специальные
  { id: 15, name: "Скос 45° 2x2", category: "special", color: "Красный", price: 14, qty: 30, size: "2x2", image: "📐" },
  { id: 16, name: "Арка 1x4", category: "special", color: "Коричневый", price: 18, qty: 15, size: "1x4", image: "🌉" },
  { id: 17, name: "Окно 1x2x2", category: "special", color: "Белый", price: 22, qty: 19, size: "1x2x2", image: "🪟" },
  
  // Минифигурки
  { id: 18, name: "Торс рыцаря", category: "minifigs", color: "Серый", price: 45, qty: 5, size: "-", image: "🛡️" },
  { id: 19, name: "Голова улыбка", category: "minifigs", color: "Жёлтый", price: 25, qty: 14, size: "-", image: "😊" },
  { id: 20, name: "Ноги синие", category: "minifigs", color: "Синий", price: 20, qty: 22, size: "-", image: "👖" },
];

const UsedParts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeColor, setActiveColor] = useState<string | null>(null);

  // Подсчёт по категориям с учётом фильтра цвета
  const categoryCounts = useMemo(() => {
    const filtered = activeColor ? parts.filter(p => p.color === activeColor) : parts;
    const counts: Record<string, number> = { all: filtered.length };
    categories.slice(1).forEach(cat => {
      counts[cat.id] = filtered.filter(p => p.category === cat.id).length;
    });
    return counts;
  }, [activeColor]);

  // Подсчёт по цветам с учётом фильтра категории
  const colorCounts = useMemo(() => {
    const filtered = activeCategory === "all" ? parts : parts.filter(p => p.category === activeCategory);
    const counts: Record<string, number> = {};
    filtered.forEach(part => {
      counts[part.color] = (counts[part.color] || 0) + part.qty;
    });
    return counts;
  }, [activeCategory]);

  const filteredParts = parts.filter(p => {
    const matchCategory = activeCategory === "all" || p.category === activeCategory;
    const matchColor = !activeColor || p.color === activeColor;
    return matchCategory && matchColor;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-lego-green py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
            Б/У детали LEGO
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Проверенные оригинальные детали в отличном состоянии. Экономия до 70%!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-2xl shadow-card p-5 sticky top-20">
              <div className="flex items-center gap-2 mb-4">
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

              {/* Фильтр по цвету */}
              <div className="mt-6">
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
                <p className="text-sm text-foreground font-medium mb-1">💡 Совет</p>
                <p className="text-xs text-muted-foreground">
                  Все б/у детали проходят проверку на целостность и чистоту перед отправкой
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
              <Badge variant="secondary" className="bg-lego-green/10 text-lego-green">
                Б/У оригинал
              </Badge>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredParts.map((part) => (
                <div
                  key={part.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className="h-24 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <span className="text-4xl group-hover:scale-110 transition-transform">
                      {part.image}
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

export default UsedParts;
