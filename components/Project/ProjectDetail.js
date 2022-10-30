// import Player from "../Player/Player";
import Image from "next/image";
import Link from "next/link";
import Vimeo from "@u-wave/react-vimeo";

const ProjectDetail = ({ project }) => {
  return (
    <div className={`bg-[${project.bgColor}] text-[${project.textColor}]`}>
      <div className="relative grid place-items-center w-[100vw] grid-cols-2 md:grid-cols-5 gap-y-[1.1rem] pt-[100px]">
        <div className="md:col-start-3 relative md:p-0  p-[10%] text-[40px] text-center">
          <h2 className="relative text-[18px] bg-white/50 w-[70px] text-center rounded top-[15px] text-black">
            {project.data.year}
          </h2>
        </div>
        <div className="md:col-start-3  inline relative md:p-0  p-[7%] text-[40px] text-center w-[100vw]">
          <h1 className="">{project.data.client}</h1>

          <p className="italic relative top-[-0.5vh] text-[25px] ">
            {project.data.title}
          </p>
        </div>

        <div className="col-start-3 md:p-0  w-[90vw] rounded">
          <Vimeo
            // className="w-[50vw] h-[50vw]"
            ligth="true"
            video="396630830"
            autoplay
          />
        </div>

        <div className="col-start-3 md:p-0  w-[90vw] rounded">
          <img src="/video1.jpg" className="rounded"></img>
        </div>

        {/* <div className="md:col-start-1  relative md:p-0  p-[7%] text-[22px] text-start italic place-self-start w-[50vw] mt-[5vh] mb-[5vh] ml-[5vw]">
        <p className="text-left">The Ask</p>
      </div> */}

        <div className="md:col-start-3  relative md:p-0  p-[7%] text-[22px] text-center w-[50vw] mt-[5vh] mb-[5vh]">
          <p className="text-left">
            To celebrate the Year of the Tiger, BMW wanted a Chinese New Year
            campaign that sparked joy and connected the brand with the holiday
            in a fun and clever way.
          </p>
        </div>

        <div className="col-start-1 w-[28vw] relative rounded place-self-start left-[5vw]">
          {/* <Player url="https://vimeo.com/453616618" ratio="square" /> */}
          <img className=" w-full " src="/video4.jpg"></img>
        </div>
        <div className="col-start-3 w-[28vw] h-[28vw]  rounded">
          <img className="w-full h-full" src="/video2.jpg"></img>
        </div>
        <div className="col-start-5 w-[28vw] h-[28vw]  relative rounded place-self-end right-[5vw]">
          <img className="w-full" src="/video3.jpg"></img>
        </div>

        {/* <div className="md:col-start-1  relative md:p-0  p-[7%] text-[22px] text-start italic place-self-start  mt-[5vh] mb-[5vh] ml-[5vw] bg-white w-[10vw]  rounded">
        <p className="text-left p-2">Our Approach</p>
      </div> */}

        <div className="md:col-start-3  relative md:p-0 text-[22px] text-center w-[50vw] mb-[5vh] mt-[5vh] ">
          {/* <h1 className="mb-[0.5em]">Our Approach</h1> */}
          <p className="text-left">
            We composed original music with the Mandarin words Hu (tiger), Ma
            (horse) and Bao Ma (BMW), which translates to “precious horse,” and
            collaborated with artists around the world to create animation and
            live action moments.
          </p>
        </div>

        <div className="col-start-3 md:p-0  w-[90vw] rounded">
          <img src="/video5.jpg" className="rounded"></img>
        </div>
        <div className="col-start-3 md:p-0  w-[90vw] rounded">
          <img src="/video6.jpg" className="rounded"></img>
        </div>
        <div className="col-start-3 md:p-0  w-[90vw] rounded">
          <img src="/video7.jpg" className="rounded"></img>
        </div>

        {/* <div className="md:col-start-1  relative md:p-0  p-[7%] text-[22px] text-start italic place-self-start w-[50vw] mt-[5vh] mb-[5vh] ml-[5vw]">
        <p className="text-left">The Result</p>
      </div> */}

        <div className="md:col-start-3  relative md:p-0  text-[22px] text-center w-[50vw] mb-[5vh] ">
          {/* <h1 className="mb-[0.5em]">Our Approach</h1> */}
          <p className="text-left mt-[5vh]">
            The campaign launched with a :90s that broke through on broadcast,
            and was supported by unique :15s, as well as DOOH and original
            content for social that included videos, stills, gifs and stickers.
          </p>
        </div>

        <div className="md:col-start-3  relative md:p-0  text-[22px] text-center w-[50vw] mt-[-3vh] mb-[10vh] ">
          <p className="text-left">
            After only two weeks, the videos had garnered over 220M views on
            social channels - the most viewed BMW content on Weibo, the most
            discussed BMW video on Douyin, and the brand’s most viewed and
            discussed content on Bilibili, ever.
          </p>
        </div>
      </div>

      <div className="flex relative w-screen justify-center items-center text-[2.9vw] sm:text-sm md:text-base  pb-[2.5rem] md:pb-[4rem]">
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
