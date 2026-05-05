import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import SectionDivider from "@/components/ui/SectionDivider";

const DEEP = "#0a1628";
const LIGHT = "#e3f2fd";

export default function Home() {
  return (
    <>
      <Hero />
      {/* dark → light transition into LogoMarquee */}
      <SectionDivider fromColor={DEEP} toColor={LIGHT} kind="wave" />

      <LogoMarquee />
      <Services />

      {/* light → dark transition into About */}
      <SectionDivider fromColor={LIGHT} toColor={DEEP} kind="curve" />

      <About />

      {/* dark → light transition into WhyChooseUs */}
      <SectionDivider fromColor={DEEP} toColor={LIGHT} kind="wave" />

      <WorkingProcess />

      <WhyChooseUs />
      <Industries />
      <CTABanner />
    </>
  );
}
