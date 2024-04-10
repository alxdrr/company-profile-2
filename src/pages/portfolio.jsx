import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import CTA from "../components/CTA";
import Card from "../components/Card";
import portfolio1 from "../assets/portfolio/tmekar.png";
import portfolio2 from "../assets/portfolio/artha.png";
import portfolio3 from "../assets/portfolio/kopi.png";
import portfolio4 from "../assets/portfolio/helicam.png";
import portfolio5 from "../assets/portfolio/elitesBible.svg";
import portfolio6 from "../assets/portfolio/films.svg";

const portfolio = () => {
  return (
    <>
      {/* Navbar & Hero */}
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <Navbar />
        <div className="Hero w-full max-w-screen-xl flex flex-col justify-self-center my-auto mx-auto pt-16 gap-8 xl:gap-10 px-4 lg:px-8 xl:px-0">
          <div>
            <div className="text-secondary text-3xl md:text-6xl lg:text-7xl font-black py-4 w-full">Experience Exellence</div>
            <div className="text-white text-3xl md:text-6xl lg:text-7xl font-black py-4">In Every Project</div>
          </div>
          <div className="flex flex-col gap-8 xl:gap-10">
            <div className="text-white lg:text-xl font-normal xl:max-w-4xl">
              Embark on a journey through our curated collection of projects. Each one represents a commitment to quality, innovation, and client satisfaction. Witness the pinnacle of software craftsmanship.
            </div>
            <Button variant={"primary"} title={"Dive in"} type={"clickable"} scrollToId={"about"}></Button>
          </div>
        </div>
      </div>
      {/* Portfolio Section */}
      <div className="flex flex-wrap w-full gap-4">
        {" "}
        <div id="portfolio" className="w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto mt-16 mx-auto gap-8 md:gap-0 lg:pt-10 px-4 lg:px-8 xl:px-0">
          <Card Type={"portfolio-page"} Title={"Timbul Mekar"} Image={portfolio1} Project={"Website Company"}></Card>
          <h1 className="xl:text-5xl max-w-md w-full lg:text-3xl text-secondary text-center font-thin px-12">behold the convergence of artistry and technology</h1>
        </div>
        <div id="portfolio" className="w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto mx-auto gap-8 md:gap-4 px-4 lg:px-8 xl:px-0">
          <Card Type={"portfolio-page"} Title={"Elites Bible"} Image={portfolio5} Project={"Website Application"}></Card>
          <Card Type={"portfolio-page"} Title={"Helicam"} Image={portfolio4} Project={"Website Company"}></Card>
        </div>
        <div id="portfolio" className="w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto mx-auto gap-8 md:gap-0 lg:pt-10 px-4 lg:px-8 xl:px-0">
          <h1 className="xl:text-5xl mx-auto w-full lg:text-3xl text-secondary text-center font-thin px-12">digital dreams, real result</h1>
        </div>
        <div id="portfolio" className="w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto mx-auto gap-8 md:gap-0 lg:pt-10 px-4 lg:px-8 xl:px-0">
          <Card Type={"portfolio-page"} Title={"Kori Barak Films"} Image={portfolio6} Project={"Website Company"}></Card>
        </div>
        <div id="portfolio" className="w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto mx-auto gap-8 md:gap-0 lg:pt-10 px-4 lg:px-8 xl:px-0">
          <h1 className="xl:text-5xl mx-auto w-full lg:text-3xl text-secondary text-center font-thin px-12">embody creativity, functionality, and excellence</h1>
          <Card Type={"portfolio-page"} Title={"Timbul Mekar"} Image={portfolio2} Project={"E-commerce Websites"}></Card>
        </div>
      </div>
      {/* CTA Section */}
      <CTA />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default portfolio;
