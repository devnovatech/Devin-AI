import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Technologies from "@/components/Technologies";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Services />
      <WorkingProcess />
      <About />
      <Testimonials />
      <WhyChooseUs />
      <Technologies />
      <Industries />
      <FAQ />
      <Support />
      <Footer />
      <BackToTop />
    </main>
  );
}
