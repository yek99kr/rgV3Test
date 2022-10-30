import Ad from "./Ad";
import DragBackground from "./DragBackground";
import About from "./About";
import { motion } from "framer-motion";
import useMediaQueryHeight from "../../utils/useMediaQueryHeight";
import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
import useIsTouch from "../../utils/useIsTouch";

const HomePage = ({ router }) => {
  const isSmallerWidth = useMediaQueryWidth(638);
  const isSmallerHeight = useMediaQueryHeight(550);
  const isSmallestHeight = useMediaQueryHeight(349);
  const isTouch = useIsTouch();

  // w214 h379

  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden">
      {isSmallerHeight || isSmallerWidth || isTouch ? (
        <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div>
      ) : (
        <DragBackground />
      )}

      {isSmallestHeight || (!isSmallerWidth && isSmallerHeight) ? null : <Ad />}

      <motion.div
        key={router.route}
        className="w-[100vw]"
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ delay: 0.5, default: { duration: 1 } }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <About router={router} />
      </motion.div>

      {/* {isSmallestHeight || (isSmallestHeight && !isSmallestWidth) ? null : (
        <>
          <ProjectList />
          <div className="relative grid place-items-center w-[100vw] grid-cols-1 mb-[20vh]">

            <img className="w-[60vw]" src="/projectThumb/client.png"></img>
          </div>
        </>
      )} */}
    </div>
  );
};

export default HomePage;
