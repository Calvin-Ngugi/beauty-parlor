import Header from "./Header";
import InfoSection from "./InfoSection";
import Services from "./Services";
import Grid from "./Grid";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default MainContainer;
