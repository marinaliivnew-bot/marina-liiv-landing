import { ExternalLink, Send, Download, Sparkles, CheckCircle2 } from "lucide-react";
import NavHeader from "@/components/NavHeader";
import AnimatedSection from "@/components/AnimatedSection";
import ChatWidget from "@/components/ChatWidget";
import SectionConnector from "@/components/SectionConnector";
import { useChatContext } from "@/contexts/ChatContext";

const CasesHero = () => (
  <section
    className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 grain-overlay overflow-hidden"
    style={{ background: "linear-gradient(135deg, #4A3A73 0%, #5B4690 50%, #4A3A73 100%)" }}
  >
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 80px,
          hsl(260 40% 96% / 0.15) 80px,
          hsl(260 40% 96% / 0.15) 81px
        )`,
      }}
    />
    <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
          Портфолио
        </p>
        <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] tracking-tight">
          AI-кейсы, продукты и прототипы
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Здесь собраны проекты, где задача была не "применить нейросеть", а разобраться в контексте,
          спроектировать логику, собрать рабочий артефакт и довести его до состояния "можно показывать".
        </p>
        <p className="text-sm text-accent-soft/70 tracking-wide">
          Product thinking · AI logic · Vibe-coding · Expert data · QA · Handover
        </p>
      </div>
    </div>
  </section>
);

const steps = [
  {
    num: "01",
    title: "Разобраться в задаче",
    desc: "Найти настоящую потребность, аудиторию, ограничения и критерии результата.",
  },
  {
    num: "02",
    title: "Спроектировать AI-логику",
    desc: "Описать сценарий, роль агента, данные, границы ответственности и риски галлюцинаций.",
  },
  {
    num: "03",
    title: "Собрать продуктовый артефакт",
    desc: "Быстро сделать рабочую версию: продукт, страницу, агента, demo, memo, карту сценариев или concept page.",
  },
  {
    num: "04",
    title: "Проверить и упаковать",
    desc: "Протестировать логику, убрать шум, объяснить результат и подготовить его к показу или передаче.",
  },
];

const HowIWork = () => (
  <section className="py-24 lg:py-32 bg-background grain-overlay">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="max-w-2xl mb-16 space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
          Метод
        </p>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-foreground tracking-tight">
          Как я работаю
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <div
            key={s.num}
            className="group relative p-6 rounded-xl border border-border/30 bg-surface-alt/50 transition-all duration-300 hover:border-accent-violet/30"
          >
            <span className="text-3xl font-bold text-accent-violet/15 mb-4 block group-hover:text-accent-violet/25 transition-colors duration-300">
              {s.num}
            </span>
            <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Tag = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
    {label}
  </span>
);

type CaseStatus = "live" | "chat" | "note";

interface CaseItem {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  details?: { heading: string; items: string[] }[];
  note?: string;
  link: string | null;
  linkLabel: string | null;
  status: CaseStatus;
}

const casesData: CaseItem[] = [
  {
    id: 1,
    title: "Gleb Lab Community — concept page из неполного брифа",
    desc: "Разбор вакансии как продуктовой задачи. Главный акцент — способность работать с коротким, неполным брифом: читать между строк, собирать контекст автора и аудитории, достраивать продуктовую логику и доводить ее до опубликованного артефакта.",
    details: [
      {
        heading: "Что сделано",
        items: [
          "Проведен ресерч публичного контекста автора: сайт, блог, боли аудитории, язык, айдентика и повторяющиеся смыслы.",
          "Восстановлена продуктовая логика и переведена в структуру, тексты, TOV и визуальную систему страницы.",
          "Собрана и опубликована страница через vibe-coding в стилистике автора.",
        ],
      },
    ],
    tags: [
      "product thinking",
      "неполный бриф -> артефакт",
      "контекст-ресерч",
      "TOV",
      "vibe-coding",
      "публичный результат",
    ],
    link: "https://marinaliivnew-bot.github.io/marina-liiv-landing/gleb-lab-community-identity/index.html",
    linkLabel: "Открыть страницу",
    status: "live",
  },
  {
    id: 2,
    title: "AI-система для проработки продуктовых инициатив",
    desc: "Корпоративный AI/Product-кейс: связка ролей для генерации идей, независимой критики рисков и пошаговой проработки инициатив через продуктовые артефакты. Это не один универсальный чат-бот, а система с разными режимами мышления и контрольными точками.",
    details: [
      {
        heading: "Что показывает кейс",
        items: [
          "Разделение ролей AI-агентов: Generator расширяет поле идей, Critic проверяет риски, Productolog ведет инициативу через артефакты.",
          "Перевод неопределенной бизнес-задачи в управляемый процесс: цель -> варианты -> выбор -> доработка -> подтверждение.",
          "QA поведения агента: последовательность этапов, связность артефактов, явные подтверждения и отсутствие лишних домыслов.",
        ],
      },
    ],
    tags: ["AI Product", "agent logic", "product discovery", "QA", "B2B handover", "NDA-safe"],
    note: "Детали промптов, workflow, участники и внутренняя архитектура не раскрываются. Публично показывается только класс задачи, роль и продуктовая логика.",
    link: null,
    linkLabel: null,
    status: "note",
  },
  {
    id: 3,
    title: "AI-assisted MVP для нового страхового канала",
    desc: "0->1 проработка AI-assisted MVP для нового канала продаж страхового продукта через непрофессиональных партнеров. Задача — проверить, может ли диалоговый слой снизить порог входа и объяснить сложный продукт в простом guided flow.",
    details: [
      {
        heading: "Что сделано",
        items: [
          "Сформулированы принципы MVP: один продукт, один сценарий, минимум шагов, контролируемая модель и понятная выгода.",
          "Проработаны сценарии продавца и клиента, ограничения визуального прототипа и материалы для решения о следующем этапе.",
          "В рамках проработки был собран обезличенный Lovable-прототип клиентского пути: от выбора сценария до подбора тарифа, сравнения пакетов и объяснения ключевых страховых условий.",
        ],
      },
    ],
    tags: ["0->1 discovery", "MVP-концепт", "regulated domain", "conversational flow", "clickable prototype"],
    note: "Это MVP-концепт и визуальный прототип, а не утверждение о запущенном канале продаж. Брендированные детали и ссылка не публикуются из-за NDA.",
    link: null,
    linkLabel: null,
    status: "note",
  },
  {
    id: 4,
    title: "Nutri Intelligence Agent — структурный AI-ассистент для нутрициолога",
    desc: "Custom GPT / AI-ассистент с инструкциями, базой знаний, маршрутами проверки и шаблонами интерпретации. Задача — предварительная структуризация чувствительных экспертных данных перед консультацией: анализы, анкета, дневник питания, жалобы, иногда УЗИ.",
    details: [
      {
        heading: "Safety / anti-hallucination layer",
        items: [
          "Агент не дает диагнозов, назначений и дозировок в режиме клиента.",
          "Показывает, какие параметры извлек, и оставляет финальное решение за специалистом.",
          "При неполных данных отмечает ограничения, а не додумывает.",
        ],
      },
    ],
    tags: ["экспертные данные", "anti-hallucination", "health/wellness", "product validation"],
    note: "Кейс важен не как нутри-проект, а как пример работы с чувствительными данными, где есть риск галлюцинаций и высокая цена неверной интерпретации.",
    link: null,
    linkLabel: null,
    status: "note",
  },
  {
    id: 5,
    title: "Magic Capture — AI-first продукт для интерьерного брифа",
    desc: "Работающий AI-продукт, который превращает хаотичный клиентский запрос в структурированный интерьерный бриф, выявляет противоречия и готовит материал для дальнейшей работы дизайнера.",
    details: [
      {
        heading: "Что показывает",
        items: [
          "Переход от хаоса к структуре: неструктурированный запрос превращается в рабочий бриф.",
          "AI-брифинг, выявление противоречий и UX-логика для пользователя без профессионального языка дизайнера.",
          "Способность проектировать AI-first продукт, а не просто страницу или демо.",
        ],
      },
    ],
    tags: ["AI-брифинг", "хаос -> структура", "UX logic", "React", "Supabase", "OpenAI API"],
    note: "Продукт уже работает, но проходит полный QA и продуктовую ревизию: нужно дотестировать сценарии, исправить баги и обновить первый экран, потому что после добавления новых функций он уже не отражает текущую суть продукта.",
    link: "https://magic-capture-designer-app.pages.dev/",
    linkLabel: "Открыть Magic Capture",
    status: "live",
  },
  {
    id: 6,
    title: "AI-диагност для бизнеса — хакатон -> агент -> лендинг",
    desc: "Агент, который помогает бизнесу понять, где AI действительно может быть полезен, а где будет лишней игрушкой. Проект вырос из хакатона, был адаптирован в OpenAI Assistant и размещен как демо на лендинге.",
    tags: ["AI discovery", "сценарии диагностики", "упаковка AI use cases", "demo", "OpenAI Assistant"],
    link: null,
    linkLabel: "Открыть AI-диагност",
    status: "chat",
  },
];

const artifactData: CaseItem[] = [
  {
    id: 1,
    title: "LLM Compare Compass",
    desc: "Визуальный dashboard для сравнения LLM в контексте выбора модели для бота-помощника. Цель — не просто собрать метрики, а превратить техническое сравнение в понятный материал для управленческого решения.",
    tags: ["decision-support dashboard", "LLM comparison", "аналитическая упаковка"],
    link: "https://llm-compare-compass.lovable.app",
    linkLabel: "Открыть dashboard",
    status: "live",
  },
  {
    id: 2,
    title: "Team Boost Bots",
    desc: "Упаковка линейки AI-ассистентов в B2B-предложение агентства: структура лендинга, описание ценности, карточки решений, CTA и айдентика.",
    tags: ["B2B packaging artifact", "landing page logic", "AI assistants"],
    note: "Ссылка не публикуется: на странице есть реальные контактные данные. Кейс можно обсуждать как внутренний demo / B2B packaging artifact без вывода внешнего URL.",
    link: null,
    linkLabel: null,
    status: "note",
  },
];

const CaseCard = ({ c, onOpenChat }: { c: CaseItem; onOpenChat: () => void }) => (
  <div className="group relative p-8 rounded-2xl border border-border/30 bg-background/50 transition-all duration-300 hover:border-accent-violet/30">
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
      <div className="flex-1 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 text-xs font-bold text-accent-violet/40 mt-1 tabular-nums">
            {String(c.id).padStart(2, "0")}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-snug">
            {c.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed pl-6">
          {c.desc}
        </p>

        {c.details && c.details.length > 0 && (
          <div className="pl-6 space-y-4">
            {c.details.map((section) => (
              <div key={section.heading}>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent-violet/70 mb-2">
                  {section.heading}
                </p>
                <ul className="space-y-1.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-accent-violet/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {c.note && (
          <div className="ml-6 p-4 rounded-lg bg-accent-violet/5 border border-accent-violet/15">
            <p className="text-xs text-muted-foreground/80 leading-relaxed italic">
              {c.note}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pl-6 pt-1">
          {c.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>

      <div className="mt-6 lg:mt-1 lg:flex-shrink-0 pl-6 lg:pl-0">
        {c.status === "live" && c.link && (
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-accent-violet/40 text-foreground text-sm font-medium transition-all duration-300 hover:border-accent-violet hover:shadow-glow hover:bg-accent-violet/5"
          >
            <ExternalLink className="w-4 h-4 text-accent-violet" />
            {c.linkLabel}
          </a>
        )}
        {c.status === "chat" && (
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-accent-violet/40 text-foreground text-sm font-medium transition-all duration-300 hover:border-accent-violet hover:shadow-glow hover:bg-accent-violet/5"
          >
            <Sparkles className="w-4 h-4 text-accent-violet" />
            {c.linkLabel}
          </button>
        )}
      </div>
    </div>
  </div>
);

const CasesGrid = ({ onOpenChat }: { onOpenChat: () => void }) => (
  <section className="py-24 lg:py-32 bg-surface-alt grain-overlay">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="max-w-2xl mb-16 space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
          Избранное
        </p>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-foreground tracking-tight">
          Featured cases
        </h2>
      </div>

      <div className="space-y-6">
        {casesData.map((c) => (
          <CaseCard key={c.id} c={c} onOpenChat={onOpenChat} />
        ))}
      </div>
    </div>
  </section>
);

const ArtifactGrid = () => (
  <section className="py-20 lg:py-24 bg-background grain-overlay">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="max-w-2xl mb-12 space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
          Supporting artifacts
        </p>
        <h2 className="font-serif-display text-2xl sm:text-3xl text-foreground tracking-tight">
          Рабочие артефакты и визуальные прототипы
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Эти проекты не подменяют основные кейсы. Они показывают скорость материализации идеи:
          clickable prototype, decision-support dashboard или B2B packaging artifact для обсуждения с командой.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {artifactData.map((c) => (
          <CaseCard key={c.id} c={c} onOpenChat={() => undefined} />
        ))}
      </div>
    </div>
  </section>
);

const interviewCases = [
  { label: "GWP / insurance AI", desc: "детали корпоративных AI-ассистентов, роли и handover без раскрытия промптов" },
  { label: "Amway Crisis 2022", desc: "портфель, кризисное управление и решения под ограничениями" },
  { label: "Portfolio PO background", desc: "опыт business -> IT и Product Owner остается в резюме и interview book" },
];

const InterviewCases = () => (
  <section className="py-20 lg:py-24 bg-surface-alt grain-overlay">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-violet">
            Корпоративный опыт
          </p>
          <h2 className="font-serif-display text-2xl sm:text-3xl text-foreground tracking-tight">
            Interview cases
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Часть кейсов связана с корпоративными проектами и ограничениями раскрытия. Их лучше разбирать на интервью:
            с контекстом, ролью, задачами, ограничениями и принятыми решениями.
          </p>
        </div>
        <div className="space-y-3">
          {interviewCases.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-4 p-4 rounded-xl border border-border/20 bg-background/40"
            >
              <CheckCircle2 className="w-4 h-4 text-accent-violet/50 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium text-foreground">{c.label}</span>
                <span className="text-muted-foreground"> — {c.desc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CasesCTA = ({ onOpenChat }: { onOpenChat: () => void }) => (
  <section className="py-20 lg:py-24 bg-background border-t border-border/30 grain-overlay">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="font-serif-display text-2xl sm:text-3xl text-foreground tracking-tight">
            Есть задача для AI?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Если у вас есть задача, где AI должен не красиво лежать в презентации, а работать
            в реальном процессе — можно начать с короткого разбора.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/marina-liiv-landing/cv-marina-liiv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border/40 text-muted-foreground text-sm font-medium transition-all duration-300 hover:text-foreground hover:border-accent-violet/30"
          >
            <Download className="w-4 h-4" />
            Скачать резюме
          </a>
          <a
            href="https://t.me/MarinaLiiv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-accent-violet/40 text-foreground text-sm font-medium transition-all duration-300 hover:border-accent-violet hover:shadow-glow"
          >
            <Send className="w-4 h-4 text-accent-violet" />
            Написать в Telegram
          </a>
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-accent-violet/30 bg-accent-violet/10 text-foreground text-sm font-medium transition-all duration-300 hover:border-accent-violet hover:bg-accent-violet/20 hover:shadow-glow"
          >
            <Sparkles className="w-4 h-4 text-accent-violet" />
            Открыть AI-диагност
          </button>
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
        <HowIWork />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <CasesGrid onOpenChat={openChat} />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <ArtifactGrid />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <InterviewCases />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <CasesCTA onOpenChat={openChat} />
      </AnimatedSection>

      <ChatWidget open={chatOpen} onClose={closeChat} />
    </main>
  );
};

export default Cases;
