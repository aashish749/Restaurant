import React from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const [navColor, setNavColor] = useState("blur");
  const handleNav = () => {
    setHamburger(!hamburger);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <div
      className={
        navColor === "white"
          ? "shadow-md sticky  top-0 z-45 bg-white"
          : "shadow-md sticky top-0 z-45 backdrop-blur-2xl"
      }
    >
      <div className=" mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="nav-bar flex bg-red px-5 py-5 justify-between">
          <div className="logo-container flex align-center ">
            <img src="./src/assets/logo2.png" alt="" className="h-10" />
            <div className="text-2xl font-bold text-primary flex items-center">
              Fork&<span className="text-accent ">Flame</span>
            </div>
          </div>

          {/* desktop navbar */}
          <div className="nav-list  items-center text-xl hidden md:flex space-x-5 ">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              About
            </a>
            <a href="#" className="hover:text-primary">
              Reservation
            </a>
            <a href="#" className="hover:text-primary">
              Menus
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden flex items-center ">
            {hamburger ? (
              <FaBars
                size={20}
                className="w-6"
                onClick={() => {
                  setHamburger(!hamburger);
                  setNavColor("white");
                  document.body.classList.toggle("overflow-hidden");
                }}
              />
            ) : (
              <FaXmark
                size={20}
                className="w-6"
                onClick={() => {
                  setHamburger(!hamburger);
                  setNavColor("blur");
                  document.body.classList.toggle("overflow-hidden");
                }}
              />
            )}
          </div>
        </div>

        {/* mobile navbar */}
        <div
          className={
            hamburger
              ? "hidden"
              : "mobile-menu flex flex-col mx-0 md:hidden text-center space-y-3  items-center fixed inset-0 top-[80px] w-full h-screen backdrop-blur-3xl overflow-hidden bg-white z-50"
          }
        >
          <a href="#" className="block mt-30 hover:text-primary">
            Home
          </a>
          <a href="#" className="block hover:text-primary">
            About
          </a>
          <a href="#" className="block hover:text-primary">
            Reservation
          </a>
          <a href="#" className="block hover:text-primary">
            Menus
          </a>
          <a href="#" className="block hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
