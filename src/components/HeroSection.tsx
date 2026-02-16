import { ArrowRight } from "lucide-react";
import portraitImage from "@/assets/portrait.png";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Typography */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-violet/20 bg-accent-violet/5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
              <span className="text-sm font-medium text-accent-soft">AI & Digital Architecture</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] tracking-tight">
              Марина Лийв.{" "}
              <span className="text-gradient">AI‑стратег</span>{" "}
              и&nbsp;архитектор цифровых&nbsp;систем.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              15 лет бизнес-экспертизы в международном FMCG, соединённые с технологиями искусственного интеллекта. Проектирую решения для роста прибыли и автоматизации.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-md border border-accent-violet/40 text-foreground font-medium text-sm transition-all duration-300 hover:border-accent-violet hover:shadow-glow hover:bg-accent-violet/5"
              >
                Обсудить проект
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-72 sm:w-80 lg:w-96">
              <img
                src={portraitImage}
                alt="Марина Лийв — AI-стратег"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
