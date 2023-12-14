import React, { useState } from 'react';
import OutlineButton from '../shared/OutlineButton';
import menu from '../../assets/menu.svg'
import cross from '../../assets/cross.svg'


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
    const navList = (
      <ul className="flex gap-6 ">
        <li tabIndex="0" className="focus:border-b-2 focus:border-gray-400">
          How it works
        </li>
        <li tabIndex="0" className="focus:border-b-2 focus:border-gray-400">
          Pricing
        </li>
        <li tabIndex="0" className="focus:border-b-2 focus:border-gray-400">
          FAQ
        </li>
      </ul>
    );
     const navListResponsive = (
       <>
         <ul className="flex flex-col gap-6 justify-center items-center ">
           <li tabIndex="0" className="focus:border-b-2 focus:border-gray-400">
             How it works
           </li>
           <li tabIndex="0" className="focus:border-b-2 focus:border-gray-400">
             Pricing
           </li>
           <li tabIndex="0" className="focus:border-b-2 focus:border-gray-400">
             FAQ
           </li>
           
         </ul>
       </>
     );
    
    return (
      <div className="flex justify-between max-w-[1366px] mx-auto px-4 z-20 md:items-center py-6 relative">
        {/* start  */}
        <div className="hidden md:block">
          <h1 className="text-2xl text-gray-700">UniCraft</h1>
        </div>
        {/* center  */}
        <div className="hidden md:block">{navList}</div>
        {/* menu button */}
        <button
          className="flex items-start md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img className="w-[20px] " src={cross} alt="" />
          ) : (
            <img className="w-[20px] " src={menu} alt="" />
          )}
        </button>
        <div className={` ${isOpen ? "" : "hidden"}  md:hidden mx-auto`}>
          {navListResponsive}
        </div>
        {/* end */}
        <div className='hidden md:block'>
          <OutlineButton text="Contact Us"></OutlineButton>
        </div>
      </div>
    );
};

export default Nav;