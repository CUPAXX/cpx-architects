/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavItemType } from "./types";
import { navData } from "@maps/data_maps";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [navActive, navActiveSet] = useState("main");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      navActiveSet("main");
    } else {
      navActiveSet(pathname.slice(1));
    }
  }, [pathname]);

  return (
    <header className="px-24 py-6 uppercase flex flex-row items-center justify-between text-maingray z-20">
      <Link
        href="/"
        className="flex flex-row items-center gap-2 select-none tracking-wider"
      >
        <div className=" font-black text-3xl ">CPX</div>
        <div className="text-3xl font-regular">ARCHITECTS</div>
      </Link>
      <section className="flex flex-row gap-16">
        {navData.map((res, i) => (
          <NavItem
            key={i}
            isActive={res === navActive}
            onPress={() => navActiveSet(res)}
            label={res}
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
      <h3 className="text-sm tracking-widest px-5 py-1">{label}</h3>
      <div className="relative">
        <div
          className={`h-full bg-white absolute top-0 left-0 transition-all duration-500 group-hover:w-0 ${
            isActive ? "w-0" : "w-full"
          }`}
        />
        <div className="bg-maingray h-[1px] w-full" />
      </div>
    </Link>
  );
};
