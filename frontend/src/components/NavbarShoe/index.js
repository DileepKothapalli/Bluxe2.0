import React from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksBtn,
  Logo,
  Button,
  NavLinkLink,
  Container,
} from "./NavbarShoeElements";

import logo from "../../images/logowhite.png";
import insta from "../../images/Instagram.png";
import discord from "../../images/Discord.png";
import twitter from "../../images/Twitter1.png";

const NavbarShoe = (props) => {
  return (
    <Container>
      <Nav>
        <NavContainer>
          <Link to="/">
            <Logo src={logo} />
          </Link>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                duration={500}
                spy={true}
                exact="true"
                offset={-100}
              >
                HOME
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="about"
                duration={500}
                spy={true}
                exact="true"
                offset={-100}
              >
                ABOUT US
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="roadmap" duration={500} offset={-100}>
                ROADMAP
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinkLink to="/shop">BUY BLUXE</NavLinkLink>
            </NavItem>
            <NavItem>
              <NavLinks to="/Team">TEAM</NavLinks>
            </NavItem>
            <NavItem></NavItem>
          </NavMenu>

          <NavLinksBtn to="/Connect">
            <Button>Connect Wallet</Button>
          </NavLinksBtn>
        </NavContainer>
      </Nav>
    </Container>
  );
};

export default NavbarShoe;
