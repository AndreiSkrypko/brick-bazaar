import { Truck, Shield, Headphones, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "По России от 1 дня. Бесплатно от 3000₽",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Проверяем каждую деталь перед отправкой",
  },
  {
    icon: RotateCcw,
    title: "Возврат 14 дней",
    description: "Вернём деньги, если что-то не подошло",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Ответим на любые вопросы в чате",
  },
];

const Features = () => {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
