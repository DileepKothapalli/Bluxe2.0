import React from "react";
import { Container } from "react-bootstrap";
import {
  BodyContainer,
  Div,
  HeadingContainer,
  Img,
  StoryCaption,
  StoryText,
  MysteryHeading,
  MysteryWrapper,
} from "./MysteryCodeElements";

import {
  StaggerContainer,
  MysteryCaptionAnimate,
  MysteryHeadingAnimate,
  MysteryWrapperAnimate,
  VideoAnimate,
} from "./MysteryCodeFramer";
import { useScroll } from "../UseScroll.js";

const MysteryCode = () => {
  const [element, controls] = useScroll(0.7);
  const [element1, controls1] = useScroll(0.7);
  const [element2, controls2] = useScroll(0.4);
  const [element3, controls3] = useScroll(0.4);
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
          <MysteryWrapper
            variants={MysteryWrapperAnimate}
            transition={{
              duration: 1,
              delay: 0.5,
              bounce: 1.3,
              ease: "easeInOut",
            }}
          >
            <StoryCaption>Lorem Ipsum</StoryCaption>
            <StoryText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br /> <br />
              Turpis tincidunt id aliquet risus feugiat in. Tellus rutrum tellus
              pellentesque eu tincidunt tortor aliquam nulla. Dignissim diam
              quis enim lobortis scelerisque fermentum dui faucibus. Hendrerit
              gravida rutrum quisque non tellus orci ac auctor. Porta lorem
              mollis aliquam ut porttitor. Fames ac turpis egestas integer. In
              nulla posuere sollicitudin aliquam ultrices sagittis orci. Cursus
              eget nunc scelerisque viverra mauris in aliquam sem. Sodales ut eu
              sem integer vitae justo eget magna fermentum. Odio ut sem nulla
              pharetra diam. Nunc lobortis mattis aliquam faucibus purus. Sem et
              tortor consequat id porta nibh venenatis cras sed. Auctor eu augue
              ut lectus. Nisl vel pretium lectus quam id.
              <br /> <br /> Aenean sed adipiscing diam donec adipiscing
              tristique risus. Vel pharetra vel turpis nunc eget lorem dolor
              sed. Feugiat scelerisque varius morbi enim nunc. Feugiat
              scelerisque varius morbi enim nunc faucibus a pellentesque.
              Pharetra vel turpis nunc eget lorem dolor sed. Vestibulum sed arcu
              non odio euismod lacinia.
            </StoryText>
          </MysteryWrapper>
        </BodyContainer>
      </Container>
    </Div>
  );
};

export default MysteryCode;
