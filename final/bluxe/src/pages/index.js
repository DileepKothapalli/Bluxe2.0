import React, { useState, useRef } from "react";
import Roadmap from "../components/Roadmap";
import Mainpage from "../components/Mainpage";
import About from "../components/About";
import Team from "../components/Team";
import Faq from "../components/Faq";

import "./index.css";
import Shoe from "../components/Shoe";
import Sidebar from "../components/Sidebar";

import { motion } from "framer-motion";
import NavbarGlass from "../components/NavbarGlass";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector("[data-scroll-container]"),
  //   smooth: true,
  // });
  return (
    <div className="heade">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarGlass toggle={toggle} />

      <motion.div initial="hidden" animate="show">
        <Mainpage />

        <About />

        <Shoe />

        <Roadmap />

        <Team />

        <Faq />
      </motion.div>
    </div>
  );
};

export default Home;
