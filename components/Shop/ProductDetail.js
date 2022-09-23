// import ProductForm from "./ProductForm";

// const ProductDetail = ({ product }) => {
//   return (
//     <>
//       {/* <div className="relative grid place-items-center w-[100vw] grid-cols-2 md:grid-cols-5 gap-y-[2vw] pt-[10vh] "> */}
//       <div className="flex pt-[10vh] flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
//         <div className="w-full bg-white md:w-1/2 pointer-events-none">
//           <div className="relative h-[40vw]  w-[50vw]">

//           </div>
//         </div>

//         <ProductForm product={product} />
//       </div>
//     </>
//   );
// };

// export default ProductDetail;

import Image from "next/image";
import ProductForm from "./ProductForm";
import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import SwiperCore, { Navigation, Pagination } from "swiper";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductPageContent({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [];
  const thumbnails = [];

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        {/* <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        /> */}

        <img
          src={image.node.originalSrc}
          alt={image.node.altText}
          className="w-full "
        />
      </SwiperSlide>
    );
  });

  product.images.edges.map((image, i) => {
    thumbnails.push(
      <SwiperSlide key={`slide-${i}`} className=" z-[500] pointer-events-auto">
        {/* <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        /> */}

        <img
          src={image.node.originalSrc}
          alt={image.node.altText}
          className="w-full bg-black"
        />
      </SwiperSlide>
    );
  });

  // SwiperCore.use([Navigation, Pagination]);

  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 mx-auto mt-[6vh]">
        {/* <div className="h-[80vw]"> */}
        <div className="w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] m-5 rounded">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-full h-full"
          >
            {images}
          </Swiper>
        </div>

        {/* <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper w-[45vw] h-[10vw] z-[100 mt-[10vw] pointer-events-auto"
          >
            {thumbnails}
          </Swiper> */}
        {/* </div> */}

        <ProductForm product={product} />
      </div>
    </>
  );
}
