import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";

const DetailMedia = ({ slice }) => {
  return (
    <>
      {slice.primary.media.link_type === "Web" ? (
        <>
          <div className="col-start-3 md:p-0 w-[90vw] aspect-video rounded">
            <Vimeo
              responsive
              className="video"
              ligth="true"
              video={slice.primary.media.url}
            />
          </div>
        </>
      ) : (
        <>
          <div className="col-start-3 md:p-0 w-[90vw] aspect-video rounded">
            <Image
              src={slice.primary.media.url}
              //   alt={thumbnails[0]}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </>
      )}
      {/* 
    <span className="title">
      {
        slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span> */}

      <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
      `}</style>
    </>
  );
};

export default DetailMedia;
