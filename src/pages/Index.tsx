
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark text-white overflow-x-hidden">
      <Toaster />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-70">
        {/* Simulated stars */}
        <div className="absolute top-[10%] left-[5%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[15%] left-[30%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[5%] left-[50%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[25%] left-[80%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[40%] left-[25%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[80%] left-[60%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[90%] left-[85%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Index;
