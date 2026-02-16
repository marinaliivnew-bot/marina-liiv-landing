import { Send, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 lg:py-24 bg-surface-alt border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-foreground tracking-tight">
              Готовы обсудить проект?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Свяжитесь со мной удобным способом.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-start sm:justify-end">
            <a
              href="https://t.me/MarinaLiiv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-accent-violet/40 text-foreground font-medium transition-all duration-300 hover:border-accent-violet hover:shadow-glow"
            >
              <Send className="w-4 h-4 text-accent-violet" />
              Telegram
            </a>
            <a
              href="mailto:liivm@yandex.ru"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-border/50 text-muted-foreground font-medium transition-all duration-300 hover:border-accent-violet/30 hover:text-foreground"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20">
          <p className="text-sm text-muted-foreground/60 leading-relaxed">
            ИП&nbsp;Лийв Марина Александровна. Деятельность осуществляется
            в&nbsp;рамках кодов ОКВЭД 62.01, 62.02, 62.09, 70.22, 73.11.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
