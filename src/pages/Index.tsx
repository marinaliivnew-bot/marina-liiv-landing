import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ApproachSection from "@/components/ApproachSection";
import FormatsSection from "@/components/FormatsSection";
import FooterSection from "@/components/FooterSection";
import SectionConnector from "@/components/SectionConnector";

const Index = () => {
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
    </main>
  );
};

export default Index;
