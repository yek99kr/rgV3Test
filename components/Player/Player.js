import dynamic from "next/dynamic";
import { useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import { BsPlayFill } from "react-icons/bs";
import { TbRectangle } from "react-icons/tb";
import { FiVolume2 } from "react-icons/fi";
import { FiVolumeX } from "react-icons/fi";
import { useState, useEffect } from "react";

const Player = ({ url, ratio }) => {
  const [hover, setHover] = useState(false);

  const [isPlay, setIsPlay] = useState(true);
  const [muted, setMuted] = useState(true);

  const playerRef = useRef();

  const [player, setPlayer] = useState({
    url: null,
    playing: true,
    controls: false,
    muted: true,
    autoplay: true,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    visible: 0,
  });

  const handlePlayPause = function () {
    // setPlayer({ ...player, playing: !player.playing });
    setIsPlay(!isPlay);
  };

  const handleMuted = () => {
    setMuted(!muted);
  };

  const handleSeekMouseDown = (e) => {
    setPlayer({ ...player, seeking: true });
  };

  const handleSeekChange = (e) => {
    setPlayer({ ...player, played: parseFloat(e.target.value) });
  };

  const handleSeekMouseUp = (e) => {
    setPlayer({ ...player, seeking: false });
    playerRef.seekTo(parseFloat(e.target.value));
    // console.log(playerRef, playerRef.current.retry.seekTo, playerRef.onSeek);
    // playerRef.seekTo(0);
    // playerRef.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
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
        ref={playerRef}
        className="absolute rounded"
        width="100%"
        height="100%"
        url={"https://vimeo.com/772598080/2567ba5b25"}
        volume={1}
        playIcon={<></>}
        playing={isPlay}
        loop={true}
        muted={player.muted}
        onProgress={handleProgress}
        onSeek={(e) => console.log("onSeek", e)}
      ></ReactPlayer>

      <div
        className={`absolute w-full h-full notvisible ${hover && "visible"}`}
        onClick={handlePlayPause}
      ></div>

      {!isPlay && (
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
        {/* <input
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={player.played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
        /> */}

        {/* <TbRectangle
          onClick={handleFullscreen}
          className="w-[2.5vw] h-[2.5vw] text-white"
        /> */}

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
