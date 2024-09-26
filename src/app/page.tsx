"use client";

import { MainBanner } from "@components/MainBanner/MainBanner";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import { ContentModalAbout, Modal } from "@components/Modal/Modal";
import { useState } from "react";
import { projectData } from "@/utils/DATA_MAPS/data_maps";
import { MiniProjectCard } from "@/components/ProjectCard/MiniProjectCard";

export default function Home() {
  const [modalAbout, modalAboutSet] = useState(false);

  const toogleModalAbout = () => {
    modalAboutSet(!modalAbout);
  };

  const ProjectContent = () => {
    const components = [];
    for (let i = 0; i < 5; i++) {
      if (i === 2 || i === 4) {
        components.push(
          <MiniProjectCard
            key={projectData[i].id}
            image={projectData[i].image}
            imageLabel={projectData[i].imageLabel}
            projectName={projectData[i].projectName}
            containerStyle="h-72"
            overlayStyle="px-10 py-14 text-5xl"
          />
        );
      } else {
        components.push(
          <MiniProjectCard
            key={projectData[i].id}
            image={projectData[i].image}
            imageLabel={projectData[i].imageLabel}
            projectName={projectData[i].projectName}
            containerStyle="col-span-2 h-72"
            overlayStyle="px-20 py-16 text-6xl"
          />
        );
      }
    }

    return components;
  };

  return (
    <div className="static">
      <Modal
        show={modalAbout}
        onClose={toogleModalAbout}
        onPressButton={toogleModalAbout}
        btnLabel="go back"
      >
        <ContentModalAbout />
      </Modal>
      <MainBanner />

      {/* About us section */}
      <section className="bg-thirdgray mx-24 mt-28 flex flex-row py-8 px-24 gap-10">
        <div className=" basis-7/12 relative">
          <div className="h-[17.5rem] w-[18rem] absolute">
            <Image
              src="/assets/gallery3.jpg"
              fill
              sizes="100"
              alt="gallery image 3"
              quality={80}
              className="object-cover z-10"
            />
          </div>
          <div className="h-[10rem] w-[18rem] absolute -bottom-24">
            <Image
              src="/assets/gallery1.jpg"
              fill
              sizes="100"
              alt="gallery image 1"
              quality={80}
              className="object-cover z-10"
            />
          </div>
          <div className="h-[22.5rem] w-[19rem] absolute right-0 top-6">
            <Image
              src="/assets/gallery2.jpg"
              fill
              sizes="100"
              alt="gallery image 2"
              quality={80}
              className="object-cover z-10"
            />
          </div>
        </div>
        <div className="basis-5/12">
          <div className=" text-6xl text-fourthGray font-light">About</div>
          <p className="py-8 text-maingray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
          <button
            onClick={toogleModalAbout}
            className="flex flex-row items-center mt-5 bg-white w-max py-6 pl-10 pr-20 gap-4 select-none text-maingray hover:bg-maingray transition-all duration-200 hover:text-white"
          >
            <div className="uppercase tracking-widest text-xs   ">
              read more
            </div>
            <HiArrowLongRight size={20} />
          </button>
        </div>
      </section>

      {/* Main Focus section */}
      <section className="mt-56 mx-24 text-fourthGray">
        <h1 className="capitalize text-6xl font-light">
          main focus/mission statement
        </h1>
        <div className="grid grid-cols-2 gap-14">
          <div className="flex flex-row items-center">
            <div className="text-[12rem] font-black opacity-20">1</div>
            <p className="text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
            </p>
          </div>
          <div className="flex flex-row items-center gap-6">
            <div className="text-[12rem] font-black opacity-20">2</div>
            <p className="text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
            </p>
          </div>
        </div>
      </section>

      {/* Project section */}
      <section className="my-28 mx-24 text-fourthGray">
        <h1 className="capitalize text-6xl font-light">Our Projects</h1>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <ProjectContent />
          {/* <div className="col-span-2 w-full h-72 relative group">
            <div className="absolute z-20 bg-maingray w-full h-full opacity-0 transition-all duration-200 group-hover:opacity-80 px-20 py-16">
              <h1 className="text-white text-6xl font-bold max-w-36">
                Sample Project
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
              src="/assets/main-banner2.jpg"
              fill
              sizes="100"
              alt="gallery image 2"
              quality={80}
              className="object-cover z-10"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
}
