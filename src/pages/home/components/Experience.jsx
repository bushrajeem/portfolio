import axios from "axios";
import { useEffect, useState } from "react";


export const Experience= () => {
  const [experience, setExperience] = useState();
  
  useEffect(()=>{
   axios.get("http://localhost:3000/expData").then(response => setExperience(response.data));
  },[]);

  return (
    <div className=" bg-[#f8f8f8] px-[90px] py-10 mt-10">
      <h1 className="text-orange-400 font-semibold text-[25px] text-center">
        Why Choose Me
      </h1>
      <p className="text-blue-950 font-bold text-[30px] text-center">My Experience Area</p>
      <div className="">
        <div className="grid grid-cols-2 gap-6 mt-6">
          {experience?.map((item, i) => (
            <div
              key={i}
              className="col-span-1 bg-white rounded-2xl shadow-md p-6 h-[220px] w-[550px] hover:-rotate-3 hover:duration-300"
            >
              <div className="flex items-center justify-center gap-10">
                <div className="bg-[#d7fff3] h-[120px] w-[260px] rounded-full relative">
                <img
                className="absolute z-10 p-6 hover:rotate-6 hover:duration-300"
                src="/pic/UI.png" alt="" />
                </div>
                <div>
                 <h2 className="font-bold text-[20px]"> {item.name}</h2>
                 <p className="text-[18px] mt-4"> {item.description}</p>
                 <p className="text-orange-400 mt-4">Read More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

