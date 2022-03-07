import React, { useRef, useEffect, useState } from "react";
import "./homeElements.js";
import AnimatingButton from "../AnimatingButton/AnimatingButton.js";
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

// const html = document.documentElement;
// const canvas = document.getElementById("hero-lightpass");
// const context = canvas.getContext("2d");

// const frameCount = 148;
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

// window.addEventListener("scroll", () => {
//   const scrollTop = html.scrollTop;
//   // const maxScrollTop = html.scrollHeight - window.innerHeight;
//   const maxScrollTop = 300;
//   console.log(scrollTop);
//   const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.ceil(scrollFraction * frameCount)
//   );

//   requestAnimationFrame(() => updateImage(frameIndex + 1));
// });

// preloadImages();

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
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
  console.log(newimg);

  // const currentFrame = (index) =>
  //   `images/jpgimages/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;
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

  const [accountCheck, setAccountCheck] = useState(true);
  const [balanceCheck, setBalanceCheck] = useState(null);
  const [errorCheck, setErrorCheck] = useState(null);

  const errorHandler = () => {
    console.log("check");
    connectWalletHandler();
    if (defaultAccount) {
      setAccountCheck(true);
    }
    if (userBalance) {
      setBalanceCheck(true);
    }
  };

  useEffect(() => {
    const e = null;
  }, []);

  return (
    <Div id="home">
      <MainContainer>
        {/* <AnimatingShoe></AnimatingShoe> */}
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
            <Img src={newimg} alt="" />
            <Canvas id="hero-lightpass"></Canvas>
          </HalfDivl>
          <HalfDivr
            variants={StaggerContainer}
            initial="initial"
            animate="animate"
          >
            <NumberContainer variants={FadeUp}>
              <Minted>Minted</Minted>

              <Number>0/500</Number>
            </NumberContainer>
            <SubscribeDiv variants={FadeUp}>
              <SubscribeLabel>
                <span>Get on the list</span>
              </SubscribeLabel>
              {/* <MailingList>
                <SubscribeInput placeholder="Your email" type="email" />
                <SubscribeBtn>Subscribe</SubscribeBtn>
              </MailingList> */}

              <SubscribeDivNew>
                <SubscribeNew placeholder="Your e-mail" />
                {/* <SubscribeBtnNew>I'm in</SubscribeBtnNew> */}
                <AnimatingButton></AnimatingButton>
                {errorCheck && <span>You must enter your name</span>}
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
