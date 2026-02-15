import { ArrowRight, TrendingUp, ShoppingCart, Maximize2, Scale } from "lucide-react";

const pillars = [
  { icon: TrendingUp, label: "Оптимизация процессов" },
  { icon: ShoppingCart, label: "Усиление продаж" },
  { icon: Maximize2, label: "Масштабирование сервисов" },
];

const ApproachSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-sunken">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Подход
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Стратегия → Логика → Технология
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Учитываю юридические ограничения и&nbsp;UX‑архитектуру на&nbsp;каждом этапе.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 p-5 rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-primary/20"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base font-medium text-card-foreground">
                  {pillar.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
