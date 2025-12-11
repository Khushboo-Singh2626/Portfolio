import React from 'react'
import Work_card from './Work_card'
import theme_pattern from "../../assets/theme_pattern.svg"
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Work() {
  return (
    <div className='flex flex-col mt-6 gap-26 mt-36'>
            <div className="relative inline-block mx-auto">
             <h1 className="text-white text-6xl font-bold">My Latest Work</h1>
               <div     className=" h-14 absolute left-1/2 -translate-x-[20%] bottom-[-10px] w-[320px] z-0 pointer-events-none">
                 <img
               src={theme_pattern}
               alt=""/></div>
               </div>
   
       <div className='flex flex-col gap-8'>
             <div className='flex justify-between items-center'>
       <Work_card></Work_card>
        <Work_card></Work_card>
         <Work_card></Work_card>
         </div>
            <div className='flex justify-between items-center'>
       <Work_card></Work_card>
        <Work_card></Work_card>
         <Work_card></Work_card>
         </div>
       </div>

      <div className='flex justify-center items-center'>
        <div className='  transition-all duration-300 ease-out
  hover:gap-6 hover:px-6 hover:py-3 hover:w-60 flex items-center justify-center gap-2 h-18 border border-2 border-white w-50 rounded-full'>
            <p className='text-white text-xl'>Show More </p>
              <ArrowRightIcon className="w-6 h-6 text-white" />
        </div>
      </div>

       </div>
  )
}
