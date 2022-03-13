import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Mainpage from "../components/Mainpage";
import About from "../components/About";
import Team from "../components/Team";
import Faq from "../components/Faq";

import "./index.css";
import Shoe from "../components/Shoe";
import Sidebar from "../components/Sidebar";

import { useScroll } from "../components/UseScroll";
import { motion } from "framer-motion";
import Studio from "../components/Studio";
import MysteryCode from "../components/MysteryCode";
import Canvasnew from "../components/canvas";
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
      {/* <Navbar toggle={toggle} /> */}
      <NavbarGlass toggle={toggle} />

      <motion.div initial="hidden" animate="show">
        <Mainpage />

        <About />

        <Roadmap />

        <Shoe />

        <Team />

        <Faq />
      </motion.div>
    </div>
  );
};

export default Home;
