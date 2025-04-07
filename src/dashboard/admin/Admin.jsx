import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./admin.css";

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.stringify(
      localStorage.getItem("authenticated") ? true : false
    );

    if (user == "false") navigate("/adminlogin");
  }, [navigate]);

  return (
    <div>
      <header className="text-[30px] font-bold bg-[#e0e0e0] p-5">
        Dashboard
      </header>

      <div className="flex">
        <div className="bg-[#e0e0e0] w-[250px] h-screen flex flex-col text-center text-[20px] p-2">
          <NavLink
            to="home"
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink className="mt-6" to="banner">Banner</NavLink>
          <NavLink className="mt-6" to="experience">Experience</NavLink>
          <NavLink className="mt-6" to="portfolio">Portfolio</NavLink>
          
        </div>
      <div className="p-5">
        <Outlet></Outlet>
      </div>
      </div>
    </div>
  );
}

export default Admin;
