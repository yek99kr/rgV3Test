import { useState } from "react";

const Readmore = ({ children }) => {
  const summary =
    "To celebrate the Year of the Tiger, BMW wanted a Chinese New Year Campaign that sparked joy and connected the brand to the holiday in a fun and clever way. In China, BMW is called the precious horse (“Ma” in Chinese), and 2022 happened to be the year of the tiger (“Hu” in Chinese).  When you put them together (Ma Ma Hu Hu) it means don’t be too serious.";
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <>
      <div className="text col-start-3 relative leading-5 md:leading-7 md:text-[22px] text-left w-[90vw] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
        <div className="flex w-[100%] justify-between">
          <div className="hidden sm:block text-2xl md:text-3xl">Info</div>
          <div className="w-[100%] sm:w-[75%]">
            {summary}

            <div className={`${isReadMore ? "hidden" : "block"}`}>
              {summary}
            </div>

            <span
              onClick={() => {
                setIsReadMore(!isReadMore);
              }}
              className="thumbcursor block read-or-hide"
            >
              {isReadMore ? "read more" : "show less"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Readmore;
