import React, { useRef, useEffect, useState } from "react";
import "./homeElements.js";
import AnimatingButton from "../AnimatingButton/AnimatingButton.js";
import Axios from "axios";
import { ethers } from "ethers";
import "./styles.css";
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
  SubmitDiv,
  Error,
  InputDiv,
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
  MintedUp,
  NumberUp,
} from "./homeFramer.js";

import insta from "../../images/insta4.png";
import discord from "../../images/discord2.png";
import twitter from "../../images/twitter4.png";
import telegram from "../../images/telegram3.png";
import shoevideo1 from "../../images/shoewb.webm";
import AnimatingShoe from "../AnimatingShoe.js/AnimatingShoe.js";
import Canvasnew from "../canvas/index.js";

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

  const [email_id, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [check, setcheck] = useState(null);

  const addEmail = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
    setErrorMessage(null);
    connectWalletHandler();

    if (email_id === "") {
      return;
    }

    if (!defaultAccount) {
      setErrorMessage("Connect Wallet");
      console.log("This is it");
      return;
    }
    if (userBalance < 0.1) {
      setErrorMessage("Recharge your Account");
      console.log("This is ");
      return;
    } else {
      setcheck(!check);
    }
    Axios.post("http://localhost:8080/insert", {
      email_id: email_id,
      account: defaultAccount,
      balance: userBalance,
    });
  };
  const checkHandler = () => {
    setcheck(!check);
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };
  return (
    <Div id="home">
      <MainContainer>
        <TopContainer>
          <HalfDivl>
            {/* <Video
              id="hero-lightpass"
              variants={ShoeFade}
              initial="initial"
              animate="animate"
              loop
              autoPlay
              muted
            >
              <source src={shoevideo1} type="video/mp4" />
              Your browser does not support the video tag.
            </Video> */}
            <Canvasnew />
          </HalfDivl>
          <HalfDivr
            variants={StaggerContainer}
            initial="initial"
            animate="animate"
          >
            <NumberContainer>
              <Minted variants={MintedUp}>Minted</Minted>

              <Number variants={NumberUp}>0/500</Number>
            </NumberContainer>
            <SubscribeDiv variants={FadeUp}>
              <SubscribeLabel>
                <span>Get on the list</span>
              </SubscribeLabel>

              <SubscribeDivNew>
                <SubmitForm onSubmit={addEmail}>
                  <SubmitDiv>
                    <InputDiv>
                      <SubscribeInput
                        type="Email"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                      {!check && (
                        <SubscribeBtnNew type="submit">I'm in </SubscribeBtnNew>
                      )}
                      {check && (
                        <div className="checkDiv" onClick={checkHandler}>
                          <div className="checkmark-container">
                            <svg
                              x="0px"
                              y="0px"
                              fill="none"
                              className="checkmark-svg"
                              viewBox="0 0 25 30"
                            >
                              <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
                            </svg>
                          </div>
                          <label className="label"> {errorMessage}</label>
                        </div>
                      )}
                    </InputDiv>{" "}
                    {errorMessage && <Error>{errorMessage}</Error>}
                  </SubmitDiv>{" "}
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
      </MainContainer>
    </Div>
  );
};

export default Home;
