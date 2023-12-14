import React from 'react';

const Button = ({text}) => {
    return (
      <button className="bg-[#1F2937] hover:bg-[#19202b]  rounded-lg text-white px-6 py-2">
        {text}
      </button>
    );
};

export default Button;