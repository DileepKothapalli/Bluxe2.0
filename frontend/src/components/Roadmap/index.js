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

  const [mouse1, setMouse1] = useState(0);
  const [mouse2, setMouse2] = useState(0);
  const [mouse3, setMouse3] = useState(0);
  const [mouse4, setMouse4] = useState(0);
  const [mouse5, setMouse5] = useState(0);

  function handleClick1() {
    if (mouse1) {
      setMouse1(0);
    } else {
      setMouse1(1);
    }
    setMouse2(0);
    setMouse3(0);
    setMouse4(0);
    setMouse5(0);
    console.log("mouse1", mouse1);
  }
  function handleClick2() {
    setMouse1(0);
    if (mouse2) {
      setMouse2(0);
    } else {
      setMouse2(1);
    }
    setMouse3(0);
    setMouse5(0);
    setMouse4(0);
  }
  function handleClick3() {
    setMouse1(0);
    setMouse2(0);
    if (mouse3) {
      setMouse3(0);
    } else {
      setMouse3(1);
    }
    setMouse5(0);
    setMouse4(0);
  }
  function handleClick4() {
    setMouse1(0);
    setMouse2(0);
    setMouse3(0);
    if (mouse4) {
      setMouse4(0);
    } else {
      setMouse4(1);
    }
    setMouse5(0);
  }
  function handleClick5() {
    setMouse1(0);
    setMouse2(0);
    setMouse3(0);
    setMouse4(0);
    if (mouse5) {
      setMouse5(0);
    } else {
      setMouse5(1);
    }
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
              onClick={handleClick1}
            >
              <RoadmapLineTop>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLineTop>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading mousenum={mouse1}>
                    Announcement and Giveaway
                  </RoadmapTextHeading>
                  <RoadmapP mousenum={mouse1}>
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
              onClick={handleClick2}
            >
              <RoadmapLine>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLine>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading mousenum={mouse2}>
                    Genisis Bluxe 500 Sneakers
                  </RoadmapTextHeading>
                  <RoadmapP mousenum={mouse2}>
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
              onClick={handleClick3}
            >
              <RoadmapLine>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLine>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading mousenum={mouse3}>
                    Grand Bluxe 1000 Sneakers
                  </RoadmapTextHeading>
                  <RoadmapP mousenum={mouse3}>
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
              onClick={handleClick4}
            >
              <RoadmapLine>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLine>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading mousenum={mouse4}>
                    Launch of Bluxe store in Wingx World
                  </RoadmapTextHeading>
                  <RoadmapP mousenum={mouse4}>
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
              onClick={handleClick5}
            >
              <RoadmapLineBottom>
                <RoadmapDotFixed></RoadmapDotFixed>
                <RoadmapDot></RoadmapDot>
              </RoadmapLineBottom>
              <RoadmapCardRight>
                <RoadmapCardDiv>
                  <RoadmapTextHeading mousenum={mouse5}>
                    Announcing first Bluxe Fashion week
                  </RoadmapTextHeading>
                  <RoadmapP mousenum={mouse5}>Need to be written </RoadmapP>
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
