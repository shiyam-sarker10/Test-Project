import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import OutlineButton from './../shared/OutlineButton';

// Sample data


const ImageCarousel = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className="py-20 space-y-16">
      <Carousel responsive={responsive} infinite={true}>
        <div className="px-4 shadow-md">
          <img className="w-[500px] h-[600px] rounded-lg  " src={c1} alt="" />
        </div>
        <div className="px-4 shadow-md">
          <img className="w-[500px] h-[600px] rounded-lg  " src={c2} alt="" />
        </div>
        <div className="px-6 shadow-md">
          <img className="w-[500px] h-[600px] rounded-lg  " src={c3} alt="" />
        </div>
        <div className="px-4 shadow-md">
          <img className="w-[500px] h-[600px] rounded-lg  " src={c4} alt="" />
        </div>
        <div className="px-4 shadow-md">
          <img className="w-[500px] h-[600px] rounded-lg  " src={c1} alt="" />
        </div>
        <div className="px-4 shadow-md">
          <img className="w-[500px] h-[600px] rounded-lg  " src={c2} alt="" />
        </div>
        <div className="px-4 shadow-md">
          <img className="w-[500px] h-[600px] rounded-lg  " src={c3} alt="" />
        </div>
        <div className="px-4 shadow-md">
          <img className="w-[500px] h-[600px] rounded-lg  " src={c4} alt="" />
        </div>
      </Carousel>

      <div className="text-center">
        <OutlineButton text="View recent work"></OutlineButton>
      </div>
      
    </div>
  );
};

export default ImageCarousel;
