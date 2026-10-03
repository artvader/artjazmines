import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#290c01] flex flex-col items-center overflow-x-hidden">
      <div className="w-full min-h-[3811px] flex flex-col justify-center items-center gap-6 bg-[#290c01]">
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
