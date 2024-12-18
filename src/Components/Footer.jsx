import React from "react";

import { IoHeart } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-black text-white">
      <footer className="p-4 py-10 lg:py-10">
        <div className="flex items-center justify-center">
          <p className="inline-flex items-center space-x-1">
            <span>© 2024 </span>
            <IoHeart className="text-2xl text-red-600" />
            <span>All Rights Reserved By Waliul Islam Tonmoy.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
