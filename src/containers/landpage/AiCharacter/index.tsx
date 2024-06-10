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
  const cardsAll = Array.from({ length: 30 }, (_, index) => ({
    defaultImage: "/images/img1.webp",
    hoverImage: "/images/img2.jpg",
    title: `Hello ${index + 1}`,
    age: `${32 + (index % 10)} years`,
    desc: `Person ${index + 1}, a seasoned professional with a sharp an...`,
  }));
  const cardsAnime = Array.from({ length: 30 }, (_, index) => ({
    defaultImage: "/images/ani1.jpg",
    hoverImage: "/images/ani2.jpg",
    title: `Hello ${index + 1}`,
    age: `${32 + (index % 10)} years`,
    desc: `Person ${index + 1}, a seasoned professional with a sharp an...`,
  }));
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
              <div className="flex flex-wrap gap-8 items-center">
                {cardsAll.map((card, index) => (
                  <HoverCard
                    key={index}
                    defaultImage={card.defaultImage}
                    hoverImage={card.hoverImage}
                    title={card.title}
                    age={card.age}
                    desc={card.desc}
                  />
                ))}
              </div>
            </>
          )}
          {Filter == "real" && (
            <>
              <div className="flex flex-wrap gap-8 items-center">
                {cardsAll.map((card, index) => (
                  <HoverCard
                    key={index}
                    defaultImage={card.defaultImage}
                    hoverImage={card.hoverImage}
                    title={card.title}
                    age={card.age}
                    desc={card.desc}
                  />
                ))}
              </div>
            </>
          )}
          {Filter == "call" && (
            <>
              <div className="flex flex-wrap gap-8 items-center">
                {cardsAll.map((card, index) => (
                  <HoverCard
                    key={index}
                    defaultImage={card.defaultImage}
                    hoverImage={card.hoverImage}
                    title={card.title}
                    age={card.age}
                    desc={card.desc}
                  />
                ))}
              </div>
            </>
          )}
          {Filter == "anime" && (
            <>
              <div className="flex flex-wrap gap-8 items-center">
                {cardsAnime.map((card, index) => (
                  <HoverCard
                    key={index}
                    defaultImage={card.defaultImage}
                    hoverImage={card.hoverImage}
                    title={card.title}
                    age={card.age}
                    desc={card.desc}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiCharacter;
