import React from "react";
import Work_card from "./Work_card";
import theme_pattern from "../../assets/theme_pattern.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { work_data } from "../../data/work_data";

export default function Work() {
  return (
    <div
      id="work"
      className="flex flex-col mt-24 md:mt-36 gap-16 px-4 sm:px-6 md:px-12"
    >
      {/* Heading */}
      <div className="text-center relative inline-block mx-auto">
        <img
          src={theme_pattern}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 -bottom-3 
          w-32 sm:w-40 md:w-42 -z-0"
        />
        <h1 className="relative z-10 text-white 
        text-4xl sm:text-5xl md:text-6xl font-semibold">
          My latest work
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 place-items-center">
        {work_data.map((item) => (
          <Work_card key={item.id} image={item.image} />
        ))}
      </div>

      {/* Show more */}
      <div className="flex justify-center">
        <div
          className="transition-all duration-300 ease-out
          hover:gap-6 hover:px-6 hover:py-3 hover:w-60
          flex items-center justify-center gap-2 
          h-14 sm:h-16 md:h-18
          border border-white w-44 sm:w-48 md:w-50 
          rounded-full cursor-pointer"
        >
          <p className="text-white text-base sm:text-lg md:text-xl">
            Show More
          </p>
          <ArrowRightIcon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
