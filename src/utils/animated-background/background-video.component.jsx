import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

// import {
//   RiPauseCircleLine,
//   RiPlayCircleLine,
//   RiVolumeMuteLine,
//   RiVolumeUpLine,
// } from "react-icons/ri";

// import { CustomButton } from "../../styles";

const BackgroundVideo = () => {
  // const [muted, setMuted] = useState(false);
  // const [playing, setPlaying] = useState(false);

  // const handlePlayPause = () => setPlaying(!playing);
  // const handleToggleMuted = () => setMuted(!muted);

  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      playlist: "WTWUCDgz1cg",
      autoplay: 1,
      autohide: 1,
      disablekb: 1,
      controls: 0,
      mute: 1,
      modestbranding: 1,
      enablejsapi: 1,
      fs: 0,
      loop: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <Wrapper>
      <PlayerWrapper>
        <YouTube videoId="WTWUCDgz1cg" className="player" opts={opts} />
      </PlayerWrapper>

      {/* <ButtonHolder>
        <CustomButton onClick={_onReady} >
          {playing ? <RiPauseCircleLine /> : <RiPlayCircleLine />}
        </CustomButton>
        <CustomButton onClick={handleToggleMuted}>
          {muted ? <RiVolumeUpLine /> : <RiVolumeMuteLine />}
        </CustomButton>
      </ButtonHolder> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
  z-index: -80;

  /* @media (max-width: 755px) {
  display: flex;
  justify-content: space-around;
} */
`;

const PlayerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  padding-top: 56.25%;
  width: 100%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 2s opacity ease;
  transition: 2s opacity ease;
  opacity: 1;

  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

// const ButtonHolder = styled.div`
//   /* position: absolute;
//   top: 20px;
//   right: 20px; */

//   /* @media (max-width: 755px) {
//   display: flex;
//   justify-content: space-around;
// } */
// `;

export default BackgroundVideo;

// https://youtu.be/WTWUCDgz1cg
