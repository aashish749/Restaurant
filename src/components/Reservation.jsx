import React from "react";
import InputComponents from "./InputComponents";

const Reservation = () => {
  return (
    <div className="section pt-0 pb-20 bg-[#F8F0E3]">
      <div className="continer max-w-2xl  mx-auto">
        <div className="header">
          <h1 className="text-4xl text-center pt-10 mb-3 ">
            Make a Reservation
          </h1>
          <div className="h-1 bg-primary w-25 mx-auto"></div>
          <p className="text-gray-700 text-center mt-2 font-xl mb-6 mx-5">
            Book your table in advance to ensure the best dining experience
          </p>
        </div>

        <form
          id="reservation-form"
          className="grid grid-cols-1 md:grid-cols-2 w-9/10 mx-auto bg-white p-5 shadow-2xl rounded-xl md:gap-4"
        >
          <InputComponents
            name="Date"
            inputtype="date"
            placeholder={"Enter your Full name"}
          ></InputComponents>
          <InputComponents
            name="Time"
            inputtype="select"
            placeholder={"Select Time"}
            options={["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]}
          ></InputComponents>
          <InputComponents
            name="Party Size"
            inputtype="select"
            placeholder={"Select Party Size"}
            options={[
              "1 person",
              "2 person",
              "3 person",
              "4 person",
              "5 person",
              "6 person",
            ]}
          ></InputComponents>
          <InputComponents
            name="Table Preference"
            inputtype="select"
            placeholder={"Select Table Preference "}
            options={["Window", "Center", "Outdoor"]}
          ></InputComponents>
          <InputComponents
            name="Full Name"
            inputtype="text"
            placeholder={"Enter your Full name"}
          ></InputComponents>{" "}
          <InputComponents
            name="Phone Number"
            inputtype="tel"
            placeholder={"Enter your phone number"}
          ></InputComponents>
          <InputComponents
            name="Email Address"
            inputtype="email"
            placeholder={"Enter your email"}
          ></InputComponents>
          <InputComponents
            name="Special Request "
            inputtype="textarea"
            placeholder={"Any special requests?"}
          ></InputComponents>
          <button
            // form="reservation-form"
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-red-800 col-span-1 md:col-span-2"
          >
            {" "}
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
