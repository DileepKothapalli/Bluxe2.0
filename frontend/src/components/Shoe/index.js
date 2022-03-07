import React, { useRef, useEffect, useState } from "react";
import Rellax from "rellax";
import {
  Div,
  MainContainer,
  CardsContainer,
  Img,
  SideBar,
  CardBar,
  Card,
  CardInfo,
  MintButton,
  SideBarDiv,
  ShoeName,
  ShoeInfo,
  ShoeAttr,
  Text,
  ShoeNameText,
  BgImg,
  CardStack,
  CardImg,
} from "./ShoeElements.js";
// import NavbarShoe from "../NavbarShoe/index";

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
import shoe13 from "../../images/shoe13.jpeg";
import shoe14 from "../../images/shoe14.jpeg";
import shoe15 from "../../images/shoe15.jpeg";
import shoe16 from "../../images/shoe16.jpeg";
import shoe17 from "../../images/shoe17.jpeg";
import shoe18 from "../../images/shoe18.jpeg";
import shoe19 from "../../images/shoe19.jpeg";
import shoe20 from "../../images/shoe20.jpeg";
// import shoe21 from "../../images/shoe21.jpeg";
// import shoe22 from "../../images/shoe22.jpeg";
// import shoe23 from "../../images/shoe23.jpeg";
// import shoe24 from "../../images/shoe24.jpeg";
// import shoe25 from "../../images/shoe25.jpeg";
const Shoe = (shoenum) => {
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".animate", {
      speed: -10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(rellaxRef.current, {
      speed: -6,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <Div id="shoe">
      {/* <BgImg></BgImg> */}
      <MainContainer>
        <CardsContainer>
          <SideBarDiv>
            <SideBar>
              <Img src={shoe1} />
              <Img src={shoe2} />
              <Img src={shoe3} />
              <Img src={shoe4} />
              <Img src={shoe5} />
              <Img src={shoe6} />
              <Img src={shoe7} />
              <Img src={shoe8} />
              <Img src={shoe9} />
              <Img src={shoe10} />
              <Img src={shoe11} />
              <Img src={shoe12} />
              <Img src={shoe13} />
              <Img src={shoe14} />
              <Img src={shoe15} />
              <Img src={shoe16} />
              <Img src={shoe17} />
              <Img src={shoe18} />
              <Img src={shoe19} />
              <Img src={shoe20} />
              {/* <Img src={shoe21} />
              <Img src={shoe22} />
              <Img src={shoe23} />
              <Img src={shoe24} />
              <Img src={shoe25} /> */}
            </SideBar>
          </SideBarDiv>
          <CardBar>
            <CardStack>
              <Card rotate={-4}></Card>
              <Card rotate={4}></Card>
              {/* <Card rotate="0"></Card> */}
              <Card rotate="0">
                <CardImg src={shoe1} />
              </Card>
            </CardStack>

            <CardInfo>
              <ShoeName>
                <ShoeNameText>
                  <h1>BLUXE #</h1>
                  <h2>1001</h2>
                </ShoeNameText>
                <ShoeAttr>
                  <Text>Golden</Text>
                  <Text>Sneakers</Text>
                </ShoeAttr>
              </ShoeName>
              <ShoeInfo>
                <ShoeNameText>
                  <h1>0.08 </h1>
                  <h2>ETH</h2>
                </ShoeNameText>
              </ShoeInfo>
              <MintButton>MINT</MintButton>
            </CardInfo>
          </CardBar>
        </CardsContainer>
      </MainContainer>
    </Div>
  );
};

export default Shoe;
