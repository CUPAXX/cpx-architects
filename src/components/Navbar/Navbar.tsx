/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavItemType } from "./types";
import { navData } from "@maps/data_maps";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

export const Navbar = () => {
  const [navActive, navActiveSet] = useState("main");
  const [isShow, isShowSet] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      navActiveSet("main");
    } else {
      navActiveSet(pathname.slice(1).split("/")[0]);
    }

    if (isShow) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [pathname, isShow]);

  const onPressMobileItem = (res: string) => {
    navActiveSet(res);
    isShowSet(!isShow);
  };

  return (
    <header className={`uppercase md:relative w-full fixed z-40 `}>
      <div className="xl:px-24 xl:py-6 md:px-10 md:py-6 px-4 py-3 bg-white w-full drop-shadow-md flex flex-row items-center justify-between text-maingray">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 select-none tracking-wider"
        >
          <div className=" font-black lg:text-3xl md:text-2xl text-xl">CPX</div>
          <div className="lg:text-3xl md:text-2xl text-xl font-regular">
            ARCHITECTS
          </div>
        </Link>
        <section className="hidden md:flex flex-row xl:gap-16 md:gap-4">
          {navData.map((res, i) => (
            <NavItem
              key={i}
              isActive={res === navActive}
              onPress={() => navActiveSet(res)}
              label={res}
            />
          ))}
        </section>
        {!isShow ? (
          <IoMenu
            size={25}
            className="text-maingray md:hidden"
            onClick={() => isShowSet(!isShow)}
          />
        ) : (
          <IoClose
            size={25}
            className="text-maingray md:hidden"
            onClick={() => isShowSet(!isShow)}
          />
        )}
      </div>
      <section
        className={`absolute md:hidden transition-all duration-500 w-full h-dvh flex flex-col justify-center gap-10 items-center bg-maingray ${
          isShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navData.map((res, i) => (
          <NavItemMobile
            key={i}
            isActive={res === navActive}
            onPress={() => onPressMobileItem(res)}
            label={res}
            show={isShow}
            even={i % 2 == 0}
          />
        ))}
      </section>
    </header>
  );
};

const NavItem = ({ isActive, label, onPress }: NavItemType) => {
  return (
    <Link
      href={`/${label === "main" ? "" : label}`}
      className={"cursor-pointer select-none border-maingray group"}
      onClick={() => onPress()}
    >
      <div
        className={`bg-maingray h-[1px] transition-all duration-500 group-hover:w-full ${
          isActive ? "w-full" : "w-0"
        }`}
      />
      <h3 className="lg:text-sm text-xs tracking-widest md:px-4 lg:px-5 py-1">
        {label}
      </h3>
      <div className="relative">
        <div
          className={`h-2 bg-white absolute -top-1 left-0 transition-all duration-500 group-hover:w-0 ${
            isActive ? "w-0" : "w-full"
          }`}
        />
        <div className={`bg-maingray h-[1px] w-full`} />
      </div>
    </Link>
  );
};

const NavItemMobile = ({ isActive, label, onPress, show }: NavItemType) => {
  return (
    <Link
      className={`w-full py-3 flex flex-row -mt-[1px] justify-center items-center transition-all duration-700 ${
        show ? "translate-x-0 translate-y-0" : "translate-x-full translate-y-40"
      }`}
      onClick={() => onPress()}
      href={`/${label === "main" ? "" : label}`}
    >
      <FaCaretRight
        size={15}
        className={`text-white ${isActive ? "static" : "hidden"}`}
      />
      <h3 className="text-sm tracking-widest text-white">{label}</h3>
      <FaCaretLeft
        size={15}
        className={`text-white ${isActive ? "static" : "hidden"}`}
      />
    </Link>
  );
};
