import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/outline";
export default function Card() {
  return (
    <div className='  transition-all duration-300 transform 
  hover:-translate-y-3 hover:scale-105 
  hover:border-pink-500 hover:bg-gray-500 
  cursor-pointer p-6 flex flex-col gap-4 h-70 w-76 border border-white rounded-2xl border-2'>
      <h1 className='text-2xl font-semibold text-white'>01</h1>
      <p className='bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 bg-clip-text text-transparent text-2xl'>Web Design</p>
      <p className='text-white text-xl'>Web development is the process of building, programming...</p>
      <div className='flex items-center gap-2'>
        <p className='text-white/60 text-xl'>Read More </p>
         <ArrowRightIcon className="w-5 h-5 text-white/60" />
      </div>
    </div>
  )
}
