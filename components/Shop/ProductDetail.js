import Image from "next/image";
import ProductForm from "./ProductForm";
import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

export default function ProductPageContent({ product }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
  });
  // console.log(instanceRef);
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 8,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  // product.images.edges.map((image, i) => {
  //   images.push(
  //     <SwiperSlide key={`slide-${i}`}>
  //       <Image
  //         src={image.node.originalSrc}
  //         alt={image.node.altText}
  //         priority={true}
  //         placeholder="blur"
  //         blurDataURL={`/_next/image?url=${image.node.originalSrc}&w=16&q=1`}
  //         layout="fill"
  //         objectFit="cover"
  //       />

  //     </SwiperSlide>
  //   );
  // });

  // product.images.edges.map((image, i) => {
  //   thumbnails.push(
  //     <SwiperSlide key={`slide-${i}`} className=" z-[500] pointer-events-auto">
  //       <Image
  //         src={image.node.originalSrc}
  //         alt={image.node.altText}
  //         priority={true}
  //         placeholder="blur"
  //         blurDataURL={`/_next/image?url=${image.node.originalSrc}&w=16&q=1`}
  //         layout="fill"
  //         objectFit="cover"
  //       />
  //       {/*
  //       <img
  //         src={image.node.originalSrc}
  //         alt={image.node.altText}
  //         className="w-full bg-black"
  //       /> */}
  //     </SwiperSlide>
  //   );
  // });

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[10vh] lg:mt-[15vh] xl:mt-[8vh]">
        <div className="flex flex-col pl-[5vw] pr-[5vw] lg:ml-[5vw] lg:p-0">
          <div>
            <div
              ref={sliderRef}
              className="keen-slider max-w-[90vw] w-[90vw] h-[90vw] lg:max-w-[45vw] lg:w-[45vw] lg:h-[45vw] rounded block"
            >
              {product.images.edges.map((image, i) => {
                return (
                  <div
                    key={`number-slide${i}`}
                    className={`keen-slider__slide number-slide${i} w-full h-full`}
                  >
                    <Image
                      src={image.node.originalSrc}
                      alt={image.node.altText}
                      // priority={true}
                      placeholder="blur"
                      blurDataURL={`/_next/image?url=${image.node.originalSrc}&w=16&q=1`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                );
              })}
            </div>

            <div
              ref={thumbnailRef}
              className="keen-slider max-w-[90vw] lg:max-w-[45vw] thumbnail rounded thumbcursor mb-[2vh] lg:mb-[5vh]"
            >
              {product.images.edges.map((image, i) => {
                return (
                  <div
                    key={`number-slide${i}`}
                    className={`keen-slider__slide number-slide${i} flex justify-center items-center]`}
                  >
                    <img
                      src={image.node.originalSrc}
                      alt={image.node.altText}
                      // className="bg-gray-100"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <ProductForm product={product} />
      </div>
    </>
  );
}
