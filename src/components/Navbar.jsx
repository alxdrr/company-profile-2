import React from "react";
import Logo from "../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-screen  top-0 fixed bg-primary z-10">
      <div className="hidden lg:flex justify-between items-center h-20 mx-auto px-14 max-w-screen-xl w-full text-white">
        <img className="h-10" src={Logo} alt="Forcoms Logo" />
        <ul className="flex lg:gap-4 xl:gap-10">
          <li className="lg:text-sm xl:text-base px-3">
            <a href="/">Home</a>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <a href="/">About Us</a>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <a href="/">Services</a>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <a href="/">Portfolio</a>
          </li>
          <li className="lg:text-sm xl:text-base px-3">
            <a href="/">FAQ</a>
          </li>
        </ul>
        <Button variant={"primary"} type={"clickable"} children={"Get in touch"}></Button>
      </div>
    </div>
  );
};

export default Navbar;
