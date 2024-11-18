"use client";

import React, { FC, useEffect } from "react";
import { ModalTypes } from "./ModalTypes";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { Button } from "../Button/Button";

export const Modal: FC<ModalTypes> = ({
  show,
  onClose,
  onPressButton,
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
      className={`bg-black/40 fixed w-full h-full flex backdrop-blur-md backdrop-brightness-15 items-center justify-center top-0  ${
        !show ? "invisible -z-50" : "visible z-50"
      }`}
    >
      <section
        className={`w-max max-w-[60rem] h-max max-h-[90vh] bg-white px-2 py-2 flex flex-col items-center rounded-sm duration-300 ${
          show
            ? "opacity-100 scale-100 transition-all"
            : "opacity-0 scale-0 transition-none"
        }`}
      >
        <IoCloseCircleOutline
          onClick={onClose}
          size={30}
          className="text-maingray opacity-60 hover:opacity-100 cursor-pointer self-end "
        />
        {children}
        <Button
          label={btnLabel}
          onPress={onPressButton}
          containerStyle="py-3 w-1/2 my-8"
        />
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

export const ContentModalSendEmail = ({ show = false }: { show: boolean }) => {
  console.log("this is", show);
  return (
    <div className="px-10 py-8">
      <header className="mb-10 flex flex-col items-center justify-center gap-8">
        <div
          className={`border border-gray-300 p-5 rounded-full duration-500 ${
            show
              ? "opacity-100 scale-10 transition-all"
              : "opacity-0 scale-0 transition-none"
          }`}
        >
          <FaCheck
            className={`bg-mainGreen p-4 text-8xl rounded-full text-white transition-all duration-700 delay-200 ${
              show ? "scale-100 " : "scale-150"
            }`}
          />
        </div>
        <h1 className="font-bold text-2xl text-maingray">Thank you !</h1>
      </header>
      <p className="font-medium text-secondgray">
        Your message has been sent, we will contact you shortly
      </p>
    </div>
  );
};
