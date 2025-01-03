import React from "react";

const Projects = () => {
  return (
    <section className="flex flex-col max-w-[100rem] mx-auto">
      <div className="my-9">
        <h1 className="sm:text-4xl md:text-5xl lg:text-7xl font-bebas">
          Featured Projects
        </h1>
        <p className="font-manrope text-light sm:text-lg md:text-xl lg:text-2xl">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      <div className="space-y-24">
        {/* project 1 */}
        <div className="flex space-x-32 mt-9 justify-center">
          {/* image */}
          <div className="bg-[#1a1a1a] rounded-lg  transform hover:-translate-y-6 hover:bg-buttonback transition-transform duration-300">
            <img
              width={550}
              src="/images/kuza.png"
              alt="Kuza Beyond"
              className="rounded-2xl  h-80 my-24 mx-9"
            />
          </div>
          {/* description */}
          <div className="flex flex-col space-y-7 max-w-xl justify-center font-manrope">
            <h1 className="text-3xl font-medium">Kuza Beyond</h1>
            <p className="text-light text-lg">
              Designed and built. it's a website for a fintech Company whose
              purpose is to give business owners the ability to access loans and
              other financial services.
            </p>
            {/* info table */}
            <div className="flex flex-col space-y-2">
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
            <div className="flex space-x-4 text-accent uppercase font-medium">
              <a
                href="https://kuza-beyond.com"
                className="underline underline-offset-4 decoration-2 hover:text-light"
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
        <div className="flex space-x-32 mt-9 justify-center">
          {/* image */}
          <div className="bg-[#1a1a1a] rounded-lg  transform hover:-translate-y-6 hover:bg-buttonback transition-transform duration-300">
            <img
              width={550}
              src="/images/vortex.png"
              alt="Vortex Restaurant"
              className="rounded-2xl h-80 my-24 mx-9"
            />
          </div>
          {/* description */}
          <div className="flex flex-col space-y-7 max-w-xl justify-center font-manrope">
            <h1 className="text-3xl font-medium">Vortex Restaurant</h1>
            <p className="text-light text-lg">
              Built using Bootstrap 5 and colab with campus friends, this is a
              fun project website for a Restaurant (might be true some other
              time). It's a simple website that showcases the menu and location
              of the restaurant.
            </p>
            {/* info table */}
            <div className="flex flex-col space-y-2">
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
            <div className="flex space-x-4 text-accent uppercase font-medium">
              <a
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
                href="https://github.com/babyanonymouse/Vortex-Restaurant/"
                className="underline underline-offset-4 decoration-2 hover:text-light"
              >
                See on Github
              </a>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className="flex space-x-32 mt-9 justify-center">
          {/* image */}
          <div className="bg-[#1a1a1a] rounded-lg  transform hover:-translate-y-6 hover:bg-buttonback transition-transform duration-300">
            <img
              width={550}
              src="/images/parkpave.png"
              alt="ParkPave"
              className="rounded-2xl h-80 my-24 mx-9"
            />
          </div>
          {/* description */}
          <div className="flex flex-col space-y-7 max-w-xl justify-center font-manrope">
            <h1 className="text-3xl font-medium">
              ParkPave
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 inline ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </h1>
            <p className="text-light text-lg">
              Built using Bootstrap 5 and colab with campus friends, this is a
              fun project website for a Restaurant (might be true some other
              time). It's a simple website that showcases the menu and location
              of the restaurant.
            </p>
            {/* info table */}
            <div className="flex flex-col space-y-2">
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
            <div className="flex space-x-4 text-accent uppercase font-medium">
              <a
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
                href="https://github.com/babyanonymouse/Vortex-Restaurant/"
                className="underline underline-offset-4 decoration-2 hover:text-light"
              >
                See on Github
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/babyanoymouse/"
            className="p-2 text-black rounded-lg bg-accent hover:bg-buttonback hover:text-light duration-300"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
