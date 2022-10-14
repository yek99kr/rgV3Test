import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { formatter } from "../../utils/helpers";

const ProductThumbnail = ({ product }) => {
  const [moveImg, setMoveImg] = useState(0);
  const [hovered, setHovered] = useState(false);

  const { handle, title } = product.node;
  const price = product.node.priceRange.minVariantPrice.amount;

  const { altText, originalSrc } = product.node.images.edges[moveImg].node;
  console.log(product.node.images.edges[moveImg].node);

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
          <div
            className="relative w-[80vw] h-[80vw] sm:w-[80vw] sm:h-[80vw] md:w-[30vw] md:h-[30vw] xl:w-[26vw] xl:h-[26vw] "
            // onMouseMove={(e) => {
            //   var rect = e.target.getBoundingClientRect();
            //   var x = e.clientX - rect.left;

            //   var percent = (rect.width * 20) / 100;

            //   if (product.node.images.edges[1]) {
            //     if (moveImg !== 0 && x > 0 && x <= percent) {
            //       setMoveImg(0);
            //     } else if (moveImg !== 1 && x > percent && x <= percent * 2) {
            //       setMoveImg(1);
            //     } else if (
            //       moveImg !== 2 &&
            //       x > rect.width - percent * 3 &&
            //       x <= rect.width - percent * 2
            //     ) {
            //       setMoveImg(2);
            //     } else if (
            //       moveImg !== 3 &&
            //       x > rect.width - percent * 2 &&
            //       x <= rect.width - percent
            //     ) {
            //       setMoveImg(3);
            //     } else if (
            //       moveImg !== 4 &&
            //       x > rect.width - percent &&
            //       x <= rect.width
            //     ) {
            //       setMoveImg(4);
            //     }
            //   }
            // }}
          >
            <Image
              src={originalSrc}
              alt={altText}
              priority={true}
              loading="eager"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
              layout="fill"
              objectFit="cover"
            ></Image>

            {/* {hovered && (
              <div className="absolute left-1/2 top-1/2 translate-x-[-50%] bg-white">
                <h1 className="text-sm center text-center hidden lg:block ">
                  {title}
                </h1>
                <p className="mt-1 text-sm text-center hidden lg:block">
                  {formatter.format(price)}
                </p>
              </div>
            )} */}
          </div>
        </div>

        <div className="block md:hidden">
          <h1 className="mt-0.5 center text-center text-[2.9vw] sm:text-xl">
            {title}
          </h1>
          <p className=" text-center  text-[2.9vw] sm:text-xl">
            Real Good X Person
          </p>
          <p className=" text-center text-[4.2vw] sm:text-2xl">
            {formatter.format(price)}
          </p>
        </div>

        <div
          className={`opacity-0 ${
            hovered ? "md:opacity-100" : "md:opacity-0"
          } uppercase`}
        >
          <h1
            className="mt-0.5 center text-center  sm:text-base  m-[-0.1rem]"
            // style={{ WebkitTextStrokeWidth: "2px blue" }}
          >
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

export default ProductThumbnail;

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
