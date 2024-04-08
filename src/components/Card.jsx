const Card = ({ Icon, Title, Desc, Type, Image, Project }) => {
  if (Type === "service") {
    return (
      <>
        <div className="drop-shadow-md md:max-w-60 lg:max-w-72 xl:max-w-sm bg-white rounded-xl px-4 py-6 | flex flex-col justify-between items-center gap-4 xl:gap-10">
          <h1 className="text-xl xl:text-3xl lg:text-2xl text-secondary text-center font-black">{Title}</h1>
          <p className="text-sm lg:text-base xl:text-xl text-gray-700 text-center">{Desc}</p>
          <p className="text-secondary font-medium">Learn More</p>
        </div>
      </>
    );
  } else if (Type === "portfolio") {
    return (
      <>
        <div className="drop-shadow-md md:max-w-60 lg:max-w-72 xl:max-w-sm bg-white rounded-xl px-4 py-6 | flex flex-col justify-center items-center gap-4 xl:gap-10 lg:hover:scale-[1.04] transition-all duration-500">
          <h1 className="xl:text-3xl lg:text-2xl text-primary text-center font-medium">{Title}</h1>
          <img className="w-full" src={Image} alt="Portfolio Image" />
        </div>
      </>
    );
  } else if (Type === "portfolio-page") {
    return (
      <>
        <div className="drop-shadow-md w-full bg-white rounded-xl px-4 py-6 | flex flex-col justify-center items-center gap-4 xl:gap-10 | transition-all duration-500 hover:bg-[#DE7C62]">
          <h1 className="xl:text-3xl lg:text-2xl text-primary text-center font-medium">{Title}</h1>
          <img className="" src={Image} alt="Portfolio Image" />
          <h1 className="xl:text-3xl lg:text-2xl text-white  text-center font-medium">{Project}</h1>
        </div>
      </>
    );
  }
};

export default Card;
