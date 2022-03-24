import React from "react";
import { Div, Video } from "./PreloaderElements";

import nakedMan from "../../images/man.webm";

const Preloader = () => {
  return (
    <Div>
      <Video loop autoPlay muted>
        <source src={nakedMan} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </Div>
  );
};

export default Preloader;
