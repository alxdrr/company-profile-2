import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Accordion from "../components/Accordion";
import image from "../assets/faq-hero.svg";

const faq = () => {
  return (
    <>
      {/* Navbar & Hero */}
      <div className="w-full bg-white h-screen flex flex-col justify-center">
        <Navbar />
        <div className="Hero w-full max-w-screen-xl flex justify-self-center justify-center lg:justify-between items-center my-auto mx-auto pt-16 gap-8 xl:gap-10 px-4 lg:px-8 xl:px-0">
          <div>
            <div className="text-primary text-3xl md:text-6xl font-black py-4 w-full after:content-['Question'] after:ms-5 after:text-secondary"> Frequently Asked</div>
            <div className="flex flex-col gap-8 xl:gap-10">
              <div className="text-gray-700 lg:text-xl font-normal xl:max-w-xl">Find answers to common questions about our services and processes.</div>
              <Button variant={"primary"} title={"Explore"} type={"clickable"} scrollToId={"faq"}></Button>
            </div>
          </div>
          <img className="mx-12 lg:block hidden" src={image} alt="" />
        </div>
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
      </div>
      {/* CTA Section */}
      <div className="w-full max-w-screen-xl items-center flex flex-col h-auto my-16 mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0">
        <section className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-primary text-xl md:text-start md:text-2xl lg:text-4xl text-center font-black">Didn&apos;t find your answer?</h1>
          <p className="lg:text-base xl:text-xl max-w-4xl text-center text-gray-700">let us know what you’ve been asking for.</p>
        </section>
        <Button variant={"primary"} type={"clickable"} title={"Get in touch"}></Button>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default faq;
