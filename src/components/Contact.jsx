import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import InputComponents from "./InputComponents";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="section mb-17">
      <div className="header">
        <h1 className="text-4xl text-center pt-10 mb-3 ">Let's Talk</h1>
        <div className="h-1 bg-primary w-25 mx-auto"></div>
        <p className="text-gray-700 text-center mt-2 font-xl mb-6 mx-5">
          We'd love to hear from you
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:pt-15  md:px-10 lg:px-15">
        <div className="max-w-9/10 w-full md:w-1/2  flex flex-col gap-6 pt-8 md:pt-0 ">
          <h3 className="text-2xl ">Get in Touch</h3>
          <div className="flex gap-5">
            <div className="flex justify-center items-center h-12 w-12 rounded-full text-white text-2xl bg-primary ">
              <FaLocationArrow />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl ">Address</h4>
              <span>123 Gourmet Street, Food</span>
              <span> District New York, NY 10001</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex justify-center items-center h-12 w-12 rounded-full text-white text-2xl bg-primary ">
              <FaPhone />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl ">Phone</h4>
              <span>+351 81256984</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex justify-center items-center h-12 w-12 rounded-full text-white text-2xl bg-primary ">
              <MdEmail />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl ">E-Mail</h4>
              <span>Contact@aashishchalise.com</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex justify-center items-center h-12 w-12 rounded-full text-white text-2xl bg-primary ">
              <IoTime />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl ">Hours</h4>
              <span>Monday - Thursday: 5:00 PM -</span>
              <span>10:00 PM Friday - Saturday:</span>
              <span>5:00 PM - 11:00 PM Sunday:</span>
              <span>11:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
        <div className="Contact-form w-full max-w-9/10 md:w-1/2 md:max-w-1/2 shadow-2xl py-7 rounded-2xl mt-5 md:mt-0">
          <form action="" className="w-9/10  md:w-9/10 mx-auto ">
            <InputComponents
              name={"Full Name"}
              placeholder={""}
              inputtype={"text"}
            />
            <InputComponents
              name={"Email Address"}
              placeholder={""}
              inputtype={"email"}
            />
            <InputComponents
              name={"Subject"}
              placeholder={""}
              inputtype={"text"}
            />
            <InputComponents
              name={"Message"}
              placeholder={""}
              inputtype={"textarea"}
            />
            <button className="w-25 py-3 text-white bg-primary rounded-full hover:bg-red-800 text-l">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
