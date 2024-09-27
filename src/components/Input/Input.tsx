import React from "react";
import { InputTypes } from "./InputTypes";

export const Input = ({ label, type, isRequired = false }: InputTypes) => {
  return (
    <input
      type={type}
      placeholder={label}
      required={isRequired}
      className="invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-600 placeholder:text-fifthGray text-maingray text-sm placeholder:capitalize px-4 py-4 bg-secondWhite w-full focus:ring-1 focus:ring-maingray focus:border  focus:outline-none focus:border-maingray"
    />
  );
};
