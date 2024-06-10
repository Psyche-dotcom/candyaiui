import Image from "next/image";
import React from "react";

const Chat = ({
  username,
  url,
  modelName,
  lastChat,
  LastMessageTime,
  active,
}: any) => {
  return (
    <div
      className={`w-full p-1 rounded-2xl text-white ${
        active && "bg-zinc-300 border-line border-2"
      }`}
    >
      <div className="flex  gap-1 item-center justify-between">
        <Image
          src={url}
          width={40}
          height={20}
          alt={username}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h5 className="text-sm font-bold">{modelName}</h5>
          <p className="text-sm">{lastChat}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>{LastMessageTime}</p>
          {active == true && (
            <div className="flex items-center gap-1">
              <image
                href={"/images/chatbutton.svg"}
                style={{
                  width: "10px",
                  height: "2px",
                }}
                className=" rounded-full"
              />
              <Image
                src={"/images/chat.svg"}
                width={10}
                height={10}
                alt={username}
                className=" rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
