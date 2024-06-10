import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBarButton2 = ({ url, imageurl }: any) => {
  return (
    <Link href={url}>
      <div
        className="rounded-xl p-2 w-full flex items-center gap-2 hover:bg-zinc-700 cursor-pointer"
        style={{ borderWidth: "0.1px", borderColor: "#363636" }}
      >
        <Image width={32} height={32} src={imageurl} alt="sideiconn" />
      </div>
    </Link>
  );
};

export default SideBarButton2;
