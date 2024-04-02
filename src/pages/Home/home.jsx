import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Card from "../../components/Card";
import aboutImage from "../../assets/about.png";

const Home = () => {
  return (
    <>
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <Navbar />
        <div className="Hero w-full max-w-screen-xl flex flex-col justify-self-center my-auto mx-auto pt-16 gap-10">
          <div>
            <div className="text-secondary text-7xl font-black py-4 w-full">Inspiring</div>
            <div className="text-white text-7xl font-black py-4">Digital Innovation</div>
          </div>
          <div className="flex  flex-col gap-14">
            <div className="text-white text-xl font-normal max-w-xl">Innovative Software House to Bring Your Ideas to Life. We are your trusted partner in web, mobile, and software development.</div>
            <Button variant={"primary"} type={"clickable"} children={"Dive in"} href={"#about"}></Button>
          </div>
        </div>
      </div>
      <div id="about" className="About w-full max-w-screen-xl items-center flex h-auto my-16 mx-auto py-10 px-10 ">
        <section className="flex justify-center flex-col gap-10">
          <h1 className="text-primary text-4xl max-w-xl font-black">Unlock Your Development Potential With Us</h1>
          <p className="max-w-xl text-xl text-gray-700">
            At our software house, we offer a range of services in web, mobile, and system development. With our expertise and dedication, we provide tailored solutions to meet your unique needs and help you achieve your goals.
          </p>
          <Button variant={"primary"} type={"clickable"} children={"Contact Us"}></Button>
        </section>
        <img className="mx-auto m-max h-max object-cover max-w-lg" src={aboutImage} alt="" />
      </div>
      <div id="about" className="Services w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto py-10 px-10 gap-10">
        <section className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-primary text-4xl max-w-xl font-black">Our Services</h1>
          <p className="text-xl text-center text-gray-700">We offer comprehensive web, mobile, and system development services.</p>
        </section>
        <section className="flex justify-between w-full">
          <Card Title={"Web Development"} Desc={"With a website, your business could be improved by having a stronger brand-awareness, reaching more market like never before."}></Card>
          <Card Title={"Mobile Development"} Desc={"With an app, your business could be enabled and scaled infinitely as onboarding customers via app is much more scalable."}></Card>
          <Card Title={"System Development"} Desc={"With a system, your business processes could be automated and streamlined, resulting in a reduced cost, and higher net-profits."}></Card>
        </section>
      </div>
    </>
  );
};

export default Home;
