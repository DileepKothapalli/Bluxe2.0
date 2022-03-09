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
import iconPlus from "../../images/plus4.png";
import walk from "../../images/walk.webm";
import shoevideo1 from "../../images/shoewb.webm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Faq = () => {
  const [mouse1, setMouse1] = useState(true);
  const [mouse2, setMouse2] = useState(true);
  const [mouse3, setMouse3] = useState(true);
  const [mouse4, setMouse4] = useState(true);

  function handleMouseEnter1() {
    setMouse1(!mouse1);
  }
  function handleMouseEnter2() {
    setMouse2(!mouse2);
  }
  function handleMouseEnter3() {
    setMouse3(!mouse3);
  }
  function handleMouseEnter4() {
    setMouse4(!mouse4);
  }

  return (
    <Div id="faq">
      <BodyContainer>
        <HeadContainer>
          <Heading>FAQ</Heading>
        </HeadContainer>
        <QuestionsContainer>
          <QuestionDiv x="67" onClick={handleMouseEnter1} mouse={mouse1}>
            <QuestionContainer>
              <Question>What is Bluxe?</Question>
              <Icon src={iconPlus} />
            </QuestionContainer>
            <Answer>
              Bluxe is digital fashion studio. Providing wearables to the 40
              billion dollars metaverse industry. We will be inclusive and
              exclusive part of the future of fashion.
            </Answer>
          </QuestionDiv>
          <QuestionDiv x="67" onClick={handleMouseEnter2} mouse={mouse2}>
            <QuestionContainer>
              <Question>What is Bluxe NFT collection ?</Question>
              <Icon src={iconPlus} />
            </QuestionContainer>
            <Answer>
              Bluxe studio is launching its first sneakers collections of 1500
              shoes to be worn by avatars in metaverse. Each NFT doubles as
              Bluxe super membership club which would offer various events,
              exclusive merchandiseand raffles.
            </Answer>
          </QuestionDiv>
          <QuestionDiv x="45" onClick={handleMouseEnter3} mouse={mouse3}>
            <QuestionContainer>
              <Question>What is price of shoes ?</Question>
              <Icon src={iconPlus} />{" "}
            </QuestionContainer>
            <Answer>
              The sale would take place in two phases. The price in phase 1 of
              sale will be 0.1 eth and price of phase 2 will be 0.15 eth.
            </Answer>
          </QuestionDiv>
          <QuestionDiv x="80" onClick={handleMouseEnter4} mouse={mouse4}>
            <QuestionContainer>
              <Question> How to get whitelisted for Bluxe NFT ?</Question>
              <Icon src={iconPlus} />
            </QuestionContainer>
            <Answer>
              To get whitelisted connect your wallet on Bluxe studio webpage.
              Your wallet should have a balance of more than 0.11 eth and submit
              your email id. Whitelist willl have 2000 spots in total. First 500
              spots will be based entry because early bird must get rewarded.
            </Answer>
          </QuestionDiv>
        </QuestionsContainer>

        <BottomContainer>
          <BottomHeading>Ask A Question</BottomHeading>
          <Input />
          <SubmitButton>Submit</SubmitButton>
        </BottomContainer>
      </BodyContainer>
    </Div>
  );
};

export default Faq;
