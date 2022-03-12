import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

import bg from "../../images/IMG_2716.JPG";
// import bg from "../../images/Roadmap2.jpg";
import shoe5 from "../../images/shoe5.jpeg";

const MovingDown = (x, y) => keyframes`
    ${
      x === y || y === 0
        ? css`
            0% {
              top: ${50}%;
            }
            4% {
              top: ${50}%;
            }
            5% {
              top: ${50}%;
            }

            100% {
              top: ${50}%;
            }
          `
        : x - y > 0
        ? css`
            0% {
              top: ${(y - x) * 50}%;
            }
            4% {
              top: ${(y - x) * 50}%;
            }
            5% {
              top: ${(y - x) * 50}%;
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
    }`;

export const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 1);
  height: max-content;
  padding-bottom: 60px;
  position: relative;
  padding-top: 30px;
  overflow: hidden;
  overflow-x: hidden;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  min-height: 90vh;
`;

export const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: max-content;
  position: relative;
  margin: 30px 30px 40px;
  overflow-wrap: break-word;
  // overflow: ;
`;

export const RoadmapHeading = styled(motion.h2)`
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 0px;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const HeadingCaption = styled(motion.h2)`
  font-size: 1.625rem;
  text-shadow: 0px 0px 1px #000;
  color: #4daca4;
  margin: 20px 0px 0px;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const RoadmapTextHeading = styled(motion.p)`
  font-size: 1.5rem;
  text-align: center;
  text-align: justify;
  text-justify: inter-word;
  color: #ddd;
  font-weight: 500;
  margin-bottom: 0px;

  color: ${({ mousenum }) => (mousenum === 1 && "#4daca4") || "#ddd"};
`;

export const RoadmapP = styled(motion.p)`
  font-size: 1rem;
  text-align: center;
  text-align: justify;
  text-justify: inter-word;
  color: #bbb;
  font-weight: 500;
  flex: 1;
  display: none;
  min-width: 500px;
  display: ${({ mousenum }) => (mousenum === 1 && "block") || "none"};
  max-width: 500px;
`;
export const BodyContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0px 30px;
  justify-content: center;
  max-width: 100vw;
`;

export const RoadmapWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-family: "Poppins", sans-serif;
`;

export const RoadmapDot = styled(motion.div)`
  max-height: 8px;
  max-width: 8px;
  border-radius: 8px;
  padding: 8px;
  background-color: #aaa;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  box-shadow: 1px 1px 10px #000;
`;
export const RoadmapDotFixed = styled(motion.div)`
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

export const RoadmapDiv = styled(motion.div).attrs((props) => props)`
  height: max-content;
  background-color: rgb(80, 80, 80);
  background-color: transparent;
  display: flex;
  // min-width: 600px;
  max-width: 70vw;
  align-items: space-between;
  justify-content: space-between;
  &:hover ${RoadmapDot} {
    background-color: #00897d;
    z-index: 2;
    animation: ${(props) => MovingDown(props.x, props.y)} 1s ease-in-out;
  }
  &:hover ${RoadmapDotFixed} {
    transition-delay: 1.01s;
    background-color: #00adf2;
  }
`;

export const RoadmapLine = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: #bbb;
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const RoadmapLineTop = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: linear-gradient(
    180deg,
    rgba(192, 192, 192, 0) 0%,
    rgba(192, 192, 192, 0) 49%,
    rgba(192, 192, 192, 1) 49%,
    rgba(192, 192, 192, 1) 100%
  );
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const RoadmapLineBottom = styled(motion.div)`
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
    rgba(192, 192, 192, 1) 0%,
    rgba(192, 192, 192, 1) 50%,
    rgba(192, 192, 192, 0) 50%,
    rgba(192, 192, 192, 0) 100%
  );
`;
export const RoadmapLineB = styled(motion.div)`
  height: 100%;
  width: 4px;
  background: black;
  opacity: 1;
  margin-right: 50px;
  position: relative;
  @media (max-width: 700px) {
  }
`;

export const RoadmapCardRight = styled(motion.button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  min-height: 75px;
  height: max-content;
  margin: 10px;
  min-width: 500px;
  width: 650px;
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

  &:focus {
    border: none;
  }
  border: ${({ mousenum }) => (mousenum === 1 && "none") || ""};
`;
export const RoadmapCardDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const RoadmapH2 = styled(motion.h2)`
  font-size: 1.25rem;
  text-shadow: 0px 0px 1px #000;
  margin-right: 30px;
  margin: 0px;
  color: white;
  width: 100px;
  text-align: left;
  @media (max-width: 700px) {
  }
`;

export const Video = styled(motion.video)`
  height: 500px;
  width: 400px;
  scale: 2;
  margin-left: 100px;
  margin-top: 10px;
  position: relative;
`;
