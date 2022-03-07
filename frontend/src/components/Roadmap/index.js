import React, { useRef, useEffect, useState } from "react";

import {
  Div,
  Container,
  RoadmapWrapper,
  RoadmapLine,
  RoadmapDot,
  RoadmapCardRight,
  RoadmapH2,
  RoadmapP,
  RoadmapDiv,
  RoadmapHeading,
  HeadingContainer,
  HeadingCaption,
  BodyContainer,
  RoadmapLineTop,
  RoadmapDotTop,
  RoadmapLineBottom,
  RoadmapDotBottom,
  RoadmapTextHeading,
  RoadmapCardDiv,
  Video,
  RoadmapDotFixed,
  BgImg,
} from "./RoadmapElement.js";
import walk from "../../images/walk.webm";
import Navbar from "../../components/Navbar/index";

import {
  RoadmapCaptionAnimate,
  RoadmapHeadingAnimate,
  RoadmapWrapperAnimate,
  StaggerContainer,
  VideoAnimate,
} from "../Roadmap/RoadmapFramer";
import { useScroll } from "../UseScroll.js";
import { AboutAnimation } from "../Animation.js";

const Roadmap = () => {
  const [count, setCount] = useState(0);
  const [mouse, setMouse] = useState(0);
  const [prevMouse, setPrevMouse] = useState(-1);
  function handleMouseEnter1() {
    setPrevMouse(mouse);
    setMouse(1);
  }
  function handleMouseEnter2() {
    setPrevMouse(mouse);
    setMouse(2);
  }
  function handleMouseEnter3() {
    setPrevMouse(mouse);
    setMouse(3);
  }
  function handleMouseEnter4() {
    setPrevMouse(mouse);
    setMouse(4);
  }
  function handleMouseEnter5() {
    setPrevMouse(mouse);
    setMouse(5);
  }

  const [element, controls] = useScroll(0.7);
  const [element1, controls1] = useScroll(0.7);
  const [element2, controls2] = useScroll(0.4);
  const [element3, controls3] = useScroll(0.4);

  return (
    <Div id="roadmap">
      <Container>
        {/* <BgImg></BgImg> */}
        <HeadingContainer>
          <RoadmapHeading
            ref={element}
            variants={RoadmapHeadingAnimate}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            ROADMAP
          </RoadmapHeading>
          <HeadingCaption
            ref={element1}
            variants={RoadmapCaptionAnimate}
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
          </HeadingCaption>
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
          <RoadmapWrapper
            variants={RoadmapWrapperAnimate}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            <RoadmapDiv
              x={mouse}
              y={prevMouse}
              onMouseEnter={handleMouseEnter1}
            >
              <RoadmapLineTop>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLineTop>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading>
                    Announcement and Giveaway
                  </RoadmapTextHeading>
                  <RoadmapP>
                    Your support means everything to us. We want to show our
                    love by give-away and air-dropping special Bluxe NFTs. A
                    special privilage will be extended to Bluxe NFT owners as
                    only they can participate in the pre-sale of every batch of
                    Bluxe edition.
                  </RoadmapP>
                </RoadmapCardDiv>
              </RoadmapCardRight>
            </RoadmapDiv>
            <RoadmapDiv
              nice={count}
              x={mouse}
              y={prevMouse}
              id="div2"
              onMouseEnter={handleMouseEnter2}
            >
              <RoadmapLine>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLine>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading>
                    Genisis Bluxe 500 Sneakers
                  </RoadmapTextHeading>
                  <RoadmapP>
                    The first batch of Bluxe is limited and unique early bird
                    catches the worm. This batch will be priced at 0.08 Eth.
                  </RoadmapP>
                </RoadmapCardDiv>
              </RoadmapCardRight>
            </RoadmapDiv>
            <RoadmapDiv
              nice={count}
              x={mouse}
              y={prevMouse}
              onMouseEnter={handleMouseEnter3}
            >
              <RoadmapLine>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLine>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading>
                    Grand Bluxe 1000 Sneakers
                  </RoadmapTextHeading>
                  <RoadmapP>
                    The next prime collection of 1000 Bluxe NFT is distinctive
                    in itself.You can't take your eyes off. This batch will be
                    priced at 0.1 Eth{" "}
                  </RoadmapP>
                </RoadmapCardDiv>
              </RoadmapCardRight>
            </RoadmapDiv>
            <RoadmapDiv
              x={mouse}
              y={prevMouse}
              onMouseEnter={handleMouseEnter4}
            >
              <RoadmapLine>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLine>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading>
                    Launch of Bluxe store in Wingx World
                  </RoadmapTextHeading>
                  <RoadmapP>
                    Several announcements regarding the opening of the bluxe
                    fashion store in the metaverse.{" "}
                  </RoadmapP>
                </RoadmapCardDiv>
              </RoadmapCardRight>
            </RoadmapDiv>
            <RoadmapDiv
              x={mouse}
              y={prevMouse}
              onMouseEnter={handleMouseEnter5}
            >
              <RoadmapLineBottom>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLineBottom>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading>
                    Announcing first Bluxe Fashion week
                  </RoadmapTextHeading>
                  <RoadmapP>Need to be written </RoadmapP>
                </RoadmapCardDiv>
              </RoadmapCardRight>
            </RoadmapDiv>
          </RoadmapWrapper>
          <Video
            variants={VideoAnimate}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
            loop
            autoPlay
            muted
          >
            {/* <source src={shoevideo} type="video/mp4" /> */}
            <source src={walk} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default Roadmap;
