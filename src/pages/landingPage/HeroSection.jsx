import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero-section/hero.svg";
import right from "../../assets/hero-section/right.png";

function HeroSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-[87.69vh] pt-[9.81vh]  pl-[2vw] "
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center justify-between"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-[#08299B] font-bold text-4xl text-center mb-[2.31vh] ">
            Find the nearest hospital <br /> to you and make an <br />{" "}
            appointment
          </h1>
          <p className="font-medium mb-[4vh] text-center">
            Discover Your Perfect Care: Find <br /> Your Hospital, Anytime,
            Anywhere!
          </p>
          <button className="bg-[#08299B] w-[12.97vw] h-[5.46vh] text-white rounded-xl hover:bg-opacity-90 mb-[2.22vh] ">
            Get Started
          </button>
          <a
            href=""
            className="font-medium italic text-sm flex items-center gap-2 hover:underline"
          >
            Learn more{" "}
            <img src={right} alt="" className="w-[1.25vw] h-[1.25vw] " />
          </a>
        </div>

        <img
          src={hero}
          alt=""
          className="h-[55.83vh] w-[42.50vw] object-cover rounded-l-2xl"
        />
      </motion.div>
      <div className="flex flex-col items-center mt-[3.80vh] ">
        <h3 className="text-[#08299B] font-medium mb-[1.22vh] ">
          Find a nearby hospital
        </h3>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search for a hospital"
          className="h-[5.93vh] w-[35.83vw] rounded-3xl  pl-[2.22vw] "
        />
      </div>
    </motion.div>
  );
}

export default HeroSection;
