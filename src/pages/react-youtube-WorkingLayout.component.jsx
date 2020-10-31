// version with youtube source as background ... option for later development



// import React from "react";
// import YouTube from "react-youtube";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const Solo = () => {
//   //  const handleClicked = () => {};

//   const opts = {
//     height: "720",
//     width: "1280",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       playlist: "7N5ixFVk5J4",
//       autoplay: 1,
//       autohide: 1,
//       disablekb: 1,
//       controls: 0,
//       modestbranding: 1,
//       enablejsapi: 1,
//       fs: 0,
//       loop: 1,
//       rel: 0,
//       showinfo: 0,
//       mute: 0,
//     },
//   };

//   return (
//     <Link to="/main-quest">
//       <Wrapper
//       // oncClick={handleClicked}
//       >
//         <PlayerWrapper>
//           <YouTube
//             videoId="7N5ixFVk5J4"
//             className="player"
//             opts={opts}
//             onReady={() => _onReady}
//           />
//         </PlayerWrapper>
//         <Entry>Enter on Click</Entry>
//       </Wrapper>
//     </Link>
//   );

//   function _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// };

// const Wrapper = styled.div``;

// const PlayerWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 0;
//   padding-top: 56.25%;
//   width: 100%;
//   -webkit-transform: translateY(-50%);
//   -ms-transform: translateY(-50%);
//   transform: translateY(-50%);
//   -webkit-transition: 2s opacity ease;
//   transition: 2s opacity ease;
//   opacity: 1;

//   .player {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     pointer-events: none;

//     /* position: absolute;
//     left: 50%;
//     top: 50%;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transform: translate(-50%, -50%);
//     z-index: -1; */
//   }
// `;

// const Entry = styled.span`
//   position: absolute;
//   left: 45%;
//   top: 50%;
//   font-size: 25px;
//   color: white;
//   z-index: 99;
//   /* @media (max-width: 755px) {
//   display: flex;
//   justify-content: space-around;
// } */
// `;

// export default Solo;
