import Image from "next/image";

const DetailMedia1X1 = ({ slice }) => {
  // {`${slice.primary.media.url.slice(6)}?quality=1080p&loop=1`}
  return (
    <>
      {slice.variation !== "2Rows" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media1.url.slice(
                    6
                  )}?quality=1080p&loop=1?background=1${
                    slice.primary.media1Autoplay
                      ? "&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <Image
                  src={slice.primary.media1.url}
                  alt={slice.primary.media1.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}

          {slice.primary.media2.link_type === "Web" ? (
            <>
              <div className="col-start-3 w-[94vw] md:w-[31vw] rounded aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media2.url.slice(
                    6
                  )}?quality=1080p&loop=1&?background=1${
                    slice.primary.media2Autoplay
                      ? "&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="relative col-start-3 w-[94vw] md:w-[31vw] rounded aspect-square">
                <Image
                  src={slice.primary.media2.url}
                  alt={slice.primary.media2.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}

          {slice.primary.media3.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[31vw] relative rounded md:place-self-end md:right-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media3.url.slice(
                    6
                  )}?quality=1080p&loop=1?background=1${
                    slice.primary.media3Autoplay
                      ? "&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="relative col-start-3 md:col-start-5 w-[94vw] md:w-[31vw]  rounded md:place-self-end md:right-[2vw] aspect-square">
                <Image
                  src={slice.primary.media3.url}
                  alt={slice.primary.media3.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[47.1vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media1.url.slice(
                    6
                  )}?quality=1080p&loop=1?background=1${
                    slice.primary.media1Autoplay
                      ? "&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[47.1vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <Image
                  src={slice.primary.media1.url}
                  alt={slice.primary.media1.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}

          {slice.primary.media2.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[47.1vw] relative rounded md:place-self-end md:right-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media2.url.slice(
                    6
                  )}?quality=1080p&loop=1&?background=1${
                    slice.primary.media2Autoplay
                      ? "&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[47.1vw] relative rounded md:place-self-end md:right-[2vw] aspect-square">
                <Image
                  src={slice.primary.media2.url}
                  alt={slice.primary.media2.alt}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DetailMedia1X1;
