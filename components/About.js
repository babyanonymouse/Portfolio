import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-[100rem] mx-auto py-8 px-5">
      {/* about me text */}
      <div className="md:w-2/5 w-full text-center md:text-start">
        <h1 className="font-medium uppercase font-bebas text-5xl md:text-7xl">About Me</h1>
      </div>
      {/* description */}
      <div className="md:w-3/5 space-y-5">
        <h2 className=" text-xl md:text-4xl font-manrope font-light text-center md:text-start mt-4 md:mt-0">
          Frontend Developer based in Nairobi. <br />
          Has Backend Engineering Background.
        </h2>
        <p className="font-manrope text-light text-sm md:text-lg">
          I am a self-taught developer passionate about building accessible and
          user-friendly websites. With a background in backend engineering, I am
          currently enhancing my frontend skills. I mentor at She Code Africa,
          helping aspiring female developers grow their skills and confidence. I
          enjoy learning new technologies and contributing to open-source
          projects. My goal is to create impactful and inclusive digital
          experiences.
        </p>
        <div className="flex justify-center">
          <a
            href="/about"
            className="  p-3 text-accent font-bold uppercase underline underline-offset-4 "
          >
            More about me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
