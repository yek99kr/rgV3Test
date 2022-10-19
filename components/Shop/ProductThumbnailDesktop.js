import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { formatter } from "../../utils/helpers";
import MouseAnimation from "../MouseAnimation";

const ProductThumbnailDesktop = ({ product }) => {
  const [moveImg, setMoveImg] = useState(0);
  const [hovered, setHovered] = useState(false);

  const { handle, title } = product.node;
  const price = product.node.priceRange.minVariantPrice.amount;

  const { altText, originalSrc } = product.node.images.edges[moveImg].node;
  // const originalSrc = `/shop/test/test${moveImg}.webp`;

  return (
    <Link href={`/shop/${handle}`} passHref scroll={false}>
      <a className="group thumbcursor">
        <div
          className="w-full overflow-hidden "
          onMouseOver={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <MouseAnimation image={handle} originalSrc={originalSrc} />
        </div>

        <div
          className={`opacity-0 ${
            hovered ? "md:opacity-100" : "md:opacity-0"
          } uppercase`}
          style={{ transition: "opacity 0.2s" }}
        >
          <h1 className="mt-0.5 center text-center  sm:text-base  m-[-0.1rem]">
            {title}
          </h1>
          <p className="stroke-cyan-500 text-center sm:text-base  m-[-0.1rem]">
            Real Good X Person
          </p>
          <p className=" text-center m-[-0.2rem] text-[2.9vw] sm:text-2xl">
            {formatter.format(price)}
          </p>
        </div>

        {/* <div
          className={`flex justify-center items-center opacity-100 ${
            hovered ? "lg:opacity-100" : "lg:opacity-0"
          }`}
        >
          <div className="w-[30%] bg-white/60 backdrop-blur-sm rounded">
            <h1 className="mt-0.5  center text-center text-[2.5vw] sm:text-sm ">
              {title}
            </h1>
            <p className="text-center text-[2.9vw] sm:text-sm ">
              {formatter.format(price)}
            </p>
          </div>
        </div> */}
      </a>
    </Link>
  );
};

export default ProductThumbnailDesktop;

// <Link href={`/shop/${handle}`} passHref scroll={false}>
//   <a className="group thumbcursor">
//     <div
//       className="thumbcursor"
//       onMouseOver={() => {
//         setHovered(true);
//       }}
//       onMouseLeave={() => {
//         setHovered(false);
//       }}
//     >
//       <div className="relative ml-[5vw] sm:ml-0 w-[80vw] h-[80vw] md:w-[30vw] md:h-[30vw] xl:w-[26vw] xl:h-[26vw] select-none">
//         <Image
//           src={url}
//           objectFit="cover"
//           alt={altText}
//           layout="fill"
//           placeholder="blur"
//           priority={true}
//           blurDataURL={`/_next/image?url=${url}&w=16&q=1`}
//         />

//         {hovered && (
//           <div className="absolute left-1/2 top-1/2 translate-x-[-50%] bg-white">
//             <h1 className="text-sm center text-center hidden lg:block ">
//               {title}
//             </h1>
//             <p className="mt-1 text-sm text-center hidden lg:block">
//               {formatter.format(price)}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//     {/* <h1 className="mt-0.5 center text-center text-[2.5vw] sm:text-sm lg:hidden">
//       {title}
//     </h1>
//     <p className=" text-center  text-[2.9vw] sm:text-sm lg:hidden">
//       {formatter.format(price)}
//     </p> */}
//   </a>
// </Link>
