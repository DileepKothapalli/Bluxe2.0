import React, { useRef, useEffect, useState } from "react";
import Rellax from "rellax";
import "./TeamElements";
import {
  Card,
  CardsContainer,
  Container,
  Div,
  Heading,
  MainContainer,
  Title,
  CardWrapper,
  InnerCard,
  Image,
  Name,
} from "./TeamElements";

import { useScroll } from "../UseScroll";
import DeepakJoshiAvatar from "../../images/DeepakJoshiAvatar.png";
import BhawnaSingh from "../../images/BhawnaSingh.png";
import Prashant from "../../images/Prashant1.png";
import Dileep from "../../images/Dileep2.png";
import { StaggerContainer, TitleAnimation, FadeUpCard } from "./TeamFramer";

const Team = () => {
  const [element, controls] = useScroll(0.2);

  return (
    <Div id="team">
      {/* <BgImg></BgImg> */}
      <Container>
        <MainContainer>
          <Title
            ref={element}
            variants={TitleAnimation}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.2,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            TEAM
          </Title>
          <CardWrapper
            ref={element}
            variants={StaggerContainer}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.2,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            <CardsContainer variants={FadeUpCard}>
              <Card>
                <InnerCard>
                  <Image
                    height="235"
                    top="-95"
                    left="-26"
                    src={BhawnaSingh}
                  ></Image>
                </InnerCard>
              </Card>
              <Name>BHAWNA SINGH</Name>
              <Heading>FOUNDER & CHIEF DESIGNER</Heading>
            </CardsContainer>{" "}
            <CardsContainer variants={FadeUpCard}>
              <Card>
                <InnerCard>
                  <Image height="210" top="-70" left="-15" src={Dileep}></Image>
                </InnerCard>
              </Card>
              <Name>Dileep</Name>
              <Heading>DEVELOPER</Heading>
            </CardsContainer>{" "}
            <CardsContainer variants={FadeUpCard}>
              <Card>
                <InnerCard>
                  <Image></Image>
                </InnerCard>
              </Card>
              <Name></Name>
              <Heading>CHIEF DESIGNER</Heading>
            </CardsContainer>{" "}
            <CardsContainer variants={FadeUpCard}>
              <Card>
                <InnerCard>
                  <Image
                    height="210"
                    top="-70"
                    left="-15"
                    src={DeepakJoshiAvatar}
                  ></Image>
                </InnerCard>
              </Card>

              <Name>Deepak Joshi</Name>
              <Heading>GRAPHIC DESIGNER</Heading>
            </CardsContainer>{" "}
            <CardsContainer variants={FadeUpCard}>
              <Card>
                <InnerCard>
                  <Image
                    height="190"
                    top="-50"
                    left="-3"
                    src={Prashant}
                  ></Image>
                </InnerCard>
              </Card>
              <Name>Prashant</Name>
              <Heading>GRAPHIC DESIGNER</Heading>
            </CardsContainer>
          </CardWrapper>
        </MainContainer>
      </Container>
    </Div>
  );
};

export default Team;
