import React from 'react';

const OutlineButton = ({text}) => {
    return (
        <div className='text-gray-600 border-2 text-lg border-gray-600 rounded-lg px-6 py-2'>
            {text}
        </div>
    );
};

export default OutlineButton;