import Button from "../../../shared/Button";
import 'animate.css';

function Banner() {
  return (
    <div className="px-[90px] py-5 bg-[#f8f8f8] max-w-full">
      <div className=" relative grid grid-cols-2">
        <div className="col-span-1">
          <p className="mt-[100px] text-[25px] text-orange-400 font-bold">
            Hi, I am
          </p>
          <h1 
          className="text-[#15295f] text-[70px] font-extrabold animate__bounceInLeft">
            Mary Hardy
          </h1>
          <h2 className="mt-4 text-[25px] text-[#15295f] font-semibold">
            Digital marketing expert
          </h2>
          <p className="py-5 text-gray-600 text-[18px]">
            Shot what able cold new the see hold. Friendly as an betrayed <br />
            formerly he. Morning because as to society behaved moments
          </p>

          <span className="flex gap-6 mt-5">
            <Button text="Download CV"/>
            <Button text="Contact" />
          </span>
        </div>

        <img
          className="col-span-1 h-[500px] w-[500px] ml-5"
          src="/profile/person.png"
          alt=""
        />
      </div>

      <div className="absolute bg-white h-[150px] w-[1000px] rounded-full shadow-2xl text-center p-5 ml-[90px] -mt-7">
        <div className="flex items-center justify-center gap-10 p-5">
          <div className="bg-orange-500 h-[70px] w-[70px] rounded-full relative">

          <img 
          className="absolute mt-4 ml-4"
          src="./pic/verified.png" alt="" />
          </div>
         <span>
         <p className="text-blue-950 font-extrabold text-2xl">8 Years job</p>
         <p className="text-orange-400 text-[20px]">Experience</p>
         </span>
         <div className="h-[70px] w-[1px] bg-gray-400"></div>
         <div className="bg-orange-500 h-[70px] w-[70px] rounded-full relative">

          <img 
          className="absolute mt-4 ml-4"
          src="./pic/verified.png" alt="" />
          </div>
         <span>
         <p className="text-blue-950 font-extrabold text-2xl">500+ Projects</p>
         <p className="text-orange-400 text-[20px]">Completed</p>
         </span>
         <div className="h-[70px] w-[1px] bg-gray-400"></div>
         <div className="bg-orange-500 h-[70px] w-[70px] rounded-full relative">

          <img 
          className="absolute mt-4 ml-4"
          src="./pic/verified.png" alt="" />
          </div>
         <span>
         <p className="text-blue-950 font-extrabold text-2xl">Support</p>
         <p className="text-orange-400 text-[20px]">Online 24/7</p>
         </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
