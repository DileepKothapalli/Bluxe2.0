import React, { useState } from "react";
import {
  BodyContainer,
  HeadContainer,
  Div,
  Heading,
  QuestionsContainer,
  Question,
  Answer,
  BottomHeading,
  BottomContainer,
  Input,
  SubmitButton,
  QuestionDiv,
  Video,
  VideoDiv,
  Icons,
  Icon,
  QuestionContainer,
} from "./FaqElements";
import { useScroll } from "../UseScroll.js";
import iconPlus from "../../images/plus4.png";
import walk from "../../images/walk.webm";
import shoevideo1 from "../../images/shoewb.webm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  FaqContainer,
  FaqHeadingAnimate,
  FaqWrapperAnimate,
  QuestionAnimate,
  QuestionAnimate1,
  QuestionAnimate2,
  QuestionAnimate3,
  StaggerContainer,
} from "./FaqFramer";
const Faq = () => {
  const [mouse1, setMouse1] = useState(0);
  const [mouse2, setMouse2] = useState(0);
  const [mouse3, setMouse3] = useState(0);
  const [mouse4, setMouse4] = useState(0);

  function handleMouseEnter1() {
    if (mouse1) {
      setMouse1(0);
    } else {
      setMouse1(1);
    }
    setMouse2(0);
    setMouse3(0);
    setMouse4(0);
  }
  function handleMouseEnter2() {
    setMouse1(0);
    if (mouse2) {
      setMouse2(0);
    } else {
      setMouse2(1);
    }
    setMouse3(0);
    setMouse4(0);
  }
  function handleMouseEnter3() {
    setMouse1(0);
    setMouse2(0);
    if (mouse3) {
      setMouse3(0);
    } else {
      setMouse3(1);
    }
    setMouse4(0);
  }
  function handleMouseEnter4() {
    setMouse1(0);
    setMouse2(0);
    setMouse3(0);
    if (mouse4) {
      setMouse4(0);
    } else {
      setMouse4(1);
    }
  }

  const [element, controls] = useScroll(0.7);
  const [element1, controls1] = useScroll(0.7);
  const [element2, controls2] = useScroll(0.1);
  const [element3, controls3] = useScroll(0.1);

  return (
    <Div id="faq">
      <BodyContainer>
        <HeadContainer>
          <Heading
            ref={element}
            variants={FaqHeadingAnimate}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            FAQ
          </Heading>
        </HeadContainer>
        <QuestionsContainer
          ref={element2}
          variants={StaggerContainer}
          animate={controls2}
          transition={{
            duration: 0.5,
            delay: 0.5,
            bounce: 0.3,
            ease: "easeInOut",
          }}
        >
          <QuestionDiv variants={QuestionAnimate} onClick={handleMouseEnter1}>
            <QuestionContainer>
              <Question mouse={mouse1}>What is Bluxe?</Question>
              <Icon src={iconPlus} direction={mouse1} />
            </QuestionContainer>
            <Answer x="67" mouse={mouse1}>
              Bluxe is digital fashion studio. Providing wearables to the 40
              billion dollars metaverse industry. We will be inclusive and
              exclusive part of the future of fashion.
            </Answer>
          </QuestionDiv>
          <QuestionDiv variants={QuestionAnimate} onClick={handleMouseEnter2}>
            <QuestionContainer>
              <Question mouse={mouse2}>What is Bluxe NFT collection ?</Question>
              <Icon src={iconPlus} direction={mouse2} />
            </QuestionContainer>
            <Answer x="67" mouse={mouse2}>
              Bluxe studio is launching its first sneakers collections of 1500
              shoes to be worn by avatars in metaverse. Each NFT doubles as
              Bluxe super membership club which would offer various events,
              exclusive merchandiseand raffles.
            </Answer>
          </QuestionDiv>
          <QuestionDiv variants={QuestionAnimate} onClick={handleMouseEnter3}>
            <QuestionContainer>
              <Question mouse={mouse3}>What is price of shoes ?</Question>
              <Icon src={iconPlus} direction={mouse3} />{" "}
            </QuestionContainer>
            <Answer x="45" mouse={mouse3}>
              The sale would take place in two phases. The price in phase 1 of
              sale will be 0.1 eth and price of phase 2 will be 0.15 eth.
            </Answer>
          </QuestionDiv>
          <QuestionDiv variants={QuestionAnimate} onClick={handleMouseEnter4}>
            <QuestionContainer>
              <Question mouse={mouse4}>
                {" "}
                How to get whitelisted for Bluxe NFT ?
              </Question>
              <Icon src={iconPlus} direction={mouse4} />
            </QuestionContainer>
            <Answer x="80" mouse={mouse4}>
              To get whitelisted connect your wallet on Bluxe studio webpage.
              Your wallet should have a balance of more than 0.11 eth and submit
              your email id. Whitelist willl have 2000 spots in total. First 500
              spots will be based entry because early bird must get rewarded.
            </Answer>
          </QuestionDiv>
        </QuestionsContainer>

        <BottomContainer
          ref={element3}
          variants={FaqContainer}
          animate={controls3}
          transition={{
            duration: 0.5,
            delay: 0.5,
            bounce: 0.3,
            ease: "easeInOut",
          }}
        >
          <BottomHeading variants={FaqWrapperAnimate}>
            Ask A Question
          </BottomHeading>
          <Input variants={FaqWrapperAnimate} />
          <SubmitButton variants={FaqWrapperAnimate}>Submit</SubmitButton>
        </BottomContainer>
      </BodyContainer>
    </Div>
  );
};

export default Faq;
