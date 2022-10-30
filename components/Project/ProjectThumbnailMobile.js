import Link from "next/link";
import LoadImage from "../LoadImage";

const ProjectThumbnailMobile = ({ project }) => {
  return (
    <Link href={`/projects/${project.uid}`} passHref scroll={false}>
      <a className="group thumbcursor">
        {
          <div className="w-full overflow-hidden">
            <div className="relative w-[80vw] h-[80vw] mt-10 ">
              <LoadImage
                src={project.data.thumbnails[0].thumbnail.url}
                alt={project.data.thumbnails[0].thumbnail.alt}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        }

        <div className="block mt-10">
          <h1 className=" center text-center text-[3vw] sm:text-xl">
            {" "}
            {project.data.year}
          </h1>
          <p className=" text-center  text-[4.2vw] sm:text-xl">
            {" "}
            {project.data.client}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProjectThumbnailMobile;
