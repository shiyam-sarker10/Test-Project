import Nav from "./component/Nav/Nav"
import Banner from './component/Banner/Banner';
import TrustedCompanies from "./component/TrustedCompanies/TrustedCompanies";


function App() {
  

  return (
    <div className="">
      <div className="gradient-bg bg-gradient-to-b from-white via-white to-transparent">
        <Nav></Nav>
        <Banner></Banner>
        <div></div>
      </div>
      <TrustedCompanies></TrustedCompanies>
    </div>
  );
}

export default App
