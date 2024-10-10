import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { MiniProjectCardTypes } from "./ProjectCardTypes";
import { defaultBlurImage } from "@/utils/DATA_MAPS/data_maps";

export const MiniProjectCard = ({
  projectName,
  image,
  containerStyle,
  overlayStyle,
  imageLabel,
  projectNameStyle,
}: MiniProjectCardTypes) => {
  return (
    <div className={`${containerStyle} w-full relative group`}>
      <div
        className={`${overlayStyle} absolute z-20 bg-maingray w-full h-full bg-opacity-0 transition-all duration-200 group-hover:bg-opacity-80`}
      >
        <h1
          className={`${projectNameStyle}text-white font-bold max-w-96 opacity-0 transition-all duration-500 group-hover:opacity-100`}
        >
          {projectName}
        </h1>
        <button className="uppercase text-xs text-white tracking-widest -translate-y-10 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 mt-3 flex flex-row items-center gap-4">
          <h1>View more</h1>
          <HiArrowLongRight
            size={20}
            className="transition-all duration-500 delay-200 -translate-x-10 group-hover:translate-x-0"
          />
        </button>
      </div>
      <Image
        src={image}
        fill
        sizes="100%"
        placeholder="blur"
        blurDataURL={defaultBlurImage}
        alt={imageLabel}
        quality={80}
        className="object-cover z-10"
      />
    </div>
  );
};
