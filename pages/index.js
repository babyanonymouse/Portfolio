// compnents import
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      {/* <hr className="border-t-2 border-[#484848]  max-w-[110rem] mx-auto w-full mt-6" /> */}
      <hr className="hr max-w-7xl mx-auto my-4" />
      <section id="projects" className="my-16">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
