import React from 'react'
import Card from "./Card.jsx";
import theme_pattern from "../../assets/theme_pattern.svg"
import { servicesData } from "../../data/servicesData";

export default function Services() {
  return (
    <div id='service' className='flex flex-col gap-20 mt-30'>
          <div className="text-center relative inline-block">
                    <img
                      src={theme_pattern}
                          alt=""
                        className="items-center absolute left-138 -bottom-4 w-42 h-17 -z-0"/> 
                        <h1 className="relative z-10 text-white text-6xl font-bold">My Services</h1>
               </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
  )
}
