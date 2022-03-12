import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
// import bg from "../../images/greensmoke.jpg";
// import bg from "../../images/yellowsmoke.jpg";
import bg from "../../images/moonbackground.jpg";
import shoe5 from "../../images/shoe5.jpeg";

export const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  background-image: url(${bg});
  // background: rgba(0, 0, 0, 1);
  min-height: 100vh;
  height: max-content;
  position: relative;
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
  justify-content: center;
  align-items: space-evenly;
  max-width: 100vw;
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
  color: rgba(176, 176, 176, 0.75);
  text-align: justify;
  text-justify: inter-word;
`;

export const StudioWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50vw;
  min-width: 550px;
  font-family: "Poppins", sans-serif;
  padding: 30px 45px;
  background: linear-gradient(
    152.97deg,
    rgba(0, 137, 123, 0.4) 0%,
    rgba(0, 137, 123, 0.1) 100%
  );
  backdrop-filter: blur(42px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;
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
  margin-left: 100px;
  position: relative;
`;
