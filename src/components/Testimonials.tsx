import { useState } from "react";
import { PiFlowerLotus } from "react-icons/pi";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { testimonialsAnimations } from "../Animation";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const [element, controls] = useScroll();
  const testimonials = [
    {
      designation: "Salon",
      name: "Julie",
      review:
        "Do labore quis sunt sint sit consectetur proident fugiat enim aliqua. Velit culpa sunt tempor nulla aliquip nostrud labore ullamco officia excepteur occaecat quis eu. Incididunt anim do do culpa duis non proident enim nisi id irure eiusmod nisi.",
    },
    {
      designation: "Full Makeup",
      name: "Esther",
      review:
        "Quis fugiat ex officia quis fugiat culpa tempor voluptate amet nulla aliquip elit enim sint. Culpa laboris quis ex elit est sint amet magna. Culpa quis laboris in excepteur id nisi. Eu ullamco sunt culpa consequat ex sit laborum. Et commodo nulla reprehenderit mollit enim. Amet labore est proident culpa. Deserunt commodo exercitation sint veniam elit laborum.",
    },
    {
      designation: "Massage",
      name: "Vivian",
      review:
        "Ex cupidatat culpa commodo pariatur consequat sunt irure quis aliquip elit esse. Sint sit nostrud Lorem aliqua reprehenderit culpa ipsum velit deserunt anim qui anim veniam. Pariatur labore veniam aliqua consectetur dolore aliqua voluptate aliqua sint sit dolore.",
    },
  ];
  return (
    <div className="min-h-[50em] bg-slate-900 text-white" ref={element}>
      <motion.div
        variants={testimonialsAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        className="flex flex-col"
      >
        {testimonials.map(({ designation, name, review }, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center md:w-[30%] w-[50%] m-auto mt-24 lg:mt-32 ${
                selected === index ? "block" : "hidden"
              }`}
            >
              <h2 className="font-semibold text-[24px] text-center mb-16 text-purple-300 underline">
                Testimonials
              </h2>
              <div className="border-2 rounded-full p-3 mb-5 bg-purple-700">
                <PiFlowerLotus className="text-[80px]" />
              </div>
              <div className="mb-5 flex flex-col">
                <span className="font-semibold text-[18px] text-center">
                  {designation}
                </span>
                <h3 className="font-bold text-[28px] text-center">{name}</h3>
              </div>
              <p className="text-center font-light">{review}</p>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        variants={testimonialsAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        className="flex gap-6 mt-7 md:w-[30%] w-[50%] mx-auto justify-center"
      >
        <button
          className={`p-2 rounded-full w-[20px] h-[20px] cursor-pointer${
            selected === 0
              ? "bg-transparent border-2 border-purple-700"
              : " border-0 bg-purple-700"
          }`}
          onClick={() => {
            setSelected(0);
          }}
        ></button>
        <button
          className={`p-2 rounded-full w-[20px] h-[20px] cursor-pointer${
            selected === 1
              ? "bg-transparent border-2 border-purple-700"
              : "border-0 bg-purple-700"
          }`}
          onClick={() => {
            setSelected(1);
          }}
        ></button>
        <button
          className={`p-2 rounded-full w-[20px] h-[20px] cursor-pointer${
            selected === 2
              ? "bg-transparent border-2 border-purple-700"
              : "border-0 bg-purple-700"
          }`}
          onClick={() => {
            setSelected(2);
          }}
        ></button>
      </motion.div>
    </div>
  );
};

export default Testimonials;
