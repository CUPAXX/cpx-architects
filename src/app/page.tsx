import { MainBanner } from "@components/MainBanner/MainBanner";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MainBanner />

      <section className="bg-thirdgray mx-24 mt-28 flex flex-row py-8 px-24 gap-10">
        <div className=" basis-7/12 relative">
          <div className="h-[17.5rem] w-[18rem] absolute">
            <Image
              src="/assets/gallery3.jpg"
              fill
              alt="gallery image 3"
              quality={80}
              className="object-cover z-10"
            />
          </div>
          <div className="h-[10rem] w-[18rem] absolute -bottom-24">
            <Image
              src="/assets/gallery1.jpg"
              fill
              alt="gallery image 1"
              quality={80}
              className="object-cover z-10"
            />
          </div>
          <div className="h-[22.5rem] w-[19rem] absolute right-0 top-6">
            <Image
              src="/assets/gallery2.jpg"
              fill
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
          <div className="flex flex-row items-center mt-5 bg-white w-max py-6 pl-10 pr-20 gap-4 select-none text-maingray hover:bg-maingray hover:text-white hover:animate-pulse">
            <div className="uppercase tracking-widest text-xs   ">
              read more
            </div>
            <HiArrowLongRight size={20} />
          </div>
        </div>
      </section>

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
    </div>
  );
}
