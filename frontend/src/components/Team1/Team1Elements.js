import styled from "styled-components";
import { motion } from "framer-motion";

import group from "../../images/group.png";

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
  justify-content: center;
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

export const Label = styled.div`
  background-color: white;
  padding: 10px 5px;
  border-radius: 30px;
  margin-top: -40px;
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

export const SubDiv = styled.div`
  //   min-height: 500px;
  //   max-height: 500px;
  //   min-width: 100px;
  //   max-width: 100px;
  flex: 0.2;
  &:hover {
    & > ${Label} {
      display: block;
    }
  }
`;
