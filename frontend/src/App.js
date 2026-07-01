import "@/App.css";
import { Toaster } from "sonner";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Destinations } from "@/components/Destinations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

function App() {
  return (
    <div className="App" data-testid="page-home">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Destinations />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
