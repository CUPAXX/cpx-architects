import React from "react";
import { Button } from "../Button/Button";
import Image from "next/image";
import { ProjectCardTypes } from "./ProjectCardTypes";
import { defaultBlurImage } from "@/utils/DATA_MAPS/data_maps";

export const MainProjectCard = ({ projectData, onPress }: ProjectCardTypes) => {
  return (
    <div className="grid grid-cols-5">
      <div className="relative h-[445px] w-full col-span-3">
        <Image
          src={projectData.image}
          fill
          sizes="100%"
          placeholder="blur"
          blurDataURL={defaultBlurImage}
          alt={projectData.imageLabel}
          quality={80}
          className="object-cover"
        />
      </div>
      <section className="col-span-2 bg-secondWhite p-8 flex flex-col justify-between">
        <h1 className="font-light text-4xl text-fourthGray">
          {projectData.projectName}
        </h1>
        <p className="font-light pr-8 line-clamp-5">
          {projectData.description}
        </p>
        <div>
          <Button
            label="view more"
            onPress={onPress}
            showArrow={true}
            type="white"
            containerStyle="py-6 pl-10 pr-16"
          />
        </div>
      </section>
    </div>
  );
};
