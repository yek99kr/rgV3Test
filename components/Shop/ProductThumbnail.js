import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { formatter } from "../../utils/helpers";

const ProductThumbnail = ({ product }) => {
  const [moveImg, setMoveImg] = useState(0);
  // console.log(product);
  const { handle, title } = product.node;
  const price = product.node.priceRange.minVariantPrice.amount;
  const { altText, originalSrc } = product.node.images.edges[0].node;

  return (
    <Link href={`/shop/${handle}`} passHref scroll={false}>
      <a className="group thumbcursor">
        <div className="overflow-hidden thumbcursor ">
          <div className="relative w-[45vw] h-[45vw] sm:w-[45vw] sm:h-[45vw] md:w-[30vw] md:h-[30vw] xl:w-[24vw] xl:h-[24vw]">
            <Image
              src={originalSrc}
              objectFit="cover"
              alt={altText}
              layout="fill"
            />
          </div>
        </div>
        <h1 className="mt-1 text-sm center text-center">{title}</h1>
        <p className="mt-1 text-sm text-center">{formatter.format(price)}</p>
      </a>
    </Link>
    // <Link href={`/projects/title`}>
    //   <a className="group thumbcursor">
    //     <div className="w-full overflow-hidden ">
    //       <div
    //         className="relative h-80 w-80"
    //         onMouseMove={(e) => {
    //           var rect = e.target.getBoundingClientRect();
    //           var x = e.clientX - rect.left;

    //           var percent = (rect.width * 25) / 100;

    //           if (product.node.images.edges[1]) {
    //             if (moveImg !== 0 && x > 0 && x < percent) {
    //               setMoveImg(0);
    //             } else if (
    //               moveImg !== 1 &&
    //               x > percent &&
    //               x < percent + percent
    //             ) {
    //               setMoveImg(1);
    //             } else if (
    //               moveImg !== 2 &&
    //               x > rect.width - percent - percent &&
    //               x < rect.width - percent
    //             ) {
    //               setMoveImg(2);
    //             } else if (
    //               moveImg !== 3 &&
    //               x > rect.width - percent &&
    //               x < rect.width
    //             ) {
    //               setMoveImg(3);
    //             }
    //           }
    //         }}
    //       >
    //         <Image
    //           src={originalSrc}
    //           alt={altText}
    //           // priority={true}
    //           // loading="eager"
    //           // placeholder="blur"
    //           // blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
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
