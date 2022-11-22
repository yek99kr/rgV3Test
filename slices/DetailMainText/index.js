import { useState } from "react";

const DetailMainText = ({ slice }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <>
      {slice.variation !== "noReadMore" ? (
        <div className="text col-start-3 relative leading-[4vw] sm:leading-7 text-[3.3vw] sm:text-[22px] text-left w-[94vw] mt-[0vw] mb-[1vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
          <div className="block md:hidden w-[90%] text-[3.4vw] sm:text-[22px] mb-5 font-mono ">
            {slice.primary.title ? slice.primary.title : "Objective + Approach"}
          </div>
          <div className="flex w-[100%] justify-between">
            <div className="hidden md:block w-[23%] md:text-[1.3rem] lg:text-[1.4rem] font-mono ">
              {slice.primary.title
                ? slice.primary.title
                : "Objective + Approach"}
            </div>

            <div className="w-[100%] md:w-[73%]">
              <div className={`mt-0`}>{slice.primary.summary[0].text}</div>
              {slice.primary.summary.slice(1).map((t, i) => (
                <div key={i} className={`mt-5`}>
                  {t.text}
                </div>
              ))}

              <div className={`${isReadMore ? "hidden" : "block"}`}>
                {slice.primary.moreInfo.map((t, i) => (
                  <div key={i} className={`mt-5`}>
                    {t.text}
                  </div>
                ))}
              </div>
              {slice.primary.moreInfo[0] && (
                <div
                  onClick={() => {
                    setIsReadMore(!isReadMore);
                  }}
                  className="thumbcursor block mt-5 underline"
                >
                  {isReadMore ? "Read more" : "Show less"}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text col-start-3 relative leading-[4.2vw] sm:leading-7 text-[3.5vw] sm:text-[22px] text-left w-[94vw] mt-[0vw] mb-[1vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
          <div className="block md:hidden w-[90%] text-[3.5vw] sm:text-[22px] mb-5 font-mono">
            {slice.primary.title ? slice.primary.title : "Objective + Approach"}
          </div>
          <div className="flex w-[100%] justify-between">
            <div className="hidden md:block  w-[23%] text-[1rem] md:text-[1.3rem] lg:text-[1.4rem] font-mono ">
              <span className=" bg-black p-1 pr-3 pl-3 text-white">
                {slice.primary.title
                  ? slice.primary.title
                  : "Objective + Approach"}
              </span>
            </div>

            <div className="w-[100%] md:w-[73%]">
              <div>
                {slice.primary.moreInfo.map((t, i) => (
                  <div key={i} className={`${i === 0 ? "mt-0" : "mt-5"}`}>
                    {t.text}
                  </div>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailMainText;

// let credits = [];
// slice.items.forEach((element) => {
//   let match = credits.find((r) => r.creditTitle == element.creditTitle);
//   if (match) {
//   } else {
//     credits.push({ creditTitle: element.creditTitle, creditPerson: [] });
//   }
// });

// credits.map((item) => {
//   slice.items.map((e) => {
//     if (e.creditTitle == item.creditTitle) {
//       item.creditPerson.push({
//         creditName: e.creditName,
//         creditLink: e.creditLink.url ? e.creditLink.url : null,
//       });
//     }
//   });
// });

// <div className="text col-start-3 relative leading-5 sm:leading-7 md:text-[22px] text-left w-[94vw] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
//         <div className="flex w-[100%] justify-between">
//           <div className="hidden sm:block text-2xl md:text-3xl">Credit</div>

//           <div className="w-[100%] sm:w-[75%]">
//             {slice.primary.moreInfo[1] && (
//               <div className={`mt-0`}>{slice.primary.moreInfo[0].text}</div>
//             )}
//             {slice.primary.moreInfo.slice(1).map((t, i) => (
//               <div key={i} className={`mt-5`}>
//                 {t.text}
//               </div>
//             ))}
//             {slice.items[0].creditTitle && (
//               <div className={`mt-5`}>
//                 {credits.map((credit, i) => {
//                   return (
//                     <div key={i} className="md:text-[18px] ">
//                       <span className="italic uppercase">
//                         {credit.creditTitle} -
//                       </span>{" "}
//                       {credit.creditPerson.map((person, i) => {
//                         return (
//                           <a
//                             href={person.creditLink && person.creditLink}
//                             key={i}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <span
//                               className={
//                                 person.creditLink &&
//                                 "thumbcursor duration-100 hover:opacity-50"
//                               }
//                             >
//                               {person.creditName}{" "}
//                             </span>
//                           </a>
//                         );
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
