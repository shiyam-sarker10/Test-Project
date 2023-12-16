import React from "react";
import OutlineButton from "../shared/OutlineButton";
import './Pricing.css'

const Pricing = () => {
  return (
    <div className="gradient-bg bg-gradient-to-b py-20 md:p-20 from-white via-white to-transparent">
      <div className="md:max-w-[1366px] mx-auto px-4">
        {/* header  */}
        <div className="mb-10 space-y-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-semibold text-color">
            Pricing made for collaborative support.
          </h1>
          <p className="text-color md:w-[40%] text-sm md:text-base mx-auto">
            Plain is made for your entire company. Only pay for users that
            actually message customers. Everyone else is free, forever.
          </p>
        </div>
        {/* cards  */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* perCard */}
          <div className="px-6 py-10  max-w-[350px] duration-500 ease-out border rounded-xl bg-white space-y-6 custom-shadow">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">Freebie</h3>
              <p className="text-gray-500 w-full">
                Ideal for individuals who need quick access to basic features.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-[44px] text-color font-semibold">$0</h1>
              <span className="text-gray-600">/ month</span>
            </div>
            <button className="text-gray-600 w-full border-2 text-lg border-gray-600 rounded-lg px-6 py-2 hover:bg-[#1F2937] hover:text-white duration-500 ease-out">
              Get started now
            </button>
            <ul className="white-box">
              <li>20,000+ of PNG & SVG graphics</li>
              <li>Access to 100 million stock images</li>
              <li className="opacity-40">Upload custom icons and fonts</li>
              <li className="opacity-40">Unlimited Sharing</li>
              <li className="opacity-40">
                Upload graphics & video in up to 4k
              </li>
              <li className="opacity-40">Unlimited Projects</li>
              <li className="opacity-40">
                Instant Access to our design system
              </li>
              <li className="opacity-40">
                Create teams to collaborate on designs
              </li>
            </ul>
          </div>
          {/* perCard */}
          <div className="px-6 py-10 max-w-[350px] duration-500 ease-out border rounded-xl bg-[#1F2937] custom-shadow text-white space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Professional</h3>
              <p className="text-white w-full ">
                Ideal for individuals who who need advanced features and tools
                for client work.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-[44px] font-semibold text-white">$25</h1>
              <span className="text-white">/ month</span>
            </div>
            <button className="text-gray-600 w-full border-2 text-lg bg-white rounded-xl px-6 py-2 hover:bg-[#1F2937] hover:text-white duration-500 ease-out">
              Get started now
            </button>
            <ul className="black-box">
              <li>20,000+ of PNG & SVG graphics</li>
              <li>Access to 100 million stock images</li>
              <li className="">Upload custom icons and fonts</li>
              <li className="">Unlimited Sharing</li>
              <li className="">Upload graphics & video in up to 4k</li>
              <li className="opacity-40">Unlimited Projects</li>
              <li className="opacity-40">
                Instant Access to our design system
              </li>
              <li className="opacity-40">
                Create teams to collaborate on designs
              </li>
            </ul>
          </div>
          {/* perCard */}
          <div className="px-6 py-10 max-w-[350px] duration-500 ease-out border rounded-xl custom-shadow bg-white space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Enterprise
              </h3>
              <p className="text-gray-500 w-full">
                Ideal for businesses who need personalized services and security
                for large teams.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-[44px] text-color font-semibold">$100</h1>
              <span className="text-gray-600">/ month</span>
            </div>
            <button className="text-gray-600 w-full border-2 text-lg border-gray-600 rounded-lg px-6 py-2 hover:bg-[#1F2937] hover:text-white duration-500 ease-out">
              Get started now
            </button>
            <ul className="white-box">
              <li>20,000+ of PNG & SVG graphics</li>
              <li>Access to 100 million stock images</li>
              <li className="">Upload custom icons and fonts</li>
              <li className="">Unlimited Sharing</li>
              <li className="">Upload graphics & video in up to 4k</li>
              <li className="">Unlimited Projects</li>
              <li className="">Instant Access to our design system</li>
              <li className="">Create teams to collaborate on designs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
