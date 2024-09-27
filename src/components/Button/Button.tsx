import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { ButtonTypes } from "./ButtonTypes";

export const Button = ({
  label,
  showArrow = false,
  type = "black",
  onPress,
  containerStyle,
}: ButtonTypes) => {
  return (
    <button
      onClick={onPress}
      className={`
      ${
        type === "white"
          ? "bg-white hover:bg-maingray text-maingray hover:text-white"
          : "hover:bg-thirdWhite bg-maingray hover:text-maingray text-thirdWhite"
      }
          ${containerStyle}
        flex flex-row items-center justify-center gap-4 select-none transition-all duration-200 rounded-sm
        `}
    >
      <div className="uppercase tracking-widest text-xs">{label}</div>
      <HiArrowLongRight
        size={20}
        className={`${showArrow ? "block" : "hidden"}`}
      />
    </button>
  );
};
