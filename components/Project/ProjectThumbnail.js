import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useProjectUpdate } from "../../context/AppContext";

const ProjectThumbnail = ({ project, image, link }) => {
  //   const { title, slug, cookingTime, thumbnail } = project.fields;

  const [moveImg, setMoveImg] = useState(2);

  const updateProject = useProjectUpdate();

  return (
    <Link href={`/projects/${project.uid}`} passHref scroll={false}>
      <a className="group thumbcursor">
        <div
          className="w-full overflow-hidden"
          onMouseOver={(e) => {
            updateProject(project.data.title);
          }}
          onMouseOut={(e) => {
            updateProject(null);
          }}

          // onMouseUp={() => {
          //   updateProject(null);
          // }}
        >
          {/* <div
            className="relative w-[40vw] h-[40vw] md:w-[28vw] md:h-[30vw] noselect"
            onMouseMove={(e) => {
              var rect = e.target.getBoundingClientRect();
              var x = e.clientX - rect.left;

              var percent = (rect.width * 20) / 100;

              if (moveImg !== 1 && x > 0 && x < percent) {
                setMoveImg(1);
              } else if (
                moveImg !== 2 &&
                x > percent &&
                x < percent + percent
              ) {
                setMoveImg(2);
              } else if (moveImg !== 3 && x > percent * 2 && x < percent * 3) {
                setMoveImg(3);
              } else if (moveImg !== 4 && x > percent * 3 && x < percent * 4) {
                setMoveImg(4);
              } else if (
                moveImg !== 5 &&
                x > rect.width - percent &&
                x < rect.width
              ) {
                setMoveImg(5);
              }
            }}
          > */}
          {/* <Image
              src={`/projectThumb/BMWT${moveImg}.png`}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            ></Image> */}

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
          />
        </div>
      </a>
    </Link>
  );
};

export default ProjectThumbnail;
