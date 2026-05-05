import { useState, useEffect } from "react";
import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ApproachSection from "@/components/ApproachSection";
import FormatsSection from "@/components/FormatsSection";
import FooterSection from "@/components/FooterSection";
import SectionConnector from "@/components/SectionConnector";
import DiagnosticCTASection from "@/components/DiagnosticCTASection";
import ChatWidget from "@/components/ChatWidget";
import AnimatedSection from "@/components/AnimatedSection";
import { useChatContext } from "@/contexts/ChatContext";

const Index = () => {
  const { chatOpen, closeChat } = useChatContext();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="min-h-screen product-grid">
      {/* Cursor spotlight glow */}
      <div
        className="fixed pointer-events-none z-[100] inset-0 hidden md:block"
        aria-hidden="true"
      >
        <div
          className="absolute w-[600px] h-[600px] rounded-full transition-[left,top] duration-75 ease-linear will-change-[left,top]"
          style={{
            background:
              "radial-gradient(circle, hsl(263 86% 76% / 0.06), transparent 70%)",
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* NavHeader stays static — no scroll animation */}
      <NavHeader />

      <AnimatedSection instant>
        <HeroSection />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <SocialProofSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <WhyDifferentSection />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <ExpertiseSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <DiagnosticCTASection />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <ApproachSection />
      </AnimatedSection>

      <SectionConnector />

      <AnimatedSection delay={100}>
        <FormatsSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <FooterSection />
      </AnimatedSection>

      <ChatWidget open={chatOpen} onClose={closeChat} />
    </main>
  );
};

export default Index;
