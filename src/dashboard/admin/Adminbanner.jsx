function Adminbanner() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <span className="col-span-1">
        <p className="text-[18px] font-bold mb-2">Enter name</p>
        <input placeholder="title" type="text" />
      </span>
      <span>
        <p className="text-[18px] font-bold mb-2">Enter the description</p>
        <input placeholder="title" type="text" />
      </span>
      <span>
        <p className="text-[18px] font-bold mb-2">Enter experience</p>
        <input placeholder="title" type="text" />
      </span>
      <span>
        <p className="text-[18px] font-bold mb-2">Projects completed</p>
        <input placeholder="title" type="text" />
      </span>
    </div>
  );
}

export default Adminbanner;
