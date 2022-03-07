import React, { useRef, useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import {
  BodyContainer,
  Div,
  HeadingCaption,
  HeadingContainer,
  StudioHeading,
  StudioWrapper,
  Video,
  StoryCaption,
  StoryText,
  Img,
} from "./StudioElements";

import {
  StaggerContainer,
  StudioCaptionAnimate,
  StudioHeadingAnimate,
  StudioWrapperAnimate,
  VideoAnimate,
} from "./StudioFramer";

import walk from "../../images/walk.webm";

import { useScroll } from "../UseScroll.js";

const Studio = () => {
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
  var num = Math.ceil(scrollPosition / 3 + 64) % 137;
  var newimg = `images/walk/ezgif-frame-${(num + 1)
    .toString()
    .padStart(3, "0")}.jpg`;
  console.log(newimg);

  const [element, controls] = useScroll(0.7);
  const [element1, controls1] = useScroll(0.7);
  const [element2, controls2] = useScroll(0.4);
  const [element3, controls3] = useScroll(0.4);
  return (
    <Div id="studio">
      <Container>
        {/* <BgImg></BgImg> */}
        <HeadingContainer>
          <StudioHeading
            ref={element}
            variants={StudioHeadingAnimate}
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            PROVENANCE
          </StudioHeading>
          {/* <HeadingCaption
            ref={element1}
            variants={StudioCaptionAnimate}
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
          <StudioWrapper
            variants={StudioWrapperAnimate}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            <StoryCaption>The Story</StoryCaption>
            <StoryText>
              Change is the very core of evolution and without it. all creatures
              would look alike and behave the same way. We evolved from animal
              to human with help of each other and developed into a social
              animal. Tracing back, we were naked being without resources and
              knowledge of covering or dressing. But as truly said, its neither
              the strongest nor the intelligent which survives but the one who
              is most adaptable to the change.
              <br /> <br />
              Human started with wearing leaves, shells, fur to animal pelts.
              This change was initially to protect oneselves from cold and heat
              but slowly it defined their culture, tradition, their society and
              soon it became the act of defining their class and giving out
              style statement.
              <br /> <br /> Our next advancement is metaverse, a virtual reality
              space. Bluxe Studio is carrying the real-time evolution of premium
              shoes and wearables to metaverse. These shoes doesnt only function
              as vesture but also come with rare powers. To evolve is to develop
              gradually but fierceful like from bare foot to shoes with
              superpower. This is really exciting.
            </StoryText>
          </StudioWrapper>

          <Img src={newimg} alt="" />
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default Studio;
