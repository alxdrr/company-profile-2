import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const location = useLocation();
  const handleClick = () => {
    const element = document.getElementById("about");
    const offset = 80; // offset based on navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;

    // Check if not on home page, then redirect to home page first

    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100); // Adjust timeout to ensure redirection to home page is complete before scrolling
  };

  const isHomeOrPortfolio = location.pathname === "/" || location.pathname === "/portfolio";
  const navBg = isHomeOrPortfolio ? "bg-primary" : "bg-white";
  const navColor = isHomeOrPortfolio ? "text-white" : "text-primary";
  const navMenuHamburger = isHomeOrPortfolio ? "text-white" : "text-primary";
  const navBrand = isHomeOrPortfolio ? Logo : Logo2;

  return (
    <div className={`w-screen top-0 lg:fixed z-10 ${navBg}`}>
      <div className="hidden lg:flex justify-between items-center h-20 mx-auto px-14 max-w-screen-xl w-full text-white">
        <img className="h-10" src={navBrand} alt="Forcoms Logo" />
        <ul className="flex lg:gap-4 xl:gap-10">
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/"} className={({ isActive }) => (isActive ? `text-secondary font-black` : `hover:text-[#DE7C62] transition-colors ${navColor}`)}>
              Home
            </NavLink>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink onClick={handleClick} className={`hover:text-[#DE7C62] transition-colors ${navColor}`}>
              About Us
            </NavLink>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/services"} className={({ isActive }) => (isActive ? `text-secondary font-black` : `hover:text-[#DE7C62] transition-colors ${navColor}`)}>
              Services
            </NavLink>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/portfolio"} className={({ isActive }) => (isActive ? `text-secondary font-black` : `hover:text-[#DE7C62] transition-colors ${navColor}`)}>
              Portfolio
            </NavLink>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <NavLink to={"/faq"} className={({ isActive }) => (isActive ? `text-secondary font-black` : `hover:text-[#DE7C62] transition-colors ${navColor}`)}>
              FAQ
            </NavLink>
          </li>
        </ul>
        <Button variant={"primary"} type={"clickable"} link={"/asdasd"} children={"Get in touch"}></Button>
      </div>
      {/* Mobile Nav */}
      <nav className="lg:hidden">
        <div onClick={handleNav} className="absolute top-8 right-8 md:top-14 md:right-14 ">
          {!nav ? <IoMenu className={`ease-out duration-700 text-5xl md:text-6xl ${navMenuHamburger}`} /> : <IoMenu size={"0px"} className="ease-out duration-500" />}
        </div>
        <ul
          className={
            nav
              ? "w-full items-center top-0 fixed py-12 flex flex-col bg-primary gap-10 ease-out duration-500 shadow-xl rounded-3xl"
              : "w-full items-center py-12 flex flex-col bg-gray-950 gap-10 fixed top-[-100%] ease-in duration-500 shadow-xl rounded-3xl"
          }
        >
          <div onClick={handleNav} className="absolute top-8 right-8 md:top-14 md:right-14">
            <IoClose className="text-white" />
          </div>
          <li className="text-md md:text-xl text-white font-extralight">
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "")}>
              Home
            </NavLink>
          </li>
          <li className="text-md md:text-xl text-white font-extralight">
            <NavLink to={"/services"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "")}>
              Services
            </NavLink>
          </li>
          <li className="text-md md:text-xl text-white font-extralight">
            <NavLink to={"/portfolio"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "")}>
              Portfolio
            </NavLink>
          </li>
          <li className="text-md md:text-xl text-white font-extralight">
            <NavLink to={"/faq"} className={({ isActive }) => (isActive ? "text-secondary font-black" : "")}>
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
