import React from "react";

const SelectCharacterBtn = ({ text, action, status }: any) => {
  return (
    <button
      className={`rounded-xl p-4 ${
        status == true ? "bg-zinc-400" : "bg-zinc-700"
      } `}
      style={{
        borderWidth: "1px",
        borderColor: "#363636",
      }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default SelectCharacterBtn;
