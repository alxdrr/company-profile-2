import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="w-screen top-0 lg:fixed bg-primary z-10">
      <div className="hidden lg:flex justify-between items-center h-20 mx-auto px-14 max-w-screen-xl w-full text-white">
        <img className="h-10" src={Logo} alt="Forcoms Logo" />
        <ul className="flex lg:gap-4 xl:gap-10">
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "hover:text-[#DE7C62] transition-colors")}>
              Home
            </NavLink>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "hover:text-[#DE7C62] transition-colors")}>
              About Us
            </NavLink>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/services"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "hover:text-[#DE7C62] transition-colors")}>
              Services
            </NavLink>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/portfolio"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "hover:text-[#DE7C62] transition-colors")}>
              Portfolio
            </NavLink>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/faq"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "hover:text-[#DE7C62] transition-colors")}>
              FAQ
            </NavLink>
          </li>
        </ul>
        <Button variant={"primary"} type={"clickable"} link={"/asdasd"} children={"Get in touch"}></Button>
      </div>
      {/* Mobile Nav */}
      <nav className="lg:hidden">
        <div onClick={handleNav} className="absolute top-8 right-8 md:top-14 md:right-14 ">
          {!nav ? <IoMenu className="text-white ease-out duration-700 text-5xl md:text-6xl " /> : <IoMenu size={"0px"} className="ease-out duration-500" />}
        </div>
        <ul
          className={
            nav
              ? "w-full items-center top-0 fixed py-12 flex flex-col bg-primary gap-10 ease-out duration-500 shadow-xl rounded-3xl"
              : "w-full items-center py-12 flex flex-col bg-gray-950 gap-10 fixed top-[-100%] ease-in duration-500 shadow-xl rounded-3xl"
          }
        >
          <div onClick={handleNav} className="absolute top-8 right-8 md:top-14 md:right-14">
            <IoClose className="text-white active:scale-50 text-5xl md:text-6xl ease-in duration-150" />
          </div>
          <li className="text-md md:text-xl text-white font-extralight">
            <a href="/">Home</a>
          </li>
          <li className="text-md md:text-xl text-white font-extralight">
            <a href="/">About Us</a>
          </li>
          <li className="text-md md:text-xl text-white font-extralight">
            <a href="/">Services</a>
          </li>
          <li className="text-md md:text-xl text-white font-extralight">
            <a href="/">Portfolio</a>
          </li>
          <li className="text-md md:text-xl text-white font-extralight">
            <a href="/">FAQ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
