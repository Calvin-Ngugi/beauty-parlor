import { BiMenuAltRight } from "react-icons/bi";

const MobileNav = () => {
    return (
      <div className="md:hidden flex text-white w-[90%] m-auto pt-2 justify-between">
            <div className="font-bold text-[20px]">LUNAR SPA</div>
            <div className="text-[35px] cursor-pointer">
                <BiMenuAltRight />
            </div>
      </div>
    );
}

export default MobileNav