import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ApproachSection from "@/components/ApproachSection";
import FormatsSection from "@/components/FormatsSection";
import FooterSection from "@/components/FooterSection";
import SectionConnector from "@/components/SectionConnector";
import ChatWidget from "@/components/ChatWidget";
import FloatingChatButton from "@/components/FloatingChatButton";
import { useChatContext } from "@/contexts/ChatContext";

const Index = () => {
  const { chatOpen, closeChat } = useChatContext();

  return (
    <main className="min-h-screen product-grid">
      <NavHeader />
      <HeroSection />
      <SectionConnector />
      <SocialProofSection />
      <SectionConnector />
      <WhyDifferentSection />
      <SectionConnector />
      <ExpertiseSection />
      <SectionConnector />
      <ApproachSection />
      <SectionConnector />
      <FormatsSection />
      <SectionConnector />
      <FooterSection />
      <FloatingChatButton />
      <ChatWidget open={chatOpen} onClose={closeChat} />
    </main>
  );
};

export default Index;
