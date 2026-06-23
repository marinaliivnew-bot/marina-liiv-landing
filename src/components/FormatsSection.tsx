const formats = [
{ step: "01", title: "Концепция и аудит", description: "Анализ текущих процессов, выявление возможностей для AI-интеграции", accentTop: "border-t-[#FFB199]/70" },
{ step: "02", title: "Проектирование архитектуры", description: "Разработка структуры решения и технического задания", accentTop: "border-t-[#8FDBFF]/70" },
{ step: "03", title: "Создание прототипа", description: "Быстрая сборка MVP для проверки гипотез", accentTop: "border-t-[#B7F7D8]/70" },
{ step: "04", title: "Сопровождение внедрения", description: "Поддержка команды на этапе запуска и масштабирования", accentTop: "border-t-[#FFE680]/70" }];


const FormatsSection = () => {
  return (
    <section id="formats" className="py-24 lg:py-32 bg-background relative grain-overlay">
      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
            Форматы работы
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-foreground tracking-tight">Этапы работы

          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {formats.map((item, index) =>
          <div key={index} className={`group rounded-xl border border-t-2 border-border/25 bg-surface-alt/40 p-6 transition-all duration-300 hover:border-accent-violet/30 ${item.accentTop}`}>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-2xl font-serif-display text-accent-violet/30 group-hover:text-accent-violet/60 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-12">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default FormatsSection;