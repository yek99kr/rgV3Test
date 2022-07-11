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
    volume: 0.8,
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
      className={`relative grid row justify-center content-center w-full aspect-video rounded opacity-[${player.visible}]  transition duration-200`}
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

      <div className="absolute w-full h-full" onClick={handlePlayPause}></div>
      {/* {hover && ( */}
      <>
        {!player.playing && (
          <BsPlayFill
            onClick={handlePlayPause}
            className="relative w-[8vw] h-[8vw] text-white"
          />
        )}

        <div className="absolute bottom-0">
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
      </>
      {/* )} */}
    </div>
  );
};

export default Player;
