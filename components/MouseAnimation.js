// import { useRef, useState } from "react";

// const MouseAnimation = () => {
//   const [mousePo, setMouseP] = useState();
//   const mouseP = useRef(0);

//   return (
//     <div
//       className="relative w-[80vw] h-[80vw] sm:w-[80vw] sm:h-[80vw] md:w-[26vw] md:h-[26vw] xl:w-[22vw] xl:h-[22vw]"
//       ref={mouseP}
//       onMouseMove={(e) => {
//         var rect = e.target.getBoundingClientRect();
//         mouseP = e.target.getBoundingClientRect();

//         var x = e.clientX - rect.left;

//         var percent = (rect.width * 20) / 100;

//         // if (`/shop/test/test1.webp`) {
//         //   if (moveImg !== 0 && x > 0 && x <= percent) {
//         //     setMoveImg(0);
//         //   } else if (moveImg !== 1 && x > percent && x <= percent * 2) {
//         //     setMoveImg(1);
//         //   } else if (
//         //     moveImg !== 2 &&
//         //     x > rect.width - percent * 3 &&
//         //     x <= rect.width - percent * 2
//         //   ) {
//         //     setMoveImg(2);
//         //   } else if (
//         //     moveImg !== 3 &&
//         //     x > rect.width - percent * 2 &&
//         //     x <= rect.width - percent
//         //   ) {
//         //     setMoveImg(3);
//         //   } else if (
//         //     moveImg !== 4 &&
//         //     x > rect.width - percent &&
//         //     x <= rect.width
//         //   ) {
//         //     setMoveImg(4);
//         //   }
//         // }
//       }}
//     >
//       {
//         <>
//           {/* <Image
//             src={`/shop/test/test${moveImg}.webp`}
//             alt={product.handle}
//             priority={true}
//             loading="eager"
//             placeholder="blur"
//             blurDataURL={`/_next/image?url=/shop/test/test${moveImg}.webp&w=16&q=1`}
//             layout="fill"
//             objectFit="cover"
//           ></Image>
//           <Image
//             src={`/shop/test/test${moveImg}.webp`}
//             alt={product.handle}
//             priority={true}
//             loading="eager"
//             placeholder="blur"
//             blurDataURL={`/_next/image?url=/shop/test/test${moveImg}.webp&w=16&q=1`}
//             layout="fill"
//             objectFit="cover"
//           ></Image>
//           <Image
//             src={`/shop/test/test${moveImg}.webp`}
//             alt={product.handle}
//             priority={true}
//             loading="eager"
//             placeholder="blur"
//             blurDataURL={`/_next/image?url=/shop/test/test${moveImg}.webp&w=16&q=1`}
//             layout="fill"
//             objectFit="cover"
//           ></Image>
//           <Image
//             src={`/shop/test/test${moveImg}.webp`}
//             alt={product.handle}
//             priority={true}
//             loading="eager"
//             placeholder="blur"
//             blurDataURL={`/_next/image?url=/shop/test/test${moveImg}.webp&w=16&q=1`}
//             layout="fill"
//             objectFit="cover"
//           ></Image>
//           <Image
//             src={`/shop/test/test${moveImg}.webp`}
//             alt={product.handle}
//             priority={true}
//             loading="eager"
//             placeholder="blur"
//             blurDataURL={`/_next/image?url=/shop/test/test${moveImg}.webp&w=16&q=1`}
//             layout="fill"
//             objectFit="cover"
//           ></Image> */}
//         </>
//       }
//     </div>
//   );
// };

// export default MouseAnimation;

import { useState } from "react";
import Image from "next/image";

const MouseAnimation = ({ image }) => {
  const [moveImg, setMoveImg] = useState(0);
  //   console.log(image);
  //   const { image } = image;

  return (
    <div
      className="relative w-[80vw] h-[80vw] sm:w-[80vw] sm:h-[80vw] md:w-[26vw] md:h-[26vw] xl:w-[22vw] xl:h-[22vw]"
      onMouseMove={(e) => {
        var rect = e.target.getBoundingClientRect();

        var x = e.clientX - rect.left;

        var percent = (rect.width * 20) / 100;

        if (`/shop/${image}/test1.webp`) {
          if (moveImg !== 0 && x > 0 && x <= percent) {
            setMoveImg(0);
          } else if (moveImg !== 1 && x > percent && x <= percent * 2) {
            setMoveImg(1);
          } else if (
            moveImg !== 2 &&
            x > rect.width - percent * 3 &&
            x <= rect.width - percent * 2
          ) {
            setMoveImg(2);
          } else if (
            moveImg !== 3 &&
            x > rect.width - percent * 2 &&
            x <= rect.width - percent
          ) {
            setMoveImg(3);
          } else if (
            moveImg !== 4 &&
            x > rect.width - percent &&
            x <= rect.width
          ) {
            setMoveImg(4);
          }
        }
      }}
    >
      {/* <img src={`/shop/${image}/test0.webp`}></img> */}
      <Image
        src={`/shop/${image}/test${moveImg}.webp`}
        // alt={image}
        priority={true}
        loading="eager"
        placeholder="blur"
        blurDataURL={`/_next/image?url=/shop/${image}/test${moveImg}.webp&w=16&q=1`}
        layout="fill"
        objectFit="cover"
      ></Image>
    </div>
  );
};

export default MouseAnimation;
