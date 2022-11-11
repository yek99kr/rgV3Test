import Image from "next/image";

const DetailMediaMix = ({ slice }) => {
  return (
    <>
      {slice.variation === "3411" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[37.5vw] relative rounded md:place-self-start md:left-[5vw] aspect-[3/4] ">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}&loop=1&autoplay=1&muted=1?background=1${
                  slice.primary.media1Controls === false ? "&controls=0" : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[37.5vw] relative rounded md:place-self-start md:left-[5vw] aspect-[3/4] ">
              <Image
                src={slice.primary.media1.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}

          {slice.primary.media2.link_type === "Web" ? (
            <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[50vw] relative md:place-self-end md:right-[5vw] aspect-square ">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}&loop=1&autoplay=1&muted=1?background=1${
                  slice.primary.media2Controls === false ? "&controls=0" : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[50vw] relative md:place-self-end md:right-[5vw] aspect-square ">
              <Image
                src={slice.primary.media2.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
        </>
      ) : slice.variation === "4545" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[43.6vw] relative md:place-self-start md:left-[5vw] aspect-[4/5] ">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}&loop=1&autoplay=1&muted=1?background=1${
                  slice.primary.media1Controls === false ? "&controls=0" : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[43.6vw] relative md:place-self-start md:left-[5vw] aspect-[4/5] ">
              <Image
                src={slice.primary.media1.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
          {slice.primary.media2.link_type === "Web" ? (
            <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[43.6vw] relative md:place-self-end md:right-[5vw] aspect-[4/5]">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}&loop=1&autoplay=1&muted=1?background=1${
                  slice.primary.media2Controls === false ? "&controls=0" : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[43.6vw] relative md:place-self-end md:right-[5vw] aspect-[4/5]">
              <Image
                src={slice.primary.media2.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
        </>
      ) : slice.variation === "11Filter" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-1 w-[90vw] md:w-[50vw] relative rounded md:place-self-start md:left-[5vw] aspect-square`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}&loop=1&autoplay=1&muted=1?background=1${
                  slice.primary.media1Controls === false ? "&controls=0" : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-1 w-[90vw] md:w-[50vw] relative rounded md:place-self-start md:left-[5vw] aspect-square`}
            >
              <Image
                src={slice.primary.media1.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
          {slice.primary.media2.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-5 w-[70vw] md:w-[28.5vw] relative rounded md:place-self-end md:right-[8vw] aspect-[9/16]`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}&loop=1&autoplay=1&muted=1?background=1${
                  slice.primary.media2Controls === false ? "&controls=0" : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-5 w-[70vw] md:w-[28.5vw] relative rounded md:place-self-end md:right-[8vw] aspect-[9/16]`}
            >
              <Image
                src={slice.primary.media2.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
        </>
      ) : (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-1 w-[90vw] md:w-[55.9vw] relative rounded md:place-self-start md:left-[5vw] aspect-square`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media1.url.slice(
                  6
                )}&loop=1&autoplay=1&muted=1?background=1${
                  slice.primary.media1Controls === false ? "&controls=0" : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-1 w-[90vw] md:w-[55.9vw] relative rounded md:place-self-start md:left-[5vw] aspect-square`}
            >
              <Image
                src={slice.primary.media1.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
          {slice.primary.media2.link_type === "Web" ? (
            <div
              className={`col-start-3 md:col-start-5 w-[90vw] md:w-[31.5vw] relative rounded md:place-self-end md:right-[5vw] aspect-[9/16]`}
            >
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media2.url.slice(
                  6
                )}&loop=1&autoplay=1&muted=1?background=1${
                  slice.primary.media2Controls === false ? "&controls=0" : ""
                }`}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div
              className={`col-start-3 md:col-start-5 w-[90vw] md:w-[31.5vw] relative rounded md:place-self-end md:right-[5vw] aspect-[9/16]`}
            >
              <Image
                src={slice.primary.media2.url}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DetailMediaMix;

// balenciaga=50,28 right-5vw

// {slice.primary.media1.link_type === "Web" ? (
//   <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[50vw] relative rounded md:place-self-start md:left-[5vw] aspect-square">
//     <iframe
//       className="w-[100%] h-[100%]"
//       src={`${slice.primary.media1.url.slice(
//         6
//       )}&loop=1&autoplay=1&muted=1?background=1${
//         slice.primary.media1Controls === false ? "&controls=0" : ""
//       }`}
//       allowFullScreen
//     ></iframe>
//   </div>
// ) : (
//   <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[50vw] relative rounded md:place-self-start md:left-[5vw] aspect-square">
//     <Image
//       src={slice.primary.media1.url}
//       //   alt={thumbnails[0]}
//       priority={true}
//       loading="eager"
//       layout="fill"
//       objectFit="cover"
//     ></Image>
//   </div>
// )}
// {slice.primary.media2.link_type === "Web" ? (
//   <div className="col-start-3 md:col-start-5 w-[70vw] md:w-[29vw] relative rounded md:place-self-end md:right-[8vw] aspect-[9/16]">
//     <iframe
//       className="w-[100%] h-[100%]"
//       src={`${slice.primary.media2.url.slice(
//         6
//       )}&loop=1&autoplay=1&muted=1?background=1${
//         slice.primary.media2Controls === false ? "&controls=0" : ""
//       }`}
//       allowFullScreen
//     ></iframe>
//   </div>
// ) : (
//   <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[29vw] relative rounded md:place-self-end md:right-[8vw] aspect-[9/16]">
//     <Image
//       src={slice.primary.media2.url}
//       //   alt={thumbnails[0]}
//       priority={true}
//       loading="eager"
//       layout="fill"
//       objectFit="cover"
//     ></Image>
//   </div>
// )}

{
  /* <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[55.9vw] relative rounded md:place-self-start md:left-[5vw] aspect-square">
          <iframe
            className="w-[100%] h-[100%]"
            src="//player.vimeo.com/video/767132442?h=d63413b39c&badge=0&autopause=0&player_id=0&app_id=58479/embed"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[31.5vw] relative rounded md:place-self-end md:right-[5vw] aspect-[9/16]">
          <iframe
            className="w-[100%] h-[100%]"
            src="//player.vimeo.com/video/769589096?h=81776fa621&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allowFullScreen
          ></iframe>
        </div> */
}
