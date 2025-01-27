import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="flex justify-between max-w-[100rem] mx-auto p-8">
      {/* socials */}
      <div>
        <h1 className="w-1/2 font-bebas sm:text-4xl md:text-5xl lg:text-7xl">
          let's connect
        </h1>
        <p>
          say hello at
          <a href="mailto:babyanonymouse2@gmail.com">
            babyanonymouse2@gmail.com
          </a>
        </p>
        <br />
        For more info, Here' my <a href="#">Resume</a>
        {/* social icons */}
        <div className="flex space-x-6 mt-6 items-center">
          <FiLinkedin />
          <FiGithub />
          <FaXTwitter />
        </div>
      </div>
      {/* contact form */}
      <div className="w-1/2 flex flex-col">
        <form action="#">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button
            type="submit"
            className="btn uppercase font-bold font-manrope"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
