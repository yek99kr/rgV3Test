import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./Shop/MiniCart";
import { getProductsInCollection } from "../lib/shopify";

const Nav = () => {
  const router = useRouter();

  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>
      <div className="fixed top-0 m-1.5 z-[2] text-[2.9vw] sm:text-sm md:text-base flex justify-center items-center w-screen noselect">
        <div className="bg-white/60 backdrop-blur-sm rounded m-0 mr-2 p-[0.7rem] pl-3 pr-3 ">
          <Link href="/" passHref scroll={false}>
            <a className="thumbcursor">
              <img
                src="/logoShort.png"
                className="w-[12.5vw] sm:w-[3.8rem] md:w-[4.55rem]"
              />
            </a>
          </Link>
        </div>

        <div className="bg-white/60 rounded m-3 ml-1 p-[0.44rem] sm:p-1.5 pl-1 pr-1 md:pl-2 md:pr-2 backdrop-blur-sm">
          <Link href="/projects" passHref scroll={false}>
            <a
              className={`p-[2.2vw] sm:p-4 thumbcursor  hover:opacity-100 transition-[0.2]
              ${
                router.pathname.includes("/projects")
                  ? "opacity-100"
                  : "opacity-50"
              }`}
            >
              Projects
            </a>
          </Link>

          <Link href="/shop" passHref scroll={false}>
            <a
              className={`p-[2.2vw] sm:p-4  thumbcursor  hover:opacity-100 transition-[0.2]
            ${
              router.pathname.includes("/shop") ? "opacity-100" : "opacity-50"
            }`}
            >
              Shop
            </a>
          </Link>

          <a
            href="mailto: hello@realgood.tv"
            target="_blank"
            rel="noreferrer"
            className="p-[2.2vw] sm:p-4  thumbcursor opacity-50 hover:opacity-100 transition-[0.2]"
          >
            Contact
          </a>

          <a
            href="https://www.instagram.com/real.good.studio/"
            target="_blank"
            rel="noreferrer"
            className="p-[2.2vw] sm:p-4  thumbcursor opacity-50 hover:opacity-100 transition-[0.2]"
          >
            Instagram
          </a>
          <a
            onClick={() => setCartOpen(!cartOpen)}
            className={`p-[2.2vw] sm:p-4  thumbcursor hover:opacity-100 transition-[0.2]  ${
              cartOpen ? "opacity-100" : "opacity-50"
            }`}
          >
            Cart{" "}
            <span className="relative top-[-1.4vw] sm:top-[-0.4rem] md:top-[-0.4rem]  m-[-2px] text-[1.5vw] sm:text-[7px] md:text-[10px]">
              ({cartQuantity})
            </span>
          </a>
          <MiniCart cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Nav;
