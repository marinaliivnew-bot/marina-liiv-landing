import { Bot, Users, Layers, Link } from "lucide-react";

const expertise = [
  {
    icon: Bot,
    title: "Архитектура AI‑агентов",
    description: "Проектирование умных ассистентов и LLM‑решений.",
  },
  {
    icon: Users,
    title: "Customer Journey",
    description: "Создание бесшовных сценариев взаимодействия.",
  },
  {
    icon: Layers,
    title: "Прототипирование",
    description: "Быстрая сборка MVP и проверка гипотез.",
  },
  {
    icon: Link,
    title: "Бизнес‑интеграция",
    description: "Связка «Бизнес — Разработка — Пользователь».",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Компетенции
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Что я делаю
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group p-7 rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-indigo-50">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-card-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
