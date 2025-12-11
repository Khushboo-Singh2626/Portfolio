import React from 'react'
import project_1 from "../../assets/project_1.svg"

export default function Work_card() {
  return (
    <div className='  transition-all duration-300 transform 
  hover:-translate-y-3 hover:scale-105 
  hover:border-pink-500 hover:bg-gray-500 
  cursor-pointer flex flex-col gap-4 h-70 w-76 border border-white rounded-2xl border-2 bg-amber-400'>
      
      <img className='w-full h-full object-cover rounded-2xl' src={project_1}alt="" />
    </div>

 
  )
}
