import React from "react";
import Link from "next/link";

const MultiPlayer = () => {
  // 16
  const src = [
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
    "//player.vimeo.com/video/768336752?h=b52ef1cadf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0",
  ];
  //   https://vimeo.com/766239520
  return (
    <div className="col-start-3 md:p-0 w-[90vw] aspect-video">
      <div className="grid grid-rows-4 grid-flow-col gap-0">
        {src.map((x, i) => (
          <div key={i}>
            <iframe
              onClick={() => {
                console.log("a");
              }}
              className="w-[100%] aspect-video"
              src={
                "https://player.vimeo.com/video/767416006?h=f1ba9bbd02&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&controls=0&loop=1"
              }
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiPlayer;
