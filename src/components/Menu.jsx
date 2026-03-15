import React from "react";
import { useState } from "react";
import { foodMenu } from "../assets/assets";
import item1Img from "../assets/item1.avif";
import { ImCross } from "react-icons/im";

const Menu = () => {
  const [dialog, setDialog] = useState([false, {}]);

  const activateDialog = (item) => {
    console.log("triggeredd");
    setDialog([true, item]);
  };
  const disableDialog = () => {
    setDialog([false, {}]);
  };
  return (
    <div className="mt-10  bg-[#F8F0E3] pb-10">
      <div className="container mx-auto max-w-[1030px] ">
        <div className="header">
          <h1 className="text-4xl text-center pt-10 mb-3">Our Menu</h1>
          <div className="h-1 bg-primary w-25 mx-auto"></div>
          <p className="text-gray-700 text-center mt-2 font-xl mb-6">
            Crafted with passion and the finest ingredients
          </p>
        </div>
        {/* Grid layout */}
        <div className=" mx-5 grid grid-cols-1 md:grid-cols-3  justify-center items-center gap-4">
          {/* grid item */}
          {foodMenu.map((item, index) => {
            return (
              <div
                key={index}
                className="flex group relative flex-col  shadow-xl overflow-hidden  bg-[#F8F0E3] rounded-2xl
                  hover:scale-103 transition mb-5 "
                onClick={() => {
                  activateDialog(item);
                }}
              >
                {/* The Overlay */}
                <div className="inset-0  absolute opacity-0 z-[20]  bg-black/0 group-hover:bg-black/15  group-hover:opacity-100   transition-all duration-300 ease">
                  {/* The mouse will ignore this layer entirely! */}
                </div>
                <img
                  src={item.image}
                  alt=""
                  className=" md:max-h-124 w-full max-h-80 h-80 md:h-120 object-cover "
                />
                <div className="flex justify-between mx-3 ">
                  <h3 className="mt-4 mb-3">{item.title}</h3>{" "}
                  <span className="block mt-4 text-primary font-bold">
                    {item.price}
                  </span>
                </div>
                <p className="mx-3 mb-6">{item.ingredients}</p>
              </div>
            );
          })}

          {/* end of grid item */}
        </div>
      </div>
      <button className="px-3 py-3 text-white bg-primary rounded-full hover:bg-red-800 w-40 mt-10 mx-auto block">
        View Full Menu
      </button>
      {dialog[0] === true ? (
        <div className="fixed top-0 w-full h-screen bg-black/50 flex justify-center items-center px-5 z-30">
          <div className="container mx-auto flex flex-col max-w-xl px-5  gap-3 py-7 shadow-xl bg-white rounded-xl relative">
            <div className="wrapper relative">
              <div
                className="flex justify-center items-center w-8 h-8  
              absolute top-[-12px] right-[-11px] border border-white bg-primary rounded-full text-md text-white"
                onClick={disableDialog}
              >
                <ImCross />
              </div>
              <img
                src={dialog[1].image}
                alt=""
                className="max-h-50 rounded-xl object-cover w-full"
              />
            </div>
            <h3 className="text-2xl">{dialog[1].title}</h3>
            <p>{dialog[1].description}</p>
            <span className="text-2xl ">{dialog[1].price}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
