import { useEffect } from "react";
import Plyr, { SourceInfo, Options } from "plyr";

import "plyr/dist/plyr.css";

const usePlyr = (id, sources, opts) => {
  useEffect(() => {
    const el = document.getElementById(id);
    const player = new Plyr(el, {
      autopause: false,
      autoplay: true,
      loop: { active: false },
      muted: true,
    });
    player.source = sources;

    return () => player.destroy();
  }, [sources, opts]);
};

// use
const PlayerUwave = () => {
  const sources = {
    type: "video",

    sources: [
      {
        src: "https://player.vimeo.com/video/772598080?h=2567ba5b25&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autopause=0&muted=1?background=1",
        provider: "vimeo",
      },
    ],
  };

  usePlyr("plyr", sources);

  return <video autopause={false} id="plyr" />;
};
export default PlayerUwave;

// import dynamic from "next/dynamic";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// import React, { Component } from "react";

// class PlayerUwave extends Component {
//   state = {
//     url: "https://vimeo.com/90509568",
//     pip: false,
//     playing: true,
//     controls: false,
//     light: false,
//     volume: 0.8,
//     muted: true,
//     played: 0,
//     loaded: 0,
//     duration: 0,
//     playbackRate: 1.0,
//     loop: true,
//   };

//   load = (url) => {
//     this.setState({
//       url,
//       played: 0,
//       loaded: 0,
//       pip: false,
//     });
//   };

//   handlePlayPause = () => {
//     this.setState({ playing: !this.state.playing });
//   };

//   handleStop = () => {
//     this.setState({ url: null, playing: false });
//   };

//   handleToggleControls = () => {
//     const url = this.state.url;
//     this.setState(
//       {
//         controls: !this.state.controls,
//         url: null,
//       },
//       () => this.load(url)
//     );
//   };

//   handleToggleLight = () => {
//     this.setState({ light: !this.state.light });
//   };

//   handleToggleLoop = () => {
//     this.setState({ loop: !this.state.loop });
//   };

//   handleVolumeChange = (e) => {
//     this.setState({ volume: parseFloat(e.target.value) });
//   };

//   handleToggleMuted = () => {
//     this.setState({ muted: !this.state.muted });
//   };

//   handleSetPlaybackRate = (e) => {
//     this.setState({ playbackRate: parseFloat(e.target.value) });
//   };

//   handleOnPlaybackRateChange = (speed) => {
//     this.setState({ playbackRate: parseFloat(speed) });
//   };

//   handleTogglePIP = () => {
//     this.setState({ pip: !this.state.pip });
//   };

//   handlePlay = () => {
//     console.log("onPlay");
//     this.setState({ playing: true });
//   };

//   handleEnablePIP = () => {
//     console.log("onEnablePIP");
//     this.setState({ pip: true });
//   };

//   handleDisablePIP = () => {
//     console.log("onDisablePIP");
//     this.setState({ pip: false });
//   };

//   handlePause = () => {
//     console.log("onPause");
//     this.setState({ playing: false });
//   };

//   handleSeekMouseDown = (e) => {
//     this.setState({ seeking: true });
//   };

//   handleSeekChange = (e) => {
//     this.setState({ played: parseFloat(e.target.value) });
//   };

//   handleSeekMouseUp = (e) => {
//     this.setState({ seeking: false });
//     this.player.current.seekTo(parseFloat(e.target.value));
//   };

//   handleProgress = (state) => {
//     console.log("onProgress", state);
//     // We only want to update time slider if we are not currently seeking
//     if (!this.state.seeking) {
//       this.setState(state);
//     }
//   };

//   handleEnded = () => {
//     console.log("onEnded");
//     this.setState({ playing: this.state.loop });
//   };

//   handleDuration = (duration) => {
//     console.log("onDuration", duration);
//     this.setState({ duration });
//   };

//   //   handleClickFullscreen = () => {
//   //     screenfull.request(findDOMNode(this.player));
//   //   };

//   ref = (player) => {
//     this.player = player;
//   };

//   render() {
//     const {
//       url,
//       playing,
//       controls,
//       light,
//       volume,
//       muted,
//       loop,
//       played,
//       loaded,
//       duration,
//       playbackRate,
//     } = this.state;
//     const SEPARATOR = " · ";

//     return (
//       <div className="app">
//         <section className="section">
//           <h1>ReactPlayer Demo</h1>
//           <div className="player-wrapper">
//             <ReactPlayer
//               ref={this.ref}
//               className="react-player"
//               width="100%"
//               height="100%"
//               url={url}
//               playing={playing}
//               controls={controls}
//               loop={loop}
//               playbackRate={playbackRate}
//               volume={volume}
//               muted={muted}
//               onPlay={this.handlePlay}
//               onEnablePIP={this.handleEnablePIP}
//               onDisablePIP={this.handleDisablePIP}
//               onPause={this.handlePause}
//             />
//           </div>

//           <div className="z-[10000]">
//             <input
//               type="range"
//               min={0}
//               max={0.999999}
//               step="any"
//               value={played}
//               onMouseDown={this.handleSeekMouseDown}
//               onChange={this.handleSeekChange}
//               onMouseUp={this.handleSeekMouseUp}
//             />
//           </div>

//           <table>
//             <tbody>
//               <tr>
//                 <th>Controls</th>
//                 <td>
//                   <button onClick={this.handleStop}>Stop</button>
//                   <button onClick={this.handlePlayPause}>
//                     {playing ? "Pause" : "Play"}
//                   </button>
//                   {/* <button onClick={this.handleClickFullscreen}>
//                     Fullscreen
//                   </button> */}
//                 </td>
//               </tr>

//               <tr>
//                 <th>Volume</th>
//                 <td>
//                   <input
//                     type="range"
//                     min={0}
//                     max={1}
//                     step="any"
//                     value={volume}
//                     onChange={this.handleVolumeChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <th>
//                   <label htmlFor="muted">Muted</label>
//                 </th>
//                 <td>
//                   <input
//                     id="muted"
//                     type="checkbox"
//                     checked={muted}
//                     onChange={this.handleToggleMuted}
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </section>
//       </div>
//     );
//   }
// }

// export default PlayerUwave;
