import React from 'react';
import Accordion from './Accordion';


const FAQ = () => {
    return (
      <div className="max-w-[1366px] mx-auto px-4 py-20" >
        <div className="mb-5 space-y-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-semibold text-color">
            How It Works
          </h1>
          <p className="text-color">
            Premium designs, unlimited requests, super fast delivery, for one
            flat monthly fee.
          </p>
        </div>
        <div className="flex justify-center">
          <Accordion></Accordion>
        </div>
      </div>
    );
};

export default FAQ;