import React from "react";
import {
  BodyContainer,
  Div,
  HeadingContainer,
  Img,
  StoryText,
  MysteryHeading,
  MysteryWrapper,
  Container,
} from "./MysteryCodeElements";

import {
  StaggerContainer,
  MysteryHeadingAnimate,
  MysteryWrapperAnimate,
} from "./MysteryCodeFramer";
import { useScroll } from "../UseScroll.js";
import girl from "../../images/girl.jpg";
import girl1 from "../../images/girl1.jpg";
const MysteryCode = () => {
  const [element, controls] = useScroll(0.7);
  const [element2, controls2] = useScroll(0.4);
  return (
    <Div id="mystery">
      <Container>
        {/* <BgImg></BgImg> */}
        <HeadingContainer>
          <MysteryHeading
            ref={element}
            variants={MysteryHeadingAnimate}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            Mystery Code
          </MysteryHeading>
          {/* <HeadingCaption
        ref={element1}
        variants={MysteryCaptionAnimate}
        animate={controls1}
        transition={{
          duration: 1,
          delay: 0.5,
          bounce: 1.3,
          ease: "easeInOut",
        }}
      >
        The Goal of Bluxe Team is to provide long-term fashion value to our
        community
      </HeadingCaption> */}
        </HeadingContainer>
        <BodyContainer
          ref={element2}
          variants={StaggerContainer}
          animate={controls2}
          transition={{
            duration: 1,
            delay: 0.5,
            bounce: 1.3,
            ease: "easeInOut",
          }}
        >
          <Img src={girl1} alt="" />
          <MysteryWrapper
            variants={MysteryWrapperAnimate}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            {/* <StoryCaption>Lorem Ipsum</StoryCaption> */}
            <StoryText>
              Your interest in us and our project is our pride. To serve you
              better and reward you for your support we devised a fun game for
              you. There are various mystery codes hidden all over our website,
              instagram and twitter handles. All you have to do is stay active
              and find the code. You can add the code while minting your
              favorite sneaker and get rewards like Eth and free NFTs. There are
              50 codes to be explored and all the codes with the person who used
              it first will be updated in this space. Don't share your code with
              anyone else as each code can be used only once. Happy Hunting.
            </StoryText>
          </MysteryWrapper>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default MysteryCode;
