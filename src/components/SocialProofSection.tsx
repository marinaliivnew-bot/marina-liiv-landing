import { Package, Rocket, Globe } from "lucide-react";

const metrics = [
  {
    icon: Package,
    title: "Управление портфелем 150+ SKU",
  },
  {
    icon: Rocket,
    title: "Запуск продуктов с нуля на международных рынках",
  },
  {
    icon: Globe,
    title: "Координация мультистрановых команд",
  },
];

const SocialProofSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-deep relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo to-transparent opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-light">
            Проверенный опыт
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight">
            Опыт в глобальном бизнесе
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            15&nbsp;лет в&nbsp;компании{" "}
            <span className="text-slate-50 font-semibold">Amway</span>{" "}
            (мировой лидер прямых продаж). Экс‑портфельный менеджер и&nbsp;лидер
            продуктовых направлений.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:border-indigo/40 hover:bg-slate-700"
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo/10">
                <metric.icon className="w-6 h-6 text-indigo-light" />
              </div>
              <p className="text-base font-medium text-slate-100 leading-relaxed">
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
