import Image from "next/image";
import React from "react";
import Chat from "../chat";

const ChatLand = () => {
  return (
    <section
      className="flex bg-nav-bg"
      style={{
        height: "88vh",
        maxHeight: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className="p-4"
        style={{
          maxWidth: "250",
          width: "20vw",
          backgroundColor: "#1A1A1A",
        }}
      >
        <div>
          <h1 className="text-white font-bold text-2xl mb-8">Chat</h1>
          <div className="relative mb-4">
            <Image
              width={16}
              height={16}
              src={"/images/search.svg"}
              alt="search"
              className="absolute"
              style={{
                top: "0",
                right: "0",
              }}
            />
            <input
              type="text"
              className="p-1 rounded-md"
              style={{
                backgroundColor: "#363636",
              }}
              placeholder="Search for a profile.."
            ></input>
          </div>
          <div>
            <Chat
              username="Adora San"
              url={"/images/img2.jpg"}
              modelName="Sanno"
              lastChat="Hello are .."
              LastMessageTime="10am"
              active={false}
            />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default ChatLand;
