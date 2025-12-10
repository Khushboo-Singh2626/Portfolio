import React from 'react'
import logo from '../../assets/logo.svg'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between'>
        <img src={logo} alt="Logo" />

        <div className='text-white'>
       <ul className='flex gap-6'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
       </ul>
        </div>
        <button className='px-5 py-3 rounded-full 
             bg-gradient-to-r from-fuchsia-600 to-orange-400
              text-white font-medium hover:opacity-90 transition cursor-pointer'>Connect With me</button>
    </div>
  )
}
