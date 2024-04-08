import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import CTA from "../components/CTA";
import imageWeb from "../assets/web-asset.svg";
import imageMobile from "../assets/mob-asset.svg";
import imageSystem from "../assets/system-asset.svg";
import { IoCheckmarkCircle } from "react-icons/io5";

const services = () => {
  return (
    <>
      {/* Navbar & Hero */}
      <div className="w-full bg-white h-screen flex flex-col justify-center">
        <Navbar />
        <div className="Hero w-full max-w-screen-xl flex flex-col justify-self-center items-center my-auto mx-auto pt-16 gap-8 xl:gap-10 px-4 lg:px-8 xl:px-0">
          <div>
            <div className="text-primary text-3xl md:text-6xl lg:text-7xl font-black py-4 w-full">Our Comprehensive</div>
            <div className="text-secondary text-3xl md:text-6xl lg:text-7xl font-black py-4">Software Solutions</div>
          </div>
          <Button variant={"primary"} title={"Explore"} type={"clickable"} scrollToId={"services"}></Button>
        </div>
      </div>
      {/* Services 1 Section */}
      <div id="services" className="About w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto my-16 mx-auto gap-8 md:gap-0 lg:py-10 px-4 lg:px-8 xl:px-0">
        <section className="flex justify-center md:items-start flex-col gap-4 xl:gap-6">
          <h1 className="text-primary text-xl md:text-start md:text-2xl lg:text-2xl xl:text-3xl max-w-2xl font-black">Website Development</h1>
          <p className="max-w-2xl md:text-start lg:text-base xl:text-xl text-gray-700">
            Our website development service offers comprehensive solutions, leveraging cutting-edge technologies to create high-performance and visually appealing websites tailored to meet your specific needs.
          </p>
          <div className="flex flex-col gap-4">
            <section className="flex gap-2">
              <IoCheckmarkCircle size={"32px"} className="text-secondary" />{" "}
              <section className="flex flex-col gap-2">
                <p className="max-w-2xl font-bold md:text-start lg:text-xl text-gray-700">Next.js 13</p>
                <p className="max-w-xl md:text-start lg:text-base xl:text-xl text-gray-700">Utilizing Next.js for server-side rendering to enhance performance and SEO.</p>
              </section>
            </section>
            <section className="flex gap-2">
              <IoCheckmarkCircle size={"32px"} className="text-secondary" />{" "}
              <section className="flex flex-col gap-2">
                <p className="max-w-2xl font-bold md:text-start lg:text-xl text-gray-700">Chakra UI</p>
                <p className="max-w-xl md:text-start lg:text-base xl:text-xl text-gray-700">Employing Chakra UI for streamlined and customizable React components.</p>
              </section>
            </section>
            <section className="flex gap-2">
              <IoCheckmarkCircle size={"32px"} className="text-secondary" />{" "}
              <section className="flex flex-col gap-2">
                <p className="max-w-2xl font-bold md:text-start lg:text-xl text-gray-700">Context Pattern</p>
                <p className="max-w-xl md:text-start lg:text-base xl:text-xl text-gray-700">Opting for the lightweight Context API over Redux for global state management, reducing complexity.</p>
              </section>
            </section>
          </div>
        </section>
        <img className="w-full max-w-sm md:max-w-xs md:px-10 lg:max-w-lg lg:px-8" src={imageWeb} alt="" />
      </div>
      {/* Services 2 Section */}
      <div id="services" className="About w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row-reverse h-auto my-16 mx-auto gap-8 md:gap-0 lg:py-10 px-4 lg:px-8 xl:px-0">
        <section className="flex justify-center md:items-start flex-col gap-4 xl:gap-6">
          <h1 className="text-primary text-xl md:text-start md:text-2xl lg:text-2xl xl:text-3xl max-w-2xl font-black">Mobile Development</h1>
          <p className="max-w-2xl md:text-start lg:text-base xl:text-xl text-gray-700">
            Our mobile development service provides top-tier solutions, harnessing the latest advancements in technology to craft intuitive and feature-rich mobile applications that cater to your unique requirements. From conceptualization
            to deployment, we prioritize innovation and client satisfaction, guaranteeing that your mobile app stands out in today&apos;s competitive digital landscape.
          </p>
          <div className="flex flex-col gap-4">
            <section className="flex gap-2">
              <IoCheckmarkCircle size={"32px"} className="text-secondary" />{" "}
              <section className="flex flex-col gap-2">
                <p className="max-w-2xl font-bold md:text-start lg:text-xl text-gray-700">Flutter</p>
                <p className="max-w-xl md:text-start lg:text-base xl:text-xl text-gray-700">Flutter offers a consistent UI experience across iOS and Android with a single codebase, enhancing development efficiency.</p>
              </section>
            </section>
            <section className="flex gap-2">
              <IoCheckmarkCircle size={"32px"} className="text-secondary" />{" "}
              <section className="flex flex-col gap-2">
                <p className="max-w-2xl font-bold md:text-start lg:text-xl text-gray-700">GraphQL</p>
                <p className="max-w-xl md:text-start lg:text-base xl:text-xl text-gray-700">GraphQL optimizes data loading in mobile apps, improving performance and reducing bandwidth usage.</p>
              </section>
            </section>
            <section className="flex gap-2">
              <IoCheckmarkCircle size={"32px"} className="text-secondary" />{" "}
              <section className="flex flex-col gap-2">
                <p className="max-w-2xl font-bold md:text-start lg:text-xl text-gray-700">Firebase</p>
                <p className="max-w-xl md:text-start lg:text-base xl:text-xl text-gray-700">Firebase accelerates mobile app development by providing a suite of backend services, enabling rapid prototyping and deployment.</p>
              </section>
            </section>
          </div>
        </section>
        <img className="w-full max-w-sm md:max-w-xs md:px-10 lg:max-w-lg lg:px-8" src={imageMobile} alt="" />
      </div>
      {/* Services 3 Section */}
      <div id="services" className="About w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto my-16 mx-auto gap-8 md:gap-0 lg:py-10 px-4 lg:px-8 xl:px-0">
        <section className="flex justify-center md:items-start flex-col gap-4 xl:gap-6">
          <h1 className="text-primary text-xl md:text-start md:text-2xl lg:text-2xl xl:text-3xl max-w-2xl font-black">System Development</h1>
          <p className="max-w-2xl md:text-start lg:text-base xl:text-xl text-gray-700">
            Our system development service provides end-to-end solutions, employing the latest technologies and methodologies to craft robust and efficient systems that align seamlessly with your organizational requirements. From initial
            concept to final implementation, we ensure meticulous attention to detail and a collaborative approach, ensuring that the resulting systems empower your business to thrive in today&apos;s dynamic market landscape.
          </p>
        </section>
        <img className="w-full max-w-sm md:max-w-xs md:px-10 lg:max-w-lg lg:px-8" src={imageSystem} alt="" />
      </div>
      {/* CTA Section */}
      <CTA />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default services;
