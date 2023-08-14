const Navbar = () => {
  return (
    <div className="hidden md:flex justify-between items-center w-[90%] m-auto text-white pt-2">
      <div className="font-bold text-[20px]">LUNAR SPA</div>
      <div>
        <ul className="flex gap-6">
          <li className="text-[16px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">
            <a href="/">HOME</a>
          </li>
          <li className="text-[16px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">
            <a href="#services">SERVICES</a>
          </li>
          <li className="text-[16px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li className="text-[16px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">
            <a href="#blog">BLOG</a>
          </li>
          <li className="text-[16px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="text-[16px] hover:underline cursor-pointer hover:text-purple-400 hover:font-semibold">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
