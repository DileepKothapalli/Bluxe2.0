import React from "react";
import {
  BodyContainer,
  Div,
  HeadContainer,
  Heading,
  MainDiv,
  Container,
  SubDiv,
  Label,
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
              <Label>Deepak</Label>
            </SubDiv>
            <SubDiv>
              <Label>Bhawana</Label>
            </SubDiv>
            <SubDiv>
              <Label>Dileep</Label>
            </SubDiv>
            <SubDiv>
              <Label>Rachana</Label>
            </SubDiv>
            <SubDiv>
              <Label>Prashant</Label>
            </SubDiv>
          </MainDiv>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default Team1;
