import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="flex flex-col max-w-full md:max-w-[100rem] mx-auto">
      <div className="mt-9 text-center md:text-start">
        <h1 className="text-5xl md:text-7xl font-bebas">Featured Projects</h1>
        <p className="font-manrope text-light sm:text-lg md:text-xl lg:text-2xl">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      {/* project wrapper */}
      <div className="space-y-24 my-2">
        {/* project 1 */}
        <div className="px-5 md:px-0 flex flex-col md:flex-row  md:space-x-32 mt-9 justify-evenly">
          {/* image */}
          <div className="bg-[#1a1a1a] rounded-lg transform hover:-translate-y-6 hover:bg-cardhover transition-transform duration-300">
            <img
              width={500}
              src="/images/kuza.png"
              alt="Kuza Beyond"
              className="rounded-2xl md:h-80 md:my-24 md:mx-10"
            />
          </div>
          {/* description */}
          <div className="flex flex-col space-y-6 md:space-y-7 max-w-xl justify-center mt-4 md:mt-0">
            <h1 className="text-3xl font-medium text-center md:text-start">
              Kuza Beyond
            </h1>
            <p className="text-center md:text-start text-light text-sm md:text-lg">
              Designed and built. it's a website for a fintech Company whose
              purpose is to give business owners the ability to access loans and
              other financial services.
            </p>
            {/* info table */}
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
                  Vite(React), Tailwind, Framer Motion
                </p>
              </div>
              <hr className="border-t-2 border-[#484848] w-full" />
            </div>
            {/* links */}
            <div className="flex space-x-4 text-accent uppercase font-bold justify-center md:justify-start">
              <a
                target="_blank"
                href="https://kuza-beyond.com"
                className="underline underline-offset-4 decoration-2 hover:text-light "
              >
                go to site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className="px-5 md:px-0 flex flex-col md:flex-row md:space-x-32 mt-9 justify-evenly">
          {/* image */}
          <div className="bg-[#1a1a1a] rounded-lg  transform hover:-translate-y-6 hover:bg-cardhover transition-transform duration-300">
            <img
              width={500}
              src="/images/vortex.png"
              alt="Vortex Restaurant"
              className="rounded-2xl md:h-80 md:my-24 md:mx-10"
            />
          </div>
          {/* description */}
          <div className="flex flex-col space-y-6 md:space-y-7 max-w-xl justify-center mt-4 md:mt-0">
            <h1 className="text-3xl font-medium text-center md:text-start">
              Vortex Restaurant
            </h1>
            <p className="text-center md:text-start text-light text-sm md:text-lg">
              Built using Bootstrap 5 and colab with campus friends, this is a
              fun project website for a Restaurant (might be true some other
              time). It's a simple website that showcases the menu and location
              of the restaurant.
            </p>
            {/* info table */}
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
                <p className="text-light">Bootstrap, Javascript, CSS</p>
              </div>
              <hr className="border-t-2 border-[#484848] w-full" />
            </div>
            {/* links */}
            <div className="flex space-x-4 text-accent uppercase font-bold justify-center md:justify-start">
              <a
                target="_blank"
                href="https://babyanonymouse.github.io/Vortex-Restaurant/"
                className="underline underline-offset-4 decoration-2 hover:text-light"
              >
                Live Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://github.com/babyanonymouse/Vortex-Restaurant/"
                className="underline underline-offset-4 decoration-2 hover:text-light"
              >
                See on Github
                <FaGithub  className="inline ml-2"/>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/babyanonymouse/"
            target="_blank"
            className="p-2 text-black font-bold rounded-lg bg-accent hover:bg-cardhover hover:text-light duration-300"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
