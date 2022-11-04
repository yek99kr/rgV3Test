import Link from "next/link";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import Image from "next/image";
// import Vimeo from "@u-wave/react-vimeo";
// import dynamic from "next/dynamic";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

{
  /* <ReactPlayer
url="https://vimeo.com/766239520"
width="100%"
height="100%"
></ReactPlayer> */
}

const ProjectDetail = ({ project, projects }) => {
  // console.log(project.uid);
  // console.log(projects);

  const currentIndex = projects.findIndex((x) => x.uid === project.uid);
  const previousProject = projects[currentIndex - 1]
    ? projects[currentIndex - 1].uid
    : null;
  const nextProject = projects[currentIndex + 1]
    ? projects[currentIndex + 1].uid
    : null;

  return (
    <div
      style={{
        background: project.data.bgColor,
        color: project.data.textColor,
      }}
    >
      <div className="relative grid justify-items-center w-[100vw] grid-cols-5 gap-y-[1.1rem] pt-[15vw] sm:pt-[70px] md:pt-[100px]">
        <div className="col-start-3 relative md:p-0 text-center">
          <h2 className="relative  bg-white/50  text-[2.5vw] sm:text-[17px] w-[9vw] md:w-[60px] text-center rounded top-[3vw] sm:top-[15px] text-black">
            {project.data.year}
          </h2>
        </div>

        <div className="col-start-3 relative text-center w-[100vw]">
          <h1 className="text-[6.5vw] sm:text-[40px]">{project.data.client}</h1>

          <p className="title italic relative top-[-8px] text-[4vw] sm:text-[25px] mb-[2vw] md:mb-[30px] ">
            {project.data.title}
          </p>
        </div>

        <SliceZone slices={project.data.slices} components={components} />
      </div>

      {/* Mobile bottom Buttons */}

      <div className="flex lg:hidden relative w-screen justify-between text-[2.9vw] sm:text-sm md:text-base pt-[2rem]">
        {previousProject ? (
          <Link href={`/projects/${previousProject}`} passHref scroll={false}>
            <a>
              <div
                className={
                  "bg-white/60 backdrop-blur-sm w-[43vw] rounded text-center p-3 thumbcursor text-black duration-150 hover:opacity-50 ml-[5vw]"
                }
              >
                Previous
              </div>
            </a>
          </Link>
        ) : (
          <div
            className={
              "bg-white/60 backdrop-blur-sm w-[43vw] rounded text-center p-3 text-black opacity-50 ml-[5vw] pointer-events-none cursor-not-allowed"
            }
          >
            Previous
          </div>
        )}

        {nextProject ? (
          <Link href={`/projects/${nextProject}`} passHref scroll={false}>
            <a>
              <div
                className={
                  "bg-white/60 backdrop-blur-sm w-[43vw] rounded text-center p-3 thumbcursor text-black duration-150 hover:opacity-50 mr-[5vw]"
                }
              >
                Next
              </div>
            </a>
          </Link>
        ) : (
          <div
            className={
              "bg-white/60 backdrop-blur-sm w-[43vw] rounded text-center p-3 text-black opacity-50 mr-[5vw] pointer-events-none cursor-not-allowed"
            }
          >
            Next
          </div>
        )}
      </div>

      {/* Desktop bottom Buttons */}

      <div className="flex relative w-screen justify-between items-center text-[2.9vw] sm:text-sm md:text-base pt-[1rem] lg:pt-[4rem] pb-[1.5rem] md:pb-[4rem] ">
        {previousProject ? (
          <Link href={`/projects/${previousProject}`} passHref scroll={false}>
            <a>
              <div
                className={
                  "bg-white/60 backdrop-blur-sm w-[90vw] lg:w-[400px] xl:w-[100px] rounded text-center p-3 thumbcursor text-black duration-150 hover:opacity-50 ml-[5vw] hidden lg:block"
                }
              >
                Previous
              </div>
            </a>
          </Link>
        ) : (
          <div
            className={
              "bg-white/60 backdrop-blur-sm w-[90vw] lg:w-[400px] xl:w-[100px] rounded text-center p-3 text-black opacity-50 ml-[5vw] pointer-events-none cursor-not-allowed hidden lg:block"
            }
          >
            Previous
          </div>
        )}

        <Link href="/projects" passHref scroll={false}>
          <a>
            <div className="bg-white/60 backdrop-blur-sm w-[90vw] lg:w-[400px] xl:w-[455px] rounded text-center p-3 thumbcursor text-black duration-150 hover:opacity-50">
              Back to Projects
            </div>
          </a>
        </Link>

        {nextProject ? (
          <Link href={`/projects/${nextProject}`} passHref scroll={false}>
            <a>
              <div
                className={
                  "bg-white/60 backdrop-blur-sm lg:w-[400px] xl:w-[100px] rounded text-center p-3 thumbcursor text-black duration-150 hover:opacity-50 mr-[5vw] hidden lg:block"
                }
              >
                Next
              </div>
            </a>
          </Link>
        ) : (
          <div
            className={
              "bg-white/60 backdrop-blur-sm lg:w-[400px] xl:w-[100px] rounded text-center p-3 text-black opacity-50 mr-[5vw] pointer-events-none cursor-not-allowed hidden lg:block"
            }
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
