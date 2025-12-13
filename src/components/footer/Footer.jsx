import React from 'react'
import footer_logo from "../../assets/footer_logo.svg"
import { HiOutlineUser } from "react-icons/hi";
import theme_pattern from "../../assets/theme_pattern.svg"

export default function 
() {
  return (
   <div className='flex flex-col gap-6  mt-25'>
     <div className='flex justify-between items-center'>
    <div className="flex flex-col gap-4">
       
       <div className=" relative inline-block">
                  <img
                    src={theme_pattern}
                        alt=""
                      className="items-center absolute left-20 -bottom-4 w-20 h-15 -z-0"/> 
                      <h1 className="relative z-10 text-white text-4xl font-semibold">Khushboo</h1>
             </div>

  <p className="text-white text-lg leading-tight">
    I am a frontend developer from, USA with 10 years of experience in companies
    like Microsoft, Tesla and Apple.
  </p>
</div>




     <div className='flex items-center gap-4'>
        <div className="w-[320px] h-16 bg-[#2d2f3a] rounded-full 
                        px-5 flex items-center gap-3">
            <HiOutlineUser className="text-gray-300 text-lg" />
            <input
             type="email"
            placeholder="Enter your email"
              className="bg-transparent outline-none w-full 
                       text-gray-300 placeholder-gray-400 text-lg h-full"/>
        </div>
                 <button className="h-16 px-8 text-lg rounded-full text-white 
                     bg-gradient-to-r from-fuchsia-600 to-orange-400
                     transition-all duration-300 transform 
                     hover:-translate-y-1 hover:scale-105">Subscribe</button>

     </div>
    </div>

    <div className="w-full h-px bg-white/60" />

    <div className='flex justify-between items-center'>
         <div>
              <p className="text-white text-lg">
           © 2023 Khushboo Singh. All rights reserved.</p>
         </div>

         <div className='flex gap-8'>
            <p className='text-white text-lg'>Term of Services</p>
            <p className='text-white text-lg'>Privacy Policy</p>
            <p className='text-white text-lg'>Connect with me</p>
         </div>
    </div>

   </div>
  )
}
