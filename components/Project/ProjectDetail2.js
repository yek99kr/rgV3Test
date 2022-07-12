const ProjectDetail = () => {
  return (
    <div className="relative grid place-items-center w-[100vw] grid-cols-2 md:grid-cols-5 gap-y-[2vw] pt-[10vh] ">
      <div className="md:col-start-3  relative md:p-0  p-[7%] text-[40px] text-center">
        <h2 className="relative text-[22px] bg-white/50 w-[80px] text-center rounded-full top-[2.4vh]">
          2022
        </h2>
      </div>
      <div className="md:col-start-3  inline relative md:p-0  p-[7%] text-[40px] text-center w-[100vw]">
        <p className="">
          <span className="font-semibold">BMW</span>{" "}
          <span className="italic">Year of the Tiger Campaign</span>
        </p>
      </div>

      <div className="col-start-3 md:p-0  w-[90vw] rounded">
        <img src="/video1.jpg" className="rounded"></img>
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

      <div className="col-start-3 md:p-0  w-[90vw] rounded">
        <img src="/video5.jpg" className="rounded"></img>
      </div>
      <div className="col-start-3 md:p-0  w-[90vw] rounded">
        <img src="/video6.jpg" className="rounded"></img>
      </div>
      <div className="col-start-3 md:p-0  w-[90vw] rounded">
        <img src="/video7.jpg" className="rounded"></img>
      </div>

      <div className="md:col-start-1 col-end-3 relative md:p-0  p-[7%] text-[24px] text-start italic place-self-start mt-[1vh] ml-[5vw] w-[44vw]">
        <p className="text-center rounded-full bg-white w-[150px]">The Ask</p>
      </div>

      <div className="md:col-start-5  place-self-end relative md:p-0 text-[24px] text-start italic  w-[44vw] right-[5vw]">
        <p className="text-center">Our Approach</p>
      </div>

      <div className="col-start-1 col-end-3 place-self-start relative md:p-0  p-[7%] text-[24px] text-center w-[44vw] mb-[5vh] left-[5vw]">
        <p className="text-left">
          To celebrate the Year of the Tiger, BMW wanted a Chinese New Year
          campaign that sparked joy and connected the brand with the holiday in
          a fun and clever way.
        </p>
      </div>

      <div className="md:col-start-5 place-self-end relative md:p-0 text-[24px] text-center w-[44vw] mb-[2vh]  right-[5vw]">
        <p className="text-left">
          We composed original music with the Mandarin words Hu (tiger), Ma
          (horse) and Bao Ma (BMW), which translates to “precious horse,” and
          collaborated with artists around the world to create animation and
          live action moments.
        </p>
      </div>

      <div className="md:col-start-1  relative md:p-0  p-[7%] text-[24px] text-start italic place-self-start ml-[5vw] w-[44vw]">
        <p className="text-center rounded-full">The Result</p>
      </div>

      <div className="md:col-start-1 place-self-start relative md:p-0  text-[24px] text-center w-[44vw] left-[5vw]">
        <p className="text-left">
          The campaign launched with a :90s that broke through on broadcast, and
          was supported by unique :15s, as well as DOOH and original content for
          social that included videos, stills, gifs and stickers.
        </p>
      </div>

      <div className="md:col-start-1 place-self-start relative md:p-0  text-[24px] text-center w-[44vw] mb-[15vh] left-[5vw]">
        <p className="text-left ">
          After only two weeks, the videos had garnered over 220M views on
          social channels - the most viewed BMW content on Weibo, the most
          discussed BMW video on Douyin, and the brand’s most viewed and
          discussed content on Bilibili, ever.
        </p>
      </div>

      {/* <div className="md:col-start-1  relative md:p-0  p-[7%] text-[25px] text-start italic place-self-start mt-[5vh]  ml-[5vw]  w-[120px]">
        <p className="bg-white/50 text-center rounded-full">The Ask</p>
      </div>

      <div className="md:col-start-3  relative md:p-0  p-[7%] text-[25px] text-center w-[50vw] mt-[5vh] ">
        <p className="text-left">
          To celebrate the Year of the Tiger, BMW wanted a Chinese New Year
          campaign that sparked joy and connected the brand with the holiday in
          a fun and clever way.
        </p>
      </div>

      <div className="md:col-start-1  relative md:p-0  p-[7%] text-[25px] text-start italic place-self-start w-[50vw] mt-[5vh]  ml-[5vw]">
        <p className="text-left">Our Approach</p>
      </div>

      <div className="md:col-start-3  relative md:p-0 text-[25px] text-center w-[50vw] mt-[5vh] ">
        <p className="text-left">
          We composed original music with the Mandarin words Hu (tiger), Ma
          (horse) and Bao Ma (BMW), which translates to “precious horse,” and
          collaborated with artists around the world to create animation and
          live action moments.
        </p>
      </div>

      <div className="md:col-start-1  relative md:p-0  p-[7%] text-[25px] text-start italic place-self-start w-[50vw] mt-[5vh] ml-[5vw]">
        <p className="text-left">The Result</p>
      </div>

      <div className="md:col-start-3  relative md:p-0  text-[25px] text-center w-[50vw] mb-[5vh] ">
        <p className="text-left mt-[5vh]">
          The campaign launched with a :90s that broke through on broadcast, and
          was supported by unique :15s, as well as DOOH and original content for
          social that included videos, stills, gifs and stickers.
        </p>
      </div>

      <div className="md:col-start-3  relative md:p-0  text-[25px] text-center w-[50vw] mt-[-3vh] mb-[10vh] ">
        <p className="text-left">
          After only two weeks, the videos had garnered over 220M views on
          social channels - the most viewed BMW content on Weibo, the most
          discussed BMW video on Douyin, and the brand’s most viewed and
          discussed content on Bilibili, ever.
        </p>
      </div> */}
    </div>
  );
};

export default ProjectDetail;
