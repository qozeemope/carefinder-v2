import React from "react";

function Footer() {
  return (
    <div className=" text-white flex  justify-between py-[3.5vh] pl-[6.46vw] pr-[4.84vw] ">
      <div className="mr-[19.43vw] w-full  ">
        <h2 className="font-medium text-2xl text-[#E0E4EC] mb-[5vh] ">
          CareFinder
        </h2>
        <p>Plot 42, Akinza Street, Victoria island, Lagos +2349167351788</p>
      </div>
      <div className="mr- w-full ">
        <h2 className="font-medium text-2xl text-[#E0E4EC] mb-[5vh] ">
          About us
        </h2>
        <p>Health services provider</p>
      </div>
      <div className="w-full  ">
        <h2 className="font-medium text-2xl text-[#E0E4EC] mb-[5vh] ">
          Quick Links
        </h2>
        <div className="flex flex-col">
          <a href="/my-account">My Account</a>
          <a href="/book-appointment">Book an appointment</a>
          <a href="/library">Library</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
