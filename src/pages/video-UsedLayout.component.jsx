import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AnimatedLayout = () => {
  // const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading === true && (
        <Loading>
          <h1>Načítám!</h1>
        </Loading>
      )} */}

      <Link to="/main-quest">
        {/* <VideoWrapper> */}
        <Video autoplay loop>
       
          <source
            src="./assets/video-for-background/edited-layout-long(music).mp4"
            type="video/mp4"
          />
        </Video>
        {/* {loading === false &&  */}
        <Entry>Enter on Click</Entry>
        {/* </VideoWrapper> */}
      </Link>
    </>
  );
};

// const Loading = styled.div`
//   position: absolute;
//   left: 45%;
//   top: 50%;
//   font-size: 25px;
//   color: silver;
// `;

// const VideoWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   overflow: hidden;

//   iframe {
//     width: 100vw;
//     height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
//     min-height: 100vh;
//     min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     pointer-events: none;
//     transform: translate(-50%, -50%);
//   }
// `;

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
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

  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

export default AnimatedLayout;
