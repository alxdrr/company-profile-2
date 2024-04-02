import React from "react";
import Logo from "../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-full bg-[#002029]">
      <div className="flex justify-between items-center h-28 py-3 px-6 max-w-screen-xl mx-auto text-white">
        <img src={Logo} alt="Forcoms Logo" />
        <ul className="flex gap-8">
          <li className="px-3">Home</li>
          <li className="px-3">About Us</li>
          <li className="px-3">Services</li>
          <li className="px-3">Portfolio</li>
          <li className="px-3">FAQ</li>
        </ul>
        <Button variant={"primary"} type={"clickable"}>
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
