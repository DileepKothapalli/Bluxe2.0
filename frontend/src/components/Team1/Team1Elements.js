import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";

import group from "../../images/team1.png";

const scrolling = keyframes`
 0% {transform: translateX(0px) }
 99% {transform: translateX(300px) }
 100% {transform: translateX(300vh) }
`;

export const Div = styled.div`
  background-size: 100vw 100vh;
  background: rgba(0, 0, 0, 1);
  text-align: center;
  background-size: 100vw 100vh;
  padding-bottom: 30px;
  padding-top: 10px;
  min-height: 100vh;
  height: max-content;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Heading = styled.h1`
  margin: 100px 0px 40px 0px;
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const MainDiv = styled.div`
  min-height: 500px;
  max-height: 500px;
  min-width: 500px;
  max-width: 500px;
  background: url(${group});
  background-size: 500px 500px;
  background-repeat: no-repeat;
  display: flex;
`;

export const SideContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;
`;

export const Name = styled.h1`
  color: white;
  font-family: "Playfair Display", serif;
`;

export const Designation = styled.h1`
  font-size: 16px;
  color: white;
  font-family: "Playfair Display", serif;
  max-width: 400px;
`;

export const SideDiv = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 300px;
  min-height: 500px;
`;
export const SubDiv = styled.div`
  flex: 0.2;

  &:hover {
    & > ${Name} {
      // display: block;
    }
    & > ${Designation} {
      // display: block;
    }
    & > ${SideDiv} {
      display: block;
      opacity: 1;
    }
  }
`;
