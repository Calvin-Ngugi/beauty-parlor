import { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { GiPlayButton } from "react-icons/gi";
import InfoSection from "./InfoSection";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const handleClick = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div className="bg-[url('header-img.jpg')] bg-center bg-cover min-h-screen text-white md:mb-64">
      <Navbar />
      <MobileNav
        isMenu={isMenu}
        setIsMenu={setIsMenu}
        handleClick={handleClick}
      />
      <div className="flex flex-col justify-center h-[80vh] w-[80%] m-auto">
        <h1 className="text-[60px] font-semibold w-[100px] mb-5">
          Lunar Parlour
        </h1>
        <p className="w-[350px] mb-5 text-[18px] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum
          at asperiores quasi, quibusdam alias. Quia, voluptas rerum aliquam est
          minima temporibus doloremque ipsa? Ipsam ullam nostrum nisi libero
          alias
        </p>
        <GiPlayButton className="text-[40px] text-pink-300" />
      </div>
      <div className="md:block hidden">
        <InfoSection />
      </div>
    </div>
  );
};

export default Header;
