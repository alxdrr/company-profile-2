import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import aboutImage from "../../assets/about.png";

const Home = () => {
  return (
    <>
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <Navbar />
        <div className="Hero w-full max-w-screen-xl flex flex-col justify-self-center my-auto mx-auto pt-16 gap-6">
          <div className="text-secondary text-7xl font-black py-4 w-full">Inspiring</div>
          <div className="text-white text-7xl font-black py-4">Digital Innovation</div>
          <div className="text-white text-xl font-normal max-w-xl">Innovative Software House to Bring Your Ideas to Life. We are your trusted partner in web, mobile, and software development.</div>
          <Button variant={"primary"} type={"clickable"} children={"Dive in"}></Button>
        </div>
      </div>
      <div className="About w-full max-w-screen-xl items-center flex h-auto my-16 mx-auto">
        <section className="flex justify-center flex-col gap-10">
          <h1 className="text-primary text-4xl max-w-xl font-black">Unlock Your Development Potential With Us</h1>
          <p className="max-w-xl text-xl">
            At our software house, we offer a range of services in web, mobile, and system development. With our expertise and dedication, we provide tailored solutions to meet your unique needs and help you achieve your goals.
          </p>
          <Button variant={"primary"} type={"clickable"} children={"Contact Us"}></Button>
        </section>
        <img className="mx-auto m-max h-max object-cover max-w-lg" src={aboutImage} alt="" />
      </div>
    </>
  );
};

export default Home;
