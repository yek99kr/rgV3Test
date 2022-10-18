import Link from "next/link";
import Image from "next/image";

const ProjectThumbnailMobile = ({ project }) => {
  return (
    <Link href={`/projects/${project.uid}`} passHref scroll={false}>
      <a className="group thumbcursor">
        {
          <div className="w-full overflow-hidden">
            <div className="relative w-[80vw] h-[80vw]">
              <Image
                src={`/shop/test/test0.webp`}
                // alt={altText}
                priority={true}
                loading="eager"
                // placeholder="blur"
                // blurDataURL={`/_next/image?url=${originalSrc}&w=16&q=1`}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </div>
        }

        <div className="block">
          <h1 className="mt-0.5 center text-center text-[2.9vw] sm:text-xl">
            Year
          </h1>
          <p className=" text-center  text-[2.9vw] sm:text-xl">Title</p>
        </div>
      </a>
    </Link>
  );
};

export default ProjectThumbnailMobile;
