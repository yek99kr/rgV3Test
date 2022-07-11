import { motion } from "framer-motion";
import StoreList from "../components/Store/StoreList";

const store = ({ router }) => {
  return (
    <>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <StoreList />
      </motion.div>
    </>
  );
};

export default store;
