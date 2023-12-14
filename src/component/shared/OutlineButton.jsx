import React from 'react';

const OutlineButton = ({text}) => {
    return (
      <button className="text-gray-600 border-2 text-lg border-gray-600 rounded-lg px-6 py-2 hover:bg-[#1F2937] hover:text-white duration-500 ease-out" >
        {text}
      </button>
    );
};

export default OutlineButton;