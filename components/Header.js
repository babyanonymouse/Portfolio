import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="text-white bg-bodydark">
      <nav className="fixed top-0 left-0 w-full shadow-md z-20 lg:relative lg:shadow-none">
        <motion.div
          className="flex justify-between items-center p-4 lg:px-20"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          {/* logo */}
          <div className="font-bebas text-[32px]">
            <Link href="/">Samuel Lwanga</Link>
          </div>
          {/* links */}
          <div className="hidden lg:block font-inter cursor-pointer">
            <ul className="flex space-x-5">
              <li>
                <ScrollLink to="projects" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
