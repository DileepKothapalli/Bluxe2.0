import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Navlogo = styled.div;

export const Container = styled.div`
  height: 70px;
  // background-color: white;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  background-color: black;
  height: 70px;

  display: flex;
  overflow: hidden;
  margin: 0px auto 10px auto;
  border-radius: 10px;
  width: 100%;
  position: fixed;
  z-index: 10;

  background: linear-gradient(
    140.17deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  width: 130px;
  height: auto;
  margin-left: 80px;
`;
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  color: blue;
  margin: 15px;
  // flex: 1;
  padding: 0px 5px 5px 5px;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin-left: 70px;
`;

export const NavItem = styled.li`
  padding: 0px 10px 0px 10px;
`;

export const NavLinks = styled(LinkS)`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 0px;
  font-family: "Roboto Slab", serif;

  font-size: 18px;
  &:hover {
    color: white;
    border-bottom: 3px solid white;
    transition: 0.3s;
  }
  &.active {
    border-bottom: 3px solid white;
  }
  color: rgba(255, 255, 255, 1);
`;
export const NavLinkLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 0px;
  font-family: "Roboto Slab", serif;

  font-size: 18px;
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
    font-size: 20px;
  }
`;

export const NavLinksBtn = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-family: "Roboto Slab", serif;
  font-size: 15px;
  margin: 10px;
  height: 50px;
  width: 150px;
  margin-right: 75px;

  &:hover {
    color: black;
    transform: scale(1.02);
    transition: 0.1s;
    background-color: white;
  }
  &.active {
    border-bottom: 3px solid white;
  }
  color: #004c7a;
  background-color: #ddd;
  border-radius: 50px;
`;
