import Image from "next/image";
import Link from "next/link";
import React from "react";

const PremiumButton2 = ({ url }: any) => {
  return (
    <Link href={url} className="w-full">
      <div
        className="rounded-xl p-2 w-full flex items-center gap-2 hover:bg-zinc-700 cursor-pointer"
        style={{ borderWidth: "0.1px", borderColor: "#363636" }}
      >
        <div>
          <Image width={24} height={24} src={"images/dia.svg"} alt="diamond" />
          <Image width={24} height={24} src={"images/water.svg"} alt="melon" />
        </div>
      </div>
    </Link>
  );
};

export default PremiumButton2;
