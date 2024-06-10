import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBarButton = ({ url, text, imageurl }: any) => {
  return (
    <Link href={url} className="w-full">
      <div
        className="rounded-xl p-2 w-full flex items-center gap-2 hover:bg-zinc-700 cursor-pointer"
        style={{ borderWidth: "0.1px", borderColor: "#363636" }}
      >
        <Image width={16} height={16} src={imageurl} alt="sideiconn" />
        <p className="text-white">{text}</p>
      </div>
    </Link>
  );
};

export default SideBarButton;
