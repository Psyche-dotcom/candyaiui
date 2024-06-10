import React from "react";

const HoverCard = ({ defaultImage, hoverImage, title, age, desc }: any) => {
  return (
    <div
      className="relative  overflow-hidden rounded-lg shadow-lg group"
      style={{
        width: "400px",
        height: "550px",
        maxWidth: "200px",
        maxHeight: "300px",
      }}
    >
      <img
        src={defaultImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
      />
      <img
        src={hoverImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
      />
      <div className="absolute bottom-0 left-0 w-full p-4  text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xs">{age}</p>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default HoverCard;
