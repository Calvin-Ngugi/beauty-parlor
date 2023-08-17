import { motion } from 'framer-motion';
import { homeInfoAnimation } from "../Animation";

const InfoSection = () => {
  return (
    <motion.div
      className="md:absolute md:-bottom-36 md:right-0 bg-fuchsia-600 md:w-[46rem] w-[100%] h-[45%] text-white"
      variants={homeInfoAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
    >
      <div className="pt-14 pe-10 ps-16 pb-20">
        <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-y-7">
          <div className="flex flex-col">
            <p className="font-bold">Beauty Salon</p>
            <p className="text-[13px]">Lunar beauty parlour & spa</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Email</p>
            <p className="text-[13px]">lunabeautypalor@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Mobile</p>
            <p className="text-[13px]">+254 748 859053</p>
          </div>
          <div className="flex flex-col md:mt-12">
            <p className="font-bold">Address</p>
            <p className="text-[13px]">Alliance Tower 1st floor,</p>
            <p className="text-[13px]">Naivas area along Naivas road</p>
            <p className="text-[13px]">Kilifi, Kenya</p>
          </div>
          <div className="flex flex-col md:mt-12">
            <p className="font-bold">Socials</p>
            <p className="text-[13px]">Facebook: </p>
            <p className="text-[13px]">Lunar Beauty Palor & SPA</p>
          </div>
          <div className="flex flex-col md:mt-12">
            <p className="font-bold">Working Hours</p>
            <p className="text-[13px]">Monday to Friday</p>
            <p className="text-[13px]">0900-1900</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InfoSection