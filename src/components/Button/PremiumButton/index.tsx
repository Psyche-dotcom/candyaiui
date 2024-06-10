import Image from "next/image";
import Link from "next/link";
import React from "react";

const PremiumButton = ({ url }: any) => {
  return (
    <Link href={url} className="w-full">
      <div
        className="rounded-xl p-2 w-full flex items-center gap-2 hover:bg-zinc-700 cursor-pointer"
        style={{ borderWidth: "0.1px", borderColor: "#363636" }}
      >
        <div>
          <Image width={8} height={8} src={"images/dia.svg"} alt="diamond" />
          <Image width={8} height={8} src={"images/water.svg"} alt="melon" />
        </div>

        <p className="text-dia">Premium</p>
        <p className="bg-pin p-1 text-white rounded-lg text-xs">-75% off</p>
      </div>
    </Link>
  );
};

export default PremiumButton;
