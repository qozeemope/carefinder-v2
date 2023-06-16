import React from "react";
import bg from "../../assets/auth/bg.svg";
import { NavLink as Link } from "react-router-dom";
import img from "../../assets/auth/img.svg";

function AuthLayout({ children }) {
  return (
    <div className="flex justify-start w-screen h-screen  ">
      <div className="w-full p-[6.48vh] bg-[#E0E4EC] ">
        {" "}
        <div className="bg-[#F2F2F2] h-full rounded-[20px] flex flex-col items-center pt-[4.63vh] px-[1.04vw] ">
          {children}
        </div>
      </div>
      <div
        className="w-full h-full flex flex-col items-center pt-[6.48vh]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link
          to="/"
          className="mb-[2.04vh] text-[#08299B] font-bold text-[1.5rem] "
        >
          CareFinder
        </Link>
        <h1 className="text-3xl font-bold text-center">
          Join our <br /> community
        </h1>
        <p className="text-center text-xl font-medium text-[#333232] italic mt-2 ">
          Enjoy seamless access to medical services.
        </p>
        <img src={img} alt="" className="w-full h-[47.87vh] mt-8 " />
      </div>
    </div>
  );
}

export default AuthLayout;
