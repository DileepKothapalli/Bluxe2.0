import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

import bg1 from "../../images/Blackbackground2.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/blackbackground.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";

export const Div = styled(motion.div)`
  // background: rgba(0, 0, 0, 1);
  // background: url(${bg3});

  text-align: center;
  background-size: 100vw 100vh;
  padding-bottom: 30px;
  padding-top: 1px;
  height: max-content;
`;
export const VideoDiv = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  top: 150%;
  right: 50%;
`;
export const BodyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0px 0px;
  min-height: 85vh;
  justify-content: space-evenly;
  border-radius: 20px;
  width: 100vw;
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
`;
export const Video = styled(motion.video)`
  height: 500px;
  width: 400px;
  position: relative;
`;

export const HeadContainer = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const Heading = styled(motion.h2)`
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  padding-top: 20px;
`;
export const Question = styled(motion.h2)`
  padding: 10px 0px 25px;
  margin-bottom: 10px;
  width: 70vw;
  max-width: 650px;
  font-size: 1.5rem;
  text-shadow: 0px 0px 1px #000;
  font-family: "Poppins", sans-serif;
  color: ${({ mouse }) => (mouse === 1 && "#4daca4") || "#fff"};
`;

const FadeIn = (x, mouse) => keyframes`

${
  mouse === 1
    ? css`
        from {
          opacity: 0;
          height: 0;
        }
        to {
          opacity: 1;
          height: ${x}px;
        }
      `
    : css`
        from {
          opacity: 1;
          height: ${x}px;
        }
        to {
          opacity: 0;
          height: 0px;
        }
      `
}
`;

export const Answer = styled(motion.h2)`
  font-size: 1.125rem;
  color: #bbb;
  overflow-wrap: break-word;
  display: none;
  font-family: "Poppins", sans-serif;
  display: ${({ mouse }) => (mouse === 1 && "block") || "none"};
  animation: ${(props) => FadeIn(props.x, props.mouse)} 0.2s ease-in-out;
  margin-bottom: 20px;
`;

export const QuestionsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  text-align: start;
  max-width: 900px;
  transition: all 0.5s ease;
  margin: 0px 0px 20px;
`;
export const QuestionContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  text-align: start;
  max-width: 900px;
  border-bottom: 1px solid #444;
  margin: 0px 0px 20px;
  transition: all 0.5s ease;
`;

const Rotate = (x) => keyframes`
${
  x === 1
    ? css`
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(135deg);
        }
      `
    : css`
        from {
          transform: rotate(135deg);
        }
        to {
          transform: rotate(0deg);
        }
      `
}
}`;

// const Rotate = (x) => keyframes`

//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(135deg);
//   }
// }`;
export const Icon = styled(motion.img)`
  height: 35px;
  margin: -15px 3px 0px 3px;
  animation: ${(props) => Rotate(props.direction)} 0.5s ease-in-out;

  transform: rotate(
    ${({ direction }) => (direction === 1 && "135deg") || "0deg"}
  );
`;

export const QuestionDiv = styled(motion.div).attrs((props) => props)`
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  min-height: 20px;
  width:70vw;

  max-width: 650px;
  position: relative;
  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  text-align: justify;
  text-justify: inter-word;
  transition: all 0.5s ease-in-out;

  border: none;
  @media (max-width: 801px) {
    400px; 
  }
`;

export const BottomContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomHeading = styled(motion.h1)`
  font-size: 1.875rem;
  color: #fff;
  margin-bottom: 20px;
`;

export const Input = styled(motion.textarea)`
  max-width: 600px;
  // width: 600px;
  min-width: 400px;
  height: 100px;
  border: none;
  outline: none;
  border-radius: 10px;
  background: #fff;
  padding: 5px;
  &: focus {
    padding-left: 5px;
    outline: none;
  }
  @media (max-width: 550px) {
    max-width: 80vw;
    width: 80vw;
    min-width: 50px;
  }
`;

export const SubmitButton = styled(motion.button)`
  width: 100px;
  height: 40px;
  border: none;
  margin: 20px 0px 10px 0px;
  background: #fff;
  border-radius: 50px;
  &:hover {
    background: #00897d;
    transform: scale(1.04);
  }
`;

export const Icons = styled(motion.a)`
  position: relative;
  top: 12%;
`;
