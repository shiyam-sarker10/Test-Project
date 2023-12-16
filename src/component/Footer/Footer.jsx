import React from "react";
import s1 from '../../assets/s1.svg'
import s2 from '../../assets/s2.svg'
import s3 from '../../assets/s3.svg'
import s4 from '../../assets/s4.svg'
import s5 from '../../assets/s5.svg'
import s6 from '../../assets/s6.svg'

const Footer = () => {
  return (
    <div className="max-w-[1366px] mx-auto px-4 py-8">
      <div className="flex gap-10 flex-col md:flex-row justify-end md:justify-between items-center md:items-end">
        <div className="space-y-6">
          <h1 className="text-2xl text-gray-700 font-bold text-center md:text-left">
            UniCraft
          </h1>
          <p className="md:w-[60%]  text-gray-500/90  font-semibold text-center md:text-left">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <p className="text-gray-500 text-center md:text-left">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
          <img src={s4} alt="" />
          <img src={s5} alt="" />
          <img src={s6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
