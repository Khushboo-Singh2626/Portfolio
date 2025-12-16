import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Card({ id, title, full }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="transition-all duration-300 transform 
      hover:-translate-y-3 hover:scale-105 
      hover:border-pink-500 hover:bg-gray-500 
      cursor-pointer p-5 sm:p-6 flex flex-col gap-4 
      w-full max-w-sm mx-auto 
      border border-white rounded-2xl border-2"
    >
      <h1 className="text-xl sm:text-2xl font-semibold text-white">
        {id}
      </h1>

      <p className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 
      bg-clip-text text-transparent text-xl sm:text-2xl">
        {title}
      </p>

      <p className="text-white text-base sm:text-lg">
        {isExpanded ? full : full.slice(0, 70) + "..."}
      </p>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-white/60 
        hover:text-white transition mt-auto"
      >
        <p className="text-base sm:text-xl">
          {isExpanded ? "Read Less" : "Read More"}
        </p>
        <ArrowRightIcon
          className={`w-5 h-5 transition-transform duration-300 ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </div>
    </div>
  );
}
