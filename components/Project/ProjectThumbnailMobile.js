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
                src={
                  project.data.mobileThumbnail.url
                    ? project.data.mobileThumbnail.url
                    : "/shop/test-1/test0.webp"
                }
                alt={project.data.mobileThumbnail.alt}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        }

        <div className="block mt-4">
          <p className=" text-center  text-[4.2vw] sm:text-xl">
            {project.data.client}
          </p>
          <p className=" text-center  text-[3.5vw] sm:text-xl">
            {project.data.title}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProjectThumbnailMobile;
