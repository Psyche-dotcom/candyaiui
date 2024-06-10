"use client";
import SelectCharacterBtn from "@/components/Button/SelectCharacterBtn";
import HoverCard from "@/components/Card/HoverCard";
import React, { useState } from "react";

const AiCharacter = () => {
  const [Filter, setFilter] = useState("all");
  const buttons = [
    { text: "All Models", filter: "all" },
    { text: "Realistics", filter: "real" },
    { text: "Anime", filter: "anime" },
    { text: "Phone Call", filter: "call" },
  ];
  return (
    <section className="w-11/12 mx-auto">
      <div className="flex flex-col gap-8 items-center text-white mt-8">
        <h2 className="text-3xl font-semibold">
          Explore <span className="text-mainRed">AI Characters</span>
        </h2>
        <div className="flex items-center gap-4">
          {buttons.map((btn) => (
            <SelectCharacterBtn
              key={btn.filter}
              status={Filter === btn.filter}
              text={btn.text}
              action={() => setFilter(btn.filter)}
            />
          ))}
        </div>
        <div>
          {Filter == "all" && (
            <>
              <HoverCard
                defaultImage={"/images/img1.webp"}
                hoverImage={"/images/img2.jpg"}
                title={"Hello"}
                age={"32 years"}
                desc={"Sofia Herrera, a seasoned detective with a sharp an..."}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiCharacter;
