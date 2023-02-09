import AboutDropDown from "../Home/AboutDropDown";
// import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import * as animationData from "../../public/lottie.json";

const About = (props) => {
  const madWords1 = [
    "production support",
    "bidding",
    "producing",
    "insurance",
    "payroll",
    "business affair",
    "contract negotiating",
    "agency and brand liason",
  ];
  const madWords2 = ["access"];
  const madWords3 = ["insight"];

  const interactivity = {
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [-1, 2] },
        type: "seek",
        frames: [0, 15],
      },
    ],
  };

  return (
    <>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[64.5%] leading-[2] md:leading-[2.2] lg:leading-[1.9] w-[93vw] sm:w-[100vw] md:w-[100vw] lg:w-[85vw] xl:w-[75vw] text-[3.1vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[19.5px] 2xl:text-[23px] text-center  p-5">
        <div className="flex justify-center items-center">
          <img
            className="block sm:hidden top-[-16vw]  mb-[7vw] pointer-events-none"
            src="/handshakesMobile.png"
          ></img>
          {/* <img
            className="absolute hidden sm:block top-[-16vw] md:top-[-14vw] lg:top-[-13vw] xl:top-[-12.5vw] ml-8 w-[100%]  pointer-events-none"
            src="/handshakes.png"
          ></img> */}
          {/* <iframe
            
            src="https://player.vimeo.com/video/797178083?h=2b892cbf35&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?loop=1&background=1&autoplay=1&muted=1&controls=0&quality=1080p&transparent=1"
            allowFullScreen
            frameBorder="0"
          ></iframe> */}
          <Lottie
            className="absolute z-[-5] hidden sm:block left-[-3vw] top-[-16vw] md:top-[-18vw] lg:top-[-16vw] xl:left-[-2vw] xl:top-[-15vw]  ml-0 w-[100%] aspect-video"
            animationData={animationData}
            interactivity={interactivity}
          />
        </div>
        <p className="font-[400] z-10">
          We provide <AboutDropDown madWords={madWords1} /> for creators.
        </p>
        <p className="font-[400] pt-[1.8em] sm:pt-[1.5em] z-10">
          We provide <AboutDropDown madWords={madWords2} /> and{" "}
          <AboutDropDown madWords={madWords3} />{" "}
          <br className="block sm:hidden" />
          to agencies and brands.
        </p>
      </div>
      {/* <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black z-[0]"></div> */}
    </>
  );
};

export default About;
