import styled, { css, keyframes } from "styled-components";

import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
  background-color: transparent;
  height: 100px;
  justify-content: space-evenly;

  display: flex;
  overflow: hidden;
  margin: 0px auto 10px auto;
  border-radius: 10px;
  width: 100vw;
  position: fixed;
  top: 0%;
  z-index: 10;
  background: linear-gradient(
    152.97deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(4px);
  //   box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
  //   backdrop-filter: blur(4px);
`;

export const NavContainer = styled.div`
  display: flex;
  width: 93.5%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-family: "Gilroy-Bold", sans-serif;
  padding: 0px 20px 0px 30px;
  // font-weight: bold;
  border: 1px solid hsla(0, 0%, 80%, 0.47);
  border-radius: 24px;
  height: 70px;
`;

export const LogoDiv = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  height: 55px;
`;

export const NavLinksh = styled(LinkS)`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 0px;

  font-size: 1.125rem;

  color: #004c7a;
  color: white;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1025px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 20%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  list-style: none;
  margin: 15px;
  padding: 0px 5px 5px 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50vw;
  white-space: nowrap;
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  padding: 0px 10px 0px 10px;
  // min-width: 200px;
`;

export const NavLinks = styled(LinkS)`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 0px;

  font-size: 1.125rem;
  &:hover {
    color: white;
    transition: 0.3s;
  }
  &.active {
    color: #00897d;
  }

  color: #004c7a;
  color: white;
`;

export const ButtonDIv = styled.div`
  display: flex;
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;

export const NeuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  min-height: 50px;
  min-width: 150px;
  max-height: 50px;
  max-width: 150px;
  // width: 150px;
  // height: 50px;
  background: rgba(240, 240, 240, 1);
  border: none;
  border-radius: 5.5rem;
  border: 7px solid rgba(240, 240, 240, 0.5);
  color: #444;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  ${(props) =>
    props.on === "on" &&
    css`
      box-shadow: -10px -10px 15px rgba(200, 200, 200, 0.2),
        10px 10px 15px rgba(200, 200, 200, 0.2),
        inset -3px -3px 30px rgba(70, 70, 70, 0.2),
        inset 3px 3px 15px rgba(30, 30, 30, 0.12);
    `}
`;
