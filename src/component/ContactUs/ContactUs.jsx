import React from 'react';
import Button from '../shared/Button';

const ContactUs = () => {
    return (
      <div className="py-20 max-w-[1366px] mx-auto space-y-6 text-center px-2">
        <h1 className="text-4xl md:text-5xl  lg:text-7xl font-bold text-color text-center md:w-[90%]  mx-auto">
          No long-term contracts. No catches. Simple.
        </h1>
        <p className="text-gray-600">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <div className="py-2">
          <Button text="Contact us"></Button>
        </div>
      </div>
    );
};

export default ContactUs;