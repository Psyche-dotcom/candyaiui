import { Link } from "lucide-react";
import React from "react";

const ButtonOutline = ({ text, click }: any) => {
  return (
    <button
      className="cursor-pointer border-mainRed rounded-md text-mainRed px-6 py-2 border-2"
      onClick={click}
    >
      {text}
    </button>
  );
};

export default ButtonOutline;
