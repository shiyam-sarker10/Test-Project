import Nav from "./component/Nav/Nav"
import Banner from './component/Banner/Banner';
import gradient from './assets/Gradient.png'


function App() {
  

  return (
    <div className="max-w-[1366px] mx-auto ">
      <div className="gradient-bg bg-gradient-to-b from-white via-white to-transparent">
        <Nav></Nav>
        <Banner></Banner>
        <div></div>
      </div>
    </div>
  );
}

export default App
