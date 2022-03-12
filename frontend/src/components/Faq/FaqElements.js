import styled, { css, keyframes } from "styled-components";
import bg from "../../images/BG6.png";
import { motion } from "framer-motion";
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background: rgba(0, 0, 0, 1);
  text-align: center;
  height: max-content;
  min-height: 120vh;
  position: relative;
  padding-bottom: 70px;
`;
export const VideoDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  top: 150%;
  right: 50%;
`;
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 10px 0px;
  min-height: 85vh;

  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 90vw;
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
`;
export const Video = styled.video`
  height: 500px;
  width: 400px;
  position: relative;
`;

export const HeadContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const Heading = styled.h2`
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
`;
export const Question = styled.h2`
  padding: 10px 0px 25px;
  margin-bottom: 10px;
  width: 650px;
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

export const Answer = styled.h2`
  font-size: 1.125rem;
  color: #bbb;
  overflow-wrap: break-word;
  display: none;
  font-family: "Poppins", sans-serif;
  display: ${({ mouse }) => (mouse === 1 && "block") || "none"};
  animation: ${(props) => FadeIn(props.x, props.mouse)} 0.2s ease-in-out;
  margin-bottom: 20px;
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  text-align: start;
  max-width: 900px;
  transition: all 0.5s ease;
  margin: 0px 0px 20px;
`;
export const QuestionContainer = styled.div`
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

export const QuestionDiv = styled.div.attrs((props) => props)`
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  min-height: 20px;
  min-width: 450px;

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

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomHeading = styled.h1`
  font-size: 1.875rem;
  color: #aaa;
  margin-bottom: 20px;
`;

export const Input = styled.textarea`
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
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  margin: 20px 0px 10px 0px;
  background: #aaa;
  border-radius: 50px;
  &:hover {
    background: #ccc;
    transform: scale(1.02);
  }
`;

export const Icons = styled(motion.a)`
  position: relative;
  top: 12%;
`;
