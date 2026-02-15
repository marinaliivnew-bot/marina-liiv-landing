import { Send, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 lg:py-24 bg-slate-deep border-t border-slate-700">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 tracking-tight">
              Готовы обсудить проект?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Свяжитесь со мной удобным способом.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-start sm:justify-end">
            <a
              href="https://t.me/MarinaLiiv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-indigo-dark"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
            <a
              href="mailto:liivm@yandex.ru"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg border border-slate-600 text-slate-200 font-semibold transition-all duration-300 hover:border-slate-400 hover:text-slate-50"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-500 leading-relaxed">
            ИП&nbsp;Лийв Марина Александровна. Деятельность осуществляется
            в&nbsp;рамках кодов ОКВЭД 62.01, 62.02, 62.09, 70.22, 73.11.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
