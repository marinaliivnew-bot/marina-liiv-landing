import {
  BrainCircuit,
  CheckCircle2,
  Download,
  ExternalLink,
  FileSearch,
  FlaskConical,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import NavHeader from "@/components/NavHeader";
import AnimatedSection from "@/components/AnimatedSection";
import ChatWidget from "@/components/ChatWidget";
import SectionConnector from "@/components/SectionConnector";
import { useChatContext } from "@/contexts/ChatContext";

type Accent = "peach" | "blue" | "mint" | "yellow" | "pink" | "violet";

const accentStyles: Record<Accent, { tile: string; top: string; text: string; softBg: string }> = {
  peach: {
    tile: "border-[#FFB199]/30 bg-[#FF8A65]/15 text-[#FFB199]",
    top: "border-t-[#FFB199]/70",
    text: "text-[#FFB199]",
    softBg: "bg-[#FF8A65]/10",
  },
  blue: {
    tile: "border-[#8FDBFF]/30 bg-[#4FC3F7]/15 text-[#8FDBFF]",
    top: "border-t-[#8FDBFF]/70",
    text: "text-[#8FDBFF]",
    softBg: "bg-[#4FC3F7]/10",
  },
  mint: {
    tile: "border-[#B7F7D8]/30 bg-[#6EE7B7]/15 text-[#B7F7D8]",
    top: "border-t-[#B7F7D8]/70",
    text: "text-[#B7F7D8]",
    softBg: "bg-[#6EE7B7]/10",
  },
  yellow: {
    tile: "border-[#FFE680]/30 bg-[#FACC15]/15 text-[#FFE680]",
    top: "border-t-[#FFE680]/70",
    text: "text-[#FFE680]",
    softBg: "bg-[#FACC15]/10",
  },
  pink: {
    tile: "border-[#FF9BD5]/30 bg-[#EC4899]/15 text-[#FFB3DE]",
    top: "border-t-[#FF9BD5]/70",
    text: "text-[#FFB3DE]",
    softBg: "bg-[#EC4899]/10",
  },
  violet: {
    tile: "border-accent-violet/30 bg-accent-violet/15 text-accent-soft",
    top: "border-t-accent-violet/70",
    text: "text-accent-soft",
    softBg: "bg-accent-violet/10",
  },
};

const IconTile = ({ icon: Icon, accent }: { icon: LucideIcon; accent: Accent }) => (
  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border ${accentStyles[accent].tile}`}>
    <Icon className="h-5 w-5" />
  </span>
);

const PixelAccents = ({ variant = "default" }: { variant?: "default" | "warm" | "cool" }) => {
  const colors =
    variant === "warm"
      ? ["bg-[#FFB199]", "bg-[#FDE68A]", "bg-[#FF9BD5]"]
      : variant === "cool"
        ? ["bg-[#8FDBFF]", "bg-[#B7F7D8]", "bg-accent-violet"]
        : ["bg-[#FFB199]", "bg-[#8FDBFF]", "bg-[#FDE68A]"];

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <span className={`absolute right-[9%] top-20 h-4 w-4 rounded-sm opacity-80 ${colors[0]}`} />
      <span className={`absolute left-[8%] top-[42%] h-3 w-3 rounded-sm opacity-70 ${colors[1]}`} />
      <span className={`absolute bottom-16 right-[18%] h-5 w-5 rounded-sm opacity-65 ${colors[2]}`} />
    </div>
  );
};

const Tag = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-accent-violet/20 bg-accent-violet/10 px-2.5 py-1 text-xs font-medium text-accent-soft">
    {label}
  </span>
);

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft/80">
    {children}
  </p>
);

const PrimaryLink = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-md border border-accent-violet/40 bg-accent-violet/10 px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent-violet hover:bg-accent-violet/20 hover:shadow-glow"
  >
    {children}
    <ExternalLink className="h-4 w-4 text-accent-soft" />
  </a>
);

const CasesHero = () => (
  <section className="relative overflow-hidden bg-violet-deep pt-32 pb-20 lg:pt-40 lg:pb-28 grain-overlay">
    <PixelAccents variant="warm" />
    <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl space-y-7">
          <SectionLabel>Портфолио</SectionLabel>
          <h1 className="font-serif-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI-продукты и кейсы:
            <span className="block text-gradient">от хаоса к рабочему артефакту</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Не каталог всего подряд — несколько примеров того, как неопределённая задача превращается
            в AI-сценарий, прототип и артефакт, который можно тестировать и передавать дальше.
          </p>
        </div>

        <div className="rounded-2xl border border-accent-violet/20 bg-background/45 p-5 shadow-card">
          <div className="grid grid-cols-2 gap-3">
            {[
              ["01", "Live product", "Magic Capture", "peach"],
              ["02", "AI systems", "Корпоративные агенты", "blue"],
              ["03", "Expert data", "Nutri Intelligence", "mint"],
              ["04", "Artifacts", "Vibe-coding и dashboards", "yellow"],
            ].map(([num, title, desc, accent]) => (
              <div
                key={num}
                className={`rounded-lg border border-t-2 border-border/25 bg-surface-alt/60 p-4 ${accentStyles[accent as Accent].top}`}
              >
                <p className={`mb-5 text-xs font-bold ${accentStyles[accent as Accent].text}`}>{num}</p>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProofStrip = () => (
  <section className="bg-background py-10 grain-overlay">
    <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { icon: BrainCircuit, accent: "pink" as Accent, title: "Разобраться", text: "контекст, аудитория, ограничения" },
          { icon: Workflow, accent: "blue" as Accent, title: "Спроектировать", text: "роль агента, сценарий, риски" },
          { icon: FlaskConical, accent: "yellow" as Accent, title: "Собрать", text: "live product, demo или prototype" },
          { icon: ShieldCheck, accent: "mint" as Accent, title: "Упаковать", text: "QA, NDA, handover, позиционирование" },
        ].map(({ icon, accent, title, text }) => (
          <div key={title} className={`flex gap-3 rounded-lg border border-t-2 border-border/20 bg-surface-alt/40 p-4 ${accentStyles[accent].top}`}>
            <IconTile icon={icon} accent={accent} />
            <div>
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MagicSection = () => (
  <section className="relative overflow-hidden bg-surface-alt py-24 lg:py-32 grain-overlay">
    <PixelAccents variant="warm" />
    <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="space-y-6">
          <SectionLabel>Главный public product</SectionLabel>
          <h2 className="font-serif-display text-3xl leading-tight text-foreground sm:text-5xl">
            Magic Capture превращает хаотичный интерьерный запрос в рабочий бриф
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Это уже не прототип, а работающий AI-first продукт. Он собирает вводные, задает уточняющие вопросы,
            выявляет противоречия и готовит материал, с которым дизайнер может идти дальше.
          </p>
          <div className="flex flex-wrap gap-2">
            {["live product", "active QA", "AI-брифинг", "React", "Supabase", "OpenAI API"].map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <PrimaryLink href="https://magic-capture-designer-app.pages.dev/">
            Открыть Magic Capture
          </PrimaryLink>
        </div>

        <div className={`rounded-2xl border border-t-2 border-accent-violet/25 bg-background/55 p-5 shadow-card ${accentStyles.peach.top}`}>
          <div className="rounded-xl border border-border/25 bg-violet-deep/80 p-5">
            <div className="mb-5 flex items-center justify-between border-b border-border/25 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent-soft/70">Product status</p>
                <p className="mt-1 text-lg font-semibold text-foreground">Working, but still being sharpened</p>
              </div>
              <IconTile icon={Sparkles} accent="peach" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Что уже работает", "структурирование запроса, логика брифа, подготовка материалов"],
                ["Что честно в доработке", "полный QA, баги, первый экран после добавления фич"],
                ["Что доказывает", "умение проектировать AI-first продукт, а не просто страницу"],
                ["Почему в портфолио", "публичный продукт с реальным стеком и понятной ценностью"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-border/20 bg-background/35 p-4">
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CorporateSection = () => (
  <section className="relative overflow-hidden bg-background py-24 lg:py-32 grain-overlay">
    <PixelAccents variant="cool" />
    <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
      <div className="mb-12 max-w-3xl space-y-4">
        <SectionLabel>Корпоративные AI-системы</SectionLabel>
        <h2 className="font-serif-display text-3xl leading-tight text-foreground sm:text-5xl">
          Здесь важна не картинка, а инженерия смысла
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Эти кейсы раскрываются аккуратно: без промптов, внутренних ссылок, имен и архитектуры. Наружу выходит
          только класс задачи, роль Марины и продуктовая логика.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className={`rounded-2xl border border-t-2 border-border/25 bg-surface-alt/55 p-7 ${accentStyles.blue.top}`}>
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft/70">AI product pipeline</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                AI-система для проработки продуктовых инициатив
              </h3>
            </div>
            <IconTile icon={Workflow} accent="blue" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Связка ролей для генерации идей, независимой критики рисков и пошаговой проработки инициатив через
            продуктовые артефакты. Не один универсальный чат-бот, а система с разными режимами мышления.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Generator расширяет поле идей",
              "Critic проверяет риски и противоречия",
              "Productolog ведет инициативу через артефакты и подтверждения",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accentStyles.blue.text}`} />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["agent logic", "product discovery", "QA", "B2B handover", "NDA-safe"].map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </article>

        <article className={`rounded-2xl border border-t-2 border-border/25 bg-surface-alt/55 p-7 ${accentStyles.mint.top}`}>
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft/70">Regulated MVP</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                AI-assisted MVP для нового страхового канала
              </h3>
            </div>
            <IconTile icon={ShieldCheck} accent="mint" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            0→1 проработка MVP для канала продаж страхового продукта через непрофессиональных партнеров. Бренд,
            ссылка и детали не публикуются; кейс остается обезличенным.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "один продукт, один сценарий, минимум шагов",
              "продавец и клиент разведены по ролям",
              "визуальный прототип объясняет сложные условия через guided flow",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accentStyles.mint.text}`} />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-accent-violet/15 bg-accent-violet/5 p-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Это MVP-концепт и визуальный прототип, а не утверждение о запущенном канале продаж.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const ExpertDataSection = () => (
  <section className="relative overflow-hidden bg-surface-alt py-24 lg:py-32 grain-overlay">
    <PixelAccents variant="cool" />
    <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <SectionLabel>Expert data & safety</SectionLabel>
          <h2 className="font-serif-display text-3xl leading-tight text-foreground sm:text-5xl">
            Nutri Intelligence Agent: AI там, где нельзя фантазировать
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Кейс важен не как нутри-проект, а как пример работы с чувствительными экспертными данными:
            анализы, анкеты, дневники питания, жалобы. Цена неверной интерпретации высокая, поэтому агент
            работает как структурный помощник, а не как источник диагнозов.
          </p>
        </div>
        <div className={`rounded-2xl border border-t-2 border-border/25 bg-background/45 p-6 ${accentStyles.mint.top}`}>
          {[
            "не дает диагнозов, назначений и дозировок",
            "показывает, какие параметры извлек",
            "при неполных данных отмечает ограничения",
            "финальное решение оставляет специалисту",
          ].map((item) => (
            <div key={item} className="flex gap-3 border-b border-border/20 py-4 last:border-b-0">
              <span className={`mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border ${accentStyles.mint.tile}`}>
                <FileSearch className="h-4 w-4" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

type Artifact = {
  title: string;
  text: string;
  tags: string[];
  accent: Accent;
  link?: string;
  linkLabel?: string;
  note?: string;
};

const artifacts: Artifact[] = [
  {
    title: "Lab Community Identity",
    text: "Неполный бриф как точка входа: экспорт блога, анализ языка и смыслов, болевые точки аудитории, айдентика — и готовая концепт-страница.",
    tags: ["vibe-coding", "context research", "public result"],
    accent: "pink",
    link: "https://marinaliivnew-bot.github.io/marina-liiv-landing/gleb-lab-community-identity/index.html",
    linkLabel: "Открыть страницу",
  },
  {
    title: "AI-диагност для бизнеса",
    text: "Агент, который помогает бизнесу понять, где AI полезен, а где будет лишним украшением процесса.",
    tags: ["AI discovery", "OpenAI Assistant", "demo"],
    accent: "yellow",
  },
  {
    title: "LLM Compare Compass",
    text: "Decision-support dashboard для сравнения LLM в формате, понятном не только технической команде.",
    tags: ["dashboard", "LLM comparison", "decision support"],
    accent: "blue",
    link: "https://llm-compare-compass.lovable.app",
    linkLabel: "Открыть dashboard",
  },
  {
    title: "Team Boost Bots",
    text: "Упаковка линейки AI-ассистентов в B2B-предложение агентства: структура, ценность, карточки решений и CTA.",
    tags: ["B2B packaging", "landing logic", "internal demo"],
    accent: "peach",
    note: "Ссылка не публикуется: на странице есть реальные контактные данные.",
  },
];

const ArtifactSection = ({ onOpenChat }: { onOpenChat: () => void }) => (
  <section className="relative overflow-hidden bg-background py-24 lg:py-32 grain-overlay">
    <PixelAccents variant="default" />
    <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
      <div className="mb-12 max-w-3xl space-y-4">
        <SectionLabel>Public artifacts</SectionLabel>
        <h2 className="font-serif-display text-3xl leading-tight text-foreground sm:text-5xl">
          Быстрые визуальные доказательства вместо длинных объяснений
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Этот блок ниже по иерархии. Он показывает скорость материализации идеи: страница, demo, dashboard,
          упаковка B2B-предложения.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {artifacts.map((item) => (
          <article
            key={item.title}
            className={`rounded-2xl border border-t-2 border-border/25 bg-surface-alt/45 p-6 ${accentStyles[item.accent].top}`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <span className={`h-4 w-4 flex-shrink-0 rounded-sm ${accentStyles[item.accent].softBg}`} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            {item.note && (
              <p className="mt-4 rounded-lg border border-accent-violet/15 bg-accent-violet/5 p-3 text-xs leading-relaxed text-muted-foreground">
                {item.note}
              </p>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
            <div className="mt-6">
              {item.link && item.linkLabel && (
                <PrimaryLink href={item.link}>{item.linkLabel}</PrimaryLink>
              )}
              {item.title === "AI-диагност для бизнеса" && (
                <button
                  onClick={onOpenChat}
                  className="inline-flex items-center gap-2 rounded-md border border-accent-violet/40 bg-accent-violet/10 px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent-violet hover:bg-accent-violet/20 hover:shadow-glow"
                >
                  Открыть AI-диагност
                  <Sparkles className="h-4 w-4 text-accent-soft" />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const InterviewAndCTA = ({ onOpenChat }: { onOpenChat: () => void }) => (
  <section className="relative overflow-hidden bg-surface-alt py-20 lg:py-24 grain-overlay">
    <PixelAccents variant="warm" />
    <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
      <div className="max-w-3xl space-y-5">
        <SectionLabel>Следующий шаг</SectionLabel>
        <h2 className="font-serif-display text-3xl leading-tight text-foreground sm:text-4xl">
          Разобрать задачу и понять, где AI действительно нужен
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Короткий разбор помогает отделить полезный AI-сценарий от лишней автоматизации: какие данные есть,
          кто пользователь, какой артефакт стоит собрать первым.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-accent-violet/25 bg-gradient-to-r from-accent-violet/15 via-[#FF8A65]/10 to-[#FACC15]/10 p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-serif-display text-2xl text-foreground sm:text-3xl">
              Есть задача, где AI должен работать в процессе?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Можно начать с короткого разбора: где AI действительно нужен, какие данные есть, какой артефакт стоит собрать первым.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/marina-liiv-landing/cv-marina-liiv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border/40 px-5 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-accent-violet/30 hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Скачать резюме
            </a>
            <a
              href="https://t.me/MarinaLiiv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-accent-violet/40 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-violet hover:shadow-glow"
            >
              <Send className="h-4 w-4 text-accent-soft" />
              Написать в Telegram
            </a>
            <button
              onClick={onOpenChat}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-accent-violet/30 bg-accent-violet/10 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-violet hover:bg-accent-violet/20 hover:shadow-glow"
            >
              <Sparkles className="h-4 w-4 text-accent-soft" />
              AI-диагност
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Cases = () => {
  const { chatOpen, openChat, closeChat } = useChatContext();

  return (
    <main className="min-h-screen product-grid">
      <NavHeader />

      <AnimatedSection instant>
        <CasesHero />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <ProofStrip />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <MagicSection />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <CorporateSection />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <ExpertDataSection />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <ArtifactSection onOpenChat={openChat} />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <InterviewAndCTA onOpenChat={openChat} />
      </AnimatedSection>

      <ChatWidget open={chatOpen} onClose={closeChat} />
    </main>
  );
};

export default Cases;
