import logo from '../../assets/logo.svg'
import logoMark from '../../assets/Logomark.svg'
import avatar from '../../assets/Avatar.png'
const Testimonial = () => {
    return (
      <div className="bg-[#f9fafb] my-20 py-24 px-4">
        <div className="flex gap-[10px] w-max  mx-auto  justify-center items-center">
          <img src={logoMark} alt="" />
          <img src={logo} alt="" />
        </div>
        <h1 className="py-10 text-2xl md:w-[80%] mx-auto md:text-3xl lg:text-5xl  font-bold text-center text-color">
          We’ve been with unicraft to kick start every new project and can’t
          imagine working without it.
        </h1>
        <div className="flex flex-col  items-center gap-2">
          <img src={avatar} alt="" />
          <h6 className='text-lg text-gray-800 font-bold'>Candice Wu</h6>
          <p className='text-gray-500'>Product Manager, Sisyphus</p>
        </div>
      </div>
    );
};

export default Testimonial;