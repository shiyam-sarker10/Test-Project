import Nav from "./component/Nav/Nav"
import Banner from './component/Banner/Banner';
import TrustedCompanies from "./component/TrustedCompanies/TrustedCompanies";
import ImageCarousel from "./component/imageCarousel/imageCarousel";
import HowItWorks from "./component/HowItWorks/HowItWorks";



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
    </div>
  );
}

export default App
