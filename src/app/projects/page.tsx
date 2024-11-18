"use client";

import React, { useState } from "react";
import { projectData } from "@maps/data_maps";
import { MainProjectCard } from "@components/ProjectCard/MainProjectCard";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { useRef } from "react";
import Link from "next/link";

const Page = () => {
  const projectContainerRef = useRef<null | HTMLDivElement>(null);
  const [limit] = useState(3);
  const [dataCount] = useState(projectData.length);
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
      handleScrollPage();
    }
  };

  const handleScrollPage = () => {
    projectContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="mx-24 my-24 ">
      <section>
        <header id="header-section" className="border-b pb-6 border-thirdWhite">
          <h1 className="text-5xl text-fourthGray font-light">Our</h1>
          <h1 className="text-5xl text-maingray font-bold">Projects</h1>
        </header>
      </section>
      <section className=" flex flex-col justify-between">
        <div className="grid grid-cols-1 py-5 gap-10">
          {projectData.slice(offset, offset + limit).map((res) => (
            <MainProjectCard key={res.id} projectData={res} />
          ))}
        </div>
        <div className="flex flex-row gap-3 mt-8">
          <div className="flex flex-row items-center gap-3 mr-3">
            <h1 className="text-maingray text-2xl">{page}</h1>
            <div className="h-[1.8px] w-10 bg-fourthGray -rotate-45" />
            <h1 className="text-fourthGray text-2xl">
              {Math.ceil(dataCount / limit)}
            </h1>
          </div>
          <Link
            href={"#header-section"}
            aria-disabled={page <= 1}
            onClick={handlePrev}
            className={`bg-white border-secondWhite border-[1.8px] p-3 aria-disabled:bg-thirdWhite transition-all duration-500 hover:scale-125 ${
              page <= 1 ? "pointer-events-none" : ""
            }`}
          >
            <HiOutlineArrowLongLeft className="text-maingray" size={20} />
          </Link>
          <Link
            href={"#header-section"}
            aria-disabled={page >= Math.ceil(dataCount / limit)}
            onClick={handleNext}
            className={`bg-white border-secondWhite border-[1.8px] p-3 aria-disabled:bg-thirdWhite transition-all duration-500 hover:scale-125 ${
              page >= Math.ceil(dataCount / limit) ? "pointer-events-none" : ""
            }`}
          >
            <HiOutlineArrowLongRight className="text-maingray" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
