import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around p-8 mx-auto max-w-[100rem] mt-14 md:mt-28">
      {/* Content */}
      <motion.div
        className="flex flex-col space-y-4 md:space-y-6 order-2 md:order-1 w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="font-bebas text-5xl md:text-6xl lg:text-8xl mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I am <br /> Samuel Lwanga.
        </motion.h1>

        <motion.p
          className="font-manrope text-light text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A Kenyan-based front-end developer passionate about building
          accessible and user-friendly websites.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-4 md:space-x-6 mt-6 items-center justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.a
            href="https://linktr.ee/Samuel_Lwanga"
            target="_blank"
            className="btn w-44 items-center uppercase font-bold font-manrope flex justify-around text-sm md:text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
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
            </svg>
          </motion.a>

          <motion.a
            href="https://ke.linkedin.com/in/oudasamuel"
            className="bg-cardhover rounded-full text-xl md:text-3xl text-accent p-3"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedinIn />
          </motion.a>

          <motion.a
            href="https://github.com/babyanonymouse"
            className="bg-cardhover rounded-full text-xl md:text-3xl text-accent p-3"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="order-1 md:order-2 w-full md:w-auto mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/image.png"
          alt="me"
          width={600}
          height={700}
          className="rounded-2xl mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
