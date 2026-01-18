import { Package, Sparkles, Recycle, Building2 } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Оригинал LEGO",
    description: "Официальные наборы и детали",
    color: "bg-primary",
    count: "500+ товаров",
  },
  {
    icon: Building2,
    title: "Аналоги",
    description: "Качественные совместимые бренды",
    color: "bg-lego-blue",
    count: "1200+ товаров",
  },
  {
    icon: Package,
    title: "Новые детали",
    description: "Отдельные элементы в упаковке",
    color: "bg-lego-green",
    count: "3000+ деталей",
  },
  {
    icon: Recycle,
    title: "Б/У детали",
    description: "Проверенные детали по выгодным ценам",
    color: "bg-accent",
    count: "800+ деталей",
  },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Категории товаров
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите нужный раздел или воспользуйтесь поиском
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${category.color} rounded-xl shadow-brick flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-3">
                {category.description}
              </p>
              <span className="text-sm font-medium text-primary">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
