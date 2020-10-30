import React, { useState } from "react";
import styled from "styled-components";
import "./"
// import ReactPlayer from "react-player/youtube";

const IntroPage = () => {
  //   const [settings, setSettings] = useState({
  //     url: "https://youtu.be/eAHgoFSnwSs",
  //     pip: false,
  //     playing: true,
  //     controls: false,
  //     light: false,
  //     volume: 0.8,
  //     muted: false,
  //     played: 0,
  //     loaded: 1,
  //     duration: 0,
  //     playbackRate: 1.0,
  //     loop: false,
  //   });

  function onYouTubeIframeAPIReady() {
    var player;

    player = new YT.Player("YouTubeBackgroundVideoPlayer", {
      videoId: "{$https://youtu.be/eAHgoFSnwSs}", // YouTube Video ID
      width: 1280, // Player width (in px)
      height: 720, // Player height (in px)
      playerVars: {
        playlist: "{$https://youtu.be/eAHgoFSnwSs}",
        autoplay: 1, // Auto-play the video on load
        autohide: 1,
        disablekb: 1,
        controls: 0, // Hide pause/play buttons in player
        showinfo: 0, // Hide the video title
        modestbranding: 1, // Hide the Youtube Logo
        loop: 1, // Run the video in a loop
        fs: 0, // Hide the full screen button
        autohide: 0, // Hide video controls when playing
        rel: 0,
        enablejsapi: 1,
      },

      events: {
        onReady: function (e) {
          e.target.mute();

          e.target.setPlaybackQuality("hd1080");
        },

        onStateChange: function (e) {
          if (e && e.data === 1) {
            var videoHolder = document.getElementById("home-banner-box");

            if (videoHolder && videoHolder.id) {
              videoHolder.classList.remove("loading");
            }
          } else if (e && e.data === 0) {
            e.target.playVideo();
          }
        },
      },
    });
  }

  return (
    <Wrapper>
      <Holder>
        <section id="home-banner-box" className="home-banner loading">
          <div
            className="image video-slide"
            style="background-image: url($ImageURL)"
          >
            <div className="video-background">
              <div
                className="video-foreground"
                id="YouTubeBackgroundVideoPlayer"
              ></div>
            </div>
          </div>
        </section>
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
