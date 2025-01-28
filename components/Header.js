import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

// navbar json
const navLinks = [
  { id: 1, title: "Projects", link: "projects" },
  { id: 2, title: "About", link: "about" },
  { id: 3, title: "Contact", link: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="text-white bg-bodydark">
      <nav className="fixed top-0 left-0 w-full p-3 shadow-md z-20 lg:relative lg:shadow-none max-w-[110rem] mx-auto">
        <motion.div
          className="flex justify-between items-center p-4 lg:px-20"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          {/* Logo */}
          <div className="font-bebas text-4xl hover:text-light duration-150">
            <Link href="/">Samuel Lwanga</Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-3xl text-light focus:outline-none"
            >
              {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block font-inter cursor-pointer">
            <ul className="flex space-x-6 text-xl text-light">
              {navLinks.map((link) => (
                <li key={link.id} className="hover:text-white duration-200">
                  <ScrollLink to={link.link} smooth={true} duration={500}>
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-bodydark absolute top-full left-0 w-full shadow-md"
          >
            <ul className="flex flex-col items-center space-y-4 p-4 text-xl text-light font-inter">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:text-white duration-200"
                  onClick={closeMenu} // Close menu when clicked
                >
                  <ScrollLink
                    to={link.link}
                    smooth={true}
                    duration={500}
                    onClick={closeMenu} // Close menu on link click
                  >
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
