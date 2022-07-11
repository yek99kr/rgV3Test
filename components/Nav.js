import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <div className="fixed m-2 z-[2] text-[2.8vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] flex justify-center items-center w-screen noselect ">
      <div className="bg-white/60 rounded m-3 mr-2 p-2.5 pl-3 pr-3 backdrop-blur-sm">
        <Link href="/" passHref scroll={false}>
          <a className="thumbcursor">
            <img
              src="/logoShort.png"
              className="w-[11.3vw] sm:w-[8.5vw] md:w-[7vw] lg:w-[6vw] xl:w-[5.5vw] 2xl:w-[4.5vw]"
            />
          </a>
        </Link>
      </div>
      <div className="bg-white/60 rounded  m-3 ml-1 p-1.5 pl-2 pr-2 backdrop-blur-sm">
        <Link href="/projects" passHref scroll={false}>
          <a
            className={`p-4 thumbcursor  hover:opacity-100 transition-[0.2]
              ${
                router.pathname.includes("/projects")
                  ? "opacity-100"
                  : "opacity-50"
              }`}
          >
            Projects
          </a>
        </Link>

        <Link href="/store" passHref scroll={false}>
          <a
            className={`p-4 thumbcursor hover:opacity-100 transition-[0.2]
              ${router.pathname == "/store" ? "opacity-100" : "opacity-50"}`}
          >
            Store
          </a>
        </Link>

        <a
          href="mailto: hi@realgood.tv"
          target="_blank"
          rel="noreferrer"
          className="p-4 thumbcursor opacity-50 hover:opacity-100 transition-[0.2]"
        >
          Contact
        </a>
        <a className="p-4 thumbcursor opacity-50 hover:opacity-100 transition-[0.2]">
          Cart (0)
        </a>
      </div>
      {/* <div className="bg-white/60 rounded  m-3 ml-1 p-1.5 pr-1 pl-1 backdrop-blur-sm">
        <a className="p-4 thumbcursor opacity-50 hover:opacity-100 transition-[0.2]">
          Cart 0
        </a>
      </div> */}
    </div>
  );
};

export default Nav;
