import Image from "next/image";
import Link from "next/link";
import React from "react";

const GenderComponent = ({ url, text, active, urlto }: any) => {
  return (
    <>
      <Link href={urlto}>
        <div className="flex items-center gap-1">
          <Image src={url} alt="gender" width={16} height={16} />{" "}
          <p className={`${active == true ? "text-mainRed " : "text-white"}`}>
            {text}
          </p>
        </div>
        {active === true && (
          <div
            className="w-full absolute bg-mainRed"
            style={{ height: "4px", bottom: "-22px" }}
          ></div>
        )}
      </Link>
    </>
  );
};

export default GenderComponent;
