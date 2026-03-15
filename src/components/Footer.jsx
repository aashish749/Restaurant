import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 bg-[#F8F0E3] py-10 pt-15 mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-9/10">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">
            Fork & <span className="text-primary">Flame</span>
          </h3>
          <p className="text-gray-700 pr-20">
            Experience the finest culinary journey in the heart of the city.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl ">Quick Links</h3>
          <a href="" className="block text-gray-700 no-underline">
            Home
          </a>
          <a href="" className="block text-gray-700 no-underline">
            About
          </a>
          <a href="" className="block text-gray-700 no-underline">
            Menu
          </a>
          <a href="" className="block text-gray-700 no-underline">
            Reservation
          </a>
        </div>
        <div className="text-gray-700 flex flex-col gap-3">
          <h3 className="text-2xl text-black">Contact Info</h3>
          <span>123 Gourmet Street, NY 10001</span>
          <span>(123) 456-7890</span>
          <span>info@forkandflame.com</span>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl"> Follow Us</h3>
            <div className="flex gap-3">
              <div className="h-11 w-11 flex items-center justify-center rounded-full bg-primary text-white text-center text-3xl">
                <FaFacebook />
              </div>
              <div className="h-11 w-11 flex items-center justify-center rounded-full bg-primary text-white text-center text-3xl">
                <FaSquareXTwitter />
              </div>
              <div className="h-11 w-11 flex items-center justify-center rounded-full bg-primary text-white text-center text-3xl">
                <RiInstagramFill />
              </div>
              <div className="h-11 w-11 flex items-center justify-center rounded-full bg-primary text-white text-center text-3xl">
                <FaLinkedin />
              </div>
            </div>
            <h3 className="text-2xl "></h3>
            <div className="flex w-full">
              <input
                type="text "
                placeholder="Your Email"
                className="border rounded-tl-md rounded-bl-md border-primary px-3 py-2 w-full"
              />
              <button className="h-auto bg-primary text-2xl text-white w-12  flex justify-center items-center rounded-tr-md rounded-br-md">
                <FaLocationArrow></FaLocationArrow>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-gray-700 text-center flex flex-col gap-4 mt-5">
        <div className="h-[1px] w-full bg-gray-700/44 mt-5"></div>
        <p>2025@Fork&Flame. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
