import React from "react";
import Logo from "../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-screen  top-0 fixed bg-primary z-10">
      <div className="hidden lg:flex lg: justify-between items-center h-32 py-3 mx-auto px-6 max-w-screen-xl w-full text-white">
        <img className="object-contain h-12" src={Logo} alt="Forcoms Logo" />
        <ul className="flex gap-8">
          <li className="px-3">
            <a href="/">Home</a>
          </li>
          <li className="px-3">
            <a href="/">About Us</a>
          </li>
          <li className="px-3">
            <a href="/">Services</a>
          </li>
          <li className="px-3">
            <a href="/">Portfolio</a>
          </li>
          <li className="px-3">
            <a href="/">FAQ</a>
          </li>
        </ul>
        <Button variant={"primary"} type={"clickable"} children={"Get in touch"}></Button>
      </div>
    </div>
  );
};

export default Navbar;
