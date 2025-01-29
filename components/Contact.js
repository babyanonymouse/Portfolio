import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Resume from "../docs/resume.pdf";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row max-w-[100rem] mx-auto px-6 py-16 gap-16"
    >
      {/* Left Side: Contact Details */}
      <div className="flex-1">
        <h1 className="text-5xl md:text-7xl uppercase font-bebas text-white">
          Let's Connect
        </h1>
        <p className="text-lg text-light mt-4">
          Say hello at {""}
          <a
            href="mailto:babyanonymouse2@gmail.com"
            className="text-accent hover:underline"
          >
            babyanonymouse2@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-400 mt-2">
          For more info, here's my{" "}
          <a
            href={Resume}
            target="_blank"
            className="text-accent hover:underline"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </p>
        {/* Social Links */}
        <div className="md:mt-12 mt-5">
          <ul className="flex space-x-6 justify-center md:justify-start">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-800 text-accent hover:bg-gray-700 transition"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-800 text-accent hover:bg-gray-700 transition"
              >
                <FiGithub className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-800 text-accent hover:bg-gray-700 transition"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <form
        action="#"
        className="-mt-3 md:mt-0 flex-1 bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-accent focus:border-accent p-2 md:p-3"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-accent focus:border-accent p-2 md:p-3"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-400"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-accent focus:border-accent p-2 md:p-3"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-accent focus:border-accent p-2 md:p-3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-black font-semibold py-3 rounded-md hover:bg-green-400 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
