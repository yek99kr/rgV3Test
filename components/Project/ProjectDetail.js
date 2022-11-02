import Link from "next/link";
import Vimeo from "@u-wave/react-vimeo";
import { SliceZone } from "@prismicio/react";
import Readmore from "./Readmore";

const ProjectDetail = ({ project }) => {
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

        <SliceZone slices={project.data.slices} />

        <div className="col-start-3 md:p-0 w-[90vw] aspect-video rounded">
          <Vimeo responsive className="video" ligth="true" video="766239520" />
        </div>

        <Readmore />

        <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[29vw] relative rounded md:place-self-start md:left-[5vw] aspect-square">
          {/* <Player url="https://vimeo.com/453616618" ratio="square" /> */}

          <Vimeo responsive className="video" ligth="true" video="766239510" />
        </div>
        <div className="col-start-3 w-[90vw] md:w-[29vw] rounded aspect-square">
          <Vimeo responsive className="video" ligth="true" video="766239510" />
        </div>
        <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[29vw] relative rounded md:place-self-end md:right-[5vw] aspect-square">
          <Vimeo responsive className="video" ligth="true" video="766239510" />
        </div>

        <div className="col-start-3 relative leading-5 md:leading-7 md:text-[22px] text-center w-[90vw] md:w-[700px] lg:w-[800px] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px] ">
          <p className="text-left">
            This is any text we can put between. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in.
          </p>
        </div>

        <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[29vw] relative rounded md:place-self-start md:left-[5vw] aspect-[9/16]">
          {/* <Player url="https://vimeo.com/453616618" ratio="square" /> */}
          <Vimeo responsive className="video" ligth="true" video="766239501" />
        </div>
        <div className="col-start-3 w-[90vw] md:w-[29vw] rounded  aspect-[9/16]">
          <Vimeo responsive className="video" ligth="true" video="766239501" />
        </div>
        <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[29vw] relative rounded md:place-self-end md:right-[5vw]  aspect-[9/16]">
          <Vimeo responsive className="video" ligth="true" video="766239501" />
        </div>

        <div className="col-start-3 relative leading-5 md:leading-7 md:text-[22px] text-center w-[90vw] md:w-[700px] lg:w-[800px] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px] ">
          <p className="text-left">
            This is any text we can put between. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[44vw] relative rounded md:place-self-start md:left-[5vw] aspect-square">
          {/* <Player url="https://vimeo.com/453616618" ratio="square" /> */}

          <Vimeo responsive className="video" ligth="true" video="766239510" />
        </div>
        <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[44vw] relative rounded md:place-self-end md:right-[5vw] aspect-square">
          <Vimeo responsive className="video" ligth="true" video="766239510" />
        </div>
      </div>

      <div className="flex relative w-screen justify-center items-center text-[2.9vw] sm:text-sm md:text-base pt-[4rem] pb-[2.5rem] md:pb-[4rem]">
        <Link href="/projects" passHref scroll={false}>
          <a>
            <div className="bg-white/60 backdrop-blur-sm w-[90vw] lg:w-[400px] xl:w-[455px] rounded text-center p-3 thumbcursor text-black">
              Back to Projects
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
