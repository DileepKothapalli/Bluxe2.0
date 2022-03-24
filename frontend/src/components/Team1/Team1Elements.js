import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";

import group from "../../images/team1.png";

const scrolling = keyframes`
 0% {transform: translateX(0px) }
 99% {transform: translateX(300px) }
 100% {transform: translateX(300vh) }
`;

export const Div = styled(motion.div)`
  background-size: 100vw 100vh;
  // background: rgba(0, 0, 0, 1);
  text-align: center;
  background-size: 100vw 100vh;
  padding-bottom: 30px;
  padding-top: 10px;
  min-height: 100vh;
  height: max-content;
`;
export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5vh;
`;
export const HeadContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;
export const BodyContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
export const Heading = styled(motion.h1)`
  margin: 100px 0px 0px 0px;
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const MainDiv = styled(motion.div)`
  min-height: 490px;
  max-height: 490px;
  min-width: 490px;
  max-width: 490px;
  background: url(${group});
  background-size: 490px 490px;
  background-repeat: no-repeat;
  display: flex;
  margin: 10px;
  @media (max-width: 700px) {
    height: 100px;
    margin: 0px;
    padding: 0px;
    min-height: 390px;
    max-height: 390px;
    min-width: 390px;
    max-width: 390px;
    background-size: 390px 390px;
  }
`;

export const SideContainer = styled(motion.div)`
  width: 340px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-evenly;
  text-align: justify;
  text-justify: inter-word;
  padding: 20px;

  border-radius: 8px;

  background: linear-gradient(
    150.59deg,
    rgba(30, 40, 30, 0.45) 17.37%,
    rgba(255, 255, 255, 0) 101.21%,
    rgba(0, 0, 0, 0) 101.21%
  );
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 215, 0, 0.5);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 700px) {
    height: 100px;
    margin: 0px;
    padding: 10px 0px 0px;
  }
`;

export const Name = styled(motion.h1)`
  color: white;
  font-family: "Playfair Display", serif;
`;

export const Designation = styled(motion.h1)`
  font-size: 20px;
  color: #efe;
  font-family: "Playfair Display", serif;
  max-width: 400px;
  width: 320px;
  text-align: center;
  margin-bottom: 30px;
  // border-bottom: 1px solid rgba(255, 215, 0, 0.5);
`;
export const Info = styled(motion.h1)`
  font-size: 16px;
  color: #999;
  font-family: "Poppins", sans-serif;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const SideDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  min-height: 500px;
  @media (max-width: 700px) {
    min-height: 100px;
    margin: 0px;
    padding: 0px;
  }
`;
export const SubDiv = styled(motion.div)`
  flex: ${(props) => props.flex};
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
