import React, { useState } from "react";
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
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

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
import shoe9 from "../../images/shoe9.jpeg";
import shoe10 from "../../images/shoe10.jpeg";
import shoe11 from "../../images/shoe11.jpeg";
import shoe12 from "../../images/shoe12.jpeg";
import love from "../../images/love.png";
import prev from "../../images/prev.png";
import next from "../../images/next.png";

const Artwork = () => {
  const [num, setNum] = useState(0);

  function NextHandler() {
    setNum(num + 2);
  }
  function PrevHandler() {
    setNum(num + 10);
  }

  const shoe = [
    shoe1,
    shoe2,
    shoe3,
    shoe4,
    shoe5,
    shoe6,
    shoe7,
    shoe8,
    shoe9,
    shoe10,
    shoe11,
    shoe12,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Div id="artwork">
      <Container>
        <HeadContainer></HeadContainer>
        <MainDiv>
          <SideDivLeft onClick={PrevHandler}>
            <Prev src={prev} />
          </SideDivLeft>
          <BodyContainer>
            {(function () {
              let tables = [];
              for (let i = 0; i < 4; i++) {
                tables.push(
                  <CardContainer>
                    <Card>
                      <TopContainer>
                        <Logo src={logo} />
                        <Love src={love} alt="" />
                      </TopContainer>
                      <Img src={shoe[(2 * i + num) % 12]} alt="" />
                      <BottomContainer>
                        <Details>
                          <Name>Shoe{((2 * i + num) % 12) + 1}</Name>
                          <Id>Bluxe#000{((2 * i + num) % 12) + 1}</Id>
                          <Price>0.15Eth</Price>
                        </Details>
                      </BottomContainer>
                    </Card>
                    <Card>
                      <TopContainer>
                        <Logo src={logo} />
                        <Love src={love} alt="" />
                      </TopContainer>
                      <Img src={shoe[(2 * i + num + 1) % 12]} alt="" />
                      <BottomContainer>
                        <Details>
                          <Name>Shoe{((2 * i + num + 1) % 12) + 1}</Name>
                          <Id>Bluxe#000{((2 * i + num + 1) % 12) + 1}</Id>
                          <Price>0.15Eth</Price>
                        </Details>
                      </BottomContainer>
                    </Card>
                  </CardContainer>
                  // <table className="table">
                  //   <Tablehead h_names={props.h_names} />
                  //   <Tablebody info={props.info} />
                  // </table>
                );
              }
              return tables;
            })()}
          </BodyContainer>
          <SideDivRight>
            <Next src={next} onClick={NextHandler} />
          </SideDivRight>
        </MainDiv>
      </Container>
    </Div>
  );
};

export default Artwork;
