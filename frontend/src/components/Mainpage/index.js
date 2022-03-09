import React, { useRef, useEffect, useState } from "react";
import "./homeElements.js";
import AnimatingButton from "../AnimatingButton/AnimatingButton.js";
import Axios from "axios";
import { ethers } from "ethers";
import {
  Div,
  SubscribeDiv,
  SubscribeInput,
  SubscribeBtn,
  SubscribeLabel,
  MainContainer,
  FooterContainer,
  IconsContainer,
  Icons,
  Icon,
  MailingList,
  Video,
  TopContainer,
  HalfDivl,
  HalfDivr,
  NumberContainer,
  Number,
  BgImg,
  BgImgback,
  SubscribeNew,
  SubscribeDivNew,
  SubscribeBtnNew,
  Minted,
  Canvas,
  Img,
  SubmitForm,
  Input,
} from "./homeElements.js";

import {
  ShoeFade,
  FadeUp,
  IconsFade,
  IconFade1,
  StaggerContainer,
  IconFade2,
  IconFade3,
  IconFade4,
} from "./homeFramer.js";

import insta from "../../images/insta3.png";
import discord from "../../images/discord1.png";
import twitter from "../../images/twitter3.png";
import telegram from "../../images/telegram2.png";
import shoevideo1 from "../../images/shoewb.webm";
import AnimatingShoe from "../AnimatingShoe.js/AnimatingShoe.js";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [divPosition, setDivPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  var num = Math.ceil(scrollPosition / 3) % 140;
  var newimg = `images/jpgimages/ezgif-frame-${(num + 1)
    .toString()
    .padStart(3, "0")}.jpg`;

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [check, setcheck] = useState(null);

  const newonce = () => {
    setErrorMessage(null);
    Axios.post("http://localhost:8080/newpost", {
      email_id: defaultAccount,
    });
  };
  const checkHandler = () => {
    connectWalletHandler();

    if (!defaultAccount) {
      console.log(defaultAccount);
      setErrorMessage("Connect to wallet");
      // localStorage.setItem("Error", errorMessage);
      return;
    }
    connectWalletHandler();

    if (userBalance > 0.2) {
      setErrorMessage("Low balance");

      return;
    } else {
      setcheck(!check);
    }
    newonce();
  };
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
    <Div id="home">
      <MainContainer>
        <TopContainer>
          <HalfDivl>
            <Img src={newimg} alt="" />
            <Canvas id="hero-lightpass"></Canvas>
          </HalfDivl>
          <HalfDivr
            variants={StaggerContainer}
            initial="initial"
            animate="animate"
            pos={divPosition}
          >
            <NumberContainer variants={FadeUp}>
              <Minted>Minted</Minted>

              <Number>0/500</Number>
            </NumberContainer>
            <SubscribeDiv variants={FadeUp}>
              <SubscribeLabel>
                <span>Get on the list</span>
              </SubscribeLabel>

              <SubscribeDivNew>
                <SubmitForm>
                  <SubscribeInput
                    type="Email"
                    // onChange={(event) => {
                    //   // setEmail(event.target.value);
                    // }}
                  />
                  <SubscribeBtn type="Submit">Submit </SubscribeBtn>
                </SubmitForm>
              </SubscribeDivNew>
            </SubscribeDiv>
            <IconsContainer variants={IconsFade}>
              <Icons
                variants={IconFade1}
                initial="initial"
                animate="animate"
                href="#"
              >
                <Icon src={insta} />
              </Icons>{" "}
              <Icons
                variants={IconFade2}
                initial="initial"
                animate="animate"
                href="#"
              >
                <Icon src={discord} />
              </Icons>{" "}
              <Icons
                variants={IconFade3}
                initial="initial"
                animate="animate"
                href="#"
              >
                <Icon src={twitter} />
              </Icons>
              <Icons
                variants={IconFade4}
                initial="initial"
                animate="animate"
                href="#"
              >
                <Icon src={telegram} />
              </Icons>
            </IconsContainer>
          </HalfDivr>
        </TopContainer>
        <FooterContainer></FooterContainer>
      </MainContainer>
    </Div>
  );
};

export default Home;
