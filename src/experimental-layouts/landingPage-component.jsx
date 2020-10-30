import React from "react";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <VideoBackground>
      <VideoForeground>
        {/* <iframe
          src="https://www.youtube.com/embed/7N5ixFVk5J4"
          frameborder="0"
          autoplay="1"
          allowfullscreen
          title="background"
          disablekb="1"
          controls="0"
          modestbranding
        ></iframe> */}
        <iframe
          src="https://www.youtube.com/embed/7N5ixFVk5J4"
          frameborder="0"
          autoplay
          title="background"
        ></iframe>
        ;
      </VideoForeground>

      <Entry>Enter on Click</Entry>
    </VideoBackground>
  );
};

const VideoBackground = styled.div`
  background: #000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;

  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

const VideoForeground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

const Entry = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 33%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 1rem;
  font-family: Avenir, Helvetica, sans-serif;
  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

export default LandingPage;
