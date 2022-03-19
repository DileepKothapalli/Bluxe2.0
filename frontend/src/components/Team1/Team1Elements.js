import styled from "styled-components";
import { motion } from "framer-motion";

import group from "../../images/team1.png";

export const Div = styled.div`
  background-size: 100vw 100vh;
  background: rgba(0, 0, 0, 1);
  text-align: center;
  background-size: 100vw 100vh;
  padding-bottom: 30px;
  padding-top: 10px;
  min-height: 100vh;
  height: max-content;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Heading = styled.h1`
  margin: 100px 0px 40px 0px;
  font-weight: bolder;
  color: #00897d;
  text-shadow: 1px 1px 2px #000;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
`;
export const MainDiv = styled.div`
  min-height: 500px;
  max-height: 500px;
  min-width: 500px;
  max-width: 500px;
  background: url(${group});
  background-size: 500px 500px;
  background-repeat: no-repeat;
  display: flex;
`;

export const Name = styled.div`
  background-color: white;
  padding: 10px 5px;
  border-radius: 5px;
  margin-top: -40px;
  width: 120px;
  font-size: 12px;
  transform: translate(-40%, 0%);
  height: 40px;
  font-weight: bold;
  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: white;
    transform: translate(330%, 150%) rotate(45deg);
  }
  display: none;
`;

export const Designation = styled.div`
  background-color: white;
  padding: 10px 5px;
  border-radius: 5px;
  margin-top: -40px;
  width: 130px;
  transform: translate(60%, 0%);
  height: 40px;
  font-weight: bold;
  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: white;
    transform: translate(50%, 150%) rotate(45deg);
  }
  display: none;
`;

export const SideDiv = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 300px;
  min-height: 500px;
  // display: none;
  // opacity: 0;
`;
export const SubDiv = styled.div`
  flex: 0.2;

  &:hover {
    & > ${Name} {
      display: block;
    }
    & > ${Designation} {
      display: block;
    }
    & > ${SideDiv} {
      display: block;
      opacity: 1;
    }
  }
`;
