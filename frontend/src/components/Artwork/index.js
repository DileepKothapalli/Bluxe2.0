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

import { ArtworkAnimate } from "./ArtworkFramer";

// import IconButton from '@mui/material/IconButton';
// // or
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bg from "../../images/DeepakJoshiAvatar.png";
import logo from "../../images/Asset1.png";
// import logo from "../../images/bluxestudio1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";

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
import { useScroll } from "../UseScroll.js";

import "./styles.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        height: "50px",
      }}
      onClick={onClick}
    />
  );
}

const Artwork = () => {
  const [num, setNum] = useState(0);
  const [element, controls] = useScroll(0.05);
  const [element1, controls1] = useScroll(0.7);
  const [element2, controls2] = useScroll(0.4);
  const [element3, controls3] = useScroll(0.4);
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
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
    ],
  };
  const i = 1;
  return (
    <Div id="artwork">
      <Container
        ref={element}
        variants={ArtworkAnimate}
        animate={controls}
        transition={{
          duration: 1,
          delay: 0.5,
          bounce: 1.3,
          ease: "easeInOut",
        }}
      >
        <Slider {...settings}>
          <CardContainer>
            <Card>
              <TopContainer>
                <Logo src={logo} />
                <Love src={love} alt="" />
              </TopContainer>
              <Img src={shoe1} alt="" />
              <BottomContainer>
                <Details>
                  <Id>Bluxe#0001</Id>
                  <Price>0.15Eth</Price>
                </Details>
              </BottomContainer>
            </Card>
            <Card>
              <TopContainer>
                <Logo src={logo} />
                <Love src={love} alt="" />
              </TopContainer>
              <Img src={shoe2} alt="" />
              <BottomContainer>
                <Details>
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
                  <Id>Bluxe#0003</Id>
                  <Price>0.15Eth</Price>
                </Details>
              </BottomContainer>
            </Card>
            <Card>
              <TopContainer>
                <Logo src={logo} />
                <Love src={love} alt="" />
              </TopContainer>
              <Img src={shoe4} alt="" />
              <BottomContainer>
                <Details>
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
                  <Id>Bluxe#0005</Id>
                  <Price>0.15Eth</Price>
                </Details>
              </BottomContainer>
            </Card>
            <Card>
              <TopContainer>
                <Logo src={logo} />
                <Love src={love} alt="" />
              </TopContainer>
              <Img src={shoe6} alt="" />
              <BottomContainer>
                <Details>
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
                  <Id>Bluxe#0007</Id>
                  <Price>0.15Eth</Price>
                </Details>
              </BottomContainer>
            </Card>
            <Card>
              <TopContainer>
                <Logo src={logo} />
                <Love src={love} alt="" />
              </TopContainer>
              <Img src={shoe8} alt="" />
              <BottomContainer>
                <Details>
                  <Id>Bluxe#0008</Id>
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
              <Img src={shoe9} alt="" />
              <BottomContainer>
                <Details>
                  <Id>Bluxe#0009</Id>
                  <Price>0.15Eth</Price>
                </Details>
              </BottomContainer>
            </Card>
            <Card>
              <TopContainer>
                <Logo src={logo} />
                <Love src={love} alt="" />
              </TopContainer>
              <Img src={shoe10} alt="" />
              <BottomContainer>
                <Details>
                  <Id>Bluxe#0010</Id>
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
              <Img src={shoe11} alt="" />
              <BottomContainer>
                <Details>
                  <Id>Bluxe#0011</Id>
                  <Price>0.15Eth</Price>
                </Details>
              </BottomContainer>
            </Card>
            <Card>
              <TopContainer>
                <Logo src={logo} />
                <Love src={love} alt="" />
              </TopContainer>
              <Img src={shoe12} alt="" />
              <BottomContainer>
                <Details>
                  <Id>Bluxe#0012</Id>
                  <Price>0.15Eth</Price>
                </Details>
              </BottomContainer>
            </Card>
          </CardContainer>
        </Slider>
      </Container>
    </Div>
  );
};

export default Artwork;
