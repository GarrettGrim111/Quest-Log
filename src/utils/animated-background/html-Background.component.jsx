import React from "react";
import styled from "styled-components";

const HtmlBackground = () => {
  return (
    <Wrapper>
      <video
        className="bg"
        muted="true"
        autoplay="true"
        loop="true"
        src="./assets/video-for-background/Bg-shortHd.mp4"
        // src="./assets/video-for-background/Bgv2-short.mp4"
        poster="./assets/video-for-background/static-background.jpg"
        type="video/mp4"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;

  .bg {
    /* position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%; */

    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    background: url("./assets/video-for-background/static-background.jpg")
      center center / cover no-repeat;
  }
`;

export default HtmlBackground;
