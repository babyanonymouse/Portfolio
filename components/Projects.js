import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="flex flex-col max-w-[100rem] mx-auto">
      <div>
        <h1 className="sm:text-4xl md:text-5xl lg:text-7xl font-bebas">
          Featured Projects
        </h1>
        <p className="font-manrope text-light sm:text-lg md:text-xl lg:text-2xl">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      {/* projects */}
      <div className="flex space-x-32 mt-9 justify-center">
        {/* image */}
        <div className="bg-[#1a1a1a] rounded-lg p-5">
          <div className="bg-[#1a1a1a] py-11 px-5 rounded-2xl">
            <Image
              src="/images/kuza.png"
              width={600}
              height={600}
              alt="Kuza Beyond"
              className="rounded-2xl"
            />
          </div>
        </div>
        {/* description */}
        <div className="flex flex-col space-y-7 max-w-xl justify-center font-manrope">
          <h1 className="text-3xl font-medium">Kuza Beyond</h1>
          <p className="text-light text-lg">
            Designed and built. it's a website for a fintech Company whose
            purpose is to give business owners the ability to access loans and
            other financial services.
          </p>
          {/* project info table */}
          <div className="flex flex-col space-y-2">
            <h1 className="font-medium font-manrope uppercase text-lg">
              Project Info
            </h1>
            <hr className="border-t-2 border-[#484848] w-full" />
            <div className="flex justify-between">
              <p className="text-light">Role</p>
              <p className="text-light">Front-end Developer</p>
            </div>
            <hr className="border-t-2 border-[#484848] w-full" />
            <div className="flex justify-between">
              <p className="text-light">Tech Stack</p>
              <p className="text-light">
                Vite(React), Tailwind, Framer Motion, CSS
              </p>
            </div>
            <hr className="border-t-2 border-[#484848] w-full" />
          </div>
          {/* links */}
          <div className="flex space-x-4 text-accent uppercase font-medium">
            <a
              href="https://kuza-beyond.com"
              className="underline underline-offset-4 decoration-2"
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
            {/* <a href="#" className="underline underline-offset-4 decoration-2">
              See on Github
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
