import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { formatter } from "../../utils/helpers";

const RecommendThumbnail = ({ product }) => {
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
          <div className="relative sm:ml-0 w-[43vw] h-[43vw] lg:w-[21vw] lg:h-[21vw] select-none">
            <Image
              src={originalSrc}
              objectFit="cover"
              alt={altText}
              layout="fill"
              placeholder="blur"
              priority={true}
              blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
            />

            {/* {hovered && (
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
        {/* <h1 className="mt-0.5 center text-center text-[2.5vw] sm:text-sm lg:hidden">
          {title}
        </h1>
        <p className=" text-center  text-[2.9vw] sm:text-sm lg:hidden">
          {formatter.format(price)}
        </p> */}
      </a>
    </Link>
  );
};

export default RecommendThumbnail;
