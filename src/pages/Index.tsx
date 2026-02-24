import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import FeaturesSection from "@/components/FeaturesSection";
import TableOfContents from "@/components/TableOfContents";
import StatsSection from "@/components/StatsSection";
import AuthorSection from "@/components/AuthorSection";
import MotivationSection from "@/components/MotivationSection";
import CodePreview from "@/components/CodePreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AudienceSection />
      <FeaturesSection />
      <TableOfContents />
      <StatsSection />
      <AuthorSection />
      <MotivationSection />
      <CodePreview />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
