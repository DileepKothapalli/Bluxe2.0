import { Link } from "react-router-dom";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLinksBtn,
  Logo,
  Button,
  MobileIcon,
  NavLinkLink,
  NavLinks,
  NavLinksh,
  LogoDiv,
  ButtonDIv,
  DetailsDiv,
  Balance,
  Account,
  Dot,
  Label,
  NeuButton,
} from "./NavbarElements";

// import logo from "../../images/bluxe3.jpg";
// import logo from "../../images/Asset1.png";
import logo from "../../images/Asset2.png";
// import logo from "../../images/logo4.png";
import insta from "../../images/Instagram.png";
import discord from "../../images/Discord.png";
import twitter from "../../images/Twitter1.png";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [displayAccount, setDisplayAccount] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
          setConnButtonText("Connected");
        });
    } else {
      setErrorMessage("Install Metamask");
    }
  };
  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    let ans = newAccount.toString();
    let final = ans.substr(1, 7) + "...";
    setDisplayAccount(final);
    getUserBalance(newAccount.toString());
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };
  window.ethereum.on("accountChanged", accountChangeHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <Nav>
      <NavContainer>
        <LogoDiv>
          <NavLinksh
            to="home"
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >
            <Logo src={logo} />
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          </NavLinksh>
        </LogoDiv>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              duration={500}
              spy={true}
              exact="true"
              offset={-30}
            >
              PROVENANCE
            </NavLinks>{" "}
          </NavItem>

          <NavItem>
            <NavLinks
              to="roadmap"
              duration={500}
              spy={true}
              exact="true"
              offset={-30}
            >
              ROADMAP
            </NavLinks>{" "}
          </NavItem>
          <NavItem>
            <NavLinks
              to="shoe"
              duration={500}
              spy={true}
              exact="true"
              offset={-10}
            >
              SHOP
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="team"
              duration={500}
              spy={true}
              exact="true"
              offset={-10}
            >
              TEAM
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="faq"
              duration={500}
              spy={true}
              exact="true"
              offset={-10}
            >
              FAQ
            </NavLinks>
          </NavItem>
          <NavItem></NavItem>
        </NavMenu>
        <ButtonDIv>
          {!defaultAccount && (
            <NeuButton onClick={connectWalletHandler}>Connect Wallet</NeuButton>
          )}
          {defaultAccount && <NeuButton on="on">Connected</NeuButton>}
        </ButtonDIv>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
/* Group 13 */
