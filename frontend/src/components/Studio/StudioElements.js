import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

import bg from "../../images/IMG_2716.JPG";
// import bg from "../../images/Studio2.jpg";
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
const MovingDown = (x, y) => keyframes`
    ${
      x === y
        ? css`
            0% {
              top: ${50}%;
            }
            4% {
              top: ${50}%;
            }
            5% {
              top: ${50}%;
              // background-color: #00adf2;
            }

            100% {
              top: ${50}%;
            }
          `
        : x - y > 0
        ? css`
            0% {
              top: ${(y - x) * 50}%;
              // background-color: white;
            }
            4% {
              top: ${(y - x) * 50}%;
              // background-color: white;
            }
            5% {
              top: ${(y - x) * 50}%;
              // background-color: #00adf2;
            }
            100% {
              top: ${50}%;
            }
          `
        : css`
            0% {
              top: ${(y - x) * 50 + 100}%;
            }
            4% {
              top: ${(y - x) * 50 + 100}%;
            }
            5% {
              top: ${(y - x) * 50 + 100}%;
            }
            100% {
              top: ${50}%;
            }
          `
    }
     `;

export const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 1);
  height: max-content;
  padding-bottom: 60px;
  position: relative;
  // background-image: url(${bg});
  // font-family: "Encode Sans Expanded", sans-serif;
  // max-width: 98vw;
  // filter: blur(3px);
  // z-index: -1;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: bolder;
  min-height: 90vh;
`;

export const Img = styled(motion.img)`
  height: 400px;
  width: 400px;
  position: relative;
  margin-top: 70px;
  // margin-right: 10vw;
  margin-left: 100px;
  scale: 2;
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
export const StudioHeading = styled(motion.h2)`
  font-size: 50px;
  font-weight: bolder;
  color: #53b8bb;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 10px;
  font-family: "Playfair Display", serif;
`;
export const StoryCaption = styled(motion.h2)`
  margin-left: -55px;
  font-size: 25px;
  text-shadow: 0px 0px 1px #000;
  color: #f3f2c9;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const BodyContainer = styled(motion.div)`
  position: relative;
  display: flex;
  margin: 0px 30px;
  justify-content: center;
  max-width: 100vw;
`;

export const StudioWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin-left: 100px;
  font-family: "Poppins", sans-serif;
`;

export const StudioDot = styled(motion.div)`
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
export const StudioDotFixed = styled(motion.div)`
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
// export const StudioDotTop = styled(motion.div)`
//   max-height: 8px;
//   max-width: 8px;
//   border-radius: 8px;
//   padding: 8px;
//   background-color: #f3f2c9;
//   background-color: red;
//   position: relative;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   box-shadow: 2px 2px 20px #000;
// `;
// export const StudioDotTopFixed = styled(motion.div)`
//   max-height: 8px;
//   max-width: 8px;
//   border-radius: 8px;
//   padding: 8px;
//   background-color: #f3f2c9;
//   background-color: red;
//   position: relative;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   box-shadow: 2px 2px 20px #000;
// `;
// export const StudioDotBottom = styled(motion.div)`
//   max-height: 8px;
//   max-width: 8px;
//   border-radius: 8px;
//   padding: 8px;
//   background-color: #f3f2c9;
//   background-color: red;
//   position: relative;
//   top: 100%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   box-shadow: 1px 1px 10px #000;
// `;
// export const StudioDotBottomFixed = styled(motion.div)`
//   max-height: 8px;
//   max-width: 8px;
//   border-radius: 8px;
//   padding: 8px;
//   background-color: #f3f2c9;
//   background-color: red;
//   position: relative;
//   top: 100%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   box-shadow: 1px 1px 10px #000;
// `;

export const StudioDiv = styled(motion.div).attrs((props) => props)`
  height: max-content;
  background-color: rgb(80, 80, 80);
  background-color: transparent;
  display: flex;
  // min-width: 600px;
  max-width: 70vw;
  align-items: space-between;
  justify-content: space-between;
  &:hover ${StudioDot} {
    background-color: #00897d;
    z-index: 2;
    animation: ${(props) => MovingDown(props.x, props.y)} 1s ease-in-out;
  }
  &:hover ${StudioDotFixed} {
    transition-delay: 1.01s;
    background-color: #00adf2;
  }
`;

export const StudioLine = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: #fff;
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const StudioLineTop = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 49%,
    rgba(255, 255, 255, 1) 49%,
    rgba(255, 255, 255, 1) 100%
  );
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const StudioLineBottom = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: #fff;
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;
export const StudioLineB = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: black;
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
  }
`;
export const StudioP = styled(motion.p)`
  font-size: 16px;
  text-align: center;
  text-align: justify;
  text-justify: inter-word;
  color: white;
  font-size: 18px;
  font-weight: 500;
  flex: 1;
  display: none;
  // display: none;
  visibility: hidden;
  opacity: 0;
  min-width: 500px;
  max-width: 500px;
`;
export const StudioCardRight = styled(motion.button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  min-height: 80px;
  height: max-content;
  margin: 10px;
  min-width: 650px;
  max-width: 650px;
  padding: 10px;
  position: relative;
  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 320px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 700px) {
    flex-direction: column;
    text-align: start;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 1025px) {
  }
  @media (max-width: 1281px) {
  }
  &:focus ${StudioP} {
    display: block;
    font-size: 16px;
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 1.5s linear;
  }
  // border: none;

  &:focus {
    border: 2px solid gray;
    border: none;
    border-left: none;
    border-top: none;
  }
`;
export const StudioCardDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const StudioH2 = styled(motion.h2)`
  font-size: 20px;
  text-shadow: 0px 0px 1px #000;
  margin-right: 30px;
  margin: 0px;
  color: white;
  width: 100px;
  text-align: left;
  @media (max-width: 700px) {
  }
`;

export const StoryText = styled(motion.p)`
  font-size: 18px;
  color: #aaa;
  text-align: justify;
  text-justify: inter-word;
  margin-left: -55px;
`;
export const StudioTextHeading = styled(motion.p)`
  font-size: 22px;
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
