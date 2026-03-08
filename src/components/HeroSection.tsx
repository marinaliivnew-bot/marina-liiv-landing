import { ArrowRight } from "lucide-react";
import { useChatContext } from "@/contexts/ChatContext";

const BlueprintGrid = () => (
  <svg
    className="absolute right-0 top-0 h-full w-1/2 opacity-[0.55] pointer-events-none hidden lg:block"
    viewBox="0 0 600 800"
    fill="none"
    preserveAspectRatio="xMaxYMid slice"
  >
    {/* Grid lines */}
    {[0, 80, 160, 240, 320, 400, 480, 560].map(x => (
      <line key={`v${x}`} x1={x} y1="0" x2={x} y2="800" stroke="hsl(210 60% 70%)" strokeWidth="0.5" opacity="0.3" />
    ))}
    {[0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800].map(y => (
      <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} stroke="hsl(210 60% 70%)" strokeWidth="0.5" opacity="0.3" />
    ))}

    {/* Connection lines */}
    <line x1="160" y1="240" x2="400" y2="320" stroke="hsl(210 70% 75%)" strokeWidth="1" opacity="0.4" />
    <line x1="400" y1="320" x2="320" y2="480" stroke="hsl(210 70% 75%)" strokeWidth="1" opacity="0.35" />
    <line x1="320" y1="480" x2="480" y2="560" stroke="hsl(210 70% 75%)" strokeWidth="1" opacity="0.3" />
    <line x1="80" y1="400" x2="320" y2="480" stroke="hsl(210 70% 75%)" strokeWidth="1" opacity="0.25" />
    <line x1="400" y1="320" x2="520" y2="240" stroke="hsl(210 70% 75%)" strokeWidth="1" opacity="0.3" />
    <line x1="240" y1="160" x2="160" y2="240" stroke="hsl(210 70% 75%)" strokeWidth="1" opacity="0.35" />

    {/* Nodes with glow */}
    {[
      { cx: 160, cy: 240, r: 4 },
      { cx: 400, cy: 320, r: 5 },
      { cx: 320, cy: 480, r: 4 },
      { cx: 480, cy: 560, r: 3.5 },
      { cx: 80, cy: 400, r: 3 },
      { cx: 520, cy: 240, r: 3.5 },
      { cx: 240, cy: 160, r: 3 },
    ].map((node, i) => (
      <g key={i}>
        <circle cx={node.cx} cy={node.cy} r={node.r * 3} fill="hsl(210 70% 75%)" opacity="0.08" />
        <circle cx={node.cx} cy={node.cy} r={node.r} fill="hsl(210 70% 80%)" opacity="0.5" />
      </g>
    ))}
  </svg>
);

const HeroSection = () => {
  const { openChat } = useChatContext();
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

      <BlueprintGrid />

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
            <button
              onClick={openChat}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-md border border-accent-violet/40 text-foreground font-medium text-sm transition-all duration-300 hover:border-accent-violet hover:shadow-glow hover:bg-accent-violet/5">
              Обсудить проект
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;