import React from "react";
import { testimonials } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

const Testimonials = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const previousBtn = () => {
    currentItem === 0
      ? setCurrentItem(testimonials.length - 1)
      : setCurrentItem(currentItem - 1);
  };

  const nextBtn = () => {
    currentItem === testimonials.length - 1
      ? setCurrentItem(0)
      : setCurrentItem(currentItem + 1);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextBtn();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentItem]);
  return (
    <div className="section mb-20 bg-[#F3F4F6] text-center flex flex-col gap-6 pt-10 pb-10">
      <h1 className="text-3xl mx-4">What Our Customers Say </h1>

      <div
        key={testimonials[currentItem].id}
        className="min-h-[266px] w-9/10 container rounded-3xl mx-auto max-w-2xl shadow-xl bg-white flex flex-col justify-center items-center pt-9 pb-9 gap-3  "
      >
        <img
          src={testimonials[currentItem].image}
          className="rounded-full h-25 w-25"
          alt=""
        />
        <p className="text-gray-600 ">{testimonials[currentItem].message}</p>
        <h3 className="text-xl">{testimonials[currentItem].name}</h3>
      </div>

      <div className="icons-container flex justify-center items-center space-x-7 ">
        <div
          className=" cursor-pointer h-12 w-11 bg-white flex justify-center items-center rounded-full text-2xl border border-gray-500/50"
          onClick={previousBtn}
        >
          &larr;
        </div>
        <div
          className="cursor-pointer h-12 w-11 bg-white flex justify-center items-center rounded-full text-2xl border border-gray-500/50"
          onClick={nextBtn}
        >
          &rarr;
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
