"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import GenderComponent from "../GenderComp";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ButtonBg from "../Button/ButtonBg";
import ButtonOutline from "../Button/ButtonOutline";
import SideBarButton from "../Button/SideBarButton";
import PremiumButton from "../Button/PremiumButton";
import SideBarButton2 from "../Button/SideBarButton2";
import PremiumButton2 from "../Button/PremiumButton2";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [ToggleMenu, setToggleMenu] = useState(true);
  const pathname = usePathname();
  return (
    <>
      <header
        className="bg-nav-bg relative"
        style={{
          borderBottom: "1px solid #363636",
        }}
      >
        <nav className="w-11/12 mx-auto py-3">
          <section className="flex items-center justify-between">
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-4">
                <div onClick={() => setToggleMenu((prev) => !prev)}>
                  <MenuIcon className=" text-white w-8 h-8 cursor-pointer" />
                </div>
                <Link href={"/"}>
                  <Image
                    src={"/images/candylogo.svg"}
                    width={115}
                    height={30}
                    className="cursor-pointer"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative cursor-pointer">
                  <GenderComponent
                    urlto="/"
                    url={
                      pathname === "/"
                        ? "/images/femaleA.svg"
                        : "/images/female.svg"
                    }
                    text={"Female"}
                    active={pathname === "/" ? true : false}
                  />
                </div>
                <div className="relative cursor-pointer">
                  <GenderComponent
                    urlto="/ai-boyfriend"
                    url={
                      pathname === "/ai-boyfriend"
                        ? "/images/male.svg"
                        : "/images/maleIn.svg"
                    }
                    text={"Male"}
                    active={pathname === "/ai-boyfriend" ? true : false}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ButtonBg click={() => {}} text={"Register"} />
              <ButtonOutline click={() => {}} text={"Login"} />
            </div>
          </section>
        </nav>
      </header>
      <main className="flex justify-between">
        <div>
          <aside
            className={`bg-nav-bg `}
            style={{
              height: "95vh",
              position: "fixed",

              overflow: "hidden",
              maxWidth: "300px",

              borderRight: "1px solid #363636",
            }}
          >
            <section
              className="overflow-y-scroll"
              style={{
                height: "55%",
              }}
            >
              {ToggleMenu === true ? (
                <section className=" pl-12 p-4 flex flex-col gap-4">
                  <SideBarButton
                    url={"/"}
                    text={"Explore"}
                    imageurl={"/images/explore.svg"}
                  />
                  <SideBarButton
                    url={"/chat"}
                    text={"Chat"}
                    imageurl={"/images/chat.svg"}
                  />
                  <SideBarButton
                    url={"/gallery"}
                    text={"Gallery"}
                    imageurl={"/images/gallary.svg"}
                  />
                  <SideBarButton
                    url={"/generate_image"}
                    text={"Generate Image"}
                    imageurl={"/images/gen.svg"}
                  />
                  <SideBarButton
                    url={"/"}
                    text={"Create Charater"}
                    imageurl={"/images/character.svg"}
                  />
                  <SideBarButton
                    url={"/my_ai"}
                    text={"My Ai"}
                    imageurl={"/images/ai.svg"}
                  />
                  <PremiumButton url={"/"} />
                </section>
              ) : (
                <section className="flex flex-col gap-4 pl-12 p-4">
                  <SideBarButton2 url={"/"} imageurl={"/images/explore.svg"} />
                  <SideBarButton2 url={"/chat"} imageurl={"/images/chat.svg"} />
                  <SideBarButton2
                    url={"/gallery"}
                    imageurl={"/images/gallary.svg"}
                  />
                  <SideBarButton2
                    url={"/generate_image"}
                    text={"Generate Image"}
                    imageurl={"/images/gen.svg"}
                  />
                  <SideBarButton2
                    url={"/"}
                    imageurl={"/images/character.svg"}
                  />
                  <SideBarButton2 url={"/my_ai"} imageurl={"/images/ai.svg"} />
                  <PremiumButton2 url={"/"} />
                </section>
              )}
            </section>
            <section
              className=""
              style={{
                borderTop: "1px solid #363636",
                height: "45%",
              }}
            >
              {ToggleMenu === true ? (
                <div className="pl-12 p-4 flex flex-col gap-4">
                  <SideBarButton
                    url={"/"}
                    text={"Discord"}
                    imageurl={"/images/discord.svg"}
                  />
                  <SideBarButton
                    url={"/"}
                    text={"Contact Us"}
                    imageurl={"/images/contact.svg"}
                  />
                  <SideBarButton
                    url={"/"}
                    text={"Affiliate Program"}
                    imageurl={"/images/achievement.svg"}
                  />
                </div>
              ) : (
                <div className="pl-12 p-4 pr-8 flex flex-col gap-4">
                  <SideBarButton2 url={"/"} imageurl={"/images/discord.svg"} />
                  <SideBarButton2 url={"/"} imageurl={"/images/contact.svg"} />
                  <SideBarButton2
                    url={"/"}
                    imageurl={"/images/achievement.svg"}
                  />
                </div>
              )}
            </section>
          </aside>
        </div>

        <section>
          {children}

          <footer></footer>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
