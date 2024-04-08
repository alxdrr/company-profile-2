import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import CTA from "../components/CTA";
import Card from "../components/Card";
import Accordion from "../components/Accordion";
import aboutImage from "../assets/about.png";
import portfolio1 from "../assets/portfolio/tmekar.png";
import portfolio2 from "../assets/portfolio/artha.png";
import portfolio3 from "../assets/portfolio/kopi.png";

const Home = () => {
  return (
    <>
      {/* Navbar & Hero */}
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <Navbar />
        <div className="Hero w-full max-w-screen-xl flex flex-col justify-self-center my-auto mx-auto pt-16 gap-8 xl:gap-10 px-4 lg:px-8 xl:px-0">
          <div>
            <div className="text-secondary text-3xl md:text-6xl lg:text-7xl font-black py-4 w-full">Inspiring</div>
            <div className="text-white text-3xl md:text-6xl lg:text-7xl font-black py-4">Digital Innovation</div>
          </div>
          <div className="flex flex-col gap-8 xl:gap-10">
            <div className="text-white lg:text-xl font-normal xl:max-w-xl">Innovative Software House to Bring Your Ideas to Life. We are your trusted partner in web, mobile, and software development.</div>
            <Button variant={"primary"} title={"Dive in"} type={"clickable"} scrollToId={"about"}></Button>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div id="about" className="About w-full max-w-screen-xl items-center justify-between flex flex-col md:flex-row h-auto my-16 mx-auto gap-8 md:gap-0 lg:py-10 px-4 lg:px-8 xl:px-0">
        <section className="flex justify-center items-center md:items-start flex-col gap-8 xl:gap-10">
          <h1 className="text-primary text-center text-xl md:text-start md:text-2xl lg:text-4xl max-w-2xl font-black">Unlock Your Development Potential With Us</h1>
          <p className="max-w-2xl text-center md:text-start lg:text-xl xl:text-xl text-gray-700">
            At our software house, we offer a range of services in web, mobile, and system development. With our expertise and dedication, we provide tailored solutions to meet your unique needs and help you achieve your goals.
          </p>
          <Button variant={"primary"} type={"clickable"} title={"Contact us"}></Button>
        </section>
        <img className="w-full md:max-w-xs md:px-10 lg:max-w-lg lg:px-8" src={aboutImage} alt="" />
      </div>
      {/* Services Section */}
      <div className="Services w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0">
        <section className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-primary text-center text-xl md:text-start md:text-2xl lg:text-4xl max-w-xl font-black">Our Services</h1>
          <p className="lg:text-base xl:text-xl text-center text-gray-700">We offer comprehensive web, mobile, and system development services.</p>
        </section>
        <section className="flex flex-col gap-6 md:gap-0 sm:flex-row justify-between w-full">
          <Card Type={"service"} Title={"Web Development"} Desc={"With a website, your business could be improved by having a stronger brand-awareness, reaching more market like never before."}></Card>
          <Card Type={"service"} Title={"Mobile Development"} Desc={"With an app, your business could be enabled and scaled infinitely as onboarding customers via app is much more scalable."}></Card>
          <Card Type={"service"} Title={"System Development"} Desc={"With a system, your business processes could be automated and streamlined, resulting in a reduced cost, and higher net-profits."}></Card>
        </section>
      </div>
      {/* Recent Projects Section */}
      <div className="w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0">
        <section className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-primary text-center text-xl md:text-start md:text-2xl lg:text-4xl max-w-xl font-black">Recent Projects</h1>
          <p className="lg:text-base xl:text-xl text-center text-gray-700">Browse through our portfolio of completed projects.</p>
        </section>
        <section className="flex flex-col gap-6 md:gap-0 xs:flex-row justify-between w-full xl:px-16">
          <Card Type={"portfolio"} Title={"Timbul Mekar"} Image={portfolio1}></Card>
          <Card Type={"portfolio"} Title={"Bali Artha Jaya"} Image={portfolio2}></Card>
          <Card Type={"portfolio"} Title={"Kopi Gunung Sari"} Image={portfolio3}></Card>
        </section>
        <Button variant={"primary"} type={"clickable"} title={"View our projects"}></Button>
      </div>
      {/* FAQ Section */}
      <div className="w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0">
        <section className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-primary text-xl md:text-start md:text-2xl lg:text-4xl text-center font-black">FAQ</h1>
          <p className="lg:text-base xl:text-xl max-w-4xl text-center text-gray-700">Find answers to common questions about our services and processes.</p>
        </section>
        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <Accordion
            title="What kind of businesses can benefit from your software development services?"
            content="Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."
          ></Accordion>
          <Accordion
            title="What kind of businesses can benefit from your software development services?"
            content="Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."
          ></Accordion>
          <Accordion
            title="What kind of businesses can benefit from your software development services?"
            content="Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."
          ></Accordion>
          <Accordion
            title="What kind of businesses can benefit from your software development services?"
            content="Our services are tailored for a diverse range of industries. Whether you’re a startup, SME, or a large corporation, we provide customized solutions to meet your specific needs in web, app, and system development. Our expertise is designed to support businesses in any sector to enhance their digital presence and operational efficiency."
          ></Accordion>
        </div>
        <Button variant={"primary"} type={"clickable"} title={"See more"}></Button>
      </div>
      {/* CTA Section */}
      <CTA />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;