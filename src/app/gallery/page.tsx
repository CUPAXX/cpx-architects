import React from "react";
import { GalleryCard } from "@/components/GalleryCard/GalleryCard";
import { galleryData } from "@/utils/DATA_MAPS/data_maps";

const page = () => {
  return (
    <div className="mx-24 my-24 ">
      <section>
        <header className="border-b pb-6 border-thirdWhite">
          <h1 className="text-5xl text-fourthGray font-light">About</h1>
          <h1 className="text-5xl text-maingray font-bold">Us</h1>
        </header>
      </section>
      <section className="">
        <div className="grid grid-cols-5 py-5 gap-5 ">
          {galleryData.map((res) => (
            <GalleryCard key={res.id} imageData={res} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
