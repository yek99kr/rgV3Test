import dynamic from "next/dynamic";
import { useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import { BsPlayFill } from "react-icons/bs";
import { TbRectangle } from "react-icons/tb";
import { FiVolume2 } from "react-icons/fi";
import { FiVolumeX } from "react-icons/fi";
import { useState, useEffect } from "react";

const Player = ({ width, url, ratio }) => {
  const [hover, setHover] = useState(false);

  const [player, setPlayer] = useState({
    url: null,
    playing: true,
    controls: false,
    autoplay: true,
    volume: 1,
    light: true,
    muted: true,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: true,
    visible: 0,
  });

  const playerRef = useRef();

  const handlePlayPause = () => {
    setPlayer({ ...player, playing: !player.playing });
  };
  const handleMuted = () => {
    setPlayer({ ...player, muted: !player.muted });
  };
  const handleFullscreen = (e) => {};

  const handleSeekMouseDown = (e) => {
    setPlayer({ ...player, seeking: true });
  };

  const handleSeekChange = (e) => {
    setPlayer({ ...player, played: parseFloat(e.target.value) });
  };

  const handleSeekMouseUp = (e) => {
    setPlayer({ ...player, seeking: false });
    playerRef.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    // We only want to update time slider if we are not currently seeking
    if (!player.seeking) {
      setPlayer(state);
    }
  };

  return (
    <div
      className={`relative bg-[#eef1f4] grid row justify-center content-center w-full aspect-${ratio} rounded opacity-[${player.visible}] transition duration-200`}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <ReactPlayer
        className="absolute rounded"
        ref={playerRef}
        width="100%"
        height="100%"
        url={url}
        playIcon={<></>}
        playing={player.playing}
        loop={player.loop}
        muted={player.muted}
        // onProgress={handleProgress}
        onReady={(e) => {
          setPlayer({ ...player, visible: 1 });
        }}
      ></ReactPlayer>

      <div
        className={`absolute w-full h-full notvisible ${hover && "visible"}`}
        onClick={handlePlayPause}
      ></div>

      {!player.playing && (
        <BsPlayFill
          onClick={handlePlayPause}
          className="relative w-[8vw] h-[8vw] text-white drop-shadow-md"
        />
      )}

      <div
        className={`absolute bottom-0 drop-shadow-md notvisible ${
          hover && "visible"
        }`}
      >
        <input
          type="range"
          min={0}
          max={0.999999}
          className="w-[80%]"
          step="any"
          // value={played}
          // onMouseDown={this.handleSeekMouseDown}
          // onChange={this.handleSeekChange}
          // onMouseUp={this.handleSeekMouseUp}
        />

        <TbRectangle
          onClick={handleFullscreen}
          className="w-[2.5vw] h-[2.5vw] text-white"
        />

        {!player.muted ? (
          <FiVolume2
            onClick={handleMuted}
            className="w-[2.5vw] h-[2.5vw] text-white"
          />
        ) : (
          <FiVolumeX
            onClick={handleMuted}
            className="w-[2.5vw] h-[2.5vw] text-white"
          />
        )}
      </div>
    </div>
  );
};

export default Player;
