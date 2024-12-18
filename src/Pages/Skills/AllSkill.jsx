import React from "react";

import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import js from "../../assets/images/js.svg";
import reactjs from "../../assets/images/react.svg";
import tailwind from "../../assets/images/tailwind-svgrepo-com.svg";
import python from "../../assets/images/python-svgrepo-com.svg";
import django from "../../assets/images/django-icon-svgrepo-com.svg";
import mysql from "../../assets/images/mysql-svgrepo-com.svg";
import mongodb from "../../assets/images/mongodb-svgrepo-com.svg";

const AllSkill = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className=" sm:py-10 md:py-16 lg:py-20   ">
        <div className="">
          <div className="text-center">
            <h1 className="text-6xl font-sans font-bold sm:py-6 md:py-8 lg:py-10">
              My Skills
            </h1>
          </div>
          <div className="mt-5 mb-5 text-center">
            <p>
              Proficient in Django, React, JavaScript, Python, REST APIs, Linux
              tools, responsive design, problem-solving, and crafting seamless
              user experiences
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 lg:mt-10 mb:10 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-9 gap-2">
          <div className="bg-gray-400 hover:bg-red-300  flex items-center justify-center rounded h-32">
            <img src={html} alt="html" className="h-16 w-full" />
          </div>
          <div className="bg-gray-400 hover:bg-red-300 cursor-pointer flex items-center justify-center rounded h-32">
            <img src={css} alt="css" className="h-16 w-full" />
          </div>
          <div className="bg-gray-400 hover:bg-red-300 cursor-pointer  flex items-center justify-center rounded h-32">
            <img src={js} alt="JS" className="h-16 w-full" />
          </div>
          <div className="bg-gray-400 hover:bg-red-300 cursor-pointer flex items-center justify-center rounded h-32">
            <img src={reactjs} alt="html" className="h-16 w-full" />
          </div>
          <div className="bg-gray-400 hover:bg-red-300 cursor-pointer flex items-center justify-center rounded h-32">
            <img src={tailwind} alt="html" className="h-16 w-full" />
          </div>
          <div className="bg-gray-400 hover:bg-red-300 cursor-pointer flex items-center justify-center rounded h-32">
            <img src={python} alt="html" className="h-16 w-full" />
          </div>
          <div className="bg-gray-400 hover:bg-red-300 cursor-pointer flex items-center justify-center rounded h-32">
            <img src={django} alt="html" className="h-16 w-full" />
          </div>
          <div className="bg-gray-400 hover:bg-red-300 cursor-pointer flex items-center justify-center rounded h-32">
            <img src={mysql} alt="html" className="h-16 w-full" />
          </div>
          <div className="bg-gray-400 hover:bg-red-300 cursor-pointer flex items-center justify-center rounded h-32">
            <img src={mongodb} alt="html" className="h-16 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSkill;
