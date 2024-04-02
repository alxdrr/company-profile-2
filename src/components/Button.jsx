import React from "react";
// import { Link } from "react-router-dom";

const Button = ({ variant, type, link, className, onClick, children }) => {
  let buttonClassName = "py-2 px-8 rounded-[60px] ";
  let textColorClass = "text-white";

  if (variant === "primary") {
    buttonClassName += "bg-[#D64923] text-white font-bold";
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
