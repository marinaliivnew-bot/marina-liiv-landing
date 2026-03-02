import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
    style={{
      background: 'linear-gradient(135deg, #4A3A73 0%, #5B4690 50%, #4A3A73 100%)'
    }}>
      {/* Subtle diagonal lines */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 80px,
          hsl(260 40% 96% / 0.15) 80px,
          hsl(260 40% 96% / 0.15) 81px
        )`
      }} />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-violet/20 bg-accent-violet/5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
            <span className="text-sm font-medium text-accent-soft">AI & Digital Architecture</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] tracking-tight">
            От бизнес-стратегии —{" "}
            <span className="text-gradient">к&nbsp;работающим AI‑системам</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Я объединяю 15&nbsp;лет лидерства в&nbsp;FMCG-продуктах и&nbsp;управления P&L с&nbsp;практическим проектированием AI‑систем. Сейчас фокусируюсь на&nbsp;создании решений, которые не&nbsp;просто работают технически&nbsp;— а&nbsp;имеют реальный бизнес-смысл.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-md border border-accent-violet/40 text-foreground font-medium text-sm transition-all duration-300 hover:border-accent-violet hover:shadow-glow hover:bg-accent-violet/5">
              Обсудить проект
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;