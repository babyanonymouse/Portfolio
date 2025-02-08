import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-[100rem] mx-auto py-8 px-5">
      {/* About Me Heading */}
      <motion.div
        className="md:w-2/5 w-full text-center md:text-start"
        initial={{ opacity: 0 }} // Start hidden, slide in from left
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }} // Fade out when scrolling away
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-medium uppercase font-bebas text-5xl md:text-7xl">
          About Me
        </h1>
      </motion.div>

      {/* About Description */}
      <motion.div
        className="md:w-3/5 space-y-5"
        initial={{ opacity: 0}} // Slide in from right
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-xl md:text-4xl font-manrope font-light text-center md:text-start mt-4 md:mt-0">
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

        {/* More About Me Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }} // Fade in from below
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="/about"
            className="p-3 text-accent font-bold uppercase underline underline-offset-4"
            whileHover={{ scale: 1.1 }} // Slight zoom on hover
            transition={{ duration: 0.2 }}
          >
            More about me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
