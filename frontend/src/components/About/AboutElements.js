import styled from "styled-components";
// import bg from "../../images/BG5.png";
import bg from "../../images/IMG_2715.JPG";
import shoe5 from "../../images/shoe5.jpeg";
import { motion } from "framer-motion";
export const BgImg = styled.div`
  position: fixed;
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  height: 120vh;
  background-repeat: no-repeat;
  // z-index: -10;
  fliter: blur(8px);
`;
export const Div = styled(motion.div)`
  background-image: url(${bg});
  background: rgba(0, 0, 0, 1);
  text-align: center;
  background-size: cover;
  position: relative;
  height: max-content;
  z-index: 1;
  // min-height: 95vh;
  font-family: "Encode Sans Expanded", sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  // font-family: "Playfair Display", serif;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  height: max-content;
  justify-content: space-between;
  position: relative;
  align-items: space-between;
`;

export const TopContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 60px 0px;
`;
export const HeadContainer = styled(motion.div)`
  display: flex;
  align-items: center;
`;
export const HeadingLogo = styled.img`
  width: 130px;
  height: auto;
  margin-right: 20px;
`;
export const HeadingLogoW = styled.img`
  width: 80px;
  height: auto;
  margin-left: -20px;
  margin-bottom: 10px;
`;
export const Heading = styled.h1`
  text-shadow: 1px 1px 1px #222;
  font-size: 2.5rem;
  margin-top: 0px;
  margin-right: 15px;
  justify-content: center;
  text-align: center;
  font-family: "Encode Sans Expanded", sans-serif;
  color: #00897b;
  color: #00564d;
  color: white;
  height: 40px;
`;
export const Caption = styled(motion.h1)`
  text-shadow: 1px 1px 1px #222;
  font-size: 1.5rem;
  margin-top: 30px;
  max-width: 950px;
  justify-content: center;
  text-align: center;
  color: #00897b;
  // color: #00564d;
  // color: white;
`;

export const CardsWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  margin: 0px 0px 10px 0px;
`;
export const HalfContainer = styled(motion.div)`
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  margin: 0px 0px;
  max-width: 800px;
  text-align: justify;
  text-justify: inter-word;
`;

export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0px 30px;
  flex: 1;
`;

export const Cards = styled(motion.div)`
  display: flex;
  min-height: 200px;
  min-width: 200px;
  // height: 250px;
  // width: 250px;
  background: white;
  justify-content: center;
`;

export const Skill = styled.p`
  font-size: 1.25rem;
  color: #00897b;
  color: white;
  color: #33a195;
`;
export const Rarity = styled.p`
  color: white;
  // color: #00897b;
  color: #33a195;
  font-size: 1.25rem;
`;
export const Video = styled(motion.video)`
  height: 200px;
  width: 200px;
  position: relative;
`;
