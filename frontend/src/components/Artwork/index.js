import React from "react";
import {
  BodyContainer,
  BottomContainer,
  Card,
  CardContainer,
  Container,
  Details,
  Div,
  HeadContainer,
  Id,
  Img,
  Imgdiv,
  Love,
  Name,
  Price,
  Logo,
  TopContainer,
  MainDiv,
  SideDivLeft,
  SideDivRight,
  Prev,
  Next,
} from "./ArtworkElements";

// import IconButton from '@mui/material/IconButton';
// // or

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bg from "../../images/DeepakJoshiAvatar.png";
import logo from "../../images/Asset1.png";
// import logo from "../../images/bluxestudio1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import shoe1 from "../../images/shoe1.jpeg";
import shoe2 from "../../images/shoe2.jpeg";
import shoe3 from "../../images/shoe3.jpeg";
import shoe4 from "../../images/shoe4.jpeg";
import shoe5 from "../../images/shoe5.jpeg";
import shoe6 from "../../images/shoe6.jpeg";
import shoe7 from "../../images/shoe7.jpeg";
import shoe8 from "../../images/shoe8.jpeg";
import love from "../../images/love.png";
import prev from "../../images/prev.png";
import next from "../../images/next.png";

const Artwork = () => {
  return (
    <Div id="artwork">
      <Container>
        <HeadContainer></HeadContainer>
        <MainDiv>
          <SideDivLeft>
            <Prev src={prev} />
          </SideDivLeft>
          <BodyContainer>
            <CardContainer>
              <Card>
                <TopContainer>
                  <Logo src={logo} />
                  <Love src={love} alt="" />
                </TopContainer>
                <Img src={shoe1} alt="" />
                <BottomContainer>
                  <Details>
                    <Name>Shoe1</Name>
                    <Id>Bluxe#0001</Id>
                    <Price>0.15Eth</Price>
                  </Details>
                </BottomContainer>
              </Card>
            </CardContainer>{" "}
            <CardContainer>
              <Card>
                <TopContainer>
                  <Logo src={logo} />
                  <Love src={love} alt="" />
                </TopContainer>
                <Img src={shoe2} alt="" />
                <BottomContainer>
                  <Details>
                    <Name>Shoe2</Name>
                    <Id>Bluxe#0002</Id>
                    <Price>0.15Eth</Price>
                  </Details>
                </BottomContainer>
              </Card>
            </CardContainer>{" "}
            <CardContainer>
              <Card>
                <TopContainer>
                  <Logo src={logo} />
                  <Love src={love} alt="" />
                </TopContainer>
                <Img src={shoe3} alt="" />
                <BottomContainer>
                  <Details>
                    <Name>Shoe3</Name>
                    <Id>Bluxe#0003</Id>
                    <Price>0.15Eth</Price>
                  </Details>
                </BottomContainer>
              </Card>
            </CardContainer>{" "}
            <CardContainer>
              <Card>
                <TopContainer>
                  <Logo src={logo} />
                  <Love src={love} alt="" />
                </TopContainer>
                <Img src={shoe4} alt="" />
                <BottomContainer>
                  <Details>
                    <Name>Shoe4</Name>
                    <Id>Bluxe#0004</Id>
                    <Price>0.15Eth</Price>
                  </Details>
                </BottomContainer>
              </Card>
            </CardContainer>{" "}
            <CardContainer>
              <Card>
                <TopContainer>
                  <Logo src={logo} />
                  <Love src={love} alt="" />
                </TopContainer>
                <Img src={shoe5} alt="" />
                <BottomContainer>
                  <Details>
                    <Name>Shoe5</Name>
                    <Id>Bluxe#0005</Id>
                    <Price>0.15Eth</Price>
                  </Details>
                </BottomContainer>
              </Card>
            </CardContainer>{" "}
            <CardContainer>
              <Card>
                <TopContainer>
                  <Logo src={logo} />
                  <Love src={love} alt="" />
                </TopContainer>
                <Img src={shoe6} alt="" />
                <BottomContainer>
                  <Details>
                    <Name>Shoe6</Name>
                    <Id>Bluxe#0006</Id>
                    <Price>0.15Eth</Price>
                  </Details>
                </BottomContainer>
              </Card>
            </CardContainer>{" "}
            <CardContainer>
              <Card>
                <TopContainer>
                  <Logo src={logo} />
                  <Love src={love} alt="" />
                </TopContainer>
                <Img src={shoe7} alt="" />
                <BottomContainer>
                  <Details>
                    <Name>Shoe7</Name>
                    <Id>Bluxe#0007</Id>
                    <Price>0.15Eth</Price>
                  </Details>
                </BottomContainer>
              </Card>
            </CardContainer>
            <CardContainer>
              <Card>
                <TopContainer>
                  <Logo src={logo} />
                  <Love src={love} alt="" />
                </TopContainer>
                <Img src={shoe8} alt="" />
                <BottomContainer>
                  <Details>
                    <Name>Shoe8</Name>
                    <Id>Bluxe#0008</Id>
                    <Price>0.15Eth</Price>
                  </Details>
                </BottomContainer>
              </Card>
            </CardContainer>{" "}
          </BodyContainer>
          <SideDivRight>
            <Next src={next} />
          </SideDivRight>
        </MainDiv>
      </Container>
    </Div>
  );
};

export default Artwork;
