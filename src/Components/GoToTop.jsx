import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
const GoToTop = () => {
  return (
    <div className="">
      <div className=" rounded-full">
        <ScrollToTop smooth />
      </div>
    </div>
  );
};

export default GoToTop;
