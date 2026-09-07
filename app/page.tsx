import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhySection } from "@/components/home/WhySection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
// import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";
import { Founder } from "@/components/home/Founder";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhySection />
      <ServicesPreview />
      {/* <PortfolioPreview /> */}
  
      <TestimonialsMarquee />
      <Founder />
      <FinalCta />
    </>
  );
}
