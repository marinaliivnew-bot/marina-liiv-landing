import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(hsl(var(--slate-400)) 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />
      
      {/* Accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.06]"
      style={{ background: `radial-gradient(circle, hsl(var(--indigo)), transparent 70%)` }} />

      <div className="container relative mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI & Digital Products</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Марина Лийв.{" "}
            <span className="text-gradient">
AI‑интегратор</span>{" "}
            &amp;&nbsp;Архитектор цифровых продуктов.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">Соединяю 15 лет бизнес‑экспертизы в международном FMCG с технологиями искусственного интеллекта. Проектирую решения для роста прибыли и автоматизации. Умею говорить на языке бизнеса и на языке продукта.


          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base shadow-hero transition-all duration-300 hover:bg-indigo-dark hover:gap-4">

              Обсудить проект
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;