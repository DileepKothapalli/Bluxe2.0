import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import bg from "../../images/lightbackground.jpg";
// import bg from "../../images/yellowsmoke.jpg";
// import bg from "../../images/moonbackground.jpg";
import shoe5 from "../../images/shoe5.jpeg";
import bg1 from "../../images/Blackbackground2.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/blackbackground.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";
export const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  // background: rgba(0, 0, 0, 1);
  // background: url(${bg2});
  min-height: 100vh;
  height: max-content;
  position: relative;
  background-size: 100vw 100vh;
  baclground-size: cover;
  padding-top: 70px;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  align-items: space-between;
`;
export const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: max-content;
  position: relative;
  overflow-wrap: break-word;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
`;

export const BodyContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-evenly;
  max-width: 100vw;
  min-width: 90vw;
  margin: 0px 40px;
`;

export const Img = styled(motion.img)`
  height: 400px;
  width: 400px;
  position: relative;
  margin-top: 70px;
  margin-left: 100px;
  scale: 2;
`;

export const StudioHeading = styled(motion.h2)`
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 0px;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const StoryCaption = styled(motion.h2)`
  font-size: 2.25rem;
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
  font-style: italic;
  margin: 0px;
  font-family: "Arial", sans-serif;
`;
export const Storyp = styled(motion.p)`
  font-size: 1rem;
  color: rgba(256, 256, 256, 0.75);
  font-family: "Arial", sans-serif;
  display: inline;
  font-style: normal;
`;
export const StudioWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40vw;
  min-width: 550px;
  height: max-content;
  font-family: "Poppins", sans-serif;
  padding: 30px 45px;
  background: linear-gradient(
    152.97deg,
    rgba(0, 123, 137, 0.2) 0%,
    rgba(0, 137, 123, 0.1) 100%
  );
  baclground-size: auto;
  opacity: 0.6;
  font-weight: 500;
  backdrop-filter: blur(1px);
  @media (max-width: 768px) {
    width: 80vw;
    min-width: 50px;
  }
  @media (max-width: 550px) {
    width: 80vw;
    min-width: 50px;
  }
`;

export const StudioTextHeading = styled(motion.p)`
  font-size: 1.375rem;
  text-align: center;
  text-align: justify;
  text-justify: inter-word;
  color: white;
  font-weight: 500;
  flex: 1;
`;

export const Video = styled(motion.video)`
  height: 500px;
  width: 400px;
  scale: 2;
  // margin-left: 100px;
  position: relative;
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
`;
