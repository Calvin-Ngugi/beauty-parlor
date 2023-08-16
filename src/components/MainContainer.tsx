import Header from "./Header";
import InfoSection from "./InfoSection";
import Services from "./Services";
import Grid from "./Grid";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
<<<<<<< HEAD
import Footer from "./Footer";
=======
import Contact from "./Contact";
>>>>>>> 9b9c8c4709c098afff688b51941d632a1b5e9e01

const MainContainer = () => {
  return (
    <div>
      <Header />
      <div className="md:hidden block">
        <InfoSection />
      </div>
      <Services />
      <Grid />
      <Blog />
      <Testimonials />
<<<<<<< HEAD
      <Footer />
=======
      <Contact />
>>>>>>> 9b9c8c4709c098afff688b51941d632a1b5e9e01
    </div>
  );
};

export default MainContainer;
