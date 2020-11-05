import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AnimatedLayout = () => {
  return (
    <Link to="/main-quest">
      <VimeoWrapper>
        <iframe
          title="landing-layout"
          src="https://player.vimeo.com/video/474116212?background=1&autoplay=1&loop=1&byline=0&title=0"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        ></iframe>
      </VimeoWrapper>

      <Entry>Enter on Click</Entry>
    </Link>
  );
};

const VimeoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  iframe {
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
`;

const Entry = styled.span`
  position: absolute;
  left: 45%;
  top: 50%;
  font-size: 25px;
  color: silver;

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

  /* z-index: 99; */
  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

export default AnimatedLayout;
