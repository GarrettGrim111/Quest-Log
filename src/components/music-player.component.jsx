import React from "react";
import styled from "styled-components";

const MusicPlayer = () => {
  return (
    <PlayerHolder>
      <Player
        src="./assets/sounds/The Witcher 3 Wild Hunt OST - Hunt or Be Hunted.mp3"
        controls
      />
    </PlayerHolder>
  );
};

const PlayerHolder = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const Player = styled.audio`
  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;

export default MusicPlayer;
