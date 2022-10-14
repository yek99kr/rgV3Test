import "../styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { AnimatePresence } from "framer-motion";
import { AppContextProvider } from "../context/AppContext";
import Nav from "../components/Nav";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import useMediaQueryHeight from "../utils/useMediaQueryHeight";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

import ShopProvider from "../context/shopContext";

function MyApp({ Component, pageProps, router }) {
  const isSmallestHeight = useMediaQueryHeight(349);

  return (
    <>
      {/* <GoogleAnalytics strategy="lazyOnload" /> */}
      <ShopProvider>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          <PrismicPreview repositoryName={repositoryName}>
            {!isSmallestHeight && <Nav />}
            <AppContextProvider>
              <AnimatePresence
                exitBeforeEnter
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <Component {...pageProps} key={router.asPath} router={router} />
              </AnimatePresence>
            </AppContextProvider>
          </PrismicPreview>
        </PrismicProvider>
      </ShopProvider>
    </>
  );
}

export default MyApp;
