/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useInterval } from "@hooks/useInterval";
import { bannerMaps } from "@maps/banner_maps";

export const MainBanner = () => {
  const [activeId, activeIdSet] = useState(0);

  useInterval(() => {
    activeIdSet(activeId === bannerMaps.length - 1 ? 0 : activeId + 1);
  }, 3000);

  return (
    <div className="w-full h-[48rem] relative">
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
              className="object-cover relative z-10"
            />
          );
        }
      })}
    </div>
  );
};
