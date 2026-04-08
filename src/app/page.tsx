import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WorkingProcess />
      <About />
      <WhyChooseUs />
      <Industries />
      <FAQ />
      <Support />
      <Footer />
    </main>
  );
}
