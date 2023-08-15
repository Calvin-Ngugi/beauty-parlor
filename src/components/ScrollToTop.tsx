import { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 text-[35px] text-pink-600 cursor-pointer transition-opacity ${
        isVisible ? "sm:opacity-100 opacity-0" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <IoIosArrowDropupCircle />
    </div>
  );
};

export default ScrollToTop;
