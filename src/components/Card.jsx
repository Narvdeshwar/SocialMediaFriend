import React from "react";

export default function Card({ value, handleFriend, index }) {
  const color = {
    red: "bg-red-500",
    blue: "bg-blue-500",
  };
  const { name, profession, image, isFriend } = value;
  return (
    <div className="overflow-hidden bg-white rounded-md w-60 h-fit">
      <div className="w-full bg-blue-300 h-72">
        <img className="w-full object-fit h-72" src={image} alt="" />
      </div>
      <h1 className="p-1 font-bold text-center">{name}</h1>
      <h2 className="p-1 font-semibold text-center">{profession}</h2>
      <div className="flex items-center justify-center p-2">
        <button
          className={`p-2 font-semibold text-white ${
            isFriend ? color.red : color.blue
          } rounded-full`}
          onClick={() => handleFriend(index)}
        >
          {isFriend ? "remove" : "Add as friend"}
        </button>
      </div>
    </div>
  );
}
