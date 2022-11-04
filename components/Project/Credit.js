import { useState } from "react";

const Credit = () => {
  let credits = [
    {
      creditTitle: "Client",
      creditPerson: [{ creditName: "BMW China", creditLink: "" }],
    },
    {
      creditTitle: "Creative Agency",
      creditPerson: [{ creditName: "Real Good Studio", creditLink: "" }],
    },
    {
      creditTitle: "Creative Direction",
      creditPerson: [{ creditName: "Jonah Gabriel", creditLink: "" }],
    },
    {
      creditTitle: "Art Direction",
      creditPerson: [{ creditName: "Sam Hochman", creditLink: "" }],
    },
    {
      creditTitle: "Editing",
      creditPerson: [{ creditName: "BRTHR", creditLink: "" }],
    },
    {
      creditTitle: "Music",
      creditPerson: [{ creditName: "Tomás Tomás", creditLink: "" }],
    },
    {
      creditTitle: "Production",
      creditPerson: [
        { creditName: "Rosa Palmeri", creditLink: "" },
        { creditName: "Anne-Marie Halovanic", creditLink: "" },
      ],
    },
    {
      creditTitle: "Featured Artists",
      creditPerson: [
        { creditName: "Pablo Rochat", creditLink: "" },
        { creditName: "Conner Griffith", creditLink: "" },
        { creditName: "Christopher Rutledge", creditLink: "" },
        { creditName: "name", creditLink: "" },
        { creditName: "name", creditLink: "" },
      ],
    },
    {
      creditTitle: "2D Animation",
      creditPerson: [{ creditName: "Tomás Tomás", creditLink: "" }],
    },
    {
      creditTitle: "3D Animation",
      creditPerson: [{ creditName: "Tomás Tomás", creditLink: "" }],
    },
    {
      creditTitle: "Design",
      creditPerson: [{ creditName: "Tomás Tomás", creditLink: "" }],
    },
  ];

  //   { creditTitle: element.creditTitle, creditPerson: [] }

  return (
    <>
      <div className="text col-start-3 relative leading-5 md:leading-7 md:text-[22px] text-left w-[90vw] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px] ">
        <div className="flex w-[100%] justify-between">
          <div className="hidden sm:block text-xl md:text-2xl font-mono">
            Credit
          </div>
          <div className="w-[100%] sm:w-[75%] font-mono">
            <div className={`mt-0 `}>
              {credits.map((credit, i) => {
                return (
                  <div key={i} className="md:text-[17px] ">
                    {/* <hr
                      style={{
                        color: "#000000",
                        backgroundColor: "#000000",
                        height: 0.5,
                        borderColor: "#000000",
                      }}
                    /> */}
                    <span className="font-bold uppercase">
                      {credit.creditTitle} <br />
                    </span>{" "}
                    {credit.creditPerson.map((person, i) => {
                      return (
                        <a
                          href={person.creditLink && person.creditLink}
                          key={i}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span
                            className={`
                              ${
                                person.creditLink &&
                                "thumbcursor duration-100 hover:opacity-50"
                              }
                            `}
                          >
                            {person.creditName}
                            {i !== credit.creditPerson.length - 1 && ","}{" "}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credit;
