import React from "react";
// import { Link } from "react-router-dom";

const Button = ({ variant, type, link, className, onClick, children }) => {
  let buttonClassName = "";
  let textColorClass = "text-white";

  if (variant === "primary") {
    buttonClassName += "w-max py-2 px-10 bg-[#D64923] transition-all rounded-[60px] text-white font-bold hover:bg-[#DE7C62] active:scale-90";
  }

  return (
    <>
      {type === "clickable" && (
        <button onClick={onClick} className={`text-base ${buttonClassName} ${textColorClass} ${className}`} type="button">
          {children}
        </button>
      )}
      {type === "button" && (
        <button className={`text-base ${buttonClassName} ${textColorClass} ${className}`} type="submit">
          {children}
        </button>
      )}
      {/* {link && (
        <Link className={`text-base h-fit ${buttonClassName} ${textColorClass} ${className}`} to={link}>
          {children}
        </Link>
      )} */}
    </>
  );
};

export default Button;
