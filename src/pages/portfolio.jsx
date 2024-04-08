import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import CTA from "../components/CTA";
import Card from "../components/Card";
import portfolio1 from "../assets/portfolio/tmekar.png";
import portfolio2 from "../assets/portfolio/artha.png";
import portfolio3 from "../assets/portfolio/kopi.png";

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
      <div id="portfolio" className="w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto my-16 mx-auto gap-8 md:gap-0 lg:py-10 px-4 lg:px-8 xl:px-0">
        <Card Type={"portfolio-page"} Title={"Timbul Mekar"} Image={portfolio1} Project={"Website Company"}></Card>
        <h1 className="xl:text-3xl lg:text-2xl text-secondary text-center font-medium px-12">behold the convergence of artistry and technology</h1>
      </div>
      {/* CTA Section */}
      <CTA />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default portfolio;
