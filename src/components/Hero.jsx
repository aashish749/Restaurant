import React from "react";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <>
      <div
        className=" mx-auto h-screen  bg-cover w-full bg-center bg-repeat relative"
        style={{ backgroundImage: `url(${assets.hero_bg})` }}
      >
        <div className="absolute inset-0 bg-black/50 ">
          <div className="container max-w-2xl    px-5 mx-auto lg:mx-0 lg:px-16 h-full flex flex-col justify-center gap-5">
            <h1 className="text-5xl text-white">Experience Fine Dining</h1>
            <p className="text-white text-xl">
              Indulge in our exquisite culinary creations crafted with passion
              and the finest ingredients.
            </p>
            <button className="px-7 py-3 rounded-full text-white bg-primary hover:bg-red-800 hover:text-white/90 w-45">
              Book a Table
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
