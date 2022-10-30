import Image from "next/image";
import Link from "next/link";
import Vimeo from "@u-wave/react-vimeo";
import { SliceZone } from "@prismicio/react";

const ProjectDetail = ({ project }) => {
  return (
    <div className={`bg-[${project.bgColor}] text-[${project.textColor}]`}>
      <div className="relative grid justify-items-center w-[100vw] grid-cols-5 gap-y-[1.1rem] pt-[15vw] sm:pt-[70px] md:pt-[100px]">
        <div className="col-start-3 relative md:p-0 text-center">
          <h2 className="relative  bg-white/50  text-[2.5vw] sm:text-[17px] w-[9vw] md:w-[60px] text-center rounded top-[3vw] sm:top-[15px] text-black">
            {project.data.year}
          </h2>
        </div>

        <div className="col-start-3 relative text-center w-[100vw]">
          <h1 className="text-[6.5vw] sm:text-[40px]">{project.data.client}</h1>

          <p className="italic relative top-[-8px] text-[4vw] sm:text-[25px] mb-[2vw] md:mb-[30px] ">
            {project.data.title}
          </p>
        </div>

        <SliceZone slices={project.data.slices} />

        <div className="col-start-3 md:p-0 w-[90vw] rounded">
          <Vimeo responsive className="video" ligth="true" video="396630830" />
        </div>

        <div className="col-start-3 relative leading-7 md:text-[22px] text-center w-[90vw] md:w-[700px] lg:w-[800px] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
          <p className="text-left">
            To celebrate the Year of the Tiger, BMW wanted a Chinese New Year
            campaign that sparked joy and connected the brand with the holiday
            in a fun and clever way.
          </p>
        </div>

        <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[29vw] relative rounded md:place-self-start md:left-[5vw]">
          {/* <Player url="https://vimeo.com/453616618" ratio="square" /> */}
          <Vimeo responsive className="video" ligth="true" video="453616618" />
        </div>
        <div className="col-start-3 w-[90vw] md:w-[29vw] rounded">
          <Vimeo responsive className="video" ligth="true" video="453616618" />
        </div>
        <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[29vw] relative rounded md:place-self-end md:right-[5vw]">
          <Vimeo responsive className="video" ligth="true" video="453616618" />
        </div>
      </div>

      <div className="flex relative w-screen justify-center items-center text-[2.9vw] sm:text-sm md:text-base pt-[2.5rem] pb-[2.5rem] md:pb-[4rem]">
        <Link href="/projects" passHref scroll={false}>
          <a>
            <div className="bg-white/60 backdrop-blur-sm w-[90vw] lg:w-[400px] xl:w-[455px] rounded text-center p-3 thumbcursor text-black">
              Back to Projects
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .video iframe {
          width: 90vw;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
