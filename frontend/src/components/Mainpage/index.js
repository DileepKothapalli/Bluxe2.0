import React, { useEffect, useState } from "react";
import "./homeElements.js";
import Axios from "axios";
import { ethers } from "ethers";
import "./styles.css";
import {
  Div,
  SubscribeDiv,
  SubscribeInput,
  SubscribeLabel,
  MainContainer,
  IconsContainer,
  Icons,
  Icon,
  Video,
  TopContainer,
  HalfDivl,
  HalfDivr,
  NumberContainer,
  Number,
  SubscribeDivNew,
  SubscribeBtnNew,
  Minted,
  SubmitForm,
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

const Home = () => {
  // // const currentFrame = (index) =>
  // //   `/images/model/png/18th model${index.toString().padStart(4, "0")}.png`;
  // // const currentFrame = (index) =>
  // //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
  // //     .toString()
  // //     .padStart(4, "0")}.jpg`;
  // const currentFrame = (index) =>
  //   `images/model/png/18th model${index.toString().padStart(4, "0")}.png`;

  // const preloadImages = () => {
  //   for (let i = 1; i < frameCount - 1; i++) {
  //     const img = new Image();
  //     img.src = currentFrame(i);
  //   }
  // };

  // const img = new Image();
  // img.src = currentFrame(1);
  // canvas.width = 1158;
  // canvas.height = 770;
  // img.onload = function () {
  //   context.drawImage(img, 0, 0);
  // };
  // const updateImage = (index) => {
  //   img.src = currentFrame(index);
  //   context.drawImage(img, 0, 0);
  // };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [divPosition, setDivPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition((position / 10) % 126);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // preloadImages();

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

  return (
    <Div scrolls={scrollPosition} id="home">
      <MainContainer>
        <TopContainer>
          <HalfDivl>
            <Video
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
            </Video>
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
