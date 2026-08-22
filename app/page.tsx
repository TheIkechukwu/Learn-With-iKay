import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhySection } from "@/components/home/WhySection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CurriculumSnapshot } from "@/components/home/CurriculumSnapshot";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Founder } from "@/components/home/Founder";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhySection />
      <ServicesPreview />
      <PortfolioPreview />
      <CurriculumSnapshot />
      <TestimonialsMarquee />
      <BlogPreview />
      <Founder />
      <FinalCta />
    </>
  );
}
