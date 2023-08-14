const Navbar = () => {
  return (
    <div className="hidden md:flex justify-between w-[90%] m-auto text-white pt-2">
      <div className="font-bold text-[20px]">LUNAR SPA</div>
      <div>
        <ul className="flex gap-3">
          <li className="text-[18px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">HOME</li>
          <li className="text-[18px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">SERVICES</li>
          <li className="text-[18px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">PORTFOLIO</li>
          <li className="text-[18px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">BLOG</li>
          <li className="text-[18px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">SKILLS</li>
          <li className="text-[18px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
