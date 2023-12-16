import Nav from "./component/Nav/Nav"
import Banner from './component/Banner/Banner';
import TrustedCompanies from "./component/TrustedCompanies/TrustedCompanies";
import ImageCarousel from "./component/imageCarousel/imageCarousel";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import Testimonial from "./component/testimonial/Testimonial";
import Pricing from "./component/Pricing/Pricing";



function App() {
  

  return (
    <div className="">
      <div className="gradient-bg bg-gradient-to-b from-white via-white to-transparent">
        <Nav></Nav>
        <Banner></Banner>
        <div></div>
      </div>
      <TrustedCompanies></TrustedCompanies>
      <ImageCarousel></ImageCarousel>
      <HowItWorks></HowItWorks>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
    </div>
  );
}

export default App
