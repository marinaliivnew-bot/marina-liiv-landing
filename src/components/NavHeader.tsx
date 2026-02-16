import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Опыт", href: "#experience" },
  { label: "Экспертиза", href: "#expertise" },
  { label: "Подход", href: "#approach" },
  { label: "Форматы", href: "#formats" },
];

const NavHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group" onClick={handleClick}>
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-accent-violet/30 text-accent-violet text-sm font-bold tracking-tight">
              ML
            </span>
            <span className="text-sm font-medium text-foreground hidden sm:inline tracking-wide">
              Marina Liiv
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/MarinaLiiv"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md border border-accent-violet/30 text-foreground text-sm font-medium transition-all duration-300 hover:border-accent-violet hover:shadow-glow"
          >
            Обсудить проект
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/30">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/MarinaLiiv"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-accent-violet/30 text-foreground text-sm font-medium"
            >
              Обсудить проект
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavHeader;
