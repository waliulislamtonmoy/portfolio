import React from "react";

import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
const Education = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="p-3 sm:mt-4 sm:mb-4 md:mt-7 md:mb-7 lg:mt-20 lg:mb-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          <div>
            <div className="flex gap-6 border-spacing-3 border-4 border-black p-3 hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 ">
              <div>
                <FaGraduationCap className="text-6xl " />
              </div>
              <div>
                <h1>Daffodil International University</h1>
                <p>2019-2024</p>
                <p>
                  Bachelor of Science in Computer Science and Engineering
                  graduate from Daffodil International University, equipped with
                  strong technical skills, problem-solving abilities, and a
                  passion for software development and innovation.
                </p>
              </div>
            </div>
            <div className="flex gap-6 border-spacing-3 border-4 border-black p-3 hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300">
              <div>
                <FaGraduationCap className="text-6xl " />
              </div>
              <div>
                <h1>Quadirabad Cantonment Sapper College</h1>
                <p>2015-2017</p>
                <p>
                  Successfully Completed Higher Secondary Certificate
                  Examination From Qadirabad Cantonment Sapper College .
                </p>
              </div>
            </div>
            <div className="flex gap-6 border-spacing-3 border-4 border-black p-3 hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300">
              <div>
                <FaGraduationCap className="text-6xl " />
              </div>
              <div>
                <h1>Computer Office Application</h1>
                <p>2017</p>
                <p>
                  Successfully Completed Bangladesh Computer Office Application
                  Traning From Bangladesh Technical Educational Board.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-6 border-spacing-3 border-4 border-black p-3 hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300">
              <div>
                <GrCertificate className="text-6xl text-[#FF00FF]" />
              </div>
              <div>
                <h1>Ostad</h1>
                <p>2024-2024</p>
                <p>
                  Completed a Full Stack Developer course from Ostad,
                  specializing in Django, React, Flask, and DRF, gaining
                  expertise in dynamic web application development and mastering
                  both frontend and backend technologies.
                </p>
              </div>
            </div>
            <div className="flex gap-6 border-spacing-3 border-4 border-black p-3 hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300">
              <div>
                <GrCertificate className="text-6xl text-[#FF00FF]" />
              </div>
              <div>
                <h1>Linux OS</h1>
                <p>2023-2024</p>
                <p>Linux OS Training from The Linux Foundation.</p>
              </div>
            </div>
            <div className="flex gap-6 border-spacing-3 border-4 border-black p-3 hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 ">
              <div>
                <GrCertificate className="text-6xl text-[#FF00FF]" />
              </div>
              <div>
                <h1>CPC-Programmer</h1>
                <p>2022-2023</p>
                <p>
                  Programming Club Event Manager from Daffodil International
                  University Programming Club (CPC) . Programming , Event
                  Management and Problem Solving .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
