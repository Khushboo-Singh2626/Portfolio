import React from 'react'
import Card from "./Card.jsx";
import theme_pattern from "../../assets/theme_pattern.svg"

export default function Services() {
  return (
    <div className='flex flex-col mt-6 gap-26 mt-36'>
         <div className="relative inline-block mx-auto">
          <h1 className="text-white text-6xl font-bold">My Services</h1>
            <div     className=" h-14 absolute left-1/2 -translate-x-[20%] bottom-[-10px] w-[320px] z-0 pointer-events-none">
              <img
            src={theme_pattern}
            alt=""/></div>
            </div>

    <div className='flex flex-col gap-8'>
          <div className='flex justify-between items-center'>
    <Card></Card>
     <Card></Card>
      <Card></Card>
      </div>
         <div className='flex justify-between items-center'>
    <Card></Card>
     <Card></Card>
      <Card></Card>
      </div>
    </div>
    </div>
  )
}
