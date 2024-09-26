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
      className={`text-sm cursor-pointer select-none border-maingray px-5 py-1 tracking-widest 
        hover:animate-pulse ${isActive ? "border-y-2" : ""} `}
      onClick={() => onPress()}
    >
      {label}
    </Link>
  );
};
