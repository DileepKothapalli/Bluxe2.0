import styled, { css, keyframes } from "styled-components";

import { NavLink } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Navlogo = styled.div;
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
export const Nav = styled.nav`
  background-color: #00897b;
  height: 70px;

  display: flex;
  overflow: hidden;
  margin: 0px auto 10px auto;
  border-radius: 10px;
  width: 100vw;
  position: fixed;
  top: 0%;
  z-index: 10;

  // background: linear-gradient(
  //   140.17deg,
  //   rgba(0, 137, 123, 0.1) 0%,
  //   rgba(0, 137, 123, 0.4) 100%
  // );
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  font-family: "Playfair Display", serif;
  font-weight: bold;
  // font-family: 'Poppins', sans-serif;
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
`;
export const Logo = styled.img`
  // width: 130px;
  height: 70px;
  // margin-left: 210px;
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
export const LogoDiv = styled.div`
  display: flex;
`;
export const ButtonDIv = styled.div`
  display: flex;
  @media screen and (max-width: 1025px) {
    display: none;
  }
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
    border-bottom: 3px solid white;
  }

  color: #004c7a;
  color: white;
`;
export const NavLinksh = styled(LinkS)`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 0px;

  font-size: 1.125rem;

  color: #004c7a;
  color: white;
`;
export const NavLinkLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 0px;

  font-size: 1.125px;
  &:hover {
    border-bottom: 3px solid white;
    color: white;
    transition: 0.3s;
  }
  &.active {
    border-bottom: 3px solid white;
  }
  color: #004c7a;
  color: white;
`;

export const Button = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 150px;
  color: #2846ed;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;

  border-radius: 100px;
  background: linear-gradient(to right, #4b4b4b, #111111);
  box-shadow: 7px 0px 7px #171717 inset;
  box-shadow: -7px 0px -7px #494949 inset;

  border: none;
  z-index: 10;

  & > li {
    cursor: pointer;
    list-style-type: none;
    outline: none;
    text-decoration: none;
    color: white;
    padding-left: 15px;
    padding-right: 20px;
    font-size: 1.25rem;
  }
`;

export const NavLinksBtn = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px;
  height: 50px;
  width: 150px;

  &.active {
    border-bottom: 3px solid white;
  }
  color: #004c7a;
  background-color: #ddd;
  border-radius: 50px;
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
  background: rgba(240, 240, 240, 1);
  border: none;
  border-radius: 5.5rem;
  border: 7px solid rgba(240, 240, 240, 0.5);
  color: #444;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  // transition: 0.2s ease-in-out;
  ${(props) =>
    props.on === "on" &&
    css`
      box-shadow: -10px -10px 15px rgba(200, 200, 200, 0.2),
        10px 10px 15px rgba(200, 200, 200, 0.2),
        inset -3px -3px 30px rgba(70, 70, 70, 0.2),
        inset 3px 3px 15px rgba(30, 30, 30, 0.12);
    `}
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Balance = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Account = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ccc;
`;
export const Dot = styled.div`
  max-height: 3px;
  max-width: 3px;
  min-width: 3px;
  min-height: 3px;
  border-radius: 3px;
  padding: 3px;
  background-color: lightgreen;
  position: relative;
  // margin-top: 100px;
  // left: 50%;
  // filter: blur(2px);
  box-shadow: 1px 1px 2px 2px lightgreen;
  transform: translate(-250%, 280%);
`;

export const Label = styled.label`
  font-size: 0.75rem;
`;

export const AccountDiv = styled.div`
  display: flex;
`;
