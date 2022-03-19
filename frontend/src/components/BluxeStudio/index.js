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
  TextL,
  TextP,
  TextR,
  TopContainer,
} from "./BluxeStudioElements";
import logo from "../../images/bluxestudio1.png";
// import logo from "../../images/Asset1.png";

const BluxeStudio = () => {
  return (
    <Div>
      <Container>
        <TopContainer>
          <Logo src={logo} />
        </TopContainer>
        <BodyContainer>
          <HalfDivl>
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
          <HalfDivR>
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
          </HalfDivR>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default BluxeStudio;
