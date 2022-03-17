import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

import bg1 from "../../images/Blackbackground2.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/blackbackground.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";

// import bg from "../../images/Mystery2.jpg";
export const BgImg = styled(motion.div)`
  position: relative;
  // top: 0%;
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
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  min-height: 90vh;
  min-width: 90vw;
`;

export const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: max-content;
  position: relative;
  margin: 50px 30px 40px;
  overflow-wrap: break-word;
`;
export const MysteryHeading = styled(motion.h2)`
  font-weight: bolder;
  font-size: 3rem;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 10px;
  font-family: "Playfair Display", serif;
`;
export const StoryCaption = styled(motion.h2)`
  font-size: 2.125rem;
  text-shadow: 0px 0px 1px #000;
  color: #4daca4;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;
export const StoryText = styled(motion.p)`
  font-size: 1rem;
  color: rgba(256, 256, 256, 0.75);
  text-align: justify;
  text-justify: inter-word;
  margin: 0px;
  font-family: "Arial", sans-serif;
  font-weight: 400;
`;
export const BodyContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0px 10px;
  justify-content: space-evenly;
  align-items: space-evenly;
  width: 100%;
  max-width: 100vw;
  min-width: 600px;
`;

export const MysteryWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30vw;
  min-width: 550px;
  max-width: 750px;
  font-family: "Poppins", sans-serif;
  padding: 30px 45px;
  height: max-content;
  background: linear-gradient(
    152.97deg,
    rgba(0, 123, 137, 0.2) 0%,
    rgba(0, 137, 123, 0.1) 100%
  );
  // background-image: url(${bg4});
  // backdrop-filter: blur(1px);
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

export const Img = styled.img`
  width: 400px;
  max-width: 400px;
  margin-right: 50px;
`;
