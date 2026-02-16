const layers = [
  {
    label: "Стратегия",
    description: "Анализ бизнес-целей и определение точек роста",
  },
  {
    label: "Логика",
    description: "Проектирование архитектуры решения и пользовательских сценариев",
  },
  {
    label: "Технология",
    description: "Реализация с учётом UX, юридических ограничений и масштабирования",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-surface-alt relative grain-overlay">
      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
              Подход
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-foreground tracking-tight">
              Стратегия → Логика → Технология
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Каждый проект проходит через три уровня проектирования — от бизнес-задачи до технической реализации.
            </p>
          </div>

          <div className="relative">
            {/* Layered architecture visualization */}
            <div className="space-y-0">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-accent-violet/20 pl-8 pb-10 last:pb-0 group transition-colors duration-300 hover:border-accent-violet/50"
                >
                  {/* Dot on the line */}
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent-violet/50 group-hover:bg-accent-violet transition-colors" />
                  
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-violet mb-2 block">
                    Уровень {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {layer.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
