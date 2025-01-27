// compnents import
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="border-t-2 border-gray-600 opacity-75 max-w-7xl mx-auto my-9" />
      <section id="projects" className="my-16">
        <Projects />
      </section>
      <section id="about" className="my-16">
        <hr className="border-t-2 border-gray-600 opacity-75 max-w-7xl mx-auto my-9" />
        <About />
      </section>
      <section id="contact">
        <hr className="border-t-2 border-gray-600 opacity-75 max-w-7xl mx-auto my-9" />
        <Contact />
      </section>
    </>
  );
}
