import axios from "axios";
import { useEffect, useState } from "react";

function Services() {
  const [service, setService] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/service")
      .then((response) => setService(response.data));
  }, []);

  return (
    <div className="px-[90px] py-20 mt-[200px] h-[400px]">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <h1 className="text-orange-400 text-[25px] font-semibold">
            Services
          </h1>
          <p className="text-blue-950 text-4xl font-bold">
            I Provide Wide <br /> Range Of Digital Services
          </p>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-5">
            {service?.map((item, i) => (
              <div key={i} className="bg-gray-50 shadow-sm rounded-2xl">
                <div
                  className={`w-[80px] h-[80px] rounded-full ${item.bg} flex items-center justify-center mx-auto`}
                >
                  <img src={item.image} alt="" />
                </div>
                <div className="text-[23px] font-bold py-4 px-2 text-center">
                  {item.name}
                </div>
                <p className="py-4 px-2 text-[18px] text-gray-600 text-center">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
