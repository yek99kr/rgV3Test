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
import useMediaQueryWidth from "../utils/useMediaQueryWidth";
import useIsTouch from "../utils/useIsTouch";
import Hands from "../components/Hands/Hands";

function MyApp({ Component, pageProps, router }) {
  const isSmallWidth = useMediaQueryWidth(750);
  const isSmallerWidth = useMediaQueryWidth(638);

  const isSmallHeight = useMediaQueryHeight(639);
  const isSmallestHeight = useMediaQueryHeight(349);
  const isTouch = useIsTouch();

  let hand;

  if (
    isSmallestHeight ||
    (!isSmallerWidth && isSmallHeight) ||
    (isSmallWidth && !isSmallHeight) ||
    isSmallerWidth ||
    isTouch
  ) {
    hand = null;
  } else {
    hand = <Hands router={router} />;
  }
  return (
    <>
      {/* <GoogleAnalytics strategy="lazyOnload" /> */}
      <Nav />
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          {hand}
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
    </>
  );
}

export default MyApp;
