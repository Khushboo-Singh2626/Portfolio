import React from "react";
import Card from "./Card.jsx";
import theme_pattern from "../../assets/theme_pattern.svg";
import { servicesData } from "../../data/servicesData";

export default function Services() {
  return (
    <div
      id="service"
      className="flex flex-col gap-16 mt-24 md:mt-30 px-4 sm:px-6 md:px-12"
    >
      {/* Heading */}
      <div className="text-center relative inline-block mx-auto">
        <img
          src={theme_pattern}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 -bottom-4 
          w-32 sm:w-40 md:w-42 -z-0"
        />
        <h1 className="relative z-10 text-white 
        text-4xl sm:text-5xl md:text-6xl font-bold">
          My Services
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            id={service.id}
            title={service.title}
            full={service.full}
          />
        ))}
      </div>
    </div>
  );
}
