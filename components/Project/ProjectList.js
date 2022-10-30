import ProjectThumbnailDesktop from "./ProjectThumbnailDesktop";
import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
import useIsTouch from "../../utils/useIsTouch";
import ProjectThumbnailMobile from "./ProjectThumbnailMobile";

const ProjectList = ({ projects }) => {
  const isSmallestHeight = useMediaQueryWidth(768);
  const isTouch = useIsTouch();
  const mouseAnimation = isSmallestHeight || isTouch;

  const classes = [
    "md:top-[2vw] md:rotate-[10deg] md:col-start-1 ",
    "md:top-[6vw] md:rotate-[-8deg] md:col-start-3",
    "md:top-[0vw] md:rotate-[9deg] md:col-start-5 ",
    "md:top-[3vw] md:rotate-[3deg] md:col-start-2 md:-ml-20 ",
    "md:top-[1vw] md:rotate-[-4deg] md:col-start-4 md:-mr-20 ",
  ];

  return (
    <div className="mx-auto py-16 px-5 sm:px-6 lg:px-0 sm:mt-[1rem] md:w-[90vw] lg:w-[80vw] xl:w-[75vw] ">
      <div className="grid grid-cols-1 gap-y-0 md:gap-x-1 md:grid-cols-5">
        {projects.map((project, i) => (
          <div
            className={`relative ${
              classes[i % classes.length]
            } mb-1 md:mb-20 justify-self-center`}
            key={project.uid}
          >
            {!mouseAnimation ? (
              <ProjectThumbnailDesktop project={project} />
            ) : (
              <ProjectThumbnailMobile project={project} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
