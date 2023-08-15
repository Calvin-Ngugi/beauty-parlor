import Header from "./Header";
import InfoSection from "./InfoSection";
import Services from "./Services";

const MainContainer = () => {
  return (
    <div>
      <Header />
      <div className="md:hidden block">
        <InfoSection />
      </div>
      <Services />
    </div>
  );
};

export default MainContainer;
