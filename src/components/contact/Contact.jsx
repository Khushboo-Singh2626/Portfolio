import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import theme_pattern from "../../assets/theme_pattern.svg"
export default function Contact() {
  return (
    <div id="contact" className="mt-36 flex flex-col gap-18">
         

     <div className="text-center relative inline-block">
                    <img
                      src={theme_pattern}
                          alt=""
                        className="items-center absolute left-140 -bottom-3 w-42 h-16 -z-0"/> 
                        <h1 className="relative z-10 text-white text-6xl font-semibold">Get in touch</h1>
                               </div>
      

     <div className="flex gap-8">
       <div className="flex flex-col gap-6 flex-1" >
        <p className="text-4xl bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent">
          Let's talk
        </p>
        <p className="text-xl text-white">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
        <div className="flex gap-4">
             <HiOutlineMail className="text-3xl text-white/80" />
                <p className="text-lg text-white/80">khushboo262634@gmail.com</p>
        </div>
          <div className="flex items-center gap-4">
        <FiPhone className="text-3xl text-white/80" />
        <p className="text-lg text-white/80">9369394093</p>
      </div>

      {/* Location */}
      <div className="flex items-center gap-4">
        <HiOutlineLocationMarker className="text-3xl text-white/80" />
        <p className="text-lg text-white/80">Ghaziabad, Uttar Pradesh</p>
      </div>
      </div>


      <div className="flex-1">
        <form action="">
         <div className="flex flex-col gap-5">
        <div>
             <label className="text-white text-xl" htmlFor="name">Name</label>
          <input className="mt-2 w-full p-4 text-xl rounded-xl bg-gray-600 placeholder-gray-300" type="text" placeholder="Enter Your Name"/><br />
        </div>

        <div>
              <label className="text-white text-xl" htmlFor="email">Email</label>
          <input className="mt-2 w-full p-4 text-xl rounded-xl bg-gray-600 placeholder-gray-300" type="text" placeholder="Enter Your email"/>
        </div>

        <div>
          <label className="text-xl text-white" htmlFor="message">Write your message here</label>
          <input className="mt-2 w-full p-16 text-xl rounded-xl bg-gray-600 placeholder-gray-300" placeholder="Messgae here" type="text" />
        </div>
         </div>
         <button className="text-white rounded-full mt-6 py-4 px-8 transition-all duration-300 transform 
  hover:-translate-y-1 hover:scale-105  bg-gradient-to-r from-fuchsia-600 to-orange-400">Submit Now</button>
        </form>
      </div>
     </div>



    </div>



  );
}
