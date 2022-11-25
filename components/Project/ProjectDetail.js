import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import ProjectBtn from "./ProjectBtn";
import EmailSubscribe from "../EmailSubscribe";
// import Plyr from "plyr-react";
// import "plyr-react/plyr.css";

const ProjectDetail = ({ project, projects }) => {
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: "https://player.vimeo.com/video/772598080?h=2567ba5b25&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autopause=0&muted=1?background=1",
        provider: "vimeo",
        res: "1080",
      },
    ],
  };
  return (
    <div
      style={{
        background: project.data.bgColor,
        color: project.data.textColor,
      }}
    >
      <div
        className="relative grid justify-items-center w-[100vw] grid-cols-5 gap-y-[5.6vw] md:gap-y-[1.5rem]
        "
      >
        <div className="col-start-3 relative text-center w-[90vw] h-[11vw] lg:h-[5vw] top-[35vw] sm:top-[35vw] md:top-[34vw] lg:top-[26vw] xl:top-[28vw] z-[100]">
          <h1 className="text-[6vw] sm:text-[40px] lg:text-[55px] xl:text-[80px]">
            <span className="text-white bg-black p-0.5 pl-3 pr-3 font-bold">
              {project.data.client}
            </span>
          </h1>

          <p className="title relative text-[3.6vw] sm:text-[25px] lg:text-[30px] mb-[2vw] md:mb-[30px] font-mono">
            <span className="text-white bg-black p-0.5 pl-2 pr-2">
              {project.data.title}
            </span>
          </p>
        </div>

        {/* <div className="col-start-3 relative text-center w-[100vw] top-[38vw] sm:top-[36vw] lg:top-[33vw] xl:top-[31vw] z-[100]">
          <h1 className="text-[6.5vw] sm:text-[40px] lg:text-[55px] xl:text-[60px]">
            <span className="text-white bg-black">{project.data.client}</span>
          </h1>

          <p className="title relative top-[-8px] text-[4vw] sm:text-[25px] lg:text-[28px] mb-[2vw] md:mb-[30px] font-mono">
            <span className="text-white bg-black">{project.data.title}</span>
          </p>
        </div> */}

        {/* <div className="relative col-start-3 md:p-0 w-[90vw] md:w-[96vw] aspect-video">
          <Plyr
            // autoPlay={true}
            options={{
              loop: { active: true },
              muted: true,
              autoplay: true,
              autopause: false,
              clickToPlay: true,
              controls: [],
            }}
            source={videoSrc}
          />
        </div>
        <div className="relative col-start-3 md:p-0 w-[90vw] md:w-[96vw] aspect-video">
          <Plyr
            options={{
              loop: { active: true },
              muted: true,
              autoplay: true,
              autopause: false,
            }}
            source={videoSrc}
          />
        </div> */}

        <SliceZone slices={project.data.slices} components={components} />
        {/* <div className="relative col-start-3 md:p-0 w-[90vw] md:w-[96vw] aspect-video">
          <EmailSubscribe />
        </div> */}

        {/* <div className="relative col-start-3 md:p-0 w-[90vw] md:w-[96vw] aspect-video"> */}
        {/* <Player ratio="video" /> */}
        {/* <PlayerUwave /> */}
        {/* </div> */}
      </div>

      <ProjectBtn project={project} projects={projects} />
    </div>
  );
};

export default ProjectDetail;

{
  /* <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[55.9vw] relative rounded md:place-self-start md:left-[5vw] aspect-square">
          <iframe
            className="w-[100%] h-[100%]"
            src="//player.vimeo.com/video/767132442?h=d63413b39c&badge=0&autopause=0&player_id=0&app_id=58479/embed"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[31.5vw] relative rounded md:place-self-end md:right-[5vw] aspect-[9/16]">
          <iframe
            className="w-[100%] h-[100%]"
            src="//player.vimeo.com/video/769589096?h=81776fa621&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-start-3 relative leading-[3.9vw] md:leading-7 text-[3vw] md:text-[22px] text-center w-[90vw] md:w-[650px] lg:w-[800px] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
          <div className="text-left">
            To further engage fans and amplify the campaign we created the first
            official Rick and Morty filter, allowing fans to become Rick and
            Morty and create their own Rick and Morty scenes.
          </div>
        </div>

        <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[37.5vw] relative rounded md:place-self-start md:left-[5vw] aspect-[3/4] ">
          <Image
            src="/SKOH1.webp"
            //   alt={thumbnails[0]}
            priority={true}
            loading="eager"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[50vw] relative md:place-self-end md:right-[5vw] aspect-square ">
          <iframe
            className="w-[100%] h-[100%]"
            src="//player.vimeo.com/video/767132475?h=8fc49732ec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-start-3 md:col-start-1 w-[90vw] md:w-[43.6vw] relative md:place-self-start md:left-[5vw] aspect-[4/5] ">
          <iframe
            className="w-[100%] h-[100%]"
            src="//player.vimeo.com/video/769662830?h=ea1177e138&badge=0&autopause=0&player_id=0&app_id=58479/embed"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-start-3 md:col-start-5 w-[90vw] md:w-[43.6vw] relative md:place-self-end md:right-[5vw] aspect-[4/5] ">
          <Image
            src="/SKOH2.webp"
            //   alt={thumbnails[0]}
            priority={true}
            loading="eager"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div> */
}
