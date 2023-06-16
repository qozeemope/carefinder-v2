import React from "react";
import search from "../../assets/findHospital/w-search.svg";
import one from "../../assets/findHospital/one.svg";
import save from "../../assets/findHospital/save.svg";
import exportImg from "../../assets/findHospital/export.svg";
import left from "../../assets/findHospital/left.png";

function Hospital({
  onBackClick,
  email,
  hospital,
  src,
  address,
  phone,
  openingHours,
}) {
  const hospitalDetails = [hospital, address, email, openingHours, phone];

  return (
    <div className="pt-[4.91vh]  ">
      <div>
        <button
          onClick={onBackClick}
          className="absolute font-bold pl-20 flex items-center gap-2"
        >
          <img src={left} alt="" className="w-[1.25vw] " />
          Back
        </button>
        <div className="flex justify-center w-[34.58vw] mx-auto items-center relative mb-[5.09vh]  ">
          <input
            type="search"
            className=" pl-4 pr-8 h-[6.36vh]  w-[34.58vw]  border border-[#C1C1C1] rounded-[15px] font-medium mb-[3.14vh] "
          />
          <img
            src={search}
            alt=""
            className="w-[1.56vw] absolute top-2.5 right-4 "
          />
        </div>
      </div>
      <div className="flex pl-[3.44vw] pr-[5.47vw] h-full gap-[4.69vw] items-center w-full justify-center">
        <img
          src={src}
          alt=""
          className="w-[36.46vw] h-[36.46vw] rounded-[20px] border border-black object-cover"
        />
        <div className="flex flex-col w-[24.95vw] h-full items-center">
          <div className="flex flex-col bg-[#DBE0EA] w-full items-center px-[1.45vw] py-[3.33vh] gap-[4.4vh] rounded-[20px]  ">
            {hospitalDetails.map((hospital) => (
              <div className="border h-[4.63vh] border-[#45413C] w-full text-center rounded-xl bg-[#F5F5F5] ">
                <h1>{hospital}</h1>
              </div>
            ))}
            <div className="flex items-center gap-4 justify-center">
              <button>
                <img src={save} alt="" className="w-[1.30vw] " />
              </button>
              <button>
                <img src={exportImg} alt="" className="w-[1.30vw] " />
              </button>
            </div>
          </div>
          <button className="bg-[#08299B] w-[22.34vw] h-[5.46vh] rounded-xl hover:bg-opacity-90 text-white mt-[5.83vh] ">
            Book an appointment now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hospital;
