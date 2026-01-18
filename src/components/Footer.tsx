import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">B</span>
              </div>
              <span className="font-display font-bold text-xl">BrickShop</span>
            </div>
            <p className="text-background/70 text-sm">
              Ваш надёжный магазин LEGO и совместимых конструкторов с 2020 года.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Каталог</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Оригинал LEGO</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Аналоги</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Б/У детали</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Минифигурки</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Информация</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">О магазине</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Оплата</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Возврат</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@brickshop.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Москва, ул. Кирпичная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/50 text-sm">
          © 2024 BrickShop. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
