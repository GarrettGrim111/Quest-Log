import React, { useState } from "react";
import styled from "styled-components";
import { CustomButton } from "../styles";
import ReactPlayer from "react-player/youtube";
// import { VscUnmute, VscMute } from "react-icons/vsc";
import {
  RiPauseCircleLine,
  RiPlayCircleLine,
  RiVolumeMuteLine,
  RiVolumeUpLine,
} from "react-icons/ri";

const IntroPage = () => {
  const [mute, setMute] = useState(false);
  const [playing, setPlaying] = useState(true);

  const handlePlayPause = () => {
    setPlaying({ playing: !playing });
  };

  const handleToggleMuted = () => {
    setMute({ mute: !mute });
  };

  return (
    <Wrapper>
      <Holder>
        <ReactPlayer
          url="https://youtu.be/eAHgoFSnwSs"
          width="100%"
          height="100%"
        //   playing={playing}
          mute={mute}
        //   autoPlay
          controls={false}
          loop={true}
          //   disablekb="1"
            controls="0"
          //   modestbranding
          className="react-player"
        />
        <CustomButton onClick={ handlePlayPause}>
          {playing ? <RiPauseCircleLine /> : <RiPlayCircleLine />}
        </CustomButton>
        <CustomButton onClick={handleToggleMuted}>
          {mute ? <RiVolumeUpLine /> : <RiVolumeMuteLine />}
        </CustomButton>
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

  .ReactPlayer {

  }

  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

export default IntroPage;
