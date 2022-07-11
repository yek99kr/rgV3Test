import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const StoreThumbnail = () => {
  const [moveImg, setMoveImg] = useState(0);

  return (
    <Link href={`/store/product`}>
      <div className="w-[55vw] h-[55vw] lg:w-[30vw] lg:h-[30vw] rounded-full bg-gray-300 thumbcursor"></div>
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

export default StoreThumbnail;
