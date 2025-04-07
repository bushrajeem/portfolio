import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {
  const [blog, setBlog] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/blog").then(response => setBlog(response.data));
  })

  return (
    <div className=" bg-blue-950 py-5 px-10">
      <h1 className="text-orange-400 font-semibold text-[25px] mt-16 text-center">
        Portfolio
      </h1>
      <p className="text-white font-bold text-[30px] text-center">
        Our Recent Updates, Blog, Tips, Tricks & More
      </p>

      <div className="grid grid-cols-3 gap-5 mt-8 p-10 mb-8">

        {blog?.map((item, i) => (
      <div key={i}>
        <img className="h-[250px] w-[320px]" src={item.image} alt="" />
          <h1 className="text-orange-400 font-semibold text-[18px]">
            {item.name}
          </h1>
          <p className="text-white font-bold text-[18px] mt-2">
            {item.description}
          </p>
        
      </div>
     ))}
      </div>
    </div>
  );
}

export default Blog;
