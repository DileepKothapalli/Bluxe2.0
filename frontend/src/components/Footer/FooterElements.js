import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import bg1 from "../../images/Blackbackground2.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/blackbackground.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";
export const Div = styled(motion.div)`
  display: flex;
  // min-height: 30vh;
  height: max-content;
  background: rgba(10, 10, 10, 1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 0px 30px;
`;
export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const TopContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
export const MidContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
export const BottomContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  width: 100vw;
`;

export const Heading = styled.h1`
  font-family: "Playfair Display", serif;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 30px;
  color: white;
  @media (max-width: 550px) {
    font-size: 1.875rem;
  }
`;
export const Button = styled.button`
  margin-top: 20px;
  background: rgb(0, 255, 0);
  background: linear-gradient(
    135deg,
    rgba(0, 255, 0, 1) 26%,
    rgba(0, 137, 123, 1) 73%
  );
  padding: 10px 30px;
  outline: none;
  border: none;
  font-family: "Playfair Display", serif;
  border-radius: 4px;
  // transition: 5.3s;
  // &:hover {
  //   background: rgb(0, 255, 0);
  //   background: linear-gradient(
  //     -135deg,
  //     rgba(0, 255, 0, 1) 26%,
  //     rgba(0, 137, 123, 1) 73%
  //   );
  // }
`;

export const LeftText = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 1.25rem;
  color: white;
`;

export const RightText = styled.h1`
  color: white;
  font-size: 1.25rem;
  font-family: "Playfair Display", serif;
`;
