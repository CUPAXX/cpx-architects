/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { defaultBlurImage, galleryData } from "@/utils/DATA_MAPS/data_maps";
import { galleryImageData } from "./galleryTypes";

export const GalleryCard = ({ imageData }: { imageData: galleryImageData }) => {
  const [isFullscreen, isFullscreenSet] = useState(false);
  const [activeData, activeDataSet] = useState<galleryImageData>({
    id: 0,
    image: "",
    label: "",
  });
  const [prevId, prevIdSet] = useState(1);
  const [nextId, nextIdSet] = useState(2);

  const handlePrev = () => {
    const getData = galleryData.find((el) => el.id === prevId);
    if (getData) {
      activeDataSet(getData);

      if (getData.id > 1) {
        prevIdSet(getData.id - 1);
      } else {
        prevIdSet(getData.id);
      }

      if (getData.id < galleryData.length) {
        nextIdSet(getData.id + 1);
      } else {
        nextIdSet(getData.id);
      }
    }
  };

  const handleNext = () => {
    const getData = galleryData.find((el) => el.id === nextId);
    if (getData) {
      if (getData.id < galleryData.length) {
        nextIdSet(getData.id + 1);
      } else {
        nextIdSet(getData.id);
      }

      if (getData.id > 1) {
        prevIdSet(getData.id - 1);
      } else {
        prevIdSet(getData.id);
      }
      activeDataSet(getData);
    }
  };

  useEffect(() => {
    if (isFullscreen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isFullscreen]);

  const handleFullscreen = (id: number) => {
    console.log("this from vlick", id);
    isFullscreenSet(!isFullscreen);
    const getData = galleryData.find((el) => el.id === id);
    if (getData) {
      activeDataSet(getData);
    }
    if (id > 1) {
      prevIdSet(id - 1);
    } else {
      prevIdSet(id);
    }
    if (id < galleryData.length) {
      nextIdSet(id + 1);
    } else {
      nextIdSet(id);
    }
  };

  return (
    <div className="">
      <div
        className={`fixed flex flex-col justify-center items-center top-0 left-0 backdrop-blur-md backdrop-brightness-15 bg-black/40 z-50 w-full h-full ${
          isFullscreen ? "visible" : "invisible"
        }`}
      >
        <IoClose
          onClick={() => handleFullscreen(activeData.id)}
          size={45}
          className={`text-maingray hover:text-red-500 bg-white border-maingray border-4 hover:border-red-500 rounded-full cursor-pointer absolute right-8 z-50 duration-300 delay-200 ${
            isFullscreen
              ? "top-8 transition-all animate-bounce"
              : "-top-16 transition-none"
          }`}
        />
        <div className="w-full h-full flex justify-center items-center gap-8">
          <IoChevronBack
            size={45}
            onClick={handlePrev}
            className={`text-maingray hover:text-blue-500 bg-white border-maingray border-4 hover:border-blue-500 rounded-full cursor-pointer duration-300 scale-100 hover:scale-125 ${
              isFullscreen ? "transition-all" : "transition-none"
            }`}
          />
          <div
            className={`h-[80%] w-[80%] relative select-none duration-500 ${
              isFullscreen
                ? " opacity-100 scale-100 transition-all"
                : " opacity-0 scale-0 transition-none"
            }`}
          >
            {activeData.id > 0 && (
              <Image
                src={activeData?.image}
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL={defaultBlurImage}
                alt={activeData.label}
                quality={80}
                className="object-contain z-10"
              />
            )}
          </div>

          <IoChevronForward
            size={45}
            onClick={handleNext}
            className={`text-maingray hover:text-blue-500 bg-white border-maingray border-4 hover:border-blue-500 rounded-full cursor-pointer duration-300 transition-all scale-100 hover:scale-125 ${
              isFullscreen ? "transition-all" : "transition-none"
            }`}
          />
        </div>
      </div>
      <div
        onClick={() => handleFullscreen(imageData.id)}
        className="h-64 w-full relative cursor-pointer"
      >
        <Image
          src={imageData.image}
          fill
          sizes="100%"
          placeholder="blur"
          blurDataURL={defaultBlurImage}
          alt={imageData.label}
          quality={80}
          className="object-cover z-10 object-top select-none"
        />
      </div>
    </div>
  );
};
