import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Звоните с 9:00 до 21:00",
      color: "bg-red-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@brickshop.ru",
      description: "Ответим в течение часа",
      color: "bg-yellow-500",
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "г. Москва, ул. Кирпичная, 42",
      description: "Самовывоз ежедневно",
      color: "bg-blue-500",
    },
    {
      icon: Clock,
      title: "Режим работы",
      value: "Пн-Вс: 9:00 - 21:00",
      description: "Без выходных",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Мы всегда рады помочь с выбором деталей и ответить на ваши вопросы
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-foreground font-medium mb-1">{item.value}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-bold font-display text-foreground mb-6">
                  Напишите нам
                </h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Ваше имя
                      </label>
                      <Input placeholder="Иван" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Телефон
                      </label>
                      <Input placeholder="+7 (___) ___-__-__" className="rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="ivan@example.com" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Опишите ваш вопрос или какие детали вы ищете..."
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-6 text-lg font-semibold">
                    <Send className="w-5 h-5 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Map placeholder */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                <div className="h-full min-h-[400px] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 gap-1 p-4 h-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-blue-400 rounded-sm"
                          style={{ opacity: Math.random() * 0.5 + 0.3 }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center z-10 p-8">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      BrickShop
                    </h3>
                    <p className="text-blue-700">
                      г. Москва, ул. Кирпичная, 42
                    </p>
                    <p className="text-blue-600 text-sm mt-2">
                      Рядом с м. Кирпичная
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social & Messengers */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold font-display text-foreground mb-6">
              Мы в социальных сетях
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Telegram", "WhatsApp", "VK", "YouTube"].map((social) => (
                <Button
                  key={social}
                  variant="outline"
                  className="rounded-xl px-6 py-3 font-medium hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors"
                >
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
