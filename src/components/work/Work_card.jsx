import React from "react";

export default function Work_card({ image }) {
  return (
    <div
      className="transition-all duration-300 transform 
      hover:-translate-y-3 hover:scale-105 
      hover:border-pink-500 hover:bg-gray-500 hover:border-[3px]
      cursor-pointer flex flex-col 
      h-[280px] w-[300px] 
      border border-white rounded-2xl bg-amber-400"
    >
      <img
        src={image}
        alt="project"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}
