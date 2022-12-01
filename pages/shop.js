import { motion } from "framer-motion";
import ProductList from "../components/Shop/ProductList";
import { getProductsInCollection } from "../lib/shopify";

const store = ({ router, products }) => {
  return (
    <>
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
        className="fixed overflow-hidden w-[100vw] h-[100vw]"
      >
        <ProductList products={products} />
      </motion.div>
    </>
  );
};

export default store;

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products },
  };
}
