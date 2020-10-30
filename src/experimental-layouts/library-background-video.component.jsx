// import React from 'react'
// import '../assets/scss/main.scss'
// import Helmet from 'react-helmet'
// import YouTube from 'react-youtube';



// function _onReady(event) {
//     // access to player in all event handlers via event.target
//     // event.target.mute();
//   };
  
//   function _onEnd(event) {
//     event.target.playVideo();
//   };
  
//   render() {
//     const siteTitle = this.props.data.site.siteMetadata.title
//     const siteDescription = this.props.data.site.siteMetadata.description
  
//     const videoOptions = {
//       playerVars: { // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//         controls: 0,
//         rel: 0,
//         showinfo: 0
//       }
//     };
  
//     return (
//       <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
//         <Helmet>
//             <title>{siteTitle}</title>
//             <meta name="description" content={siteDescription} />
//         </Helmet>
  
//         <div id="wrapper">
  
//           <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
//           <Main
//             isArticleVisible={this.state.isArticleVisible}
//             timeout={this.state.timeout}
//             articleTimeout={this.state.articleTimeout}
//             article={this.state.article}
//             onCloseArticle={this.handleCloseArticle}
//           />
//           <Footer timeout={this.state.timeout} />
  
//         </div>
//         {/*<div id="bg"></div>*/}
  
//         <div className="video-background">
//           <div className="video-foreground">
//             <YouTube
//               videoId="Z6FPJOgfCkc"
//               opts={videoOptions}
//               className="video-iframe"
//               onReady={this._onReady}
//               onEnd={this._onEnd}
//             />
//           </div>
//         </div>
//       </div>
//     )
//   }