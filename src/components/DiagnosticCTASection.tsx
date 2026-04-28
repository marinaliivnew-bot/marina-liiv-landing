import { ArrowRight, Sparkles } from "lucide-react";
import { useChatContext } from "@/contexts/ChatContext";

const steps = [
  "Рассказываете про процессы — где тратится время, что раздражает, что хочется делегировать.",
  "Ассистент помогает сформулировать гипотезы — что именно можно автоматизировать и зачем.",
  "В конце — понятный итог и предложение обсудить дальше, если интересно.",
];

const DiagnosticCTASection = () => {
  const { openChat } = useChatContext();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/[0.04] to-transparent" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse, hsl(263 86% 76%), transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-violet/20 bg-accent-violet/5 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
              Диагностика
            </span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight tracking-tight">
            Не&nbsp;знаете, с&nbsp;чего начать?{" "}
            <span className="text-gradient">Начните с&nbsp;диагностики</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Я&nbsp;встроила в&nbsp;этот сайт диагностического ассистента. Он&nbsp;задаёт вопросы про ваш бизнес и&nbsp;за&nbsp;15–20 минут помогает понять, где AI реально даст эффект&nbsp;— а&nbsp;где не&nbsp;нужен. Без регистрации, без обязательств.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-surface-alt/50 border border-border/30 transition-colors duration-300 hover:border-accent-violet/30"
            >
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent-violet mb-3">
                Шаг {i + 1}
              </div>
              <p className="text-sm text-foreground leading-relaxed">{step}</p>
            </div>
          ))}
        </div>

        <div className="pt-10 text-center">
          <button
            onClick={openChat}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-md border border-accent-violet/40 bg-accent-violet/10 text-foreground font-medium text-base transition-all duration-300 hover:border-accent-violet hover:bg-accent-violet/20 hover:shadow-glow"
          >
            Пройти диагностику
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticCTASection;
