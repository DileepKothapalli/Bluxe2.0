import React from "react";

import {
  Cards,
  CardsContainer,
  Div,
  Container,
  TopContainer,
  Heading,
  Caption,
  Skill,
  Rarity,
  HalfContainer,
  CardsWrapper,
  HeadContainer,
  HeadingLogo,
  HeadingLogoW,
  Video,
  CaptionDiv,
} from "./AboutElements.js";
import logo from "../../images/logowhite.png";
import logo1 from "../../images/logo.svg";
import {
  FadeUpCard,
  StaggerContainer,
  VideoAnimate,
  AboutAnimation,
} from "./AboutFramer";

import fly from "../../images/fly.webm";
import run from "../../images/Run.webm";

import { useScroll } from "../UseScroll";
import Studio from "../Studio/index";
import MysteryCode from "../MysteryCode";

const About = () => {
  const [element, controls] = useScroll(0.2);
  const [element1, controls1] = useScroll(0.4);
  const [element2, controls2] = useScroll(0.4);
  return (
    <Div id="about">
      <Studio></Studio>

      <Container>
        <TopContainer>
          <HeadContainer
            ref={element}
            variants={AboutAnimation}
            animate={controls}
            transition={{
              duration: 0.5,
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

          <CaptionDiv>
            <Caption
              ref={element1}
              variants={AboutAnimation}
              animate={controls1}
              transition={{
                duration: 0.5,
                delay: 0.2,
                bounce: 0.3,
                ease: "easeInOut",
              }}
            >
              Bluxe studio has partened with Wingx World to launch its exclusive
              sneaker collection for its metaverse. With rare attributes to
              navigate the streets.
            </Caption>
          </CaptionDiv>
        </TopContainer>
        <CardsWrapper
          ref={element2}
          variants={StaggerContainer}
          animate={controls2}
          transition={{
            duration: 0.5,
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
                    duration: 0.5,
                    delay: 0.1,
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
                    duration: 0.5,
                    delay: 0.1,
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
