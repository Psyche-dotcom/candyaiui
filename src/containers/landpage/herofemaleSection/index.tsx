import Image from "next/image";
import React from "react";

const HeroFemaleCardSection = () => {
  return (
    <section className="herocard w-full h-full rounded-xl">
      <section className="">
        <div></div>
        <div>
          <div
            style={{
              zIndex: 10,
            }}
          >
            <Image
              src={"/images/heroflower.svg"}
              width={378}
              height={313}
              alt="hero flower"
            />
          </div>
          <div
            style={{
              zIndex: 20,
            }}
          >
            <Image
              src={"/images/women.webp"}
              width={285}
              height={450}
              alt="women flower"
            />
          </div>
          <div
            style={{
              zIndex: 30,
            }}
          >
            <Image
              src={"/images/anime.webp"}
              width={285}
              height={450}
              alt="Anime"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroFemaleCardSection;
