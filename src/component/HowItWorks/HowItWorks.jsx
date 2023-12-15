import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import arrowRight from "../../assets/arrow-right.png";

const HowItWorks = () => {
  return (
    <div className="max-w-[1366px] mx-auto px-4 my-20">
      <div className="text-center flex flex-col  p-10  custom-shadow ">
        <div className="mb-10 space-y-4">
          <h1 className="text-3xl lg:text-5xl font-semibold text-color">
            How It Works
          </h1>
          <p className="text-color">
            Premium designs, unlimited requests, super fast delivery, for one
            flat monthly fee.
          </p>
        </div>

        {/* counts  */}
        <div className="flex flex-col my-10 gap-16  md:flex-row justify-center items-center">
          {/* one  */}
          <div className=" relative md:w-[500px] flex flex-col justify-end items-center h-[200px] ">
            <div className="z-10 space-y-4">
              <h3 className="text-2xl lg:text-[40px] font-black text-color">
                Subscribe
              </h3>
              <p className="text-gray-500 text-sm  lg:text-base">
                Subscribe to a plan & you’ll get an instant access to your
                private Slack channel.
              </p>
            </div>
            <img
              className=" w-[70px] bottom-6  absolute  z-0"
              src={one}
              alt=""
            />
            <img
              className=" -right-[60px] hidden md:block top-10  absolute  z-0"
              src={arrowRight}
              alt=""
            />
          </div>
          {/* two  */}
          <div className=" relative md:w-[500px] flex flex-col justify-end items-center h-[200px] ">
            <div className="z-10 space-y-4">
              <h3 className="text-2xl lg:text-[40px] font-black text-color">
                Request
              </h3>
              <p className="text-gray-500 text-sm lg:text-base">
                Submit any number of requests. We'll work through them, one at a
                time, ensuring consistent updates every 24-48 hours
              </p>
            </div>
            <img
              className=" w-[120px] bottom-6  absolute  z-0"
              src={two}
              alt=""
            />
            <img
              className=" -right-[60px] hidden md:block top-10  absolute  z-0"
              src={arrowRight}
              alt=""
            />
          </div>
          {/* three  */}
          <div className=" relative md:w-[500px] flex flex-col justify-end items-center h-[200px] ">
            <div className="z-10 space-y-4">
              <h3 className="text-2xl lg:text-[40px] font-black text-color">
                Revise
              </h3>
              <p className="text-gray-500 text-sm lg:text-base">
                Need changes? We guarantee unlimited revisions until you're 200%
                satisfied.
              </p>
            </div>
            <img
              className=" w-[120px] bottom-6   absolute  z-0"
              src={three}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
