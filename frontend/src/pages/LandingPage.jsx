import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <About />
      <Projects />
      <Clients />
      <Contact />       {/* ✅ THIS WAS MISSING */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default LandingPage;
