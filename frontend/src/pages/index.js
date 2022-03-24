import React, { useState, useRef, useEffect } from "react";
import Roadmap from "../components/Roadmap";
import Mainpage from "../components/Mainpage";
import About from "../components/About";
import Faq from "../components/Faq";

import "./index.css";
import Shoe from "../components/Shoe";
import Sidebar from "../components/Sidebar";

import { motion } from "framer-motion";
import NavbarGlass from "../components/NavbarGlass";
import Artwork from "../components/Artwork";
import Team1 from "../components/Team1";
import Footer from "../components/Footer";
import BluxeStudio from "../components/BluxeStudio";
import { Div } from "./Elements";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionR, setScrollPositionR] = useState(0);
  const [scrollPositionG, setScrollPositionG] = useState(0);
  const [scrollPositionB, setScrollPositionB] = useState(0);
  const [divPosition, setDivPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition((position / 100) % 128);
    setScrollPositionR((position * 46) / 5000);
    setScrollPositionG((position * 26) / 5000);
    setScrollPositionB((position * 71) / 5000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div
      scrollR={scrollPositionR}
      scrollG={scrollPositionG}
      scrollB={scrollPositionB}
      // scrollR="0"
      // scrollG="0"
      // scrollB="0"
      className="heade"
    >
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarGlass toggle={toggle} />

      <motion.div initial="hidden" animate="show">
        <Mainpage />

        <About />

        <Artwork />

        <Roadmap />

        <Team1 />

        <Faq />

        <Footer />
      </motion.div>
    </Div>
  );
};

export default Home;
