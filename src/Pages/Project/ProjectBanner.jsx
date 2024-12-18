import React from "react";

const ProjectBanner = () => {
  return (
    <div className="">
      <div className="h-28 w-full">
        <div className="mt-16">
          <div className="flex justify-center items-center">
            <h1
              className="text-6xl text-center font-bold font-sans  capitalize "
              id="Project"
            >
              My Recent Works
            </h1>
          </div>
          <p className="text-center m-3 ">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
