import styled from "styled-components";
import { motion } from "framer-motion";
import IconButton from "@material-ui/core/IconButton";
import bg1 from "../../images/Blackbackground2.jpg";
import bg2 from "../../images/blacklight.jpg";
import bg3 from "../../images/blackmanbackground.jpg";
import bg4 from "../../images/blackbackground.jpg";
import bg5 from "../../images/darkpurple.jpg";
import bg6 from "../../images/lightbackground.jpg";
import bg7 from "../../images/linebackground.jpg";
import bg8 from "../../images/mainbackground1.jpg";
import bg9 from "../../images/mainbg.jpg";
import bg10 from "../../images/scifimain.jpg";

export const Div = styled(motion.div)`
  background: rgba(0, 0, 0, 1);
  background: url(${bg10});
  display: flex;
  min-height: 100vh;
  height: max-content;
  background-size: 100vw 100vh;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding-top: 15vh;
`;

export const MainContainer = styled(motion.div)`
  display: flex;
  position: relative;
  max-width: 100vw;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: max-content;
`;

export const TopContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

export const HalfDivl = styled(motion.div)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  min-width: 550px;
`;

export const Video = styled(motion.video)`
  height: 400px;
  width: 400px;
  position: relative;
`;

export const HalfDivr = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0px;
  flex-direction: column;
  min-width: 550px;
  min-height: 450px;
  max-height: 450px;
`;

export const NumberContainer = styled(motion.div)`
  flex: display;
  width: 300px;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`;

export const Minted = styled(motion.h1)`
  color: #00897b;
  font-size: 2rem;
`;

export const Number = styled(motion.h1)`
  font-size: 3.125rem;
  color: white;
  font-family: "Arial", serif;
`;

export const SubscribeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const SubmitDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputDiv = styled(motion.div)`
  display: flex;
  align-items: center;
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
  outline: none;
  border: none;
  background-color: transparent;
  padding-left: 20px;
  caret-color: rgba(250, 255, 250, 0.7);
  color: #ccc;
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
  background-color: #71dfbe;
  color: black;
  content: "";
  &::before {
    background-color: red;
  }
  transform: translate(20%, 0%);
`;

export const Error = styled(motion.span)`
  margin-bottom: -24px;
  margin-left: 20px;
  color: #ff4444;
`;

export const IconsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const Icons = styled(motion.a)`
  position: relative;
  top: 12%;
`;

export const Icon = styled(motion.img)`
  height: 40px;
  margin: 0px 3px 0px 3px;
`;
