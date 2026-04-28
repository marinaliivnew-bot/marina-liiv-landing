import { CheckCircle } from "lucide-react";

const points = [
  "Я понимаю P&L, а не только промпты",
  "Я управляла реальными продуктовыми портфелями, а не только прототипами",
  "Я работаю внутри команды — а не «над» ней",
  "Для меня логика системы важнее автоматизации",
];

const WhyDifferentSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg, transparent, transparent 120px,
          hsl(260 40% 96% / 0.1) 120px, hsl(260 40% 96% / 0.1) 121px
        )`
      }} />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
            Отличие
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-foreground tracking-tight">
            Почему я отличаюсь
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
            Я не&nbsp;пришла в&nbsp;AI из&nbsp;IT. 15&nbsp;лет в&nbsp;Amway: управляла портфелем из&nbsp;150+ продуктов, запускала на&nbsp;международных рынках, отвечала за&nbsp;P&amp;L. Это даёт мне понимание, как бизнес устроен изнутри&nbsp;— и&nbsp;почему одни внедрения работают, а&nbsp;другие нет.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-surface-alt/50 border border-border/30 transition-all duration-300 hover:bg-accent-violet/5"
            >
              <CheckCircle className="w-5 h-5 text-accent-violet mt-0.5 flex-shrink-0" />
              <p className="text-base font-medium text-foreground leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
