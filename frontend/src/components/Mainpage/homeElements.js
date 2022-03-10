import styled from "styled-components";
import bg from "../../images/BG5.png";
import shoe5 from "../../images/shoe5.jpeg";
import { motion } from "framer-motion";
import IconButton from "@material-ui/core/IconButton";

export const Div = styled(motion.div)`
  background-image: url(${bg});
  background: rgba(0, 0, 0, 1);
  display: flex;
  min-height: 100vh;

  height: max-content;
  padding-bottom: 40px;
  max @media (max-width: 320px) {
    background-size: 100vw 150vh;
  }
  @media (max-width: 480px) {
    background-size: 200vw 150vh;
  }
  @media (max-width: 600px) {
    background-size: 250vw 150vh;
  }
  @media (max-width: 801px) {
    background-size: cover;
    // background: rgba(0, 0, 0, 1);
  }
  @media (max-width: 1025px) {
    background-size: 150vw 200vh;
  }
  @media (max-width: 1281px) {
    background-size: 12vwh;
    background-position: -90px 40px;
  }
  background-position: 0px 40px;
  background-size: 100vw 100vh;
  font-family: "Playfair Display", serif;
  font-weight: bold;
`;
export const Video = styled(motion.video)`
  height: 400px;
  width: 400px;
  position: relative;
  margin-top: 70px;
  margin-right: 10vw;
  display: none;
`;
export const Canvas = styled(motion.canvas)`
  position: fixed;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  // height: 500px;
`;

export const Img = styled(motion.img)`
  height: 400px;
  width: 400px;
  position: relative;
  margin-top: 70px;
  margin-right: 10vw;
`;

export const MainContainer = styled(motion.div)`
  display: flex;
  position: relative;
  max-width: 100vw;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: max-content;
  margin-top: 200px;
`;

export const TopContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
`;

export const HalfDivl = styled(motion.div)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const HalfDivr = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 20px 0px;
  flex-direction: column;
`;

export const NumberContainer = styled(motion.div)`
  flex: display;
  width: 300px;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  margin-top: 30px;
`;

export const Number = styled.h1`
  font-size: 3.125rem;
  color: white;
  margin-bottom: 30px;
`;

export const FooterContainer = styled(motion.div)`
  display: flex;
  margin: 10px 0px 40px 0px;
  align-items: space-between;
  justify-content: flex-end;
  min-height: max-content;
`;

export const IconsContainer = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 65px;
`;

export const Icons = styled(motion.a)`
  position: relative;
  top: 12%;
`;

export const Icon = styled(motion.img)`
  height: 50px;
  margin: 0px 3px 0px 3px;
`;

export const MailingList = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubscribeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const SubscribeDivNew = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 1);
  height: 50px;
  border-radius: 30px;
  width: 350px;
  padding: 0px 6px;
`;

export const SubmitForm = styled.form`
  // position: relative;
  background-color: transparent;
`;

export const Input = styled.input`
  display: flex;
  // width: 350px;
  flex: 1;
  outline: none;
  border: none;
  height: 50px;
  border-radius: 50px;
  background-color: transparent;
  padding-left: 20px;
  caret-color: rgba(250, 255, 250, 0.7);
  color: #ccc;
`;

export const SubscribeLabel = styled(motion.div)`
  flex: 1;
  display: flex;
  top: 0%;
  color: #f3f2c9;
  color: white;

  font-size: 1.25rem;
  width: 300px;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: start;
  float: left;
  & > p {
    maring-bottom: 0px;
  }
  & > span {
    color: #00897b;
  }
  text-shadow: 0px 0px 1px #000000;
`;

export const SubscribeInput = styled.input`
  height: 40px;
  display: inline-flex;
  width: 230px;
  border-radius: 3px 3px 3px 3px;
  outline: none;
  border: none;
  border: 1px solid #ddd;
  background-color: transparent;
  padding: 5px;
  &:placeholder-shown {
    font-style: italic;
  }
  &:focus {
    // border: 2px solid black;
  }
  outline: none;
  border: none;
  background-color: transparent;
  padding-left: 20px;
  caret-color: rgba(250, 255, 250, 0.7);
  color: #ccc;
`;

export const SubscribeBtn = styled.button`
  height: 40px;
  outline: none;
  display: inline-flex;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid black;
  margin-left: 10px;
  padding: 10px;
  border: none;
  outline: none;
  align-items: center;
  text-align: center;
  background-color: black;
  // background-color: #f3f2c9;
  color: white;
  // color: #53b8bb;
  &:hover {
    box-shadow: 0px 0px 40px 40px rgba(0, 0, 0, 0.1);
  }
`;

export const SubscribeBtnNew = styled.button`
  height: 40px;
  outline: none;
  display: inline-flex;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid black;
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  outline: none;
  align-items: center;
  text-align: center;
  background-color: #00897b;
  color: white;
  color: black;
  color: #fff;
  content: "";
  &::before {
    background-color: red;
  }
  transform: translate(20%, 0%);
`;

export const Minted = styled.h1`
  color: #00897b;
  font-size: 2rem;
`;
