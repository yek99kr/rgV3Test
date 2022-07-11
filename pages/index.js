import HomePage from "../components/Home/HomePage";
import { motion } from "framer-motion";

export default function Home({ router }) {
  return (
    <div>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{ delay: 0.3, default: { duration: 0.7 } }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
        <HomePage router={router} />
        <div className="w-[100vw] h-[50vw] relative"> hello</div>
      </motion.div>
    </div>
  );
}
