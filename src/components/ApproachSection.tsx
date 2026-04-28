const layers = [
  {
    label: "Стратегия",
    description: "Смотрим на задачу: что болит, зачем менять, что будет результатом.",
  },
  {
    label: "Логика",
    description: "Проектируем, как решение встроится в реальный процесс и кто с ним будет работать.",
  },
  {
    label: "Технология",
    description: "Реализуем — с учётом того, что команда это примет и будет пользоваться.",
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
              Как я работаю
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Сначала разбираемся, что не&nbsp;работает и&nbsp;почему. Потом&nbsp;— как это исправить. И&nbsp;только потом&nbsp;— что именно строить.
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
