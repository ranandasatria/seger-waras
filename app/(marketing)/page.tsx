import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { Process } from "@/components/home/Process";
import { Testimonial } from "@/components/home/Testimonial";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioPreview />
      <Process />
      <Testimonial />
      <CTA />
    </>
  );
}
