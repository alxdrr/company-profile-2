import { useState } from "react";
import React from "react";

const Accordion = ({ title, content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const handleClick = () => setAccordionOpen(!accordionOpen);
  return (
    <div className="flex flex-col w-full max-w-screen-md shadow-sm rounded-b-xl bg-white">
      <h2 onClick={handleClick} className="text-primary border-2 border-gray-200 rounded-t-xl transition-all hover:bg-[#ffebe5] lg:p-6 cursor-pointer">
        {title}
      </h2>
      <div
        className={` grid lg:px-6 overflow-hidden border-2 border-gray-200 rounded-b-xl transition-all duration-300 ease-in-out text-slate-600 ${accordionOpen ? "grid-rows-[1fr] opacity-100 lg:pb-6 lg:pt-3" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
