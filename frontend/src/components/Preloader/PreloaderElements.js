import styled from "styled-components";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";

const scrolling = keyframes`
 0% {opacity:1 }
 70% {opacity:1 }
 100% {opacity:0 }
`;

export const Div = styled(motion.div)`
  background: rgba(0, 0, 0, 1);
  display: flex;
  min-height: 100vh;
  height: max-content;
  background-size: 100vw 100vh;
  align-items: center;
  justify-content: center;
`;

export const Video = styled(motion.video)`
  height: 500px;
  width: 400px;
  scale: 2;
  position: relative;
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
  animation-name: ${scrolling};
  animation-duration: 4.2s;
  animation-timing-function: linear;
`;
