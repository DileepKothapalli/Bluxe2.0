import React, { useState } from "react";
import {
  BodyContainer,
  Div,
  HeadContainer,
  Heading,
  MainDiv,
  Container,
  SubDiv,
  Name,
  Designation,
  SideDiv,
  SideContainer,
} from "./Team1Elements";

const Team1 = () => {
  const text = ["Deepak", "Bhawana", "Dileep", "Rachana", "Prashant"];
  const info = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form,",
  ];

  const [mouse, setMouse] = useState(0);

  function handleMouseEnter1() {
    setMouse(1);
  }
  function handleMouseEnter2() {
    setMouse(2);
  }
  function handleMouseEnter3() {
    setMouse(3);
  }
  function handleMouseEnter4() {
    setMouse(4);
  }
  function handleMouseEnter5() {
    setMouse(5);
  }
  function handleMouseLeave1() {
    setMouse(0);
  }
  function handleMouseLeave2() {
    setMouse(0);
  }
  function handleMouseLeave3() {
    setMouse(0);
  }
  function handleMouseLeave4() {
    setMouse(0);
  }
  function handleMouseLeave5() {
    setMouse(0);
  }

  return (
    <Div id="team">
      <Container>
        <HeadContainer>
          <Heading>TEAM</Heading>
        </HeadContainer>
        <BodyContainer>
          <MainDiv>
            <SubDiv
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            ></SubDiv>
            <SubDiv
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            ></SubDiv>
            <SubDiv
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            ></SubDiv>
            <SubDiv
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            ></SubDiv>
            <SubDiv
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            ></SubDiv>
          </MainDiv>
          <SideDiv>
            {
              <SideContainer>
                <Name>{text[mouse - 1]}</Name>
                <Designation>{info[mouse - 1]}</Designation>
              </SideContainer>
            }
          </SideDiv>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default Team1;
