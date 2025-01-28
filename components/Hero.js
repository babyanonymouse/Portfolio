import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex text-white items-center justify-around p-8 mx-auto max-w-[100rem]">
      {/* content */}
      <div className="flex flex-col space-y-4">
        <h1 className="font-bebas sm:text-5xl md:text-6xl lg:text-8xl max-w-xl">
          Hi, I am <br /> Samuel Lwanga.
        </h1>
        <p className="font-manrope text-light sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
          A Kenyan based front-end developer passionate about building
          accessible and user friendly websites.
        </p>
        {/* social icons */}
        <div className="flex space-x-6 mt-6 items-center">
          <a
            href="https://linktr.ee/Samuel_Lwanga"
            target="_blank"
            className="btn items-center uppercase font-bold font-manrope flex justify-around"
          >
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-9 h-9 bg-bodydark rounded-full text-white p-2"
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
            href="https://linkedin.com/#"
            className="bg-cardhover rounded-full text-3xl text-accent p-3"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="_blank"
            href="https://github.com/babyanonymouse"
            className="bg-cardhover rounded-full text-3xl text-accent p-3"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      {/* image */}
      <div className="">
        <Image src="/images/image.png" alt="me" width={600} height={700} />
      </div>
    </section>
  );
};

export default Hero;
