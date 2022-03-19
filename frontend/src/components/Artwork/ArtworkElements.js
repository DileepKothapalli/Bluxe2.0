import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import bg from "../../images/DeepakJoshiAvatar.png";

export const Div = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 1);
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeadContainer = styled.div`
  display: flex;
`;
export const BodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-evenly;
  min-height: 300px;
  min-width: 220px;
  max-height: 300px;
  max-width: 200px;
  margin:30px 
  backdrop-filter: blur(40px);
  border-radius: 12px;

  background: linear-gradient(
    150.59deg,
    rgba(30, 40, 30, 0.45) 17.37%,
    rgba(255, 255, 255, 0) 101.21%,
    rgba(0, 0, 0, 0) 101.21%
  );
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.4);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 10px 60px;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 150px;
  margin-top: 10px;
  width: 150px;
  // margin: 0px 0px -5px;
  border-radius: 4px;
`;
export const Logo = styled.img`
  margin: 0px 25px;
  height: 30px;
`;
export const Love = styled.img`
  // position: absolute;
  top: 15px;
  // left: 30px;
  height: 20px;
  cursor: pointer;
  // width: 20px;
  margin: 0px 35px 0px 0px;
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
  // margin: 10px 0px 0px 0px;
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
  margin: 10px 0px 0px 0px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 5px 35px;
`;
export const Name = styled.h1`
  font-size: 28px;
  margin: 0px 0px 4px;
  font-family: "Playfair Display", serif;
  color: #00897b;
  color: #00897b;
  font-weight: bold;
`;
export const Id = styled.h1`
  margin: 0px 0px 2px;
  font-size: 16px;
  color: #006e62;
  color: grey;
`;
export const Price = styled.h1`
  margin: 0px 0px 2px;
  font-size: 16px;
  color: grey;
`;

export const MainDiv = styled.div`
  display: flex;
`;

export const SideDivLeft = styled.div`
  display: flex;
  min-width: 50px;
  align-items: center;
  justify-content: flex-end;
`;
export const SideDivRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 50px;
`;

export const Prev = styled.img`
  height: 50px;
  cursor: pointer;
`;
export const Next = styled.img`
  height: 50px;
  cursor: pointer;
`;
