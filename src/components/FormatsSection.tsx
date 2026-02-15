import { Search, PenTool, Cpu, Headphones } from "lucide-react";

const formats = [
  { icon: Search, step: "01", title: "Концепция и аудит" },
  { icon: PenTool, step: "02", title: "Проектирование архитектуры" },
  { icon: Cpu, step: "03", title: "Создание прототипа (MVP)" },
  { icon: Headphones, step: "04", title: "Сопровождение внедрения" },
];

const FormatsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Форматы работы
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Как мы работаем
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((item, index) => (
            <div
              key={index}
              className="relative p-7 rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <span className="text-5xl font-bold text-indigo-50 absolute top-5 right-6 select-none">
                {item.step}
              </span>
              <div className="relative">
                <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-indigo-50">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
