import React from "react";
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
  return (
    <Div id="faq">
      <VideoDiv>
        <Video loop autoPlay muted>
          {/* <source src={shoevideo} type="video/mp4" /> */}
          {/* <source src={walk} type="video/mp4" /> */}
          {/* <source src={shoevideo1} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </Video>
      </VideoDiv>

      <BodyContainer>
        <HeadContainer>
          <Heading>FAQ</Heading>
        </HeadContainer>
        <QuestionsContainer>
          <QuestionDiv x="67">
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
          <QuestionDiv x="67">
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
          <QuestionDiv x="45">
            <QuestionContainer>
              <Question>What is price of shoes ?</Question>
              <Icon src={iconPlus} />{" "}
            </QuestionContainer>
            <Answer>
              The sale would take place in two phases. The price in phase 1 of
              sale will be 0.1 eth and price of phase 2 will be 0.15 eth.
            </Answer>
          </QuestionDiv>
          <QuestionDiv x="80">
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
