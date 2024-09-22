"use client";

import React, { useState } from "react";
import { NavItemType } from "./types";
import { navData } from "@maps/data_maps";

export const Navbar = () => {
  const [navActive, navActiveSet] = useState("main");

  return (
    <header className="px-24 py-6 uppercase font-roboto flex flex-row items-center justify-between text-maingray">
      <section className="flex flex-row items-center gap-2 select-none">
        <div className=" font-black text-3xl ">CPX</div>
        <div className="text-3xl font-regular">ARCHITECTS</div>
      </section>
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
    <nav
      className={`text-sm cursor-pointer select-none border-maingray px-5 py-1 tracking-widest 
        hover:animate-pulse ${isActive ? "border-y-2" : ""} `}
      onClick={() => onPress()}
    >
      {label}
    </nav>
  );
};
