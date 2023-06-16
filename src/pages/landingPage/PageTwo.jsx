import React from "react";
import { motion } from "framer-motion";
import imgOne from "../../assets/hero-section/imgOne.svg";
import imgTwo from "../../assets/hero-section/imgTwo.svg";
import doctor from "../../assets/hero-section/doctor.svg";
import hospital from "../../assets/hero-section/hospital.svg";
import exportIcon from "../../assets/hero-section/export.svg";
import share from "../../assets/hero-section/share.svg";
import how from "../../assets/hero-section/how.svg";

function PageTwo() {
  const features = [
    {
      id: 1,
      img: doctor,
      title: "Search Doctors",
      description: "Effortlessly Find the Best Doctors Near You",
    },
    {
      id: 2,
      img: hospital,
      title: "Search Hospitals",
      description: "Effortlessly Find the Best Hospitals Near You",
    },
    {
      id: 3,
      img: exportIcon,
      title: "Export Hospital",
      description: "Save list of hospitals",
    },
    {
      id: 4,
      img: share,
      title: "Share Hospitals",
      description: "Share the list of hospitals with others. ",
    },
  ];
  return (
    <div className="mt-[5.56vh] ">
      <div className="flex items-center justify-between mb-[20vh] ">
        <div className="flex gap-[1.20vw] h-[70vh] ml-[4vh] ">
          <img
            src={imgOne}
            alt=""
            className="object-cover w-[20.21vw] h-[65vh] rounded-[20px] "
          />
          <img
            src={imgTwo}
            alt=""
            className="object-cover w-[20.21vw] h-[65vh] rounded-[20px] self-end"
          />
        </div>
        <div className="flex flex-col font-medium items-center mr-[8vw]">
          <h1 className="text-center    ">
            Welcome to <br />{" "}
            <span className="text-[#08299B] text-3xl">CareFinder</span>
          </h1>
          <p className="w-[26.09vw] text-center  my-[6vh]  ">
            Carefinder is a platform where users can search for hosiptals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <button className="bg-[#08299B] w-[12.97vw] h-[5.46vh] text-white rounded-xl hover:bg-opacity-90 mb-[2.22vh] ">
            Our Services
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[1.04vw] mb-[22.78vh] mx-auto w-[90%] ">
        {features.map((feature) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={feature.id}
            className="bg-[#E0E4EC] rounded-xl w-[20.97vw] h-[30.46vh] flex flex-col items-center pt-[1.85vh] text-center font-medium "
          >
            <div className="w-[4.17vw] h-[4.17vw] bg-[#08299B] flex items-center justify-center rounded-full mb-[1.76vh] ">
              <img
                src={feature.img}
                alt=""
                className="w-[2.92vw] h-[2.92vw] "
              />
            </div>
            <h1 className="mb-[4vh] ">{feature.title}</h1>
            <p className="text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center object-cover mb-[21.90vh] ">
        <img src={how} alt="" className="w-[90.43vw] h-[90.31vh] " />
      </div>
    </div>
  );
}

export default PageTwo;
