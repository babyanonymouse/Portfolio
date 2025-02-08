import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Resume from "../docs/resume.pdf";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col lg:flex-row max-w-[100rem] mx-auto px-6 py-16 gap-16"
      initial={{ opacity: 0.01, y: 10 }} // Prevent shift
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ willChange: "transform, opacity", minHeight: "50vh" }} // Reserve space
    >
      {/* Left Side: Contact Details */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0.01, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h1 className="text-5xl md:text-7xl uppercase font-bebas text-white">
          Let's Connect
        </h1>
        <p className="text-lg text-light mt-4">
          Say hello at{" "}
          <a href="mailto:babyanonymouse2@gmail.com" className="text-accent hover:underline">
            babyanonymouse2@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-400 mt-2">
          For more info, here's my{" "}
          <a href={Resume} target="_blank" className="text-accent hover:underline" rel="noopener noreferrer">
            resume
          </a>
        </p>

        {/* Social Links */}
        <motion.div
          className="md:mt-12 mt-5"
          initial={{ opacity: 0.01, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ul className="flex space-x-6 justify-center md:justify-start">
            {[FiLinkedin, FiGithub, FaXTwitter].map((Icon, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0.01, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-800 text-accent hover:bg-gray-700 transition"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Right Side: Contact Form */}
      <motion.form
        action="#"
        className="-mt-3 md:mt-0 flex-1 bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0.01, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        style={{ willChange: "transform, opacity" }}
      >
        {[
          { label: "Name", type: "text", id: "name" },
          { label: "Email", type: "email", id: "email" },
          { label: "Subject", type: "text", id: "subject" },
        ].map(({ label, type, id }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0.01, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <label htmlFor={id} className="block text-sm font-medium text-gray-400">
              {label}
            </label>
            <input
              type={type}
              id={id}
              className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-accent focus:border-accent p-2 md:p-3"
            />
          </motion.div>
        ))}

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0.01, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-accent focus:border-accent p-2 md:p-3"
          ></textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-accent text-black font-semibold py-3 rounded-md hover:bg-green-400 transition"
          initial={{ opacity: 0.01, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
