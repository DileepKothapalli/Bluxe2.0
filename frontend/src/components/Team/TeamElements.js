import styled from "styled-components";
// import bg from "../../images/bluxe7.jpg";
import bg from "../../images/DeepakJoshiAvatar.png";
import { motion } from "framer-motion";

import bg1 from "../../images/Blackbackground2.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/blackbackground.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";

export const Div = styled(motion.div)`
  background-size: 100vw 100vh;
  // background: rgba(0, 0, 0, 1);
  text-align: center;
  background-size: 100vw 100vh;
  padding-bottom: 30px;
  padding-top: 10px;
  min-height: 100vh;
  height: max-content;
`;

export const BgImg = styled(motion.div)`
  position: fixed;
  background-image: url(${bg2});
  background: rgba(0, 0, 0, 1);
  z-index: -10;
  background-size: cover;
  width: 100%;
  height: max-content;
  background-repeat: no-repeat;
`;
export const Title = styled(motion.h1)`
  margin: 70px 0px 40px 0px;
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const Name = styled(motion.p)`
  margin: 0px;
  margin-top: 10px;
  text-transform: uppercase;

  font-size: 1.75rem;
  text-shadow: 0px 0px 1px #000;
  color: #4daca4;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;
export const Heading = styled(motion.p)`
  margin: 0px;
  margin-top: 4px;
  text-shadow: 1px 1px 20px black;
  font-size: 1rem;
  color: #999;
`;

export const Container = styled(motion.div)`
  display: flex;
`;

export const MainContainer = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
`;
export const CardWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const TopContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 70px;
  justify-content: flex-end;
`;
export const BottomContainer = styled(motion.div)`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
  margin: 0px 70px;
`;

export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: space-evenly;
  min-width: 400px;
  margin: 0px 10px 40px 10px;
`;

export const Card = styled(motion.div)`
  display: flex;
  height: 160px;
  width: 200px;
  margin: 15px 0px;
  background: white;
  justify-content: center;
`;

export const InnerCard = styled(motion.div)`
  border-radius: 9px;
  background: rgba(242, 142, 139);
  max-height: 140px;
  margin: 10px;
  max-width: 180px;
`;

export const Image = styled(motion.img)`
  // background-image: url(${bg});
  max-height: ${(props) => props.height}px;
  max-width: ${(props) => props.height}px;
  margin-top: ${(props) => props.top}px;
  margin-left: ${(props) => props.left}px; ;
`;
