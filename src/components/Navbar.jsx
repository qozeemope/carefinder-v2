import React from "react";
import { NavLink as Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="  flex justify-between items-center py-[3vh] pl-[5.67vw] pr-[1.45vw] ">
      <Link to="/" className="text-[#08299B] font-bold text-[1.5rem] ">
        CareFinder
      </Link>
      <div className="flex items-center gap-[10vw] font-medium text-[1rem]">
        <span className="flex items-center gap-[4vw] text-[#1E1E1E]   ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/find-hospital">Find Hospital</Link>
        </span>
        <div className="flex items-center gap-[1vw]  text-white  ">
          <Link to="/login">
            <div className="border-[1px] border-[#08299B] w-[7.34vw] h-[5.46vh] rounded-xl hover:opacity-90 text-[#08299B] flex items-center justify-center ">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="bg-[#08299B] w-[7.34vw] h-[5.46vh] rounded-xl hover:bg-opacity-90 flex items-center justify-center ">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
