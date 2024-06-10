import Link from "next/link";
import React from "react";

const ButtonBg = ({ click, text }: any) => {
  return (
    <button
      className=" cursor-pointer bg-mainRed rounded-md text-white px-6 py-2 hover:bg-white hover:text-mainRed"
      onClick={click}
    >
      {text}
    </button>
  );
};

export default ButtonBg;
