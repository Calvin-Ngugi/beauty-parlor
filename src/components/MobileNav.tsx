import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

interface MobileNavProps {
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
}
const MobileNav: React.FC<MobileNavProps> = ({
  isMenu,
  setIsMenu,
  handleClick,
}) => {
  return (
    <div className="md:hidden flex text-white w-[90%] m-auto pt-2 justify-between">
      <div className="font-bold text-[20px]">LUNAR SPA</div>
      <div className="text-[35px] cursor-pointer" onClick={handleClick}>
        <BiMenuAltRight />
      </div>
      {isMenu && (
        <div className="bg-green-600 w-[100%] h-[100%] shadow-xl flex flex-col fixed top-0 left-0">
          <button
            className="mt-2 text-[40px] right-6 top-4 absolute"
            onClick={() => setIsMenu(false)}
          >
            <IoClose />
          </button>
          <ul className="flex flex-col h-[100%] gap-5 px-8 py-4 items-center justify-center text-[25px] active:text-underline">
            <li
              className="cursor-pointer hover:font-medium hover:underline"
              onClick={() => setIsMenu(false)}
            >
              <a href="/">Home</a>
            </li>
            <li
              className="cursor-pointer hover:font-medium hover:underline"
              onClick={() => setIsMenu(false)}
            >
              <a href="#services">Services</a>
            </li>
            <li
              className="cursor-pointer hover:font-medium hover:underline"
              onClick={() => setIsMenu(false)}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className="cursor-pointer hover:font-medium hover:underline"
              onClick={() => setIsMenu(false)}
            >
              <a href="#blog">Blog</a>
            </li>
            <li
              className="cursor-pointer hover:font-medium hover:underline"
              onClick={() => setIsMenu(false)}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              className="cursor-pointer hover:font-medium hover:underline"
              onClick={() => setIsMenu(false)}
            >
              <a href="#contact">Contact</a>
            </li>
            <li
              className="cursor-pointer hover:font-medium hover:underline"
              onClick={() => setIsMenu(false)}
            ></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
