import React from 'react'
import profile from '../../assets/profile.jpg'
export default function 
() {
  return (
    <div className='flex flex-col items-center text-center mt-16'>
        <img className='rounded-full h-52 w-52 object-cover object-center' src={profile} alt="profile_img" />
      <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-10">
       
        <span className="bg-gradient-to-r from-fuchsia-600 to-orange-400 bg-clip-text text-transparent">
          I'm Khushboo Singh,
        </span> frontend <br />
        developer based in India.
     </h1>
        <p className='text-white mt-6 text-xl'>I am a frontend developer from California, USA with 10 years of experience in <br /> multiple companies like Microsoft, Tesla and Apple.</p>
        <div className='mt-6 flex gap-6 '>
            <button className='px-5 py-3 rounded-full 
             bg-gradient-to-r from-fuchsia-600 to-orange-400
              text-white font-medium hover:opacity-90 transition cursor-pointer'>Connect With Me</button>
            <button className='px-5 py-3 rounded-full text-white font-medium border border-white cursor-pointer transition hover:border-blue-600'>My Resume</button>
        </div>
    </div>
  )
}
