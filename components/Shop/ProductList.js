import ProductThumbnail from "./ProductThumbnail";

const ProductList = ({ products }) => {
  return (
    <div className="mx-auto py-16 px-5 sm:py-24 sm:px-6 lg:px-5">
      <div className="grid grid-cols-2 gap-y-5 gap-x-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
        {products.map((product) => (
          <ProductThumbnail key={product.node.id} product={product} />
        ))}
        {/* <div className="p-[5%]">
        <StoreThumbnail />
      </div>
      <div className="p-[5%]">
        <StoreThumbnail />
      </div>
      <div className="p-[5%] ">
        <StoreThumbnail />
      </div>
      <div className="p-[5%]">
        <StoreThumbnail />
      </div>
      <div className="p-[5%]">
        <StoreThumbnail />
      </div> */}
      </div>
    </div>
  );
};

export default ProductList;
