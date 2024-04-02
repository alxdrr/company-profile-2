import React from "react";

const Card = ({ Icon, Title, Desc }) => {
  return (
    <div className="drop-shadow-md max-w-md w-96 bg-white rounded-xl px-4 py-6 | flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl text-secondary text-center font-black">{Title}</h1>
      <p className="text-xl text-gray-700 text-center">{Desc}</p>
      <p className="text-secondary font-medium">Learn More</p>
    </div>
  );
};

export default Card;
