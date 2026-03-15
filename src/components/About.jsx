import React from "react";
import aboutImg from "../assets/about.avif";
import { ImSpoonKnife } from "react-icons/im";
import { FaWineGlassAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className=" mt-10 mx-5">
      <div className="header">
        <h1 className="text-4xl text-center mb-3">Our Story</h1>
        <div className="h-1 bg-primary w-25 mx-auto"></div>
      </div>

      <div className="container flex flex-col md:flex-row mx-auto mt-7 md:gap-7">
        <img
          src={aboutImg}
          alt=""
          className="block w-full  mx-auto rounded-2xl md:max-w-[50%]"
        />

        <div className="right-container flex flex-col gap-5 mt-4 md:w-1/2 justify-center">
          <h3 className="text-3xl">A Culinary Journey</h3>
          <p className="text-gray-700">
            Founded in 2010, Fork & Flame brings together world-class chefs and
            sommeliers to create an unforgettable dining experience. Our
            philosophy is simple: exceptional food, impeccable service, and a
            warm atmosphere.
          </p>{" "}
          <p className="text-gray-700">
            We source our ingredients from local farmers and producers, ensuring
            the freshest seasonal dishes that celebrate the region's bounty
            while supporting our community.
          </p>
          <div className="icons-container flex mb-4 ">
            <div className="flex items-center mr-4">
              <div className="p-3 bg-primary rounded-full mx-2 ">
                <ImSpoonKnife className=" text-white text-xl" />
              </div>
              <span className="font-bold text-xl">Fine Dining</span>
            </div>
            <div className="flex items-center ">
              <div className="p-3 bg-primary rounded-full mx-2">
                <FaWineGlassAlt className=" text-white text-xl" />
              </div>
              <span className="font-bold text-xl">Fine Dining</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
