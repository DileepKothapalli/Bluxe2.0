import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

const scrolling = keyframes`
 0% {transform: translateX(0px) }
 99% {transform: translateX(00px) }
 100% {transform: translateX(00vh) }
`;

export const Div = styled(motion.div)`
  min-height: 100vh;
  // background: rgba(0, 0, 0, 1);
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Container = styled(motion.div)`
  width: 90vw;
  @media screen and (max-width: 1200px) {
    width: 80vw;
  }
  @media screen and (max-width: 1024px) {
    width: 70vw;
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
  @media screen and (max-width: 550px) {
    width: 55vw;
  }
  display: inline-block;
`;
export const HeadContainer = styled(motion.div)`
  display: flex;
`;
export const BodyContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`;
export const Card = styled(motion.div)`
display:flex;
align-items:center;
flex-direction:column;
margin: 0vh 0px 5vh 0px;
justify-content:space-evenly;
  height: 38vh;
  width: 30vh;
  margin:30px 
  backdrop-filter: blur(40px);
  border-radius: 12px;

  background: linear-gradient(
    150.59deg,
    rgba(30, 40, 30, 0.45) 17.37%,
    rgba(255, 255, 255, 0) 101.21%,
    rgba(0, 0, 0, 0) 101.21%
  );
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.4);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-width: 170px;
  max-width: 200px;
  margin: 10px 40px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Img = styled(motion.img)`
  height: 20vh;
  margin-top: 10px;
  width: 20vh;
  border-radius: 4px;
`;
export const Logo = styled(motion.img)`
  height: 30px;
`;
export const Love = styled(motion.img)`
  height: 20px;
  cursor: pointer;
  margin: 5px 0px 0px 0px;
`;
export const BottomContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  width: 20vh;
  // margin: 10px 0px 0px 0px;
`;
export const TopContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 20vh;
  margin: 10px 0px 0px 0px;
`;
export const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 5px 0px;
  width: 20vh;
`;
export const Name = styled(motion.h1)`
  font-size: 28px;
  margin: 0px 0px 4px;
  font-family: "Playfair Display", serif;
  color: #00897b;
  color: #00897b;
  font-weight: bold;
`;
export const Id = styled(motion.h1)`
  margin: 0px 0px 2px;
  font-size: 20px;
  color: #006e62;
  // color: grey;
`;
export const Price = styled(motion.h1)`
  margin: 0px 0px 2px;
  font-size: 16px;
  color: grey;
`;

export const MainDiv = styled(motion.div)`
  display: flex;
`;

export const SideDivLeft = styled(motion.div)`
  display: flex;
  min-width: 50px;
  align-items: center;
  justify-content: flex-end;
  max-width: 50px;
  opacity: 0.1;
  &:hover {
    opacity: 0.75;
  }
  cursor: pointer;
`;
export const SideDivRight = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 50px;
  opacity: 0.1;
  &:hover {
    opacity: 0.75;
  }
  cursor: pointer;
`;

export const Prev = styled(motion.img)`
  height: 50px;
  max-width: 50px;
  margin-bottom: 40px;
`;
export const Next = styled(motion.img)`
  height: 50px;
  max-width: 50px;
  margin-bottom: 40px;
`;
