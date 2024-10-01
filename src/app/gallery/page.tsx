"use client";

import React, { useState } from "react";
import { GalleryCard } from "@/components/GalleryCard/GalleryCard";
import { galleryData } from "@/utils/DATA_MAPS/data_maps";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Page = () => {
  const [limit] = useState(10);
  const [dataCount] = useState(galleryData.length);
  const [offset, offsetSet] = useState(0);
  const [page, pageSet] = useState(1);

  const handlePrev = () => {
    if (page > 1) {
      pageSet(page - 1);
      offsetSet(offset - limit);
    }
  };

  const handleNext = () => {
    if (Math.ceil(dataCount / limit) > page) {
      pageSet(page + 1);
      offsetSet(offset + limit);
    }
  };

  return (
    <div className="mx-24 my-24 ">
      <section>
        <header className="border-b pb-6 border-thirdWhite">
          <h1 className="text-5xl text-fourthGray font-light">About</h1>
          <h1 className="text-5xl text-maingray font-bold">Us</h1>
        </header>
      </section>
      <section className="min-h-[90vh] flex flex-col justify-between">
        <div className="grid grid-cols-5 py-5 gap-5">
          {galleryData.slice(offset, offset + limit).map((res) => (
            <GalleryCard key={res.id} imageData={res} />
          ))}
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-row items-center gap-3 mr-3">
            <h1 className="text-maingray text-2xl">{page}</h1>
            <div className="h-[1.8px] w-10 bg-fourthGray -rotate-45" />
            <h1 className="text-fourthGray text-2xl">
              {Math.ceil(dataCount / limit)}
            </h1>
          </div>
          <button
            disabled={page <= 1}
            onClick={handlePrev}
            className="bg-white border-secondWhite border-[1.8px] p-3 disabled:bg-thirdWhite transition-all duration-500 hover:scale-125"
          >
            <HiOutlineArrowLongLeft className="text-maingray" size={20} />
          </button>
          <button
            disabled={page >= Math.ceil(dataCount / limit)}
            onClick={handleNext}
            className="bg-white border-secondWhite border-[1.8px] p-3 disabled:bg-thirdWhite transition-all duration-500 hover:scale-125"
          >
            <HiOutlineArrowLongRight className="text-maingray" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
