import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./Shop/MiniCart";
// import { getProductsInCollection } from "../lib/shopify";

const Nav = () => {
  const router = useRouter();

  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [copyed, setCopyed] = useState(false);

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>
      <div className="fixed top-0 mt-[3.5vw] 2xs:mt-4 xs:mt-4 sm:mt-4 z-[1000] text-[2.9vw] sm:text-sm md:text-base flex justify-center items-center w-screen select-none">
        <div className="bg-white/60 backdrop-blur-sm rounded m-0 mr-[1.8vw] sm:mr-3 p-[2.4vw] sm:p-[0.75rem] pl-[2.5vw] pr-[2.5vw] sm:pl-3 sm:pr-3 select-none">
          <Link href="/" passHref scroll={false}>
            <a className="thumbcursor">
              <img
                src="/logoShort.png"
                alt="logo"
                className="w-[12.5vw] sm:w-[3.8rem] md:w-[4.55rem]"
              />
            </a>
          </Link>
        </div>

        <div className="bg-white/60 rounded p-[1.7vw] sm:p-[0.44rem] backdrop-blur-sm">
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
            href="https://www.instagram.com/real.good.studio/"
            target="_blank"
            rel="noreferrer"
            className="p-[2.2vw] sm:p-4  thumbcursor opacity-50 hover:opacity-100 transition-[0.2]"
          >
            Instagram
          </a>

          <a
            onClick={() => {
              navigator.clipboard.writeText("hello@realgood.tv");
              setCopyed(true);
            }}
            // target="_blank"
            // rel="noreferrer"
            className="p-[2.2vw] sm:p-4  thumbcursor opacity-50 hover:opacity-100 transition-[0.2]"
          >
            Contact
          </a>

          <a
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
            className={`p-[2.2vw] sm:p-4  thumbcursor hover:opacity-100 transition-[0.2]  ${
              cartOpen ? "opacity-100" : "opacity-50"
            }`}
          >
            Cart{" "}
            <span className="relative top-[-1.4vw] sm:top-[-0.4rem] md:top-[-0.4rem]  m-[-0.4vw] sm:m-[-2px] text-[1.5vw] sm:text-[7px] md:text-[10px]">
              ({cartQuantity})
            </span>
          </a>
          <MiniCart cart={cart} />
        </div>
      </div>

      <div
        className={`flex fixed w-screen justify-center items-center mt-[3.5vw] 2xs:mt-[4rem] xs:mt-[4.5rem] sm:mt-[4.5rem] text-[2.9vw] sm:text-sm md:text-base z-[1000] pointer-events-none  ${
          copyed ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.8s" }}
        onTransitionEnd={() => setCopyed(false)}
      >
        <div className="bg-white/60 backdrop-blur-sm w-[65vw] sm:w-[300px] md:w-[400px] rounded text-center p-2.5 ">
          <span>hello@realgood.tv copyed to clipboard</span>
        </div>
      </div>
    </>
  );
};

export default Nav;
