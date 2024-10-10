import { contactData } from "@/utils/DATA_MAPS/data_maps";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="mx-24 grid grid-cols-5 my-6">
      <section className="col-span-2 mb-10">
        <header id="header-section" className="pb-2">
          <h1 className="text-5xl text-fourthGray font-light">Contact</h1>
          <h1 className="text-5xl text-maingray font-bold">Information</h1>
        </header>
        <div className="grid grid-cols-1 gap-8 my-6">
          <div>
            <h1 className="font-bold text-sm">Address:</h1>
            <p className="text-xs">{contactData.address}</p>
          </div>
          <div>
            <h1 className="font-bold text-sm">Phone Number:</h1>
            <p className="text-xs">
              {contactData.phone_code}
              {contactData.phone_number}
            </p>
          </div>
          <div>
            <h1 className="font-bold text-sm">Email:</h1>
            <p className="text-xs">{contactData.email}</p>
          </div>
        </div>
        <Link href={"/#contact-us-section"}>
          <h1 className="hover:bg-thirdWhite bg-maingray hover:text-maingray max-w-fit text-thirdWhite uppercase tracking-widest text-xs py-5 px-10">
            Contact Us
          </h1>
        </Link>
      </section>
      <section className="col-span-3">
        <iframe
          src={contactData.maps_embedUrl}
          className="h-[380px] w-full border-[1.5px] border-black"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Page;
