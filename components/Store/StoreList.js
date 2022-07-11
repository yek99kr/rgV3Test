import StoreThumbnail from "./StoreThumbnail";

const StoreList = () => {
  return (
    <div className="grid place-items-center w-[100vw] grid-cols-1 pt-[10vh] lg:p-[14vw]gap-y-3">
      <div className="p-[5%]">
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
      </div>
    </div>
  );
};

export default StoreList;
