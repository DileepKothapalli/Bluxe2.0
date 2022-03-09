import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

import bg from "../../images/IMG_2716.JPG";
// import bg from "../../images/Mystery2.jpg";
import shoe5 from "../../images/shoe5.jpeg";
export const BgImg = styled(motion.div)`
  position: relative;
  // top: 0%;
  background-image: url(${bg});
  // background: rgba(0, 0, 0, 1);
  filter: blur(8px);
  z-index: 10;
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
`;

export const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 1);
  height: max-content;
  padding-bottom: 60px;
  padding-top: 30px;
  position: relative;
  min-height: 100vh;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 90vh;
`;

export const HeadingContainer = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: max-content;
  position: relative;
  margin: 50px 30px 40px;
  overflow-wrap: break-word;
  // overflow: ;
`;
export const MysteryHeading = styled(motion.h2)`
  font-size: 3.125rem;
  font-weight: bolder;
  color: #53b8bb;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 10px;
  font-family: "Playfair Display", serif;
`;
export const StoryCaption = styled(motion.h2)`
  margin-left: -55px;
  font-size: 1.5rem;
  text-shadow: 0px 0px 1px #000;
  color: #f3f2c9;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const BodyContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0px 10px;
  justify-content: center;
  max-width: 100vw;
  min-width: 600px;
`;

export const MysteryWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  min-width: 500px;
  font-family: "Poppins", sans-serif;
`;

export const MysteryDot = styled(motion.div)`
  max-height: 8px;
  max-width: 8px;
  border-radius: 8px;
  padding: 8px;
  background-color: #f3f2c9;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  box-shadow: 1px 1px 10px #000;
`;
export const MysteryDotFixed = styled(motion.div)`
  max-height: 8px;
  max-width: 8px;
  border-radius: 8px;
  padding: 8px;
  background-color: #f3f2c9;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 10px #000;
`;

export const MysteryDiv = styled(motion.div).attrs((props) => props)`
  height: max-content;
  background-color: rgb(80, 80, 80);
  background-color: transparent;
  display: flex;
  // min-width: 600px;
  max-width: 70vw;
  align-items: space-between;
  justify-content: space-between;
`;

export const StoryText = styled(motion.p)`
  font-size: 1.125rem;
  color: #aaa;
  text-align: justify;
  text-justify: inter-word;
`;
export const MysteryTextHeading = styled(motion.p)`
  font-size: 1.375rem;
  text-align: center;
  text-align: justify;
  text-justify: inter-word;
  color: white;
  font-weight: 500;
  flex: 1;
  margin-bottom: 0px;
`;

export const Video = styled(motion.video)`
  height: 500px;
  width: 400px;
  scale: 2;
  margin-left: 100px;
  position: relative;
`;
