import { cloneElement, useState } from "react";

const Readmore = ({ children }) => {
  const summary =
    "This is Summary. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.";

  const text =
    "This is more infos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.";
  const [isReadMore, setIsReadMore] = useState(true);

  const credits = [
    { title: "Agency", name: "Real Good Studio" },
    { title: "Creative director", name: "name" },
    { title: "Art Director", name: "name" },
    { title: "Production", name: "name" },
    { title: "Production", name: "name" },
    { title: "Featured Artists", name: "name" },
    { title: "Featured Artists", name: "name" },
    { title: "Featured Artists", name: "name" },
    { title: "Featured Artists", name: "name" },
    { title: "Featured Artists", name: "name" },
    { title: "Featured Artists", name: "name" },
    { title: "Featured Artists", name: "name" },
    { title: "Featured Artists", name: "name" },
    { title: "2d Animation", name: "name" },
    { title: "2d Animation", name: "name" },
    { title: "2d Animation", name: "name" },
    { title: "3d Animation", name: "name" },
    { title: "3d Animation", name: "name" },
    { title: "3d Animation", name: "name" },
    { title: "3d Animation", name: "name" },
    { title: "Design", name: "name" },
    { title: "Design", name: "name" },
    { title: "Design", name: "name" },
    { title: "Design", name: "name" },
    { title: "Design", name: "name" },
    { title: "Design", name: "name" },
    { title: "Design", name: "name" },
    { title: "Design", name: "name" },
  ];

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const titles = credits
    .map((item) => item.title)
    .filter((value, index, self) => self.indexOf(value) === index);

  const result = credits.reduce((acc, { title, name }) => {
    acc[title] ??= { title: title, name: [] };
    if (Array.isArray(name))
      // if it's array type then concat
      acc[title].name = acc[title].name.concat(name);
    else acc[title].name.push(name);

    return acc;
  }, {});

  // console.log(Object.values(result));

  const credit = Object.values(result);

  return (
    <>
      <div className="text col-start-3 relative leading-5 md:leading-7 md:text-[22px] text-left w-[90vw] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
        <div className="flex w-[100%] justify-between">
          <div className="hidden sm:block text-2xl md:text-3xl">Info</div>

          <div className="w-[100%] sm:w-[75%]">
            <div>{summary}</div>

            <div className={`${isReadMore ? "hidden" : "block"}`}>
              <div className={`mt-5 `}>{text}</div>

              <div className={`mt-5 `}>{text}</div>

              {/* <div className={`mt-5 `}>Credit</div> */}
              <div className={`mt-5`}>
                <div className="md:text-[18px] ">
                  <span className="italic uppercase">Agency -</span> Real Good
                  Studio
                </div>
                <div className="md:text-[18px] ">
                  <span className="italic uppercase">Creative Direction -</span>{" "}
                  Name
                </div>
                <div className="md:text-[18px] ">
                  <span className="italic uppercase">Art Directon -</span> Name
                </div>
                <div className="md:text-[18px] ">
                  <span className="italic uppercase">Prodution -</span> Name
                  Name
                </div>
                <div className="md:text-[18px] ">
                  <span className="italic uppercase">Design -</span> Name Name
                  Name Name Name
                </div>

                <div className="md:text-[18px] ">
                  <span className="italic uppercase">2D Animation -</span> Name
                  Name Name Name Name
                </div>
                <div className="md:text-[18px] ">
                  <span className="italic uppercase">3D Animation -</span> Name
                  Name Name Name
                </div>
                {credit.forEach(function (key, index) {
                  return (
                    <>
                      <div>Agency</div>
                    </>
                  );
                })}
                {/* {credit.map((c, i) => {
                  return <div key={i}>{c}</div>;
                })} */}
              </div>
            </div>

            <div
              onClick={() => {
                setIsReadMore(!isReadMore);
              }}
              className="thumbcursor block read-or-hide mt-5 underline"
            >
              {isReadMore ? "Read more" : "Show less"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Readmore;
