import React from 'react'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile from "../../assets/profile.jpg"

export default function About() {
  return (
    <div className='flex flex-col gap-16 mt-36 relative'>
       
  <div className="relative inline-block mx-auto">
  <h1 className="text-white text-6xl font-bold">About Me</h1>
    <div     className=" h-14 absolute left-1/2 -translate-x-[20%] bottom-[-10px] w-[320px] z-0 pointer-events-none">
      <img
    src={theme_pattern}
    alt=""
  />
    </div>
 
</div>


        <div className='flex justify-center gap-12 mt-4'>
          <img className='h-70 w-60 rounded-xl mt-10' src={profile} alt="profile_image" />
          <div>
            <p className='text-white text-xl'>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
              
            <p className='text-white text-xl mt-4'>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>


            <div className='mt-6 flex flex-col gap-3'>

               <div className='transition-all duration-300 transform
             hover:-translate-y-2 hover:scale-105 cursor-pointer flex gap-12 items-center'>
                <p className='text-white text-xl'>HTML & CSS</p>
                  <div class="h-2 w-1/2 rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400"></div>
               </div>

                 <div className='transition-all duration-300 transform
             hover:-translate-y-2 hover:scale-105 cursor-pointer flex gap-16 items-center'>
                <p className='text-white text-xl'>Javascript</p>
                  <div class="h-2 w-2/3 rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400"></div>
               </div>
                 
                <div className='transition-all duration-300 transform
             hover:-translate-y-2 hover:scale-105 cursor-pointer flex gap-20 items-center'>
                <p className='text-white  text-xl'>React Js</p>
                  <div class="h-2 w-[58%] rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400"></div>
               </div>

                <div className='transition-all duration-300 transform
             hover:-translate-y-2 hover:scale-105 cursor-pointer flex gap-21 items-center'>
                <p className='text-white  text-xl'>Node Js</p>
                  <div class="h-2 w-1/2 rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400"></div>
               </div>
            </div>
          </div>
        </div>


           <div className=' flex justify-between p-3'>
            <div className='text-center transition-all duration-300 
            transform hover:-translate-y-2 hover:scale-105'>
              <h1 className='text-5xl  font-bold bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent'>10+</h1>
              <p className='text-white text-xl'>YEARS OF EXPERIENCE</p>
            </div>

              <div class="w-0.5 h-20 bg-white"></div>


             <div className='text-center transition-all duration-300 
            transform hover:-translate-y-2 hover:scale-105'>
              <h1 className='text-5xl  font-bold bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent'>90+</h1>
              <p className='text-white text-xl'>PROJECTS COMPLETED </p>
            </div>

                  <div class="w-0.5 h-20 bg-white"></div>
  
              <div className='text-center text-centertransition-all duration-300 
            transform hover:-translate-y-2 hover:scale-105'>
              <h1 className='text-5xl  font-bold bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent'>15+</h1>
              <p className='text-white text-xl'>HAPPY CLIENTS</p>
            
            </div>

           </div>
    </div>
  )
}
