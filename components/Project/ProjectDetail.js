import Player from "../Player/Player";

const ProjectDetail = ({ project }) => {
  return (
    <div className="relative grid place-items-center w-[100vw] grid-cols-2 md:grid-cols-5 gap-y-[2vw] pt-[10vh] ">
      <div className="md:col-start-3 relative md:p-0  p-[7%] text-[40px] text-center">
        <h2 className="relative text-[16px] bg-white/50 w-[60px] text-center rounded-full top-[3vh]">
          {project.data.year}
        </h2>
      </div>
      <div className="md:col-start-3  inline relative md:p-0  p-[7%] text-[40px] text-center w-[100vw]">
        <h1 className="">{project.data.title}</h1>

        <p className="italic relative top-[-0.5vh] text-[25px] ">
          Year of the Tiger Campaign
        </p>
      </div>

      {/* <div className="col-start-3 md:p-0  w-[90vw] rounded">
        <Player url="https://vimeo.com/698795994/762b614500" ratio="video" />
      </div> */}

      <div className="col-start-3 md:p-0  w-[90vw] rounded">
        <img src="/video1.jpg" className="rounded"></img>
      </div>

      {/* <div className="md:col-start-1  relative md:p-0  p-[7%] text-[22px] text-start italic place-self-start w-[50vw] mt-[5vh] mb-[5vh] ml-[5vw]">
        <p className="text-left">The Ask</p>
      </div> */}

      <div className="md:col-start-3  relative md:p-0  p-[7%] text-[22px] text-center w-[50vw] mt-[5vh] mb-[5vh]">
        <p className="text-left">
          To celebrate the Year of the Tiger, BMW wanted a Chinese New Year
          campaign that sparked joy and connected the brand with the holiday in
          a fun and clever way.
        </p>
      </div>

      <div className="col-start-1 w-[28vw] h-[28vw] relative rounded place-self-start left-[5vw]">
        <img className=" w-full " src="/video4.jpg"></img>
      </div>
      <div className="col-start-3 w-[28vw] h-[28vw]  rounded">
        <img className="w-full h-full" src="/video2.jpg"></img>
      </div>
      <div className="col-start-5 w-[28vw] h-[28vw]  relative rounded place-self-end right-[5vw]">
        <img className="w-full" src="/video3.jpg"></img>
      </div>

      {/* <div className="md:col-start-1  relative md:p-0  p-[7%] text-[22px] text-start italic place-self-start w-[50vw] mt-[5vh] mb-[5vh] ml-[5vw]">
        <p className="text-left">Our Approach</p>
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
          The campaign launched with a :90s that broke through on broadcast, and
          was supported by unique :15s, as well as DOOH and original content for
          social that included videos, stills, gifs and stickers.
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
  );
};

export default ProjectDetail;
