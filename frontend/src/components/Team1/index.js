import React from "react";
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
} from "./Team1Elements";

const Team1 = () => {
  return (
    <Div id="team">
      <Container>
        <HeadContainer>
          <Heading>TEAM</Heading>
        </HeadContainer>
        <BodyContainer>
          <MainDiv>
            <SubDiv>
              <Name>Deepak</Name>
              <Designation>Graphic Designer</Designation>
            </SubDiv>
            <SubDiv>
              <Name>Bhawana</Name>
            </SubDiv>
            <SubDiv>
              <Name>Dileep</Name>
            </SubDiv>
            <SubDiv>
              <Name>Rachana</Name>
            </SubDiv>
            <SubDiv>
              <Name>Prashant</Name>
            </SubDiv>
          </MainDiv>
          <SideDiv></SideDiv>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default Team1;
