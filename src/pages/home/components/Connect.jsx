

function Connect() {
  return (
    <div>
      <div className="grid grid-cols-2 p-10">
        <div className="col-span-1 p-10">
          <p className="text-blue-950 font-extrabold text-[25px] mb-5">
            Let's Connect
          </p>
          <p className="text-[18px]">
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>
        </div>
        <div className="col-span-1 p-10">
          <p className="text-blue-950 font-extrabold text-[25px] mb-5">
            Let's message me and mack something together
          </p>
          <input className="w-full h-[50px] border-2 border-gray-300 p-5 mb-5" placeholder="Your name" type="text" />
          <input className="w-full h-[50px] border-2 border-gray-300 p-5 mb-5" placeholder="Your email" type="text" />
          <input className="w-full h-[160px] border-2 border-gray-300 p-5" placeholder="message" type="text" />
          <button className=" mt-7 w-[170px] h-[60px] text-white bg-orange-500 rounded-full hover:bg-transparent hover:duration-200 hover:border-2 hover:border-orange-500 hover:text-orange-500">Send Message</button>
      </div>
      </div>
    </div>
  );
}

export default Connect;
