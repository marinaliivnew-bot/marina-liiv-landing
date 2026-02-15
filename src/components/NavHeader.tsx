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
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={handleClick}>
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground text-sm font-bold tracking-tight">
              ML
            </span>
            <span className="text-base font-semibold text-foreground hidden sm:inline">
              Marina Liiv
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://t.me/MarinaLiiv"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all duration-200 hover:bg-indigo-dark"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/MarinaLiiv"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavHeader;
