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
  min-height: 100vh;
  background: url(${bg4});
  padding-top: 100px;
`;

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  flex-direction: column;
`;

export const TopContainer = styled(motion.div)`
  display: flex;
`;

export const BodyContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const HalfDivl = styled(motion.div)`
  display: flex;
  width: 45vw;
  min-width: 500px;
  justify-content: center;
  // padding: 30px;
  margin: 0px 30px 30px 30px;
  margin-top: 25px;
`;

export const HalfDivR = styled(motion.div)`
  display: flex;
  text-align: start;
  width: 45vw;
  // padding: 30px;
  margin: 0px 30px 30px;
  min-width: 500px;
  justify-content: space-evenly;
`;

export const Heading = styled(motion.h1)`
  color: rgba(256, 256, 256, 1);
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 27px;
`;

export const TextDiv = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 30px;
  margin: 0px 2 0px 0px 0px;
  font-family: "Poppins", sans-serif;
`;

export const TextDivl = styled(motion.div)`
  display: flex;
  margin: 0px 0px 0px 0px;
  font-family: "Playfair Display", serif;
  color: rgba(256, 256, 256, 1);
  text-align: justify;
  text-justify: inter-word;
  justify-content: space-evenly;
  width: 45vw;
  min-width: 500px;
  max-width: 550px;
`;
export const TextDivR = styled(motion.div)`
  display: flex;
  margin: 0px 0px 0px 0px;
  font-family: "Playfair Display", serif;
  color: rgba(256, 256, 256, 1);
  text-align: justify;
  text-justify: inter-word;
  justify-content: space-evenly;
  min-width: 500px;
  max-width: 600px;
  flex-direction: column;
  text-align: start;
  width: 50vw;
  justify-content: center;
`;

export const Bullet = styled(motion.div)`
  min-height: 8px;
  min-width: 8px;
  background: rgba(256, 256, 256, 0.75);
  border-radius: 8px;
  margin: 10px 0px 0px 0px;
`;

export const TextP = styled(motion.p)`
  margin: 0px;
  font-size: 20px;
  margin: 0px 0px 0px 10px;
  color: rgba(256, 256, 256, 1);
`;

export const Logo = styled(motion.img)`
  height: 90px;
`;

export const TextL = styled(motion.h1)`
  font-size: 24px;
`;
