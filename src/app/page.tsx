import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Technologies from "@/components/Technologies";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <WorkingProcess />
      <About />
      <WhyChooseUs />
      <Technologies />
      <Industries />
      <FAQ />
      <Support />
    </>
  );
}
