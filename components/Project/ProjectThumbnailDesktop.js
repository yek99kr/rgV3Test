import Link from "next/link";
import { useState } from "react";

import MouseAnimation from "../MouseAnimation";

const ProjectThumbnailDesktop = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  const thumbnails = project.data.thumbnails.map((url) => {
    return url.thumbnail.url;
  });
  // console.log(thumbnails);

  return (
    <>
      <Link href={`/projects/${project.uid}`} passHref scroll={false}>
        <a className="group thumbcursor">
          <div
            className="w-full overflow-hidden "
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <div
              className="relative w-[80vw] h-[80vw] sm:w-[80vw] sm:h-[80vw] md:w-[26vw] md:h-[26vw] xl:w-[22vw] xl:h-[22vw]"
              onMouseMove={(e) => {}}
            >
              {/* <Image
                src={thumbnails[0]}
                //   alt={thumbnails[0]}
                priority={true}
                loading="eager"
                placeholder="blur"
                blurDataURL={`${thumbnails[0]}&blur=200`}
                layout="fill"
                objectFit="cover"
              /> */}
              <MouseAnimation thumbnails={thumbnails} />
            </div>
          </div>

          <div
            className={`opacity-0 ${
              hovered ? "md:opacity-100" : "md:opacity-0"
            } uppercase`}
            style={{ transition: "opacity 0.2s" }}
          >
            <h1 className="mt-0.5 center text-center  sm:text-base  m-[-0.1rem]">
              {project.data.year}
            </h1>
            <p className="stroke-cyan-500 text-center sm:text-base  m-[-0.1rem]">
              {project.data.client}
            </p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default ProjectThumbnailDesktop;

{
  /* 
          <img
            src={
              project.data.thumbnails[1]
                ? project.data.thumbnails[moveImg].thumbnail.url
                : project.data.thumbnails[0].thumbnail.url
            }
            className="w-full h-full"
            onMouseMove={(e) => {
              var rect = e.target.getBoundingClientRect();
              var x = e.clientX - rect.left;

              var percent = (rect.width * 20) / 100;

              if (moveImg !== 1 && x > 0 && x < percent) {
                setMoveImg(0);
              } else if (
                moveImg !== 2 &&
                x > percent &&
                x < percent + percent
              ) {
                setMoveImg(1);
              } else if (moveImg !== 3 && x > percent * 2 && x < percent * 3) {
                setMoveImg(2);
              } else if (moveImg !== 4 && x > percent * 3 && x < percent * 4) {
                setMoveImg(3);
              } else if (
                moveImg !== 5 &&
                x > rect.width - percent &&
                x < rect.width
              ) {
                setMoveImg(4);
              }
            }}
          /> */
}
