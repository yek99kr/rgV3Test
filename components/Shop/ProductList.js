import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
import useIsTouch from "../../utils/useIsTouch";
import ProductThumbnailDesktop from "./ProductThumbnailDesktop";
import ProductThumbnailMobile from "./ProductThumbnailMobile";

const ProductList = ({ products }) => {
  const isSmallestHeight = useMediaQueryWidth(768);
  const isTouch = useIsTouch();
  const mouseAnimation = isSmallestHeight || isTouch;

  const classes = [
    "md:top-[6vw] md:rotate-[10deg] md:col-start-1 ",
    "md:top-[3vw] md:rotate-[-8deg] md:col-start-3",
    "md:top-[0vw] md:rotate-[9deg] md:col-start-5 ",
    "md:top-[2vw] md:rotate-[3deg] md:col-start-2 md:-ml-20 ",
    "md:top-[1vw] md:rotate-[-4deg] md:col-start-4 md:-mr-20 ",
    "md:top-[-3vw] md:rotate-[10deg] md:col-start-1 ",
    "md:top-[3vw] md:rotate-[-8deg] md:col-start-3",
    "md:top-[0vw] md:rotate-[9deg] md:col-start-5 ",
  ];
  return (
    <div className="md:w-[90vw] w-[100vw] h-[100vh] text-[4vw] 4xs:text-[4vw] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[25px]">
      {/* <div className="mx-auto py-16 px-5 sm:px-6 lg:px-0 sm:mt-[1rem] md:w-[90vw] lg:w-[80vw] xl:w-[75vw] "> */}
      {/* <div className="grid grid-cols-1 gap-y-0 md:gap-x-1 md:grid-cols-5">
        {products.map((product, i) => (
          <div
            className={`relative ${
              classes[i % classes.length]
            } mb-1 md:mb-20 justify-self-center`}
            key={product.node.id}
          >
            {!mouseAnimation ? (
              <ProductThumbnailDesktop product={product} size={24} />
            ) : (
              <ProductThumbnailMobile product={product} />
            )}
          </div>
        ))}
      </div> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] font-bold ">
        {/* <span className="wiggle1 text-pink-500">s</span>
        <span className="wiggle2 text-sky-400">h</span>
        <span className="wiggle3 text-yellow-500">o</span>
        <span className="wiggle4 text-purple-500">p</span>{" "} */}
        <span className="wiggle1 text-pink-500">c</span>
        <span className="wiggle2 text-sky-400">o</span>
        <span className="wiggle3 text-yellow-500">m</span>
        <span className="wiggle4 text-purple-500">i</span>
        <span className="wiggle5 text-green-500">n</span>
        <span className="wiggle6 text-pink-500">g</span>{" "}
        <span className="wiggle7 text-sky-400">s</span>
        <span className="wiggle8 text-yellow-500">o</span>
        <span className="wiggle9 text-purple-500">o</span>
        <span className="wiggle1 text-pink-500">n</span>
      </div>
    </div>
    // <div className="mx-auto py-16 px-5 sm:py-24 sm:px-6 lg:px-0 lg:-mt-[2rem] md:w-[90vw] lg:w-[80vw] xl:w-[75vw] ">
    //   <div className="grid grid-cols-1 gap-y-0 md:gap-x-1 md:grid-cols-5">
    //     {products.map((product, i) => (
    //       <div
    //         key={product.node.id}
    //         className={`relative ${
    //           classes[i % classes.length]
    //         } mb-1 md:mb-20 justify-self-center `}
    //       >
    //         {!mouseAnimation ? (
    //           <ProductThumbnailDesktop
    //             key={product.node.id}
    //             product={product}
    //           />
    //         ) : (
    //           <ProductThumbnailMobile key={product.node.id} product={product} />
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default ProductList;
