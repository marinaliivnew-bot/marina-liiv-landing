import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ApproachSection from "@/components/ApproachSection";
import FormatsSection from "@/components/FormatsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NavHeader />
      <HeroSection />
      <SocialProofSection />
      <ExpertiseSection />
      <ApproachSection />
      <FormatsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
