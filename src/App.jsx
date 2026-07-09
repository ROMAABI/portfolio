import { LightboxProvider } from "./stores/lightbox";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

export default function App() {
  return (
    <LightboxProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Lightbox />
    </LightboxProvider>
  );
}
