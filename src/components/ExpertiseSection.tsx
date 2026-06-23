import { Bot, Users, Layers, Link } from "lucide-react";

const expertise = [
  {
    icon: Bot,
    title: "Архитектура AI‑агентов",
    description:
      "Проектирую AI‑агентов под конкретную задачу — ассистентов, аналитиков, помощников для команды или клиентов.",
    accentTop: "border-t-[#8FDBFF]/70",
  },
  {
    icon: Users,
    title: "Customer Journey",
    description:
      "Выстраиваю путь клиента так, чтобы он был логичным — и чтобы команда не тратила время на ручную работу.",
    accentTop: "border-t-[#B7F7D8]/70",
  },
  {
    icon: Layers,
    title: "Прототипирование",
    description:
      "Собираю рабочий прототип за 2–4 недели. Не презентацию — систему, которую можно тестировать.",
    accentTop: "border-t-[#FFE680]/70",
  },
  {
    icon: Link,
    title: "Бизнес‑интеграция",
    description:
      "Слежу, чтобы новое решение прижилось: понятно для команды, встроено в процесс, а не висит отдельно.",
    accentTop: "border-t-[#FFB199]/70",
  },
];

const ExpertiseSection = () => {
  return (
    <section
      id="expertise"
      className="py-24 lg:py-32 bg-background relative grain-overlay"
    >
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

        {/* Bento grid: большой блок слева, 3 маленьких справа */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Главная карточка — Архитектура AI-агентов */}
          <div className={`group relative row-span-3 flex flex-col justify-end p-8 md:p-10 rounded-2xl border border-t-2 border-border/30 bg-surface-alt/50 overflow-hidden transition-all duration-500 hover:border-accent-violet/30 ${expertise[0].accentTop}`}>
            {/* Фоновый accent-градиент */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/[0.03] via-transparent to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-violet/10 border border-accent-violet/20 group-hover:bg-accent-violet/20 transition-colors duration-300">
                <Bot className="w-6 h-6 text-accent-violet" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {expertise[0].title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {expertise[0].description}
              </p>
            </div>
          </div>

          {/* Маленькие карточки — 2 сверху, 1 на всю ширину внизу */}
          {expertise.slice(1).map((item, index) => (
            <div
              key={index}
              className={`group flex gap-4 p-6 rounded-xl border border-t-2 border-border/30 bg-surface-alt/50 transition-all duration-300 hover:border-accent-violet/30 ${item.accentTop}`}
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
