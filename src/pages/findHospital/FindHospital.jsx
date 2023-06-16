import React, { useState } from "react";
import hospitalsData from "../../jSon/hospitalsData";
import map from "../../assets/findHospital/map.svg";
import user from "../../assets/findHospital/user.svg";
import search from "../../assets/findHospital/search.svg";
import Hospital from "./Hospital";
import Navbar from "../../components/Navbar";

function FindHospital() {
  const [showParent, setShowParent] = useState(true);
  const [showHospital, setShowHospital] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [hospitalData, setHospitalData] = useState(hospitalsData);

  const selectedHospitalData = hospitalData.find(
    (hospital) => hospital.id === selectedHospital?.id
  );

  const onHospitalClick = (id) => {
    setShowHospital(true);
    setShowParent(false);
    setSelectedHospital(id);
  };
  const onBackClick = () => {
    setShowHospital(false);
    setShowParent(true);
  };

  console.log(selectedHospitalData);

  return (
    <>
      {showParent ? (
        <div className=" ">
          <div className="fixed w-full z-10 ">
            <Navbar />
          </div>
          <div className="pt-[11vh] relative z-0 h-[100vh] flex flex-col">
            <div
              className="w-full h-full pt-[5.06vh]  pl-[6.35vw] pr-[0.89vw] "
              style={{
                backgroundImage: `url(${map})`,
              }}
            >
              <div className="flex items-center justify-between w-full font-medium text-base">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-[30.57vw] h-[6.26vh] rounded-[15px] px-4 "
                />
                <input
                  type="number"
                  placeholder="Zipcode"
                  className="w-[12.71vw] h-[6.26vh] rounded-[15px] px-4  "
                />
                <div className="flex gap-4 items-center">
                  <button className="bg-[#08299B] w-[3.96vw] h-[4.26vh] rounded-[15px] flex items-center justify-center ">
                    <img src={search} alt="" className="w-[1.56vw]  " />
                  </button>
                  <img
                    src={user}
                    alt=""
                    className="w-[4.69vw] h-[4.69vw] rounded-full "
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full mt-[3.15vh] ">
              <h1 className="text-2xl font-medium mb-[3.14vh] ml-[6.25vw] ">
                Hospitals Nearby
              </h1>
              <div className="flex items-center justify-around gap-[7.40vw] mx-[3.4vw] ">
                {hospitalData.map((hospital, index) => (
                  <div
                    className="flex flex-col items-center text-sm font-medium"
                    onClick={() => onHospitalClick(hospital)}
                    key={index}
                  >
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
        </div>
      ) : (
        <Hospital
          onBackClick={onBackClick}
          hospital={selectedHospitalData.name}
          key={selectedHospitalData.id}
          src={selectedHospitalData.src}
          address={selectedHospitalData.address}
          phone={selectedHospitalData.phone}
          email={selectedHospitalData.email}
          openingHours={selectedHospitalData.openingHours}
        />
      )}
    </>
  );
}

export default FindHospital;
