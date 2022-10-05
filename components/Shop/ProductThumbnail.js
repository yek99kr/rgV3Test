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

  return (
    <Link href={`/shop/${handle}`} passHref scroll={false}>
      <a className="group thumbcursor">
        <div
          className="overflow-hidden thumbcursor"
          onMouseOver={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <div className="relative w-[45vw] h-[45vw] sm:w-[45vw] sm:h-[45vw] md:w-[30vw] md:h-[30vw] xl:w-[24vw] xl:h-[24vw] select-none lg:mb-10">
            <Image
              src={originalSrc}
              objectFit="cover"
              alt={altText}
              layout="fill"
              placeholder="blur"
              priority={true}
              blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
            />
            {/* 
            {hovered && (
              <div className="absolute left-1/2 top-1/2 translate-x-[-50%] bg-white">
                <h1 className="mt-1 text-sm center text-center hidden lg:block ">
                  {title}
                </h1>
                <p className="mt-1 text-sm text-center hidden lg:block">
                  {formatter.format(price)}
                </p>
              </div>
            )} */}
          </div>
        </div>
        <h1 className="mt-0.5 center text-center  text-[2.9vw] sm:text-sm md:text-base">
          {title}
        </h1>
        <p className=" text-center  text-[2.9vw] sm:text-sm md:text-base">
          {formatter.format(price)}
        </p>
      </a>
    </Link>
    // <Link href={`/shop/${handle}`} passHref scroll={false}>
    //   <a className="group thumbcursor">
    //     <div className="w-full overflow-hidden ">
    //       <div
    //         className="relative w-[45vw] h-[45vw] sm:w-[45vw] sm:h-[45vw] md:w-[30vw] md:h-[30vw] xl:w-[24vw] xl:h-[24vw]"
    //         onMouseMove={(e) => {
    //           var rect = e.target.getBoundingClientRect();
    //           var x = e.clientX - rect.left;

    //           var percent = (rect.width * 20) / 100;

    //           if (product.node.images.edges[1]) {
    //             if (moveImg !== 0 && x > 0 && x <= percent) {
    //               setMoveImg(0);
    //             } else if (moveImg !== 1 && x > percent && x <= percent * 2) {
    //               setMoveImg(1);
    //             } else if (
    //               moveImg !== 2 &&
    //               x > rect.width - percent * 3 &&
    //               x <= rect.width - percent * 2
    //             ) {
    //               setMoveImg(2);
    //             } else if (
    //               moveImg !== 3 &&
    //               x > rect.width - percent * 2 &&
    //               x <= rect.width - percent
    //             ) {
    //               setMoveImg(3);
    //             } else if (
    //               moveImg !== 4 &&
    //               x > rect.width - percent &&
    //               x <= rect.width
    //             ) {
    //               setMoveImg(4);
    //             }
    //           }
    //         }}
    //       >
    //         <Image
    //           src={originalSrc}
    //           alt={altText}
    //           priority={true}
    //           // loading="eager"
    //           placeholder="blur"
    //           blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
    //           layout="fill"
    //           objectFit="cover"
    //         ></Image>
    //       </div>
    //     </div>
    //   </a>
    // </Link>
  );
};

export default ProductThumbnail;
