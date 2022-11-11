import { useState } from "react";

const DetailCredit = ({ slice }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const credits = slice.items.reduce((acc, { title, name }) => {
    acc[title] ??= { title: title, name: [] };
    if (Array.isArray(name)) acc[title].name = acc[title].name.concat(name);
    else acc[title].name.push(name);

    return acc;
  }, {});

  const allCredits = Object.values(credits);

  let summaryCredits = allCredits.slice(0, 3);
  let readmoreCredits = allCredits.slice(3, allCredits.length);

  return (
    <>
      {slice.variation !== "noReadMore" ? (
        <div className="text col-start-3 relative leading-[4.2vw] md:leading-7 text-[3vw] sm:text-[18px] text-left w-[90vw] mt-[1vw] mb-[1vw] md:mt-[25px] md:mb-[0px] ">
          <div className="flex w-[100%] justify-between">
            <div className="hidden md:block w-[22%] md:text-[1.3rem] lg:text-[1.4rem] font-mono">
              Credit
            </div>

            <div className="w-[100%] md:w-[74.5%]">
              <div className={`mt-0 md:w-[80%] `}>
                {summaryCredits.map((credit, i) => {
                  return (
                    <div key={i} className=" ">
                      <span className="font-bold uppercase">
                        {credit.title} <br />
                      </span>{" "}
                      {credit.name.map((person, i) => {
                        return (
                          <span key={i}>
                            {person}
                            {i !== credit.name.length - 1 && ","}{" "}
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              <div
                className={`mt-0 md:w-[80%] ${
                  !isReadMore ? "block" : "hidden"
                }`}
              >
                {readmoreCredits.map((credit, i) => {
                  return (
                    <div key={i} className=" ">
                      <span className="font-bold uppercase">
                        {credit.title} <br />
                      </span>{" "}
                      {credit.name.map((person, i) => {
                        return (
                          <span key={i}>
                            {person}
                            {i !== credit.name.length - 1 && ","}{" "}
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              {readmoreCredits[0] && (
                <div
                  onClick={() => {
                    setIsReadMore(!isReadMore);
                  }}
                  className="thumbcursor block mt-5 underline text-[3vw] md:text-[22px] "
                >
                  {isReadMore ? "Read more" : "Show less"}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text col-start-3 relative leading-[4.2vw] md:leading-7 text-[3vw] sm:text-[18px] text-left w-[90vw] mt-[1vw] mb-[1vw] md:mt-[25px] md:mb-[0px] ">
          <div className="flex w-[100%] justify-between">
            <div className="hidden md:block text-[1rem] md:text-[1.3rem] lg:text-[1.4rem] font-mono">
              Credit
            </div>

            <div className="w-[100%] md:w-[74.5%]">
              <div className={`mt-0 md:w-[80%]`}>
                {allCredits.map((credit, i) => {
                  return (
                    <div key={i} className=" ">
                      <span className="font-bold uppercase">
                        {credit.title} <br />
                      </span>{" "}
                      {credit.name.map((person, i) => {
                        return (
                          <span key={i}>
                            {person}
                            {i !== credit.name.length - 1 && ","}{" "}
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailCredit;

{
  /* <div className={`mt-0`}>
  {summaryCredits.map((credit, i) => {
    return (
      <div key={i} className="md:text-[18px]">
        <span className="font-bold uppercase">
          {credit.title} <br />
        </span>{" "}
        {credit.person.map((person, i) => {
          return (
            <span>
              {person.name}
              {i !== credit.person.length - 1 && ","}{" "}
            </span>
          );
        })}
      </div>
    );
  })}
</div>

<div className={"mt-0"}>
  {allCredits.map((credit, i) => {
    return (
      <div key={i} className="md:text-[18px] ">
        <span className="font-bold uppercase">
          {credit.title} <br />
        </span>{" "}
        {credit.name.map((person, i) => {
          return (
            <span>
              {person}
              {i !== credit.name.length - 1 && ","}{" "}
            </span>
          );
        })}
      </div>
    );
  })}
</div> */
}
