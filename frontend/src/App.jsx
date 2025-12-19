import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUS";
import WhyImage from "./components/WhyImage";
import About from "./components/About";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

import AdminLayout from "./admin/AdminLayout";
import "./styles/landing.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <WhyImage />
      <About />
      <Projects />
      <Clients />
      <CTABanner />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Admin Panel */}
      <Route path="/admin/*" element={<AdminLayout />} />
    </Routes>
  );
}

export default App;
