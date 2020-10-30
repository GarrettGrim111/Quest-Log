import React, { useState } from "react";
import styled from "styled-components";

import ReactPlayer from "react-player/youtube";

const IntroPage = () => {
  const [settings, setSettings] = useState({
    url: "https://youtu.be/eAHgoFSnwSs",
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 1,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  });

  return (
    <Wrapper>
      <Holder>
        <ReactPlayer
          url={settings.url}
          width="100%"
          height="100%"
          controls="0"
          loop="1"
          loaded={settings.loaded}
          playing={settings.playing}
          //   disablekb="1"
          // controls="0"
          //   modestbranding
          className="reactPlayer"
        />
      </Holder>
      <Entry>Enter on Click</Entry>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

const Entry = styled.span`
  position: absolute;
  color: white;
  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

const Holder = styled.div`
  /* position: absolute; */

  .reactPlayer {
    background: #000;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -99;
  }

  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

export default IntroPage;
