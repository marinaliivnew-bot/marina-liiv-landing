import { useRef, useState, useEffect, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms
  instant?: boolean; // skip animation, show immediately
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  instant = false,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(instant);

  useEffect(() => {
    if (instant) return; // already visible

    const el = ref.current;
    if (!el) return;

    // Check if already in view on mount
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, instant]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform will-change-opacity ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-[0.98]"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
