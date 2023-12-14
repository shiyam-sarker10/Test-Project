import React from 'react';
import Button from '../shared/Button';


const Banner = () => {
    return (
      <div className="py-20 space-y-6 text-center px-2">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-color text-center md:w-[90%]  mx-auto">
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="text-gray-600">
          From strategic planning to digital presence, we're your dedicated
          partner in achieving solo success
        </p>
        <div className='py-2'>
          <Button text="View Pricing"></Button>
        </div>
      </div>
    );
};

export default Banner;