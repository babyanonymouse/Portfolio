import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row md:max-w-[100rem] mx-auto py-16 px-5">
      {/* About wrapper */}
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:gap-16 max-w-8xl mx-auto justify-between ">
        {/* About Me Heading */}
        <motion.div
          className="xl:text-start flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-medium uppercase font-bebas text-5xl md:text-7xl">
            About Me
          </h1>
        </motion.div>

        {/* About Description */}
        <motion.div
          className="space-y-5 text-center lg:text-start xl:max-w-4xl lg:max-w-2xl mx-auto flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-4xl font-manrope font-light mt-4 md:mt-0">
            Frontend Developer based in Nairobi. <br />
            Has Backend Engineering Background.
          </h2>
          <p className="font-manrope text-light text-sm md:text-lg">
            I am a self-taught developer passionate about building accessible
            and user-friendly websites. With a background in backend
            engineering, I am currently enhancing my frontend skills. I mentor
            at She Code Africa, helping aspiring female developers grow their
            skills and confidence. I enjoy learning new technologies and
            contributing to open-source projects. My goal is to create impactful
            and inclusive digital experiences.
          </p>

          {/* More About Me Button */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/about"
              className="p-3 text-accent font-bold uppercase underline underline-offset-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              More about me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
