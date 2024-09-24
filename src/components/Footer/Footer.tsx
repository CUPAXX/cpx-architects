import { navData, contactData } from "@maps/data_maps";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-between bg-secondgray w-full">
      <section className="text-secondWhite p-10 grid grid-cols-4">
        <section className="font-black text-2xl tracking-wider">
          <p>CPX</p>
          <p className="font-normal">Architects</p>
        </section>
        <section className="flex flex-col gap-5">
          <p className="pb-2">Information</p>
          {navData.map((res, i) => (
            <nav
              className="capitalize text-xs cursor-pointer select-none w-fit"
              key={i}
            >
              {res}
            </nav>
          ))}
        </section>
        <section className="flex flex-col gap-5">
          <p className="pb-2">Contacts</p>
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
        <section className="flex flex-col gap-5">
          <p className="pb-2">Social Media</p>
          <div className="flex flex-row gap-10">
            <FaFacebookF size={22} />
            <FaTwitter size={22} />
            <FaLinkedin size={22} />
            <FaPinterestP size={22} />
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
