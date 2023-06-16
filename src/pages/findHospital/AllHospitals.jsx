import React from "react";
import hospitalsData from "../../jSon/hospitalsData";
import search from "../../assets/findHospital/w-search.svg";

function AllHospitals() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="w-full h-full mt-[3.15vh] ">
        <div className="flex justify-center w-[34.58vw] mx-auto items-center relative">
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
        <div className="flex items-center justify-around gap-[7.40vw] mx-[3.4vw] ">
          {hospitalsData.map((hospital) => (
            <div className="flex flex-col items-center text-sm font-medium">
              <img
                src={hospital.src}
                alt=""
                className="w-[11.61vw] h-[18.61vh] mb-[3.61vh] "
              />
              <h4 className="mb-[] ">{hospital.name}</h4>
              <p>{hospital.address}</p>
              <a href="" className="text-xs hover:underline">
                see more
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full mt-[3.15vh] ">
        <h1 className="text-2xl font-medium mb-[3.14vh] ml-[6.25vw] ">
          Hospitals Nearby
        </h1>
        <div className="flex items-center justify-around gap-[7.40vw] mx-[3.4vw] ">
          {hospitalsData.map((hospital) => (
            <div className="flex flex-col items-center text-sm font-medium">
              <img
                src={hospital.src}
                alt=""
                className="w-[11.61vw] h-[18.61vh] mb-[3.61vh] "
              />
              <h4 className="mb-[] ">{hospital.name}</h4>
              <p>{hospital.address}</p>
              <a href="" className="text-xs hover:underline">
                see more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllHospitals;
