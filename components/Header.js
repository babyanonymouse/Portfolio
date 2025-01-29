import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useRouter } from "next/router";

// Navbar JSON
const navLinks = [
  { id: 1, title: "Projects", link: "projects" },
  { id: 2, title: "About", link: "about" },
  { id: 3, title: "Contact", link: "contact" },
];

// const menuVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

const menuVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.8 },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // test if the page is the home page
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-50 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="py-2 max-w-[110rem] mx-auto px-2">
        <motion.div
          className="flex justify-between items-center p-4 lg:px-20"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          {/* Logo */}
          <div className="font-bebas text-3xl md:text-4xl hover:text-light duration-150">
            <Link href="/">Samuel Lwanga</Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
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

        {/* Mobile Navigation with Animations */}
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${
              isScrolled
                ? "bg-black bg-opacity-90 backdrop-blur-xl shadow-md"
                : "bg-bodydark"
            } lg:hidden absolute top-full left-0 w-full`}
          >
            <ul className="flex flex-col items-center space-y-6 p-4 text-2xl text-light font-inter">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:text-white duration-200"
                  onClick={closeMenu} // Close menu when clicked
                >
                  {isHomePage ? (
                    // react-scroll on Homepage
                    <ScrollLink
                      to={link.link}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu} // Close menu on link click
                    >
                      {link.title}
                    </ScrollLink>
                  ) : (
                    <Link scroll={true} href={`/#${link.link}`}>
                      {link.title}
                    </Link>
                  )}
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
