
const About = () => {
  return (
    <section className="flex max-w-[100rem] mx-auto p-8">
      {/* about me text */}
      <div className="w-2/5">
        <h1 className="uppercase font-bebas sm:text-5xl md:text-6xl lg:text-8xl">
          About Me
        </h1>
      </div>
      {/* description */}
      <div className="w-3/5 space-y-5">
        <h2 className="text-4xl font-manrope font-medium ">
          Frontend Developer based in Nairobi. <br />
          Has Backend Engineering Background.
        </h2>
        <p className="font-manrope text-light text-xl">
          I am a self-taught developer passionate about building accessible and user-friendly websites.
          With a background in backend engineering, I am currently enhancing my frontend skills.
          I mentor at She Code Africa, helping aspiring female developers grow their skills and confidence.
          I enjoy learning new technologies and contributing to open-source projects.
          My goal is to create impactful and inclusive digital experiences.
        </p>
        <div className="flex justify-center">
          <a href="/about" className="p-3 text-accent font-bold uppercase underline underline-offset-4 ">More about me</a>
        </div>
      </div>
    </section>
  );
};

export default About;
