import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <Navbar />
        <div className="Hero w-full max-w-screen-xl flex flex-col justify-self-center my-auto mx-auto pt-16 gap-6">
          <div className="text-secondary text-7xl font-black py-4 w-full">Inspiring</div>
          <div className="text-white text-7xl font-black py-4">Digital Innovation</div>
          <div className="text-white text-base font-normal max-w-xl">Innovative Software House to Bring Your Ideas to Life. We are your trusted partner in web, mobile, and software development.</div>
          <Button variant={"primary"} type={"clickable"} className="w-max" children={"Dive in"}></Button>
        </div>
      </div>
    </>
  );
};

export default Home;
