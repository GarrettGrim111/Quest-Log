import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HtmlLayout = () => {
  return (
    <>
      <Link to="/main-quest">
        <Wrapper>
      

          <video
            className="layout"
            muted="true"
            autoplay="true"
            loop="true"
            src="./assets/video-for-background/layout-short Hd.mp4"
            poster="./assets/video-for-background/picture.png"
            type="video/mp4"
          />

          <Entry>Enter on Click</Entry>
        </Wrapper>
      </Link>
    </>
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
  display: flex;
  justify-content: center;
  align-items: center;
  

  .layout {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    background: url("./assets/video-for-background/static-layout.jpg") center
      center / cover no-repeat;
  }
`;

const Entry = styled.span`
  font-size: 25px;
  color: silver;
  text-decoration: none;

  -webkit-animation: fadeinout 2s linear forwards;
  animation: fadeinout 2s linear infinite;
  opacity: 0;

  @-webkit-keyframes fadeinout {
    50% {
      opacity: 1;
    }
  }

  @keyframes fadeinout {
    50% {
      opacity: 1;
    }
  }
`;

export default HtmlLayout;
