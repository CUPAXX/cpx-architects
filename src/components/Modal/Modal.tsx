"use client";

import React, { FC, useEffect } from "react";
import { ModalTypes } from "./ModalTypes";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Modal: FC<ModalTypes> = ({
  show,
  onClose,
  onPressButton,
  mainContentStyle,
  btnLabel,
  children,
}) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [show]);

  return (
    <div
      className={`bg-black/40 fixed w-full h-full z-50 backdrop-blur-md backdrop-brightness-15 flex items-center justify-center top-0 ${
        !show ? "hidden" : "flex"
      }`}
    >
      <section className="w-max max-w-[60rem] h-max max-h-[90vh] bg-white px-2 py-2 flex flex-col items-center rounded-sm">
        <IoCloseCircleOutline
          onClick={onClose}
          size={30}
          className="text-maingray opacity-60 hover:opacity-100 cursor-pointer self-end"
        />
        <main className={`${mainContentStyle} overflow-y-hidden`}>
          {children}
        </main>
        <button
          className="bg-maingray text-thirdWhite text-xs uppercase tracking-widest py-3 w-1/2 my-8 hover:animate-pulse"
          onClick={onPressButton}
        >
          {btnLabel}
        </button>
      </section>
    </div>
  );
};

export const ContentModalAbout = () => {
  return (
    <div className="px-24 py-8">
      <header className="mb-10">
        <h1 className="text-5xl text-fourthGray font-light">About</h1>
        <h1 className="text-5xl text-maingray font-bold">Us</h1>
      </header>
      <article className="flex flex-col gap-5 text-xs">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged..
        </p>
      </article>
    </div>
  );
};
