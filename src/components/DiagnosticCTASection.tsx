import { ArrowRight, Sparkles } from "lucide-react";
import { useChatContext } from "@/contexts/ChatContext";

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

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-violet/20 bg-accent-violet/5 mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
          <span className="text-sm font-medium text-accent-soft">
            Бесплатная диагностика
          </span>
        </div>

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight tracking-tight">
          Узнайте, где AI даст эффект{" "}
          <span className="text-gradient">именно в&nbsp;вашем бизнесе</span>
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Пройдите бесплатную диагностику&nbsp;— AI&#8209;ассистент задаст
          несколько вопросов и&nbsp;покажет точки роста
        </p>

        <div className="pt-4">
          <button
            onClick={openChat}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-md border border-accent-violet/40 bg-accent-violet/10 text-foreground font-medium text-base transition-all duration-300 hover:border-accent-violet hover:bg-accent-violet/20 hover:shadow-glow"
          >
            Начать диагностику
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticCTASection;
