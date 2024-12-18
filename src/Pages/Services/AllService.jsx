import React from "react";

import { FaCode } from "react-icons/fa";

const AllService = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <section id="new-features" className="py-8  sm:py-10 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mt-10">
            <h2 className="text-6xl font-bold leading-tight  sm:text-4xl xl:text-5xl dark:text-white">
              My Quality Services
            </h2>
            <p className="mt-4 text-base leading-7  sm:mt-8">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24 transition-transform duration-700 ease-in-out">
            {/* Feature 1 */}
            <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center hover:bg-red-400 transition-transform duration-700 ease-in-out hover:scale-95 hover:rounded">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <FaCode className="fa-solid fa-chart-column text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold ">Web Development</h3>
              <p className="mt-5 text-base ">
                Web development with Django and React ensures powerful
                functionality, dynamic interfaces, and exceptional UI/UX design.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center hover:bg-red-400 transition-transform duration-700 ease-in-out hover:scale-95 hover:rounded">
              <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <i className="fa-solid fa-truck-fast text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold ">Fast Integration</h3>
              <p className="mt-5 text-base ">
                Seamlessly integrate with your existing tools and systems for a
                smooth workflow experience.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center hover:bg-red-400 transition-transform duration-700 ease-in-out hover:scale-95 hover:rounded">
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <i className="fa-solid fa-shield text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold ">Security First</h3>
              jhkpii
              <p className="mt-5 text-base ">
                Ensure the safety of your data with top-notch security features.
                Your privacy is our priority.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center hover:bg-red-400 transition-transform duration-700 ease-in-out hover:scale-95 hover:rounded">
              <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <i className="fa-solid fa-cloud text-3xl " />
              </div>
              <h3 className="mt-12 text-xl font-bold ">Cloud Integration</h3>
              <p className="mt-5 text-base ">
                Access your data from anywhere with seamless cloud integration.
                Work without boundaries.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center hover:bg-red-400 transition-transform duration-700 ease-in-out hover:scale-95 hover:rounded">
              <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <i className="fa-solid fa-pen-nib text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold ">Task Management</h3>
              <p className="mt-5 text-base ">
                Organize your workflow with efficient task management features.
                Stay on top of your projects effortlessly.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center hover:bg-red-400 transition-transform duration-700 ease-in-out hover:scale-95 hover:rounded">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <i className="fa-solid fa-bolt text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold ">Performance Metrics</h3>
              <p className="mt-5 text-base ">
                Monitor and measure your performance with comprehensive metrics.
                Optimize your processes for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllService;
