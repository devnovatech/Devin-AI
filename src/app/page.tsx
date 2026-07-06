import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { TechStack } from "@/components/TechStack";

/**
 * Home page — each section has a visually distinct background
 * so users can clearly see where one section ends and another begins.
 *
 * BG palette in flow order:
 * 1. Hero          → dark navy radial (deep blue)
 * 2. LogoMarquee   → pure white
 * 3. Services      → light icy-blue with gradient blooms
 * 4. WorkingProcess→ dark navy gradient
 * 5. About         → soft pearl white
 * 6. WhyChooseUs   → muted blue tint
 * 7. Industries    → dark navy (different gradient than #4)
 * 8. Testimonials  → light blue tint (different from #3 & #6)
 * 9. CTABanner     → pure white with dark card inside
 */
export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <WorkingProcess />
      <About />
      <WhyChooseUs />
      <Industries />
      <TechStack />
      <Testimonials />
      <CTABanner />
    </>
  );
}
