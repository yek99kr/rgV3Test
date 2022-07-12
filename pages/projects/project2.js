import { motion } from "framer-motion";
import ProjectDetail2 from "../../components/Project/ProjectDetail2";

const project = ({ router }) => {
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
        <ProjectDetail2 />
      </motion.div>
    </>
  );
};

export default project;
