import React from "react";
import footer_logo from "../../assets/footer_logo.svg";
import { HiOutlineUser } from "react-icons/hi";
import theme_pattern from "../../assets/theme_pattern.svg";

export default function Footer() {
  return (
    <div className="flex flex-col gap-10 mt-20 px-4 sm:px-6 md:px-12">
      
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left */}
        <div className="flex flex-col gap-4 max-w-md">
          <div className="relative inline-block">
            <img
              src={theme_pattern}
              alt=""
              className="absolute left-21 bottom-0 w-20 -z-0 hidden sm:block"
            />
            <h1 className="relative z-10 text-white text-3xl sm:text-4xl font-semibold">
              Khushboo
            </h1>
          </div>

          <p className="text-white text-sm sm:text-lg leading-tight">
         I am a web developer from India with experience gained through academic projects and continuous hands-on practice.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div
            className="w-full sm:w-[320px] h-14 sm:h-16 bg-[#2d2f3a] 
            rounded-full px-5 flex items-center gap-3"
          >
            <HiOutlineUser className="text-gray-300 text-lg" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none w-full 
              text-gray-300 placeholder-gray-400 text-sm sm:text-lg h-full"
            />
          </div>

          <button
            className="h-14 sm:h-16 px-6 sm:px-8 text-sm sm:text-lg 
            rounded-full text-white 
            bg-gradient-to-r from-fuchsia-600 to-orange-400
            transition-all duration-300 transform 
            hover:-translate-y-1 hover:scale-105"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/60" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white text-sm sm:text-lg text-center sm:text-left">
          © 2023 Khushboo Singh. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <p className="text-white text-sm sm:text-lg cursor-pointer">
            Term of Services
          </p>
          <p className="text-white text-sm sm:text-lg cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-white text-sm sm:text-lg cursor-pointer">
            Connect with me
          </p>
        </div>
      </div>
    </div>
  );
}
