import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around p-8 mx-auto max-w-[100rem] mt-14 md:mt-28">
      {/* content */}
      <div className="flex flex-col space-y-4 md:space-y-6 order-2 md:order-1 w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-bebas text-5xl md:text-6xl lg:text-8xl mt-4 md:mt-0">
          Hi, I am <br /> Samuel Lwanga.
        </h1>
        <p className="font-manrope text-light text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto md:mx-0">
          A Kenyan based front-end developer passionate about building
          accessible and user friendly websites.
        </p>
        {/* social icons */}
        <div className="flex space-x-4 md:space-x-6 mt-6 items-center justify-center md:justify-start">
          <a
            href="https://linktr.ee/Samuel_Lwanga"
            target="_blank"
            className="btn  w-44 items-center uppercase font-bold font-manrope flex justify-around text-sm md:text-base"
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
      {/* image */}
      <div className="order-1 md:order-2 w-full md:w-auto mt-8 md:mt-0">
        <Image
          src="/images/image.png"
          alt="me"
          width={600}
          height={700}
          className="rounded-2xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
