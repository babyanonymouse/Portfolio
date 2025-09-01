import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Resume from "../docs/Samuel_Lwanga_CV.pdf";

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
    <motion.section
      className="max-w-[100rem] mx-auto py-8 px-5 mt-14 md:mt-28 space-y-24"
      initial={{ opacity: 0.01 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* about me */}
      <div className="flex flex-col md:flex-row">
        <motion.div
          className="md:w-2/5 w-full text-center md:text-start"
          initial={{ opacity: 0.01, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-medium uppercase font-bebas text-6xl md:text-8xl">
            About Me
          </h1>
        </motion.div>

        <motion.div
          className="md:w-3/5 space-y-5"
          initial={{ opacity: 0.01, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            <motion.a
              href={Resume}
              target="_blank"
              className="btn w-60 items-center uppercase font-bold font-manrope flex justify-around text-sm md:text-base"
              initial={{ opacity: 0.01, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
            </motion.a>
            <motion.a
              href="https://ke.linkedin.com/in/oudasamuel"
              className="bg-cardhover rounded-full  text-xl md:text-3xl text-accent p-3"
              initial={{ opacity: 0.01, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="https://github.com/babyanonymouse"
              className="bg-cardhover rounded-full text-xl md:text-3xl text-accent p-3"
              initial={{ opacity: 0.01, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0.01, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={"/images/aboutimage.png"}
          width={900}
          height={900}
          className="w-full h-full"
        />
      </motion.div>

      {/* capabilities */}
      <motion.div
        className="flex flex-col md:flex-row my-5"
        initial={{ opacity: 0.01, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
            <motion.li
              className="p-3 px-7 rounded-full border border-light hover:bg-[#e34c26] hover:text-white transition duration-300"
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              HTML
            </motion.li>
            <motion.li
              className="p-3 px-7 rounded-full border border-light hover:bg-[#1572B6] hover:text-white transition duration-300"
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              CSS
            </motion.li>
            <motion.li
              className="p-3 px-7 rounded-full border border-light hover:bg-[#F7DF1E] hover:text-black transition duration-300"
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              JavaScript
            </motion.li>
            <motion.li
              className="p-3 px-7 rounded-full border border-light hover:bg-[#61DAFB] hover:text-black transition duration-300"
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              React
            </motion.li>
            <motion.li
              className="p-3 px-7 rounded-full border border-light hover:bg-[#646CFF] hover:text-white transition duration-300"
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Vite
            </motion.li>
            <motion.li
              className="p-3 px-7 rounded-full border border-light hover:bg-[#000000] hover:text-white transition duration-300"
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Next.js
            </motion.li>
            <motion.li
              className="p-3 px-7 rounded-full border border-light hover:bg-[#06B6D4] hover:text-black transition duration-300"
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Tailwind CSS
            </motion.li>
            <motion.li
              className="p-3 px-7 rounded-full border border-light hover:bg-[#CC6699] hover:text-white transition duration-300"
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Sass
            </motion.li>
          </ul>
        </div>
      </motion.div>

      <hr className="border-t-2 border-gray-600 opacity-75 max-w-7xl mx-auto my-9" />

      {/* Experience */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-2/5 w-full text-center md:text-start">
          <h1 className="font-medium uppercase font-bebas text-6xl md:text-8xl">
            My Experience
          </h1>
        </div>

        <motion.div
          className="md:w-3/5"
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {/* Timeline Item 1 */}
            <motion.li
              className="mb-10 pl-6"
              initial={{ opacity: 0.01, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* current time */}
              <div className="absolute flex items-center justify-center w-6 h-6 bg-[#06B6D4] rounded-full -left-3 ring-4 ring-[#fff] dark:ring-[#1e293b]">
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v5h5a1 1 0 110 2h-6a1 1 0 01-1-1V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
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
            </motion.li>

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
        </motion.div>
      </div>
      {/* <Contact /> */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg mb-6">Have a project in mind? Let's discuss.</p>
        <Link href="/#contact">
          <button className="px-6 py-3 text-lg font-semibold bg-accent text-black rounded-md hover:bg-green-400 transition">
            Get in Touch
          </button>
        </Link>
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Samuel Lwanga. All rights reserved.
        </p>
      </footer>
    </motion.section>
  );
};
export default about;
