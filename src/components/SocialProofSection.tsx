import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Package, Rocket, Globe, Lightbulb } from "lucide-react";

const metrics = [
  {
    icon: Package,
    value: 150,
    suffix: "+",
    label: "SKU в управлении портфелем",
  },
  {
    icon: Rocket,
    value: 15,
    suffix: "",
    label: "лет в глобальном бизнесе",
  },
  {
    icon: Globe,
    value: 4,
    suffix: "+",
    label: "международных рынка",
  },
  {
    icon: Lightbulb,
    value: 10,
    suffix: "+",
    label: "продуктов запущено с нуля",
  },
];

/* ---------- CountUp hook ---------- */
function useCountUp(target: number, duration = 2500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        // Небольшая пауза, чтобы секция сначала появилась
        const delay = setTimeout(() => {
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress); // ease-out quad
            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }, 300);

        return () => clearTimeout(delay);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return { count, ref };
}

/* ---------- Component ---------- */
const SocialProofSection = () => {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden grain-overlay"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg, transparent, transparent 120px,
            hsl(260 40% 96% / 0.1) 120px, hsl(260 40% 96% / 0.1) 121px
          )`,
        }}
      />

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
            (мировой лидер прямых продаж). Экс‑портфельный менеджер
            и&nbsp;лидер продуктовых направлений.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, index) => (
            <CounterCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Counter card ---------- */
function CounterCard({
  icon: Icon,
  value,
  suffix,
  label,
}: {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="group relative p-7 rounded-xl border border-border/30 bg-background/40 transition-all duration-300 hover:border-accent-violet/30 hover:bg-accent-violet/5"
    >
      <Icon className="w-5 h-5 text-accent-violet mb-5" />
      <div className="mb-1">
        <span className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums tracking-tight">
          {count}
        </span>
        <span className="text-xl sm:text-2xl font-bold text-accent-violet ml-0.5">
          {suffix}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{label}</p>
    </div>
  );
}

export default SocialProofSection;
