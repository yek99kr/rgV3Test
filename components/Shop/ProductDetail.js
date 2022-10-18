import Image from "next/image";
import ProductForm from "./ProductForm";

import { useKeenSlider } from "keen-slider/react";

import Recommend from "./Recommend";

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

  const slicedArray = product.images.edges.slice(4);

  return (
    <>
      <div className="lg:ml-[5vw] grid grid-cols-1 lg:grid-cols-2 mt-[10vh] lg:mt-[15vh] xl:mt-[8vh]">
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
                    className={`keen-slider__slide number-slide${i} w-full h-full `}
                  >
                    <Image
                      src={image.node.originalSrc}
                      alt={image.node.altText}
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
              className="keen-slider max-w-[90vw] lg:max-w-[45vw] thumbnail rounded mb-[2vh] lg:mb-[5vh]"
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
                      className="thumbcursor"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <ProductForm product={product} />
      </div>
      <Recommend
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </>
  );
}
