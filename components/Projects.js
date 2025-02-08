import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="flex flex-col max-w-full md:max-w-[100rem] mx-auto">
      {/* Title & Description */}
      <motion.div
        className="mt-9 text-center md:text-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bebas">Featured Projects</h1>
        <p className="font-manrope text-light sm:text-lg md:text-xl lg:text-2xl">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </motion.div>

      {/* Project Wrapper */}
      <div className="space-y-24 my-2">
        {/* Project 1 - Kuza Beyond */}
        <motion.div
          className="px-5 md:px-0 flex flex-col md:flex-row md:space-x-32 mt-9 justify-evenly"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Image */}
          <motion.div
            className="bg-[#1a1a1a] rounded-lg hover:-translate-y-3 hover:bg-cardhover transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              width={500}
              src="/images/kuza.png"
              alt="Kuza Beyond"
              className="rounded-2xl md:h-80 md:my-24 md:mx-10"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-6 md:space-y-7 max-w-xl justify-center mt-4 md:mt-0"
          >
            <h1 className="text-3xl font-medium text-center md:text-start">
              Kuza Beyond
            </h1>
            <p className="text-center md:text-start text-light text-sm md:text-lg">
              Designed and built. It's a website for a fintech company that
              provides business owners access to loans and financial services.
            </p>

            {/* Info Table */}
            <div className="flex flex-col space-y-2 text-sm md:text-lg">
              <h1 className="font-medium font-manrope uppercase text-lg">
                Project Info
              </h1>
              <hr className="border-t-2 border-[#484848] w-full" />
              <div className="flex justify-between">
                <p className="text-light">Role</p>
                <p className="text-light">Designer & Developer</p>
              </div>
              <hr className="border-t-2 border-[#484848] w-full" />
              <div className="flex justify-between">
                <p className="text-light">Tech Stack</p>
                <p className="text-light">
                  Vite (React), Tailwind, Framer Motion
                </p>
              </div>
              <hr className="border-t-2 border-[#484848] w-full" />
            </div>

            {/* Links */}
            <div className="flex space-x-4 text-accent uppercase font-bold justify-center md:justify-start">
              <a
                target="_blank"
                href="https://kuza-beyond.com"
                className="underline underline-offset-4 decoration-2 hover:text-light"
              >
                Go to Site
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Project 2 - Vortex Restaurant */}
        <motion.div
          className="px-5 md:px-0 flex flex-col md:flex-row md:space-x-32 mt-9 justify-evenly"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Image */}
          <motion.div
            className="bg-[#1a1a1a] rounded-lg hover:-translate-y-3 hover:bg-cardhover transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              width={500}
              src="/images/vortex.png"
              alt="Vortex Restaurant"
              className="rounded-2xl md:h-80 md:my-24 md:mx-10"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Description */}
          <motion.div
            className="flex flex-col space-y-6 md:space-y-7 max-w-xl justify-center mt-4 md:mt-0"
            initial={{ opcaity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-3xl font-medium text-center md:text-start">
              Vortex Restaurant
            </h1>
            <p className="text-center md:text-start text-light text-sm md:text-lg">
              Built using Bootstrap 5 in collaboration with campus friends, this
              fun project showcases a restaurant's menu and location.
            </p>

            {/* Info Table */}
            <div className="flex flex-col space-y-2 text-sm md:text-lg">
              <h1 className="font-medium font-manrope uppercase text-lg">
                Project Info
              </h1>
              <hr className="border-t-2 border-[#484848] w-full" />
              <div className="flex justify-between">
                <p className="text-light">Role</p>
                <p className="text-light">Developer</p>
              </div>
              <hr className="border-t-2 border-[#484848] w-full" />
              <div className="flex justify-between">
                <p className="text-light">Tech Stack</p>
                <p className="text-light">Bootstrap, JavaScript, CSS</p>
              </div>
              <hr className="border-t-2 border-[#484848] w-full" />
            </div>

            {/* Links */}
            <div className="flex space-x-4 text-accent uppercase font-bold justify-center md:justify-start">
              <a
                target="_blank"
                href="https://babyanonymouse.github.io/Vortex-Restaurant/"
                className="underline underline-offset-4 decoration-2 hover:text-light"
              >
                Live Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/babyanonymouse/Vortex-Restaurant/"
                className="underline underline-offset-4 decoration-2 hover:text-light flex items-center"
              >
                See on GitHub <FaGithub className="ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="https://github.com/babyanonymouse/"
            target="_blank"
            className="p-2 text-black font-bold rounded-lg bg-accent hover:bg-cardhover hover:text-light duration-300"
          >
            More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
