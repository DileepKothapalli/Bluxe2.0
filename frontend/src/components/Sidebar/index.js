import React, { useState } from "react";
import { ethers } from "ethers";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  Button,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

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
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="mainhome" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="wingxpaper" onClick={toggle}>
            Roadmap
          </SidebarLink>
          <SidebarLink to="payment" onClick={toggle}>
            Buy Bluxe
          </SidebarLink>
          <SidebarLink to="roadmap" onClick={toggle}>
            Bluxe Band
          </SidebarLink>
          {/* <ButtonDIv> */}
          {/* <NavLinksBtn to=""> */}
          <Button onClick={connectWalletHandler}>{connButtonText}</Button>
          {/* </NavLinksBtn> */}
          {/* </ButtonDIv> */}
          <SidebarLink to="roadmap" onClick={toggle}>
            Faq
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
