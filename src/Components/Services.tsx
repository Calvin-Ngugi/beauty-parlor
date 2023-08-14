import Title from "./Title";
import { FaLeaf, FaHeart } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { GiPlayButton } from "react-icons/gi";

const Services = () => {
  return (
    <div className="md:w-[93%] grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 items-center mt-10 md:ms-0 md:me-0 sm:gap-5">
      <div className="hidden md:block">
        <Title value="services" />
      </div>
      <div className="flex flex-col p-6">
        <div className=" flex flex-col items-center">
          <FaLeaf className="text-[80px] text-purple-700" />
          <h1 className="text-pink-500 text-[32px] font-bold mt-10">Blowout</h1>
          <p className="text-center mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
        </div>
        <GiPlayButton className="text-[40px] text-pink-500 mt-10" />
      </div>
      <div className="flex flex-col bg-slate-900 text-white p-6 pb-10">
        <div className=" flex flex-col items-center">
          <PiFlowerLotus className="text-[80px] text-white" />
          <h1 className="text-pink-500 text-[32px] font-bold mt-10">Olaplex</h1>
          <p className="text-center mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
        </div>
        <GiPlayButton className="text-[40px] text-white mt-10" />
      </div>
      <div className="flex flex-col p-6">
        <div className=" flex flex-col items-center">
          <FaHeart className="text-[80px] text-purple-700" />
          <h1 className="text-pink-500 text-[32px] font-bold mt-10">Retouch</h1>
          <p className="text-center mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
        </div>
        <GiPlayButton className="text-[40px] text-pink-500 mt-10" />
      </div>
    </div>
  );
};

export default Services;
