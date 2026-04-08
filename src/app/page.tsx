import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import About from "@/components/About";
import WorkingProcess from "@/components/WorkingProcess";
import Technologies from "@/components/Technologies";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Services />
      <About />
      <WorkingProcess />
      <Technologies />
      <Support />
      <Footer />
    </main>
  );
}
