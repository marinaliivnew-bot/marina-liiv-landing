import { Package, Rocket, Globe } from "lucide-react";

const metrics = [
  { icon: Package, title: "Управление портфелем 150+ SKU" },
  { icon: Rocket, title: "Запуск продуктов с нуля на международных рынках" },
  { icon: Globe, title: "Координация мультистрановых команд" },
];

const SocialProofSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg, transparent, transparent 120px,
          hsl(260 40% 96% / 0.1) 120px, hsl(260 40% 96% / 0.1) 121px
        )`
      }} />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
            Проверенный опыт
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-foreground tracking-tight">
            Опыт в глобальном бизнесе
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            15&nbsp;лет в&nbsp;компании{" "}
            <span className="text-foreground font-medium">Amway</span>{" "}
            (мировой лидер прямых продаж). Экс‑портфельный менеджер и&nbsp;лидер продуктовых направлений.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30 rounded-lg overflow-hidden">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group p-8 bg-background/40 transition-all duration-300 hover:bg-accent-violet/5"
            >
              <metric.icon className="w-5 h-5 text-accent-violet mb-5" />
              <p className="text-base font-medium text-foreground leading-relaxed">
                {metric.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
