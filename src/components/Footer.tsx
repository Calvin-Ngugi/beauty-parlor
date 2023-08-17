import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center p-7 bg-black text-slate-200">
      <nav className="flex justify-center flex-wrap gap-6 font-medium">
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
      </nav>

      <div className="flex justify-center space-x-5">
        <FaFacebook />
        <AiFillInstagram />
        <FaTwitterSquare />
      </div>
      <p className="text-center text-slate-100 font-medium">
        &copy; 2022 Company Ltd. All rights reservered.
      </p>
    </footer>
  );
}

export default Footer;
