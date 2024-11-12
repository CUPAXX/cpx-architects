"use client";

import { projectData, defaultBlurImage } from "@/utils/DATA_MAPS/data_maps";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ id: string }>();

  const detailProject = projectData.find((res) => res.id === Number(params.id));

  console.log(detailProject);
  return (
    <div className="mx-24 my-24 ">
      <section>
        <header id="header-section" className="border-b pb-6 border-thirdWhite">
          <h1 className="text-5xl text-fourthGray font-light">Our</h1>
          <h1 className="text-5xl text-maingray font-bold">Projects</h1>
        </header>
      </section>

      {detailProject !== undefined ? (
        <section className="flex flex-col gap-8">
          <div className="relative h-[445px] w-full">
            <Image
              src={detailProject.image}
              fill
              sizes="100%"
              placeholder="blur"
              blurDataURL={defaultBlurImage}
              alt={detailProject.imageLabel}
              quality={80}
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="relative h-[420px] w-full">
              <Image
                src={detailProject.image2}
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL={defaultBlurImage}
                alt={detailProject.imageLabel2}
                quality={80}
                className="object-cover"
              />
            </div>
            <p className="col-span-2 font-light">{detailProject.description}</p>
          </div>
          <div className="relative h-[445px] w-full">
            <Image
              src={detailProject.image3}
              fill
              sizes="100%"
              placeholder="blur"
              blurDataURL={defaultBlurImage}
              alt={detailProject.imageLabel3}
              quality={80}
              className="object-cover"
            />
          </div>
        </section>
      ) : (
        <div className="text-center text-4xl font-bold">404 Data Not found</div>
      )}
    </div>
  );
};

export default Page;
