import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingOrbs from "./FloatingOrbs";

const BlueprintGrid = () => (
  <svg
    className="absolute right-0 top-0 h-full w-1/2 opacity-[0.58] pointer-events-none hidden lg:block"
    viewBox="0 0 600 800"
    fill="none"
    preserveAspectRatio="xMaxYMid slice"
  >
    {/* Grid lines */}
    {[0, 80, 160, 240, 320, 400, 480, 560].map(x => (
      <line key={`v${x}`} x1={x} y1="0" x2={x} y2="800" stroke="hsl(210 60% 75%)" strokeWidth="0.7" opacity="0.5" />
    ))}
    {[0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800].map(y => (
      <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} stroke="hsl(210 60% 75%)" strokeWidth="0.7" opacity="0.5" />
    ))}

    {/* Connection lines */}
    <line x1="160" y1="240" x2="400" y2="320" stroke="hsl(210 70% 80%)" strokeWidth="1.2" opacity="0.6" />
    <line x1="400" y1="320" x2="320" y2="480" stroke="hsl(210 70% 80%)" strokeWidth="1.2" opacity="0.55" />
    <line x1="320" y1="480" x2="480" y2="560" stroke="hsl(210 70% 80%)" strokeWidth="1.2" opacity="0.5" />
    <line x1="80" y1="400" x2="320" y2="480" stroke="hsl(210 70% 80%)" strokeWidth="1.2" opacity="0.45" />
    <line x1="400" y1="320" x2="520" y2="240" stroke="hsl(210 70% 80%)" strokeWidth="1.2" opacity="0.5" />
    <line x1="240" y1="160" x2="160" y2="240" stroke="hsl(210 70% 80%)" strokeWidth="1.2" opacity="0.55" />

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
        <circle cx={node.cx} cy={node.cy} r={node.r * 3} fill="hsl(210 70% 80%)" opacity="0.15" />
        <circle cx={node.cx} cy={node.cy} r={node.r} fill="hsl(210 70% 85%)" opacity="0.7" />
      </g>
    ))}
  </svg>
);

const HumanPresenceLayer = () => (
  <div
    className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden lg:block"
    aria-hidden="true"
  >
    <div className="absolute right-[7%] top-[15%] h-[70%] w-[44%]">
      <div className="absolute inset-[-18%] rounded-full bg-[#FFB199]/20 blur-3xl" />
      <div
        className="absolute inset-x-[-18%] top-[18%] h-28"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgba(253, 230, 138, 0.16) 42%, rgba(255, 177, 153, 0.24) 56%, transparent 78%)",
        }}
      />
      <img
        src="/marina-liiv-landing/marina-presence.jpg"
        alt=""
        className="relative h-full w-full object-cover opacity-[0.52] mix-blend-screen contrast-[1.06] saturate-[0.92] sepia-[18%]"
        style={{
          objectPosition: "54% 42%",
          maskImage:
            "radial-gradient(ellipse 48% 56% at 50% 43%, black 0%, rgba(0,0,0,0.82) 45%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 48% 56% at 50% 43%, black 0%, rgba(0,0,0,0.82) 45%, transparent 82%)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#FDE68A]/18 via-[#FFB199]/16 to-[#4A3A73]/28"
        style={{
          mixBlendMode: "color",
          maskImage:
            "radial-gradient(ellipse 52% 60% at 50% 43%, black 0%, rgba(0,0,0,0.78) 48%, transparent 84%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 52% 60% at 50% 43%, black 0%, rgba(0,0,0,0.78) 48%, transparent 84%)",
        }}
      />
    </div>
    <div className="absolute bottom-[12%] right-[30%] z-[2] w-44 -rotate-2 rounded-lg border border-[#FDE68A]/30 bg-[#271F3C]/72 p-2 shadow-[0_20px_60px_rgba(20,13,37,0.38)] backdrop-blur-md">
      <div className="relative overflow-hidden rounded-md border border-white/10 bg-black/30">
        <img
          src="/marina-liiv-landing/marina-camera-check.png"
          alt=""
          className="h-56 w-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#271F3C]/50 via-transparent to-[#FDE68A]/8" />
      </div>
      <div className="mt-2 border-t border-white/10 pt-2">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#FDE68A]">
          human in the loop
        </p>
        <p className="mt-1 text-[0.68rem] leading-snug text-[#F7EFFF]/78">
          не AI-аватар, просто удачный фильтр
        </p>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-[#4A3A73] via-transparent to-[#4A3A73]/20" />
  </div>
);

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

      {/* Pixel accents */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
        <span className="absolute right-[9%] top-20 h-4 w-4 rounded-sm opacity-80 bg-[#FFB199]" />
        <span className="absolute left-[8%] top-[42%] h-3 w-3 rounded-sm opacity-70 bg-[#FDE68A]" />
        <span className="absolute bottom-16 right-[18%] h-5 w-5 rounded-sm opacity-65 bg-[#FF9BD5]" />
      </div>

      <HumanPresenceLayer />

      <BlueprintGrid />

      <FloatingOrbs />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-violet/20 bg-accent-violet/5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
            <span className="text-sm font-medium text-accent-soft">AI & Digital Architecture</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] tracking-tight">
            Помогаю разобраться, где в&nbsp;вашем бизнесе{" "}
            <span className="text-gradient">реально нужен AI&nbsp;— и&nbsp;сделать это</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            15&nbsp;лет в&nbsp;продуктах и&nbsp;P&amp;L&nbsp;— теперь проектирую AI‑системы. Без хайпа и&nbsp;лишних обещаний.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/cases"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-md border border-accent-violet/40 bg-accent-violet/10 text-foreground font-medium text-sm transition-all duration-300 hover:border-accent-violet hover:shadow-glow hover:bg-accent-violet/20">
              Посмотреть кейсы
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-md border border-border/40 text-muted-foreground font-medium text-sm transition-all duration-300 hover:border-accent-violet/30 hover:text-foreground">
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
