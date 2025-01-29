import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

//  SVG Import
import Vscode from "../public/vscode.svg";
import CSS from "../public/css.svg";
import HTML from "../public/html.svg";
import JS from "../public/js.svg";
import ReactSVG from "../public/react.svg";
import Tailwind from "../public/tailwind.svg";
import Sass from "../public/sass.svg";
import Contact from "@/components/Contact";

const about = () => {
  return (
    <section className="max-w-[100rem] mx-auto py-8 px-5 md:mt-44 space-y-24">
      {/* about me */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 w-full text-center md:text-start">
          <h1 className="font-medium uppercase font-bebas text-6xl md:text-8xl">
            About Me
          </h1>
        </div>
        <div className="md:w-3/5 space-y-5">
          <h2 className=" text-xl md:text-4xl font-manrope font-light text-center md:text-start mt-4 md:mt-0">
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
          {/* social icons */}
          <div className="flex space-x-4 md:space-x-6 mt-6 items-center justify-center md:justify-start">
            <a
              href="https://linktr.ee/Samuel_Lwanga"
              target="_blank"
              className="btn w-60 items-center uppercase font-bold font-manrope flex justify-around text-sm md:text-base"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-8 h-8 md:w-9 md:h-9 bg-bodydark rounded-full text-white p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
                on the radar amp
              </svg>
            </a>
            <a
              href="https://ke.linkedin.com/in/lwangasamuel"
              className="bg-cardhover rounded-full  text-xl md:text-3xl text-accent p-3"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/babyanonymouse"
              className="bg-cardhover rounded-full text-xl md:text-3xl text-accent p-3"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="">
        <Image
          src={"/images/aboutimage.png"}
          width={900}
          height={900}
          className="w-full h-full"
        />
      </div>

      {/* capabilities */}
      <div className="flex flex-col md:flex-row my-5">
        <div className="md:w-2/5 w-full text-center md:text-start">
          <h1 className="font-medium uppercase font-bebas text-6xl md:text-8xl ">
            My Capabilities
          </h1>
        </div>
        <div className="flex flex-col space-y-5 md:w-3/5">
          <p className="text-light text-sm md:text-lg">
            I am a frontend developer with a background in backend engineering.
            I am passionate about building accessible and user-friendly
            websites. I enjoy learning new technologies and contributing to
            open-source projects. My goal is to create impactful and inclusive
            digital experiences.
          </p>
          {/* languages */}
          <ul className="flex flex-wrap gap-2 font-bold text-sm md:text-base text-center uppercase">
            <li className="p-3 px-7 rounded-full border border-light hover:bg-[#e34c26] hover:text-white transition duration-300">
              HTML
            </li>
            <li className="p-3 px-7 rounded-full border border-light hover:bg-[#1572B6] hover:text-white transition duration-300">
              CSS
            </li>
            <li className="p-3 px-7 rounded-full border border-light hover:bg-[#F7DF1E] hover:text-black transition duration-300">
              JavaScript
            </li>
            <li className="p-3 px-7 rounded-full border border-light hover:bg-[#61DAFB] hover:text-black transition duration-300">
              React
            </li>
            <li className="p-3 px-7 rounded-full border border-light hover:bg-[#646CFF] hover:text-white transition duration-300">
              Vite
            </li>
            <li className="p-3 px-7 rounded-full border border-light hover:bg-[#000000] hover:text-white transition duration-300">
              Next.js
            </li>
            <li className="p-3 px-7 rounded-full border border-light hover:bg-[#06B6D4] hover:text-black transition duration-300">
              Tailwind CSS
            </li>
            <li className="p-3 px-7 rounded-full border border-light hover:bg-[#CC6699] hover:text-white transition duration-300">
              Sass
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t-2 border-gray-600 opacity-75 max-w-7xl mx-auto my-9" />

      {/* Experience */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-2/5 w-full text-center md:text-start">
          <h1 className="font-medium uppercase font-bebas text-6xl md:text-8xl">
            My Experience
          </h1>
        </div>

        <div className="md:w-3/5">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {/* Timeline Item 1 */}
            <li className="mb-10 pl-6">
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[0.390rem] border border-white dark:border-gray-900 dark:bg-accent"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July 2019
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Freelance Developer
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                As a freelance developer, I've worked on diverse projects,
                refining my skills in both frontend and backend development.
                From responsive websites to custom web apps, I've gained
                valuable experience while enhancing my problem-solving,
                communication, and time management skills. Collaborating with
                clients across industries has deepened my understanding of
                user-centric design, making freelancing a rewarding and
                growth-driven journey.
              </p>
            </li>

            {/* Timeline Item 2 */}
            <li className="mb-10 pl-6">
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[0.390rem] border border-white dark:border-gray-900 dark:bg-accent"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August 2024
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                IT Attachee
              </h3>
              <span className="text-sm font-medium">
                <a href="https://nairobi.go.ke/" className="text-accent">
                  Nairobi City Council
                </a>
              </span>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                During my attachment at Nairobi City Council, I was exposed to
                various aspects of IT support and maintenance. I gained hands-on
                experience in troubleshooting hardware and software issues,
                setting up and configuring computer systems, and providing
                technical assistance to staff. This role honed my
                problem-solving skills and equipped me with the foundational
                knowledge needed to excel in the tech industry
              </p>
            </li>

            {/* Timeline Item 3 */}
            <li className="pl-6">
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[0.390rem] border border-white dark:border-gray-900 dark:bg-accent"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI Code in Tailwind CSS
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default about;
