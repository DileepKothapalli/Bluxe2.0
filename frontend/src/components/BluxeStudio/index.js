import React from "react";
import {
  BodyContainer,
  Bullet,
  Container,
  Div,
  HalfDivl,
  HalfDivR,
  Heading,
  Logo,
  TextDiv,
  TextDivl,
  TextDivR,
  TextL,
  TextP,
  TextR,
  TopContainer,
} from "./BluxeStudioElements";
import logo from "../../images/bluxestudio1.png";
// import logo from "../../images/Asset1.png";
import { useScroll } from "../UseScroll.js";
import {
  BluxeStudioHeadingAnimate,
  LeftDivAnimate,
  RightDivAnimate,
  StaggerContainer,
} from "./BluxeStudioFramer";

const BluxeStudio = () => {
  const [element, controls] = useScroll(0.7);
  const [element1, controls1] = useScroll(0.7);
  const [element2, controls2] = useScroll(0.4);
  const [element3, controls3] = useScroll(0.4);
  return (
    <Div>
      <Container>
        <TopContainer>
          <Logo
            ref={element}
            variants={BluxeStudioHeadingAnimate}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
            src={logo}
          />
        </TopContainer>
        <BodyContainer
          ref={element2}
          variants={StaggerContainer}
          animate={controls2}
          transition={{
            duration: 1,
            delay: 0.5,
            bounce: 1.3,
            ease: "easeInOut",
          }}
        >
          <HalfDivl
            variants={LeftDivAnimate}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            <TextDivl>
              <TextL>
                Our signature NFT wearable collection will be released on 7th
                april 2022. We aim to become the iconic digital fashion brand
                and build full time business in digital wearables.
                <br></br>
                <br></br>
                Bluxe wearable are our business partners and investors in our
                mission which comes with unique benefits and business
                oppurtunities.
              </TextL>
            </TextDivl>
          </HalfDivl>
          <HalfDivR
            variants={RightDivAnimate}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            <TextDivR>
              <Heading>
                Benefits of Bluxe membership
                <br /> include:
              </Heading>
              <TextDiv>
                <Bullet></Bullet>
                <TextP>Ownership of underlying artwork and IP</TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>
                  Each NFT can be quantipulated at Bluxe store to be worn in
                  metaverse.
                </TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>Exclusive access to your Bluxe animation fire.</TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>
                  Curated presales and mint pass for high potential future
                  wearable collections.
                </TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>Holders only raffles, games and events .</TextP>
              </TextDiv>{" "}
              <TextDiv>
                <Bullet></Bullet>
                <TextP>
                  Invite to annual fashion festival for holders and IRL events.
                </TextP>
              </TextDiv>
            </TextDivR>
          </HalfDivR>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default BluxeStudio;
