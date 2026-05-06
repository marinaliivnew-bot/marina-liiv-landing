import {
  BarChart3,
  Briefcase,
  Users,
  GitBranch,
} from "lucide-react";

const points = [
  {
    icon: BarChart3,
    title: "Понимаю P&L, а не только промпты",
  },
  {
    icon: Briefcase,
    title: "Управляла реальными продуктовыми портфелями, а не только прототипами",
  },
  {
    icon: Users,
    title: "Работаю внутри команды — а не «над» ней",
  },
  {
    icon: GitBranch,
    title: "Для меня логика системы важнее автоматизации",
  },
];

const WhyDifferentSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden grain-overlay">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent, transparent 120px,
            hsl(260 40% 96% / 0.1) 120px, hsl(260 40% 96% / 0.1) 121px
          )`,
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl mb-12 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
            Отличие
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-foreground tracking-tight">
            Почему я отличаюсь
          </h2>
        </div>

        {/* Десктоп: grid 2×2 */}
        <div className="hidden md:grid md:grid-cols-2 gap-5">
          {points.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 p-6 rounded-xl border border-border/30 bg-surface-alt/50 transition-all duration-300 hover:border-accent-violet/30"
            >
              <div className="flex-shrink-0 mt-1">
                <point.icon className="w-6 h-6 text-accent-violet" />
              </div>
              <p className="text-base font-medium text-foreground leading-relaxed">
                {point.title}
              </p>
            </div>
          ))}
        </div>

        {/* Мобилка: horizontal scroll с snap */}
        <div className="md:hidden -mx-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 px-6 pb-2">
            {points.map((point, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[280px] flex items-start gap-4 p-5 rounded-xl border border-border/30 bg-surface-alt/50"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <point.icon className="w-5 h-5 text-accent-violet" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {point.title}
                </p>
              </div>
            ))}
          </div>
          {/* Индикатор точек */}
          <div className="flex justify-center gap-2 mt-6">
            {points.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-accent-violet/40"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
