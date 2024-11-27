import { navData, contactData } from "@maps/data_maps";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-between bg-maingray w-full relative z-30">
      <section className="text-secondWhite p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-0">
        <Link
          href={"/"}
          className="font-black text-2xl tracking-wider flex flex-row gap-3 lg:gap-0 pb-2 md:pb-5 lg:pb-0 lg:flex-col md:col-span-3 lg:col-span-1"
        >
          <p>CPX</p>
          <p className="font-normal">Architects</p>
        </Link>
        <section className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-5">
          <p className="pb-1 md:pb-2 col-span-2 md:col-span-1">Information</p>
          {navData.map((res, i) => (
            <Link
              href={`/${res === "main" ? "" : res}`}
              className="capitalize text-xs cursor-pointer select-none w-fit"
              key={i}
            >
              {res}
            </Link>
          ))}
        </section>
        <section className="flex flex-col gap-2 md:gap-5">
          <p className="pb-1 md:pb-2">Contacts</p>
          <div className="flex flex-row gap-5">
            <FiMapPin size={18} />

            <p className="text-xs basis-9/12">{contactData.address}</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <FiPhone size={18} />

            <p className="text-xs">
              {`(${contactData.phone_code}) ` + contactData.phone_number}
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <FiMail size={18} />

            <p className="text-xs">{contactData.email}</p>
          </div>
        </section>
        <section className="flex flex-col gap-2 md:gap-5">
          <p className="pb-1 md:pb-2">Social Media</p>
          <div className="flex flex-row gap-10">
            <Link href={"https://www.instagram.com/xfiqryx/"}>
              <FaFacebookF size={22} />
            </Link>
            <Link href={"https://www.instagram.com/xfiqryx/"}>
              <FaTwitter size={22} />
            </Link>
            <Link href={"https://www.linkedin.com/in/fiqry-arahmansyah/"}>
              <FaLinkedin size={22} />
            </Link>
            <Link href={"https://github.com/CUPAXX"}>
              <FaPinterestP size={22} />
            </Link>
          </div>
        </section>
      </section>
      <section className="border-t opacity-50 py-5 mt-5">
        <p className="text-thirdWhite text-[0.7rem] text-center">
          © 2024 All Rights Reserved
        </p>
      </section>
    </footer>
  );
};
