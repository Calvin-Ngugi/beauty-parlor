import Header from "./Header";
import InfoSection from "./InfoSection";
import Services from "./Services";
import Grid from "./Grid";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import { motion } from "framer-motion";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <motion.div initial="hidden" animate="show">
      <Header />
      <div className="md:hidden block">
        <InfoSection />
      </div>
      <Services />
      <Grid />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default MainContainer;
