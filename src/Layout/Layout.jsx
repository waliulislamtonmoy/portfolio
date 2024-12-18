import React from "react";

import Data from "../Data/ProjectData.js";
import PreLoader from "../Components/PreLoader.jsx";
import Navigation from "../Components/Navigation.jsx";
import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import Skills from "../Pages/Skills/Skills.jsx";
import Service from "../Pages/Services/Service.jsx";
import Project from "../Pages/Project/Project.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Footer from "../Components/Footer.jsx";
import GoToTop from "../Components/GoToTop.jsx";
const Layout = () => {
  return (
    <div>
      {Data === null ? (
        <PreLoader />
      ) : (
        <div>
          <Navigation />
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Service></Service>
          <Project></Project>
          <Contact />
          <GoToTop></GoToTop>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
