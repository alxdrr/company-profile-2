import React from "react";
import forcomsLogo from "../assets/logo.svg";
import logo1 from "../assets/icons/social-ig.svg";
import logo2 from "../assets/icons/social-linkedin.svg";

const Footer = () => {
  return (
    <div className="w-screen bg-primary">
      <div className="flex flex-col justify-center items-center h-max  py-16 px-6 max-w-screen-xl w-full mx-auto text-white gap-8">
        <main className="flex flex-col sm:flex-row w-full justify-between gap-8 lg:gap-6 xl:gap-9">
          <div className="flex flex-col">
            <section className="text-secondary lg:text-base xl:text-xl font-black mb-2 xl:mb-4">Follow Us</section>
            <section className="flex gap-2 xl:gap-4">
              <a href="">
                <img src={logo1} />
              </a>
              <a href="">
                <img src={logo2} />
              </a>
            </section>
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <section className="text-secondary lg:text-base xl:text-xl font-black">Explore</section>
            <a className="text-white sm:text-xs xl:text-base lg:text-sm font-normal" href="/">
              About Us
            </a>
            <a className="text-white sm:text-xs xl:text-base lg:text-sm font-normal" href="/">
              Services
            </a>
            <a className="text-white sm:text-xs xl:text-base lg:text-sm font-normal" href="/">
              FAQ
            </a>
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <section className="text-secondary lg:text-base xl:text-xl font-black">Contact Us</section>
            <a className="text-white sm:text-xs xl:text-base lg:text-sm font-normal" href="/">
              +62 821-3875-4680
            </a>
            <a className="text-white sm:text-xs xl:text-base lg:text-sm font-normal" href="/">
              forcomstechnology@gmail.com
            </a>
          </div>
          <div className="flex flex-col">
            <section className="text-secondary font-black lg:text-base xl:text-xl mb-2 xl:mb-4">Address</section>
            <p className="text-white sm:text-xs xl:text-base lg:text-sm font-normal md:max-w-60 sm:max-w-40 xl:max-w-xs" href="/">
              Jl. Ir. Sutami, Kemenuh, Kec. Sukawati, Kabupaten Gianyar,  Bali 80582
            </p>
            <a href="/" className="text-gray-400">
              View on maps
            </a>
          </div>
          <div className="hidden lg:flex flex-col ">
            <a href="https://forcoms.com" className="w-full">
              <img src={forcomsLogo} alt="forcoms logo" className="w-full h-full max-w-[220px] mx-auto" />
            </a>
            <p className="text-gray-300 italic font-normal text-center lg:text-base xl:text-xl mt-8" href="/">
              Innovate for Growth
            </p>
          </div>
        </main>
        {/* Tablet Footer */}
        <div className="flex lg:hidden w-full flex-col ">
          <a href="https://forcoms.com" className="w-full">
            <img src={forcomsLogo} alt="forcoms logo" className="w-full h-full max-w-[280px] mx-auto" />
          </a>
          <p className="text-gray-300 italic font-normal text-center text-xl mt-4" href="/">
            Innovate for Growth
          </p>
        </div>

        <hr className="w-full border-gray-300" />
        <p className="text-white sm:text-xs xl:text-base lg:text-sm font-normal max-w-xs" href="/">
          © 2024 Forcoms, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
