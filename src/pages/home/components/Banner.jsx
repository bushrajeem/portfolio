import Button from "../../../shared/Button";

function Banner() {
  return (
    <div className="px-[100px] py-5  bg-[#f8f8f8] max-w-full">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <p className="mt-[100px] text-[25px] text-orange-400 font-bold">
            Hi, I'm
          </p>
          <h1 className="text-[#15295f] text-[60px] font-extrabold">
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
          className="col-span-1 h-[500px] w-[500px]"
          src="/person.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
