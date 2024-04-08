import { useRouteError } from "react-router-dom";
import notFoundImage from "../assets/404.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div className="w-full bg-white h-screen flex flex-col justify-center">
        <Navbar />
        <div className="Hero w-full max-w-screen-xl flex flex-col justify-center items-center my-auto mx-auto pt-16 px-4 lg:px-8 xl:px-0">
          <img className="w-full md:max-w-xs md:px-10 lg:max-w-lg lg:px-8" src={notFoundImage} alt="" />
          <div id="about" className="w-full max-w-screen-xl items-center flex flex-col h-auto mx-auto lg:py-10 px-4 gap-8 xl:gap-10 lg:px-8 xl:px-0">
            <section className="flex justify-center items-center flex-col gap-4">
              <h1 className="text-primary text-xl md:text-start md:text-2xl lg:text-4xl text-center font-black">Oops! Wrong Turn!</h1>
              <p className="lg:text-base xl:text-xl max-w-4xl text-center text-gray-700">We couldn&apos;t find what you&apos;re looking for :&#40;</p>
              <p className="lg:text-base xl:text-xl max-w-4xl text-center text-gray-500">
                Error Message : <i>{error.statusText || error.message}</i>
              </p>
            </section>
            <Button link={"/"} title={"Home Page"}></Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
