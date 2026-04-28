import { Bot, Users, Layers, Link } from "lucide-react";

const expertise = [
  {
    icon: Bot,
    title: "Архитектура AI‑агентов",
    description: "Проектирую AI‑агентов под конкретную задачу — ассистентов, аналитиков, помощников для команды или клиентов.",
  },
  {
    icon: Users,
    title: "Customer Journey",
    description: "Выстраиваю путь клиента так, чтобы он был логичным — и чтобы команда не тратила время на ручную работу.",
  },
  {
    icon: Layers,
    title: "Прототипирование",
    description: "Собираю рабочий прототип за 2–4 недели. Не презентацию — систему, которую можно тестировать.",
  },
  {
    icon: Link,
    title: "Бизнес‑интеграция",
    description: "Слежу, чтобы новое решение прижилось: понятно для команды, встроено в процесс, а не висит отдельно.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-background relative grain-overlay">
      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
            Компетенции
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-foreground tracking-tight">
            Что я делаю
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed pt-2">
            Берусь за&nbsp;задачи, где нужно не&nbsp;просто «прикрутить AI», а&nbsp;понять&nbsp;— зачем, куда и&nbsp;как.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group flex gap-5 py-6 border-b border-border/40 transition-colors duration-300 hover:border-accent-violet/30"
            >
              <div className="flex-shrink-0 mt-1">
                <item.icon className="w-5 h-5 text-accent-violet" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
