import { RichText } from "prismic-reactjs";

const DetailText = ({ slice }) => {
  return (
    <>
      <div className="col-start-3 relative leading-5 md:leading-7 md:text-[22px] text-center w-[90vw] md:w-[700px] lg:w-[800px] mt-[3.5vw] mb-[3.5vw] md:mt-[40px] md:mb-[40px] lg:mt-[50px] lg:mb-[50px]">
        <div className="text-left">
          {slice.primary.text ? <RichText render={slice.primary.text} /> : null}
        </div>
      </div>
    </>
  );
};

export default DetailText;
