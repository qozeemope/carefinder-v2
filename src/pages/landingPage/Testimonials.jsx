import React from "react";
import sarah from "../../assets/hero-section/sarah.svg";
import jon from "../../assets/hero-section/jon.svg";
import emily from "../../assets/hero-section/emily.svg";
import star from "../../assets/hero-section/star.svg";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Finding the right hospital has never been easier! With this website, I was able to locate a nearby hospital quickly and efficiently. The search feature is user-friendly, and it provided me with all the essential information I needed. Highly recommended!",
      star: 3,
      name: "Sarah M.",

      img: sarah,
    },
    {
      id: 2,
      content:
        "I can’t express how grateful i am for carefinder website. When i needed urgent medical care while travelling, it helped me locate the nearest hospital in a matter of  seconds. The accurate results and detailed directions saved me valuable time and ensured i received the care i needed",
      star: 4,
      name: "John L.",
      img: jon,
    },
    {
      id: 3,
      content:
        "I recently moved to a new city and had no idea where to go for medical assistance, my friend shared me some hospital details using the carefinder website. It made my life easier, I was able to fine reputable hospitals near me effortlessly. The website’s user friendly interface and comprehnsive search gave me peace of mind. I highly recommend.",
      star: 4,
      name: "Emily T.",
      img: emily,
    },
    {
      id: 4,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      star: 5,
      name: "Jaime L.",
      img: jon,
    },
  ];
  return (
    <div className="mt-[9.63vh] mb-[13.61vh] ">
      <h1 className="text-[#837D7D] font-medium text-center text-3xl">
        Testimonials
      </h1>
      <h2 className="text-[#08299B] font-medium text-center text-5xl mb-[8vh] ">
        What Our Users Say
      </h2>
      <div className="w-full overflow-hidden mx-auto relative carousel ">
        <div className="flex  items-center justify-center gap-[5.10vw] carousel-inner ">
          {testimonials.map((testimonial) => (
            <div className="testimonial bg-[#E0E4EC] rounded-xl pt-[5.09vh] flex-col px-[3.44vw] pb-[3.40vh] min-w-[30.13vw] h-[40.46vh] ">
              <p className="text-xs text-justify font-medium h-[20vh]">
                {testimonial.content}
              </p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt=""
                    className="w-[1.25vw] h-[1.25vw] "
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src={testimonial.img} alt="" className="rounded-full" />
                <h4 className="text-sm font-medium">{testimonial.name} </h4>
              </div>
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div className="testimonial bg-[#E0E4EC] rounded-xl pt-[5.09vh] flex-col px-[3.44vw] pb-[3.40vh] min-w-[30.13vw] h-[40.46vh] ">
              <p className="text-xs text-justify font-medium h-[20vh]">
                {testimonial.content}
              </p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt=""
                    className="w-[1.25vw] h-[1.25vw] "
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src={testimonial.img} alt="" className="rounded-full" />
                <h4 className="text-sm font-medium">{testimonial.name} </h4>
              </div>
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div className="testimonial bg-[#E0E4EC] rounded-xl pt-[5.09vh] flex-col px-[3.44vw] pb-[3.40vh] min-w-[30.13vw] h-[40.46vh] ">
              <p className="text-xs text-justify font-medium h-[20vh]">
                {testimonial.content}
              </p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt=""
                    className="w-[1.25vw] h-[1.25vw] "
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src={testimonial.img} alt="" className="rounded-full" />
                <h4 className="text-sm font-medium">{testimonial.name} </h4>
              </div>
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div className="testimonial bg-[#E0E4EC] rounded-xl pt-[5.09vh] flex-col px-[3.44vw] pb-[3.40vh] min-w-[30.13vw] h-[40.46vh] ">
              <p className="text-xs text-justify font-medium h-[20vh]">
                {testimonial.content}
              </p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt=""
                    className="w-[1.25vw] h-[1.25vw] "
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src={testimonial.img} alt="" className="rounded-full" />
                <h4 className="text-sm font-medium">{testimonial.name} </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
