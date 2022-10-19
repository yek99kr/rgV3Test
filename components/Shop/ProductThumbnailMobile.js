import Link from "next/link";
import Image from "next/image";
import { formatter } from "../../utils/helpers";

const ProductThumbnailMobile = ({ product }) => {
  const { handle, title } = product.node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/shop/${handle}`} passHref scroll={false}>
      <a className="group thumbcursor">
        {
          <div className="w-full overflow-hidden">
            <div className="relative w-[80vw] h-[80vw]">
              <Image
                src={`/shop/test-1/test0.webp`}
                // alt={altText}
                priority={true}
                loading="eager"
                // placeholder="blur"
                // blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </div>
        }

        <div className="block">
          <h1 className="mt-0.5 center text-center text-[2.9vw] sm:text-xl">
            {title}
          </h1>
          <p className=" text-center  text-[2.9vw] sm:text-xl">
            Real Good X Person
          </p>
          <p className=" text-center text-[4.2vw] sm:text-2xl">
            {formatter.format(price)}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProductThumbnailMobile;
