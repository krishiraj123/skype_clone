import "./App.css";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <div className="box-border ms-10 me-10 mt-5h-screen">
        <Navbar />
        <HeroSection />
        <CarouselSection />
        <SocialLinks />
      </div>
      <Footer />
    </>
  );
}

export default App;
