"use client";

import { MainBanner } from "@components/MainBanner/MainBanner";
import Image from "next/image";
import {
  ContentModalAbout,
  Modal,
  ContentModalSendEmail,
} from "@components/Modal/Modal";
import { useState } from "react";
import { defaultBlurImage, projectData } from "@/utils/DATA_MAPS/data_maps";
import { MiniProjectCard } from "@components/ProjectCard/MiniProjectCard";
import { Button } from "@components/Button/Button";
import { Input } from "@/components/Input/Input";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showModal, showModalSet] = useState(false);
  const [modalSection, modalSectionSet] = useState("about");
  const router = useRouter();

  const toogleModal = (section: string) => {
    showModalSet(!showModal);
    modalSectionSet(section);
  };

  const ProjectContent = () => {
    const components = [];
    for (let i = 0; i < 5; i++) {
      if (i === 2 || i === 4) {
        components.push(
          <MiniProjectCard
            key={projectData[i].id}
            projectData={projectData[i]}
            containerStyle="h-72"
            overlayStyle="px-10 py-14 text-5xl"
          />
        );
      } else {
        components.push(
          <MiniProjectCard
            key={projectData[i].id}
            projectData={projectData[i]}
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
        show={showModal}
        onClose={() => toogleModal(modalSection)}
        onPressButton={() => toogleModal(modalSection)}
        btnLabel="go back"
      >
        {modalSection === "about" ? (
          <ContentModalAbout />
        ) : (
          <ContentModalSendEmail show={showModal} />
        )}
      </Modal>
      <MainBanner />

      {/* About us section */}
      <section className="bg-thirdgray mx-5 mt-10 md:mx-10 xl:mx-24 md:mt-12 lg:mt-28 flex flex-col lg:flex-row py-8 px-5 lg:px-10 2xl:px-24 lg:gap-10 2xl:gap-14">
        <div className="lg:basis-7/12">
          <div className="relative h-60 xs:h-[20rem] md:h-[25rem] xl:h-full">
            <div className="h-24 xs:h-32 md:h-[13rem] xl:h-[15rem] w-28 xs:w-36 md:w-[20rem] lg:w-[14rem] xl:w-[16rem] absolute">
              <Image
                src="/assets/gallery3.jpg"
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL={defaultBlurImage}
                alt="gallery image 3"
                quality={80}
                layout=""
                className="object-cover z-10"
              />
            </div>
            <div className="h-16 xs:h-20 md:h-[8rem] xl:h-[9rem] w-28 xs:w-36 md:w-[16rem] lg:w-[14rem] xl:w-[16rem] absolute bottom-16 xs:bottom-20 md:bottom-8 lg:bottom-10 xl:-bottom-16">
              <Image
                src="/assets/gallery1.jpg"
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL={defaultBlurImage}
                alt="gallery image 1"
                quality={80}
                className="object-cover z-10"
              />
            </div>
            <div className="h-52 xs:h-72 md:h-[23rem] lg:h-[21rem] xl:h-[21rem] w-36 xs:w-44 md:w-[17rem] lg:w-[14rem] xl:w-[18rem] absolute right-0 xl:top-6">
              <Image
                src="/assets/gallery2.jpg"
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL={defaultBlurImage}
                alt="gallery image 2"
                quality={80}
                className="object-cover z-10"
              />
            </div>
          </div>
        </div>
        <div className="lg:basis-5/12">
          <div className="text-4xl md:text-5xl lg:text-6xl text-fourthGray font-light">
            About
          </div>
          <p className="text-xs md:text-base py-4 lg:py-8 text-maingray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
          <Button
            label="read more"
            onPress={() => {
              toogleModal("about");
              console.log("masuk");
            }}
            showArrow={true}
            type="white"
            containerStyle="mt-5 py-6 pl-10 pr-20"
          />
        </div>
      </section>

      {/* Main Focus section */}
      {/* <section className="mt-56 mx-24 text-fourthGray">
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
      </section> */}

      {/* Project section */}
      {/* <section className="my-28 mx-24 text-fourthGray flex flex-col">
        <h1 className="capitalize text-6xl font-light">Our Projects</h1>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <ProjectContent />
        </div>

        <Button
          label="all projects"
          onPress={() => router.push("/projects")}
          showArrow={true}
          containerStyle="mt-5 py-6 px-10 self-end"
        />
      </section> */}

      {/* Contact Us section */}
      {/* <section
        id="contact-us-section"
        className="my-28 mx-24 text-fourthGray flex flex-col"
      >
        <h1 className="capitalize text-6xl font-light">Contact Us</h1>
        <div className="grid grid-cols-5 gap-5 my-5">
          <form className="col-span-2 flex flex-col gap-3">
            <Input label="name" type="text" />
            <Input label="phone number" type="tel" isRequired={true} />
            <Input label="e-mail" type="email" isRequired={true} />
            <Input label="Interested In" type="text" />
            <textarea
              placeholder="message"
              rows={4}
              required
              className="invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-600 placeholder:text-fifthGray h-full text-maingray text-sm placeholder:capitalize px-4 py-4 bg-secondWhite w-full focus:ring-1 focus:ring-maingray focus:border  focus:outline-none focus:border-maingray"
            />
          </form>
          <div className="h-96 w-full relative col-span-3">
            <Image
              src="/assets/cs.jpg"
              fill
              sizes="100%"
              placeholder="blur"
              blurDataURL={defaultBlurImage}
              alt="gallery image 1"
              quality={80}
              className="object-cover z-10 object-top scale-x-[-1]"
            />
          </div>
        </div>
        <Button
          label="send email"
          onPress={() => toogleModal("send email")}
          showArrow={true}
          containerStyle="py-6 px-10 self-start mt-10"
        />
      </section> */}
    </div>
  );
}
