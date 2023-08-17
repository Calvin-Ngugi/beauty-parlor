import Title from "./Title";
import { FaLeaf, FaHeart } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { GiPlayButton } from "react-icons/gi";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "../Animation";

const Services = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="mt-10 mb-20"
      ref={element}
      animate={controls}
      variants={servicesAnimations}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
    >
      <h1 className="md:hidden text-purple-800 text-[40px] font-semibold text-center mb-5">
        Services
      </h1>
      <div
        className="md:w-[90%] grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 items-center md:ms-0 md:me-0 mb-5"
        id="services"
      >
        <div className="hidden md:block row-span-2">
          <Title value="SERVICES" />
        </div>
        <div className="flex flex-col p-6 pb-10">
          <div className=" flex flex-col items-center">
            <FaLeaf className="text-[80px] text-purple-700" />
          </div>
          <small className="font-semibold mt-10 text-[12px]">01</small>
          <h1 className="text-pink-500 text-[32px] font-bold">Hair Services</h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <GiPlayButton className="text-[40px] text-pink-500 mt-10" />
        </div>
        <div className="flex flex-col bg-slate-900 text-white p-6 pb-10">
          <div className=" flex flex-col items-center">
            <PiFlowerLotus className="text-[80px] text-white" />
          </div>
          <small className="font-semibold mt-10 text-[12px]">02</small>
          <h1 className="text-pink-500 text-[32px] font-bold">Skin care</h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <GiPlayButton className="text-[40px] text-white mt-10" />
        </div>
        <div className="flex flex-col p-6 pb-10">
          <div className=" flex flex-col items-center">
            <FaHeart className="text-[80px] text-purple-700" />
          </div>
          <small className="font-semibold mt-10 text-[12px]">03</small>
          <h1 className="text-pink-500 text-[32px] font-bold">
            Nail Art /Acrylics
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <GiPlayButton className="text-[40px] text-pink-500 mt-10" />
        </div>
        <div className="flex flex-col bg-slate-900 text-white p-6 pb-10">
          <div className=" flex flex-col items-center">
            <PiFlowerLotus className="text-[80px] text-white" />
          </div>
          <small className="font-semibold mt-10 text-[12px]">04</small>
          <h1 className="text-pink-500 text-[32px] font-bold">Treatment</h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <GiPlayButton className="text-[40px] text-white mt-10" />
        </div>
        <div className="flex flex-col p-6 pb-10">
          <div className=" flex flex-col items-center">
            <FaHeart className="text-[80px] text-purple-700" />
          </div>
          <small className="font-semibold mt-10 text-[12px]">05</small>
          <h1 className="text-pink-500 text-[32px] font-bold">Massage</h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <GiPlayButton className="text-[40px] text-pink-500 mt-10" />
        </div>
        <div className="flex flex-col bg-slate-900 text-white p-6 pb-10">
          <div className=" flex flex-col items-center">
            <PiFlowerLotus className="text-[80px] text-white" />
          </div>
          <small className="font-semibold mt-10 text-[12px]">06</small>
          <h1 className="text-pink-500 text-[32px] font-bold">Waxing</h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti iste quaerat vel nemo, officiis eligendi eum placeat
            molestiae voluptatem sunt libero aut ad voluptates accusantium
            quasi, esse tempora laboriosam.
          </p>
          <GiPlayButton className="text-[40px] text-white mt-10" />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
