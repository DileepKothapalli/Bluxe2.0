import React from "react";
import { Div, Img, Imgdiv } from "./ArtworkElements";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import shoe1 from "../../images/shoe1.jpeg";
import shoe2 from "../../images/shoe2.jpeg";
import shoe3 from "../../images/shoe3.jpeg";
import shoe4 from "../../images/shoe4.jpeg";
import shoe5 from "../../images/shoe5.jpeg";

const Artwork = () => {
  return (
    <Div id="artwork">
      <Carousel transitionTime={500} autoPlay>
        <Imgdiv>
          <Img src={shoe1} />
          <p className="legend">Shoe 1</p>
        </Imgdiv>
        <Imgdiv>
          <Img src={shoe2} />
          <p className="legend">Shoe 2</p>
        </Imgdiv>
        <Imgdiv>
          <Img src={shoe3} />
          <p className="legend">Shoe 3</p>
        </Imgdiv>
        <Imgdiv>
          <Img src={shoe4} />
          <p className="legend">Shoe 4</p>
        </Imgdiv>
        <Imgdiv>
          <Img src={shoe5} />
          <p className="legend">Shoe 5</p>
        </Imgdiv>
      </Carousel>
    </Div>
  );
};

export default Artwork;
