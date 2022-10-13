import RecommendThumbnail from "./RecommendThumbnail";
import Link from "next/link";

const Recommend = ({ products, current }) => {
  const notCurrent = products.filter((product, i) => {
    return product.node.id !== current;
  });

  const slicedArray = notCurrent.slice(0, 4);

  return (
    <>
      <div className="w-[90vw] sm:w-[90vw] lg:w-[85vw] mx-auto py-16 sm:py-24 lg:-mt-[1rem]">
        <h2 className=" text-[4vw] sm:text-2xl text-gray-900 mb-6">
          Other Products
        </h2>
        <div className="grid grid-cols-2 gap-y-3  md:grid-cols-2 lg:grid-cols-4">
          {slicedArray.map((product) => (
            <RecommendThumbnail key={product.node.id} product={product} />
          ))}
        </div>
      </div>

      <Link href="/shop" passHref scroll={false}>
        <a>
          <div className="flex relative w-screen justify-center items-center text-[2.9vw] sm:text-sm md:text-base thumbcursor mb-[2.5rem] md:pb-[1.5rem]">
            <div className="bg-white/60 backdrop-blur-sm w-[90vw] lg:w-[400px] xl:w-[455px] rounded text-center p-3 ">
              Back to shop
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Recommend;
