import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { useScroll } from "./useScroll";
import { motion } from 'framer-motion';
import { footerTextAnimation } from "../Animation";

function Footer() {
  const [element, controls] = useScroll();
  return (
    <footer
      className="flex flex-col space-y-10 justify-center p-7 bg-black text-slate-200"
      ref={element}
    >
      <motion.nav
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
        className="flex justify-center flex-wrap gap-6 font-medium"
      >
        <a className="hover:text-white" href="/">
          Home
        </a>
        <a className="hover:text-white" href="#services">
          Services
        </a>
        <a className="hover:text-white" href="#portfolio">
          Gallery
        </a>
        <a className="hover:text-white" href="#blog">
          Blog
        </a>
        <a className="hover:text-white" href="#media">
          Media
        </a>
        <a className="hover:text-white" href="#contact">
          Contact
        </a>
      </motion.nav>

      <motion.div
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
        className="flex justify-center space-x-5"
      >
        <FaFacebook />
        <AiFillInstagram />
        <FaTwitterSquare />
      </motion.div>
      <p className="text-center text-slate-100 font-medium">
        &copy; 2022 Company Ltd. All rights reservered.
      </p>
    </footer>
  );
}

export default Footer;
