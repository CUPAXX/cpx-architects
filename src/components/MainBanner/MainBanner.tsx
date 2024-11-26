/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useInterval } from "@hooks/useInterval";
import { bannerMaps } from "@maps/banner_maps";

export const MainBanner = () => {
  const [activeId, activeIdSet] = useState(0);
  const [isFade, isFadeSet] = useState(false);

  useInterval(() => {
    activeIdSet(activeId === bannerMaps.length - 1 ? 0 : activeId + 1);
    isFadeSet(false);
  }, 4000);

  return (
    <div className="static">
      <div className="w-full h-[48rem]  relative">
        <div className="bg-white absolute h-full w-full z-20 opacity-20" />
        {bannerMaps.map((res) => {
          if (res.id === activeId) {
            return (
              <Image
                key={res.id}
                src={res.path}
                fill
                sizes="100vw"
                alt={res.label}
                placeholder="blur"
                blurDataURL={res.blurData}
                quality={80}
                onLoad={() => isFadeSet(true)}
                className={`object-cover relative z-10 transition-all delay-300 duration-1000 ${
                  isFade ? "opacity-100" : "opacity-0"
                }`}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
