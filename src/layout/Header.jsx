import Button from "../shared/Button";

function Header() {
  return (
    <header className=" container max-w-full py-5">
      <div className="  flex justify-center items-center gap-[300px] px-5">
        <img className="w-[100px] h-[27px]" src="/logo/logo.png" alt="" />

        <div className=" flex items-center gap-[220px]">
          <ul className="flex justify-between items-center gap-5 text-[18px] font-semibold text-[#1f3146]">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Works</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <Button text="Hire Me" />
        </div>
      </div>
    </header>
  );
}

export default Header;
