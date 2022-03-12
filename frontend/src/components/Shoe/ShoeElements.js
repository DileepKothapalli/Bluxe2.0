import styled from "styled-components";
import bg from "../../images/IMG_2717.JPG";
import shoe5 from "../../images/shoe5.jpeg";
import IconButton from "@material-ui/core/IconButton";
import { keyframes } from "styled-components";
const scrolling = keyframes`
 0% {transform: translateY(0vh) }
 99% {transform: translateY(0vh) }
 100% {transform: translateY(0vh) }
`;
export const BgImg = styled.div`
  position: fixed;
  // position: relative;
  // background-image: url(${bg});
  background-size: cover;
  width: 100%;
  height: 120vh;
  background-repeat: no-repeat;
  z-index: -10;
`;
export const Div = styled.div`
  flex: ${(props) => props.flex};
  // background-image: url(${bg});
  background: rgba(0, 0, 0, 1);
  text-align: center;
  background-size: 100vh 100vw;
  height: max-content;
  min-height: 100vh;
  padding-bottom: 20px;
  z-index: -10;
  position: relative;
`;

export const MainContainer = styled.div`
  position: relative;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
  border-radius: 5px;
  padding: 0px 10px;
`;
export const Img = styled.img`
  height: 150px;
  margin: 20px;
  width: 150px;
  border-radius: 10px 10px 10px 10px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.15, 1.15);
  }
  traslateY(-430vh);
  position: relative;
  top: 100%;
  animation-name: ${scrolling};
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
export const SideBarDiv = styled.div`
  display: flex;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const SideBar = styled.div`
  max-height: 95vh;
  display: flex;
  padding-top: 30px;
  animation-name: ${scrolling} 20s linear infinite;
  // animation-duration: 8s;
  // animation-iteration-count: infinite;
  @media (max-width: 800px) {
    display: none;
  }
  // transform: translate3d(${(props) => props.rotate}px, 0px, 0px);
`;
export const CardBar = styled.div`
  display: flex;
  flex: 0.75;
  flex-wrap: wrap;
  height: max-content;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
export const CardStack = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  position: relative;
`;
export const Card = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  position: absolute;
  box-shadow: 0px 0px 20px 2px black;
  background-color: white;
  border-radius: 10px;
  transform: rotate(${(props) => props.rotate}deg);
  // transform: rotate(20deg);
`;

export const CardImg = styled.img`
  height: 410px;
  width: 410px;
  transform: translate(-5px, -5px);
  border-radius: 10px 10px 10px 10px;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  min-width: 500px;
  min-height: 300px;
  align-items: center;
  padding: 0px 40px;
  justify-content: center;
`;
export const ShoeName = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  & > h2 {
    font-size: 2.25rem;
  }
`;
export const ShoeNameText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Playfair Display", serif;
  & > h2 {
    font-size: 2.25rem;
  }
`;
export const ShoeInfo = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  justify-content: center;

  margin: 30px 85px 40px 0px;
  & > h2 {
    font-size: 1rem;
    padding-left: 10px;
    margin-top: 16px;
    letter-spacing: 2px;
  }
`;
export const ShoeAttr = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;
export const Text = styled.p`
  font-size: 1rem;
  text-align: start;
  margin: 0;
`;
export const MintButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 10px 0px;
  width: 180px;
  height: 40px;
  padding: 0px 10px;
  background-color: #fff;
  transition: all 0.2s;
  letter-spacing: 3px;
  font-family: "Playfair Display", serif;
  font-weight: bolder;
  border-radius: 1px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
  & > h4 {
    font-size: 1.125rem;
    margin: 0px;
    padding: 5px;
  }
  &:hover {
    // box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.1);
  }
  font-size: 1rem;
  font-weight: normal;
`;
