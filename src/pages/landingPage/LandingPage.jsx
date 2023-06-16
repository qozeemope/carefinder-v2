import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import PageTwo from "./PageTwo.jsx";
import BookAppointment from "./BookAppointment.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "../../components/Footer.jsx";

function LandingPage() {
  return (
    <div className="relative">
      <div className={`w-full fixed z-10 bg-[#E0E4EC] `}>
        <Navbar />
      </div>
      <div className="relative z-0 pt-[11.81vh]">
        <div className="bg-[#E0E4EC]">
          <HeroSection />
        </div>
        <div className="bg-white">
          <PageTwo />
        </div>
        <div className="bg-white">
          <BookAppointment />
        </div>
        <div className="bg-white">
          <Testimonials />
        </div>
        <div className="bg-[#08299B] ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
