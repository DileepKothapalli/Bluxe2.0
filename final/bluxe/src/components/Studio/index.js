import React, { useRef, useEffect, useState } from "react";

import {
  BodyContainer,
  Div,
  Container,
  HeadingContainer,
  StudioHeading,
  StudioWrapper,
  Video,
  StoryText,
  Storyp,
} from "./StudioElements";

import {
  StaggerContainer,
  StudioHeadingAnimate,
  StudioWrapperAnimate,
} from "./StudioFramer";

import nakedMan from "../../images/man.webm";

import { useScroll } from "../UseScroll.js";

const Studio = () => {
  const [element, controls] = useScroll(0.1);
  const [element1, controls1] = useScroll(0.7);
  const [element2, controls2] = useScroll(0.1);
  const [element3, controls3] = useScroll(0.4);
  return (
    <Div id="studio">
      <Container>
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
              delay: 0.2,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            <StoryText>
              Our logo symbolises <Storyp> ‘The naked man’ </Storyp>. Change is
              the very core of evolution and without it all creatures would look
              alike. We evolved from animals to human and developed into a
              social animal. Going back, we were naked being without resources
              and knowledge of covering or dressing. But as truly said, its
              neither the strongest nor the most intelligent which survives but
              the one who is most adaptable to the change.
              <br /> <br /> Human started with wearing leaves, shells, fur to
              animal pelts. This change was initially to protect oneselves from
              cold and heat but slowly it defined their culture, tradition,
              their society and soon it became the act of defining their class
              and giving out style statement.
              <br /> <br /> Our next advancement is metaverse, a virtual reality
              space. Bluxe Studio is carrying the real-time evolution of luxury
              wearables to metaverse. Our first collection is of shoes, which
              doesnt only function as vesture but also come with rare powers.{" "}
              <br /> <br /> To evolve is to develop gradually but fierceful like
              from bare foot to shoes with superpower. This is really exciting.
              And to mark the rising and coming of our brand we will be hosting
              ‘The Naked Man’ festival disrupting the digital fashion industry.
            </StoryText>
          </StudioWrapper>

          <Video loop autoPlay muted>
            <source src={nakedMan} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default Studio;
