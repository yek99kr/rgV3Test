import React from "react";
import { RichText } from "prismic-reactjs";

const DetailMedia9X16 = ({ slice }) => {
  return (
    <>
      {slice.primary.media.link_type === "Web" ? (
        <>
          <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[29vw] relative rounded md:place-self-start md:left-[5vw] aspect-[9/16]">
            <iframe
              className="w-[100%] h-[100%]"
              src={`${slice.primary.media1.url.slice(6)}&loop=1${
                slice.primary.autoplay1 && "&autoplay=1&muted=1&controls=0"
              }`}
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[29vw] relative rounded md:place-self-start md:left-[5vw] aspect-[9/16]">
            <Image
              src={slice.primary.media1.url}
              //   alt={thumbnails[0]}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </>
      )}

      {slice.primary.media.link_type === "Web" ? (
        <>
          <div className="col-start-3 w-[90vw] md:w-[29vw] rounded aspect-[9/16]">
            <iframe
              className="w-[100%] h-[100%]"
              src={`${slice.primary.media2.url.slice(6)}&loop=1${
                slice.primary.autoplay2 && "&autoplay=1&muted=1&controls=0"
              }`}
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <div className="col-start-3 w-[90vw] md:w-[29vw] rounded aspect-[9/16]">
            <Image
              src={slice.primary.media2.url}
              //   alt={thumbnails[0]}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </>
      )}

      {slice.primary.media.link_type === "Web" ? (
        <>
          <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[29vw] relative rounded md:place-self-end md:right-[5vw] aspect-[9/16]">
            <iframe
              className="w-[100%] h-[100%]"
              src={`${slice.primary.media3.url.slice(6)}&loop=1${
                slice.primary.autoplay3 && "&autoplay=1&muted=1&controls=0"
              }`}
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[29vw] relative rounded md:place-self-end md:right-[5vw] aspect-[9/16]">
            <Image
              src={slice.primary.media3.url}
              //   alt={thumbnails[0]}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </>
      )}
    </>
  );
};

export default DetailMedia9X16;
