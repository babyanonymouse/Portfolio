import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// navbar json
const navLinks = [
  { id: 1, title: "Projects", link: "projects" },
  { id: 2, title: "About", link: "about" },
  { id: 3, title: "Contact", link: "contact" },
];

const Header = () => {
  return (
    <header className="text-white bg-bodydark">
      <nav className="fixed top-0 left-0 w-full p-3 shadow-md shadow-white z-20 lg:relative lg:shadow-none max-w-[110rem] mx-auto">
        <motion.div
          className="flex justify-between items-center p-4 lg:px-20"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          {/* logo */}
          <div className="font-bebas text-4xl hover:text-light duration-150">
            <Link href="/">Samuel Lwanga</Link>
          </div>
          {/* links */}
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
      </nav>
    </header>
  );
};

export default Header;
