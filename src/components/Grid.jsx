import { useScroll } from "./useScroll";
import { motion } from 'framer-motion';
import { portfolioAnimations } from "../Animation";

const Grid = () => {
  const [element, controls] = useScroll();
  return (
    <div className="max-w-screen" id="portfolio" ref={element}>
      <div className="grid grid-cols-3 gap-2 lg:p-20 md:p-10 p-2 bg-green-500 lg:grid-rows-2 w-[100%]">
        <motion.div animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} variants={portfolioAnimations} className="w-full rounded">
          <img src="banner.jpg" alt="banner" className="cover" />
        </motion.div>
        <motion.div animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} variants={portfolioAnimations} className="w-full col-span-2 row-span-3 rounded">
          <img src="pedicure.jpg" alt="manicure" className="cover" />
        </motion.div>
        <motion.div animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} variants={portfolioAnimations} className="w-full rounded">
          <img src="massage.jpg" alt="massage" className="cover" />
        </motion.div>
        <motion.div animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} variants={portfolioAnimations} className="w-full rounded">
          <img src="nails-white.jpg" alt="nailsred" className="cover" />
        </motion.div>
        <motion.div animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} variants={portfolioAnimations} className="w-full rounded">
          <img src="nails.jpg" alt="nails" className="cover" />
        </motion.div>
        <motion.div animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} variants={portfolioAnimations} className="w-full rounded">
          <img src="salon.jpg" alt="salon" className="cover" />
        </motion.div>
        <motion.div animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} variants={portfolioAnimations} className="w-full rounded">
          <img src="salon2.jpg" alt="salon2" className="cover" />
        </motion.div>
        {/* <div className="w-full rounded">
          <img src='pedicure.jpg' alt="salon" className="cover"/>
        </div> */}
      </div>
    </div>
  );
};

export default Grid;
                    