import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./Shop/MiniCart";
// import { getProductsInCollection } from "../lib/shopify";

// const Nav = () => {
//   const router = useRouter();

//   const { cart, cartOpen, setCartOpen } = useContext(CartContext);
//   const [copyed, setCopyed] = useState(false);

//   let cartQuantity = 0;

//   cart.map((item) => {
//     return (cartQuantity += item?.variantQuantity);
//   });

//   const [angle, setAngle] = useState("0");

//   return (
//     <>
//       <div className=" fixed top-0 mt-[2.5vw] sm:mt-3 z-[1000] text-[2.9vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18.5px] flex justify-center items-center w-screen select-none">
//         <div className=" bg-white backdrop-blur rounded m-0 mr-[1.8vw] sm:mr-3 p-[2.2vw] sm:p-[0.69rem] pl-[2.2vw] pr-[2.2vw] sm:pl-3 sm:pr-3 select-none">
//           <Link href="/" passHref scroll={false}>
//             <a className="thumbcursor">
//               <img
//                 src="/logoShort.png"
//                 alt="logo"
//                 className="w-[13.5vw] sm:w-[70px] md:w-[76px] lg:w-[87.5px] xl:w-[93px] "
//                 // className="w-[12.5vw] sm:w-[3.8rem] md:w-[4.55rem]"
//               />
//             </a>
//           </Link>
//         </div>

//         <div
//           style={{ transform: `rotate(${angle}deg)` }}
//           className={
//             "duration-75 bg-white backdrop-blur rounded p-[1.5vw] pl-0 pr-0 sm:p-[0.45rem] sm:pl-1 sm:pr-1 "
//           }
//         >
//           <Link href="/projects" passHref scroll={false}>
//             <a
//               className={`inline-block hover:rotate-[5deg]  p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1 thumbcursor duration-[0.2s]  hover:opacity-100
//               ${
//                 router.pathname.includes("/projects")
//                   ? "opacity-100 rotate-[5deg] "
//                   : "opacity-50"
//               }`}
//               onMouseEnter={() => {
//                 setAngle("-3");
//               }}
//             >
//               <span className=" p-1.5 pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3 ">
//                 Projects
//               </span>
//             </a>
//           </Link>

//           <Link href="/shop" passHref scroll={false}>
//             <a
//               className={`inline-block p-[0.3vw] hover:rotate-[-6deg] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor   hover:opacity-100 duration-[0.2s]
//             ${
//               router.pathname.includes("/shop")
//                 ? "opacity-100 rotate-[-6deg] "
//                 : "opacity-50"
//             }`}
//               onMouseEnter={() => {
//                 setAngle("-2");
//               }}
//             >
//               <span
//                 className={`p-1.5  pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  `}
//               >
//                 Shop
//               </span>
//             </a>
//           </Link>

//           <a
//             href="https://www.instagram.com/real.good.studio/"
//             target="_blank"
//             rel="noreferrer"
//             className={`inline-block hover:rotate-[2deg] p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1 thumbcursor duration-[0.2s] opacity-50 hover:opacity-100
//            `}
//             onMouseEnter={() => {
//               setAngle("0");
//             }}
//           >
//             <span className={`p-1.5 pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  `}>
//               Instagram
//             </span>
//           </a>

//           <a
//             onClick={() => {
//               navigator.clipboard.writeText("hello@realgood.tv");
//               setCopyed(true);
//             }}
//             onMouseEnter={() => {
//               setAngle("2");
//             }}
//             // target="_blank"
//             // rel="noreferrer"
//             className={`inline-block hover:rotate-[-4deg] p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1 thumbcursor duration-[0.2s] opacity-50 hover:opacity-100
//         `}
//           >
//             <span className={`p-1.5 pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  `}>
//               Contact
//             </span>
//           </a>

//           <a
//             onClick={() => {
//               setCartOpen(!cartOpen);
//             }}
//             className={`inline-block hover:rotate-[3deg] p-[0.3vw] sm:p-0 sm:pl-1 sm:pr-0.5  thumbcursor  hover:opacity-100  ${
//               cartOpen ? "opacity-100" : "opacity-50"
//             }`}
//             onMouseEnter={() => {
//               setAngle("3");
//             }}
//           >
//             <span className={`p-1.5 pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  `}>
//               Cart{" "}
//               <span className="relative top-[-1.4vw] sm:top-[-0.4rem] md:top-[-0.4rem]  m-[-0.4vw] sm:m-[-2px] text-[1.5vw] sm:text-[7px] md:text-[10px]">
//                 ({cartQuantity})
//               </span>
//             </span>
//           </a>
//           <MiniCart cart={cart} />
//         </div>
//       </div>

//       <div
//         className={`flex fixed w-screen justify-center items-center mt-[3.5vw] 2xs:mt-[4rem] xs:mt-[4.5rem] sm:mt-[4.5rem] text-[2.9vw] sm:text-sm md:text-base z-[1000] pointer-events-none  ${
//           copyed ? "opacity-100" : "opacity-0"
//         }`}
//         style={{ transition: "opacity 0.8s" }}
//         onTransitionEnd={() => setCopyed(false)}
//       >
//         <div className="bg-white backdrop-blur-sm w-[65vw] sm:w-[300px] md:w-[400px] rounded text-center p-2.5 ">
//           <span>hello@realgood.tv copyed to clipboard</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;

const Nav = () => {
  const router = useRouter();

  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [copyed, setCopyed] = useState(false);

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>
      <div className="fixed top-0 mt-[3.5vw] 2xs:mt-2 xs:mt-2.5 sm:mt-3 z-[1000] text-[2.9vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[18.5px] flex justify-center items-center w-screen select-none">
        <div className=" bg-white backdrop-hue-rotate-180  m-0 mr-[1.8vw] sm:mr-3 p-[1.87vw] sm:p-[0.69rem] pl-[2.5vw] pr-[2.5vw] sm:pl-3 sm:pr-3 select-none">
          <Link href="/" passHref scroll={false}>
            <a className="thumbcursor">
              <img
                src="/logoShort.png"
                alt="logo"
                className="w-[13.5vw] sm:w-[70px] md:w-[76px] lg:w-[87.5px] xl:w-[90px]"
                // className="w-[12.5vw] sm:w-[3.8rem] md:w-[4.55rem]"
              />
            </a>
          </Link>
        </div>

        <div className="bg-white  p-[1.3vw] sm:p-[0.45rem] sm:pl-1 sm:pr-1 backdrop-hue-rotate-180">
          <Link href="/projects" passHref scroll={false}>
            <a
              className={`p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1 thumbcursor  hover:opacity-100
              ${
                router.pathname.includes("/projects")
                  ? "opacity-100"
                  : "opacity-100"
              }`}
            >
              <span
                className={`p-1.5  pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-black  hover:text-white duration-[0.2s]    ${
                  router.pathname.includes("/projects")
                    ? "bg-black  text-white"
                    : "bg-none"
                }`}
              >
                Projects
              </span>
            </a>
          </Link>

          <Link href="/shop" passHref scroll={false}>
            <a
              className={`p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor  hover:opacity-100
            ${
              router.pathname.includes("/shop") ? "opacity-100" : "opacity-100"
            }`}
            >
              <span
                className={`p-1.5  pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-black  hover:text-white duration-[0.2s]    ${
                  router.pathname.includes("/shop")
                    ? "bg-black  text-white"
                    : "bg-none"
                }`}
              >
                Shop
              </span>
            </a>
          </Link>

          <a
            href="https://www.instagram.com/real.good.studio/"
            target="_blank"
            rel="noreferrer"
            className="p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor"
          >
            <span
              className={`p-1.5 pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-black  hover:text-white duration-[0.2s]`}
            >
              Instagram
            </span>
          </a>

          <a
            onClick={() => {
              navigator.clipboard.writeText("hello@realgood.tv");
              setCopyed(true);
            }}
            // target="_blank"
            // rel="noreferrer"
            className="p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor "
          >
            <span
              className={`p-1.5 pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-black  hover:text-white duration-[0.2s]`}
            >
              Contact
            </span>
          </a>

          <a
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
            className={`p-[0.3vw] sm:p-0 sm:pl-1 sm:pr-0.5  thumbcursor hover:opacity-100  ${
              cartOpen ? "opacity-100" : "opacity-100"
            }`}
          >
            <span
              className={`p-1.5 pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-black  hover:text-white duration-[0.2s]`}
            >
              Cart{" "}
              <span className="relative top-[-1.4vw] sm:top-[-0.4rem] md:top-[-0.4rem]  m-[-0.4vw] sm:m-[-2px] text-[1.5vw] sm:text-[7px] md:text-[10px]">
                ({cartQuantity})
              </span>
            </span>
          </a>
          <MiniCart cart={cart} />
        </div>
      </div>

      <div
        className={`flex fixed w-screen justify-center items-center mt-[3.5vw] 2xs:mt-[4rem] xs:mt-[4.5rem] sm:mt-[4.5rem] text-[2.9vw] sm:text-sm md:text-base z-[1000] pointer-events-none  ${
          copyed ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.8s" }}
        onTransitionEnd={() => setCopyed(false)}
      >
        <div className="bg-white backdrop-blur-sm w-[65vw] sm:w-[300px] md:w-[400px] rounded text-center p-2.5 ">
          <span>hello@realgood.tv copyed to clipboard</span>
        </div>
      </div>
    </>
  );
};

export default Nav;

// const Nav = () => {
//   const router = useRouter();

//   const { cart, cartOpen, setCartOpen } = useContext(CartContext);
//   const [copyed, setCopyed] = useState(false);

//   let cartQuantity = 0;

//   cart.map((item) => {
//     return (cartQuantity += item?.variantQuantity);
//   });

//   return (
//     <>
//       <div className="fixed top-0 mt-[3.5vw] 2xs:mt-2 xs:mt-2.5 sm:mt-3 z-[1000] text-[2.9vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[18.5px] flex justify-center items-center w-screen select-none">
//         <div className=" bg-white backdrop-hue-rotate-180 rounded m-0 mr-[1.8vw] sm:mr-3 p-[1.87vw] sm:p-[0.69rem] pl-[2.5vw] pr-[2.5vw] sm:pl-3 sm:pr-3 select-none">
//           <Link href="/" passHref scroll={false}>
//             <a className="thumbcursor">
//               <img
//                 src="/logoShort.png"
//                 alt="logo"
//                 className="w-[13.5vw] sm:w-[70px] md:w-[76px] lg:w-[87.5px] xl:w-[90px]"
//                 // className="w-[12.5vw] sm:w-[3.8rem] md:w-[4.55rem]"
//               />
//             </a>
//           </Link>
//         </div>

//         <div className="bg-white rounded p-[1.3vw] sm:p-[0.45rem] sm:pl-1 sm:pr-1 backdrop-hue-rotate-180">
//           <Link href="/projects" passHref scroll={false}>
//             <a
//               className={`p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1 thumbcursor  hover:opacity-100
//               ${
//                 router.pathname.includes("/projects")
//                   ? "opacity-100"
//                   : "opacity-100"
//               }`}
//             >
//               <span
//                 className={`p-1.5 rounded pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-pink-500 duration-[0.2s]    ${
//                   router.pathname.includes("/projects")
//                     ? "bg-pink-500"
//                     : "bg-none"
//                 }`}
//               >
//                 Projects
//               </span>
//             </a>
//           </Link>

//           <Link href="/shop" passHref scroll={false}>
//             <a
//               className={`p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor  hover:opacity-100
//             ${
//               router.pathname.includes("/shop") ? "opacity-100" : "opacity-100"
//             }`}
//             >
//               <span
//                 className={`p-1.5 rounded pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-yellow-500 duration-[0.2s]    ${
//                   router.pathname.includes("/shop")
//                     ? "bg-yellow-500"
//                     : "bg-none"
//                 }`}
//               >
//                 Shop
//               </span>
//             </a>
//           </Link>

//           <a
//             href="https://www.instagram.com/real.good.studio/"
//             target="_blank"
//             rel="noreferrer"
//             className="p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor"
//           >
//             <span
//               className={`p-1.5 rounded pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-blue-500 duration-[0.2s]`}
//             >
//               Instagram
//             </span>
//           </a>

//           <a
//             onClick={() => {
//               navigator.clipboard.writeText("hello@realgood.tv");
//               setCopyed(true);
//             }}
//             // target="_blank"
//             // rel="noreferrer"
//             className="p-[0.3vw] sm:p-0 sm:pl-0.5 sm:pr-1  thumbcursor "
//           >
//             <span
//               className={`p-1.5 rounded pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-purple-500 duration-[0.2s]`}
//             >
//               Contact
//             </span>
//           </a>

//           <a
//             onClick={() => {
//               setCartOpen(!cartOpen);
//             }}
//             className={`p-[0.3vw] sm:p-0 sm:pl-1 sm:pr-0.5  thumbcursor hover:opacity-100  ${
//               cartOpen ? "opacity-100" : "opacity-100"
//             }`}
//           >
//             <span
//               className={`p-1.5 rounded pr-[2.2vw] pl-[2.2vw] sm:pr-3 sm:pl-3  hover:bg-green-500 duration-[0.2s]`}
//             >
//               Cart{" "}
//               <span className="relative top-[-1.4vw] sm:top-[-0.4rem] md:top-[-0.4rem]  m-[-0.4vw] sm:m-[-2px] text-[1.5vw] sm:text-[7px] md:text-[10px]">
//                 ({cartQuantity})
//               </span>
//             </span>
//           </a>
//           <MiniCart cart={cart} />
//         </div>
//       </div>

//       <div
//         className={`flex fixed w-screen justify-center items-center mt-[3.5vw] 2xs:mt-[4rem] xs:mt-[4.5rem] sm:mt-[4.5rem] text-[2.9vw] sm:text-sm md:text-base z-[1000] pointer-events-none  ${
//           copyed ? "opacity-100" : "opacity-0"
//         }`}
//         style={{ transition: "opacity 0.8s" }}
//         onTransitionEnd={() => setCopyed(false)}
//       >
//         <div className="bg-white backdrop-blur-sm w-[65vw] sm:w-[300px] md:w-[400px] rounded text-center p-2.5 ">
//           <span>hello@realgood.tv copyed to clipboard</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;
