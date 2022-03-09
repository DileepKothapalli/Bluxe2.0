import styled from "styled-components";
// import bg from "../../images/bluxe7.jpg";
import bg from "../../images/DeepakJoshiAvatar.png";
import { motion } from "framer-motion";
export const Div = styled(motion.div)`
  flex: ${(props) => props.flex};
  // background-image: url(${bg});
  background-size: cover;
  background: rgba(0, 0, 0, 1);
  text-align: center;
  background-size: 100vw 100vh;
  padding-bottom: 30px;
  height: max-content;
  @media (max-width: 320px) {
    background-size: 100vw 100%;
  }
  @media (max-width: 480px) {
    background-size: 200vw 100%;
  }
  @media (max-width: 600px) {
    background-size: 200vw 100%;
  }
  @media (max-width: 801px) {
    background-size: 150vw 150vh;
  }
  @media (max-width: 1025px) {
    background-size: 150vw 200vh;
  }
  @media (max-width: 1281px) {
    background-size: 120vw 100vh;
    background-position: -90px 40px;
  }
`;

export const BgImg = styled(motion.div)`
  position: fixed;
  // top: 0%;
  background-image: url(${bg});
  background: rgba(0, 0, 0, 1);
  z-index: -10;
  background-size: cover;
  width: 100%;
  height: max-content;
  background-repeat: no-repeat;
`;
export const Title = styled(motion.h1)`
  color: white;
  color: #00897b;
  color: #47aaa0;
  text-shadow: 1px 1px 20px black;
  margin: 50px 0px 30px 0px;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 3.375rem;
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
  justify-content: space-evenly;
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
  margin: 0px 10px 10px 10px;
`;

export const Card = styled(motion.div)`
  display: flex;
  height: 180px;
  width: 220px;
  margin: 15px 0px;
  background: white;
  justify-content: center;
`;

export const Heading = styled(motion.p)`
  margin: 0px;
  color: white;
  font-size: 1rem;
  color: #00897b;
  color: #33a195;
  color: #1f6159;
  margin-top: 5px;
  text-shadow: 1px 1px 20px black;
`;
export const Name = styled(motion.p)`
  margin: 0px;
  color: white;
  font-size: 1.625rem;
  color: #00897b;
  color: #2e9186;
  color: #247168;
  margin-top: 10px;
  text-shadow: 1px 1px 20px black;
  text-transform: uppercase;
`;

export const InnerCard = styled(motion.div)`
  border-radius: 9px;
  background: rgba(242, 142, 139);
  max-height: 160px;
  margin: 10px;
  max-width: 200px;
  height: 218px;
  width: 218px;
`;

export const Image = styled(motion.img)`
  // background-image: url(${bg});
  max-height: ${(props) => props.height}px;
  max-width: ${(props) => props.height}px;
  margin-top: ${(props) => props.top}px;
  margin-left: ${(props) => props.left}px; ;
`;
