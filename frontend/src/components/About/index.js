import React, { useRef, useEffect, useState } from "react";
import Rellax from "rellax";

import SideBar from "../Sidebar/index";
import {
  BottomContainer,
  Cards,
  CardsContainer,
  Div,
  Container,
  MiddleContainer,
  TopContainer,
  Heading,
  TextContainer,
  Bullet,
  Text,
  Caption,
  Skill,
  Rarity,
  HalfContainer,
  BgImg,
  HalfCards,
  CardsWrapper,
  HeadContainer,
  HeadingLogo,
  HeadingLogoW,
  Video,
} from "./AboutElements.js";
import Navbar from "../../components/Navbar/index";
import logo from "../../images/logowhite.png";
import logo1 from "../../images/logo.svg";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import {
  FadeUp,
  FadeUpCard,
  StaggerContainer,
  VideoAnimate,
} from "./AboutFramer";

import fly from "../../images/fly.mp4";
import run from "../../images/Run.mp4";
import { AboutAnimation } from "../Animation";
import { useScroll } from "../UseScroll";
import Studio from "../Studio/index";
import MysteryCode from "../MysteryCode";

const About = () => {
  const [element, controls] = useScroll(0.2);
  const [element1, controls1] = useScroll(0.4);
  const [element2, controls2] = useScroll(0.4);
  return (
    <Div id="about">
      <BgImg></BgImg>
      <Studio></Studio>

      <Container>
        <TopContainer>
          <HeadContainer
            ref={element}
            variants={AboutAnimation}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.1,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            <HeadingLogo src={logo} />
            <Heading> x </Heading>
            <Heading> WINGX </Heading>
            <HeadingLogoW src={logo1}></HeadingLogoW>
          </HeadContainer>

          <Caption
            ref={element1}
            variants={AboutAnimation}
            animate={controls1}
            transition={{
              duration: 1,
              delay: 0.2,
              bounce: 0.3,
              ease: "easeInOut",
            }}
          >
            Bluxe studio has partened with Wingx World to launch its exclusive
            sneaker collection for its metaverse. With rare attributes to
            navigate the streets.
          </Caption>
        </TopContainer>
        <CardsWrapper
          ref={element2}
          variants={StaggerContainer}
          animate={controls2}
          transition={{
            duration: 1,
            delay: 0.5,
            bounce: 0.3,
            ease: "easeInOut",
          }}
        >
          <HalfContainer>
            <CardsContainer variants={FadeUpCard}>
              <Cards>
                <Video
                  variants={VideoAnimate}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    bounce: 1.3,
                    ease: "easeInOut",
                  }}
                  loop
                  autoPlay
                  muted
                >
                  {/* <source src={shoevideo} type="video/mp4" /> */}
                  <source src={fly} type="video/mp4" />
                  Your browser does not support the video tag.
                </Video>
              </Cards>
              <Skill>Fly</Skill>
              <Rarity>10% of shoes</Rarity>
            </CardsContainer>{" "}
            <CardsContainer variants={FadeUpCard}>
              <Cards></Cards>
              <Skill>Jump</Skill>
              <Rarity>20% of the shoes</Rarity>
            </CardsContainer>
          </HalfContainer>{" "}
          <HalfContainer>
            <CardsContainer variants={FadeUpCard}>
              <Cards>
                {" "}
                <Video
                  variants={VideoAnimate}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    bounce: 1.3,
                    ease: "easeInOut",
                  }}
                  loop
                  autoPlay
                  muted
                >
                  {/* <source src={shoevideo} type="video/mp4" /> */}
                  <source src={run} type="video/mp4" />
                  Your browser does not support the video tag.
                </Video>
              </Cards>
              <Skill>Sprint</Skill>
              <Rarity>30% of the shoes</Rarity>
            </CardsContainer>{" "}
            <CardsContainer variants={FadeUpCard}>
              <Cards> </Cards>
              <Skill>Glide</Skill>
              <Rarity>40% of the shoes</Rarity>
            </CardsContainer>
          </HalfContainer>
        </CardsWrapper>
      </Container>

      <MysteryCode />
    </Div>
  );
};

export default About;
