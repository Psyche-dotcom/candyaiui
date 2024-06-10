import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroFemaleCardSection = () => {
  return (
    <section className="herocard w-full h-full rounded-xl">
      <section className="flex flex-row text-white w-11/12 mx-auto pt-10  relative ">
        <div
          className=" flex flex-col gap-8"
          style={{
            maxWidth: "400px",
          }}
        >
          <div className="flex flex-col gap-6 items-start">
            <h1 className=" text-3xl">
              Create your own{" "}
              <span className="text-mainRed">AI Girlfriend</span>
            </h1>
            <p>
              Your dream companion awaits! Create your AI Girlfriend, shape her
              look, personality, and bring her to life in one click. 100%
              powered by Artificial Intelligence.
            </p>
          </div>
          <div className="mb-8">
            <Link href={"/characters/new"}>
              <button className="bg-mainRed p-4 rounded-xl flex items-center gap-2">
                <Image src={"images/ai.svg"} width={24} height={24} alt="ai" />
                <p>Create your AI</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={"/images/heroflower.svg"}
            style={{
              position: "absolute",
              width: "550px",
              height: "330px",
            }}
            alt="hero flower"
          />

          <img
            src={"/images/women.webp"}
            style={{
              position: "absolute",
              width: "380px",
              height: "330px",
              bottom: 0,
            }}
            alt="women flower"
          />

          <img
            src={"/images/anime.webp"}
            style={{
              position: "absolute",
              width: "380px",
              height: "330px",
              bottom: 0,
              right: 0,
            }}
            alt="Anime"
          />
        </div>
      </section>
    </section>
  );
};

export default HeroFemaleCardSection;
