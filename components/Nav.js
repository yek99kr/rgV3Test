import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./Shop/MiniCart";

const Nav = () => {
  const router = useRouter();

  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <div className="fixed m-2 z-[2] text-[2.9vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] flex justify-center items-center w-screen noselect">
      <div className="bg-white/60 backdrop-blur-sm rounded m-3 mr-2 p-2.5 pl-3 pr-3 ">
        <Link href="/" passHref scroll={false}>
          <a className="thumbcursor">
            <img
              src="/logoShort.png"
              className="w-[13vw] sm:w-[8.5vw] md:w-[7vw] lg:w-[6vw] xl:w-[5.5vw] 2xl:w-[4.5vw]"
            />
          </a>
        </Link>
      </div>
      <div className="bg-white/60 rounded  m-3 ml-1 p-1.5 pl-[0.1vw] pr-[0.1vw] md:pl-2 md:pr-2 backdrop-blur-sm">
        <Link href="/projects" passHref scroll={false}>
          <a
            className={`p-[2vw] sm:p-4 thumbcursor  hover:opacity-100 transition-[0.2]
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
            className={`p-[2vw] sm:p-4  thumbcursor  hover:opacity-100 transition-[0.2]
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
          className="p-[2vw] sm:p-4  thumbcursor opacity-50 hover:opacity-100 transition-[0.2]"
        >
          Contact
        </a>

        <a
          href="https://www.instagram.com/real.good.studio/"
          target="_blank"
          rel="noreferrer"
          className="p-[2vw] sm:p-4  thumbcursor opacity-50 hover:opacity-100 transition-[0.2]"
        >
          Instagram
        </a>
        <a
          onClick={() => setCartOpen(!cartOpen)}
          className={`p-[2vw] sm:p-4  thumbcursor hover:opacity-100 transition-[0.2]  ${
            cartOpen ? "opacity-100" : "opacity-50"
          }`}
        >
          Cart{" "}
          <span className="relative top-[-0.3vw] m-[-2px] text-[2vw] sm:text-[1.5vw] md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.65vw]">
            ({cartQuantity})
          </span>
        </a>
        <MiniCart cart={cart} />
      </div>
    </div>
  );
};

export default Nav;
