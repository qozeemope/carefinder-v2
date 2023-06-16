import React from "react";
import { AppointmentForm } from "../../components/Form.jsx";
import john from "../../assets/hero-section/john.svg";
import mary from "../../assets/hero-section/mary.svg";
import cole from "../../assets/hero-section/cole.svg";
import susan from "../../assets/hero-section/susan.svg";

function BookAppointment() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Cole",
      img: john,
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
    },
    {
      id: 2,
      img: mary,
      name: "Meredith Grey",
      speciality: "General Surgeon",
      hospital: "John Hopkins Hospital",
    },
    {
      id: 3,
      img: cole,
      name: "Will Sloane",
      speciality: "Neurologist",
      hospital: "Stanford Hospital",
    },
    {
      id: 4,
      img: susan,
      name: "Dr. Susan Routledge",
      speciality: "Pediatrician",
      hospital: "Kincaid General Hospital",
    },
  ];
  return (
    <div className="flex items-start justify-between pr-[6.35vw] pl-[3.54vw] ">
      <div className="w-full">
        <h1 className="font-bold text-2xl text-[#08299B] mb-[8vh] ">
          QUALIFIED DOCTORS
        </h1>
        <div className="flex items-center flex-wrap gap-x-[9.69vw] gap-y-[8.89vh]  ">
          {doctors.map((doctor) => (
            <div
              className="flex items-center flex-col font-medium "
              key={doctor.id}
            >
              <img
                src={doctor.img}
                alt=""
                className="w-[9.53vw] h-[9.53vw] mb-[2.31vh] "
              />
              <h4 className="text-[#08299B] ">{doctor.name}</h4>
              <h5 className="text-sm text-[#837D7D] ">{doctor.speciality}</h5>
              <h6 className="text-sm text-[#837D7D] ">{doctor.hospital}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col w-full gap-[3.43vh] ">
        <h1 className="font-bold text-2xl text-[#08299B] ">
          Book an appointment
        </h1>
        <div className="w-full">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
