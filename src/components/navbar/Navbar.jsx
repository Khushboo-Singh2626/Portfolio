import React from 'react'
import logo from '../../assets/logo.svg'
import theme_pattern from "../../assets/theme_pattern.svg"

export default function Navbar() {
  const scrollToContact = () => {
  const section = document.getElementById("contact");
  section?.scrollIntoView({ behavior: "smooth" });
};

  const scrollToHero = () => {
  const section = document.getElementById("hero");
  section?.scrollIntoView({ behavior: "smooth" });
};

  const scrollToAbout = () => {
  const section = document.getElementById("about");
  section?.scrollIntoView({ behavior: "smooth" });
};


  const scrollToServices = () => {
  const section = document.getElementById("service");
  section?.scrollIntoView({ behavior: "smooth" });
};

  const scrollToWork = () => {
  const section = document.getElementById("work");
  section?.scrollIntoView({ behavior: "smooth" });
};



  return (
    <div className='flex items-center justify-between'>
        <div className=" relative inline-block">
                          <img
                            src={theme_pattern}
                                alt=""
                              className="items-center absolute left-20 -bottom-4 w-20 h-15 -z-0"/> 
                              <h1 className="relative z-10 text-white text-4xl font-semibold">Khushboo</h1>
                     </div>

        <div className='text-white'>
       <ul className='flex gap-6'>
        <li  className='hover:text-blue-600 cursor-pointer' onClick={scrollToHero}>Home</li>
        <li  className='hover:text-blue-600 cursor-pointer' onClick={scrollToAbout}>About Me</li>
        <li  className='hover:text-blue-600 cursor-pointer' onClick={scrollToServices}>Services</li>
        <li  className='hover:text-blue-600 cursor-pointer' onClick={scrollToWork}>Portfolio</li>
        <li className='hover:text-blue-600 cursor-pointer' onClick={scrollToContact}>Contact</li>
       </ul>
        </div>
        <button onClick={() => scrollToContact("contact")} className='px-5 py-3 rounded-full 
             bg-gradient-to-r from-fuchsia-600 to-orange-400
              text-white font-medium hover:opacity-90 transition cursor-pointer transition-all duration-300 transform 
  hover:-translate-y-1 hover:scale-105 '>Connect With me</button>
    </div>
  )
}
