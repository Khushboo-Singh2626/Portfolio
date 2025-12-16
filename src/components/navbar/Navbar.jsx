import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import theme_pattern from "../../assets/theme_pattern.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close menu on mobile click
  };

  return (
    <div className="w-full flex items-center justify-between px-4 md:px-12 py-6 relative">
      
      {/* Logo */}
      <div className="relative inline-block">
        <img
          src={theme_pattern}
          alt=""
          className="absolute left-20 -bottom-4 w-20 h-15 -z-0 hidden sm:block"
        />
        <h1 className="relative z-10 text-white text-3xl md:text-4xl font-semibold">
          Khushboo
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white">
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("hero")}>Home</li>
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("about")}>About Me</li>
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("service")}>Services</li>
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("work")}>Portfolio</li>
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {/* Desktop Button */}
      <button
        onClick={() => scrollToSection("contact")}
        className="hidden md:block px-5 py-3 rounded-full 
        bg-gradient-to-r from-fuchsia-600 to-orange-400
        text-white font-medium hover:opacity-90 transition-all duration-300 transform 
        hover:-translate-y-1 hover:scale-105"
      >
        Connect With me
      </button>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8 text-white">
            <li onClick={() => scrollToSection("hero")} className="hover:text-blue-600 cursor-pointer">Home</li>
            <li onClick={() => scrollToSection("about")} className="hover:text-blue-600 cursor-pointer">About Me</li>
            <li onClick={() => scrollToSection("service")} className="hover:text-blue-600 cursor-pointer">Services</li>
            <li onClick={() => scrollToSection("work")} className="hover:text-blue-600 cursor-pointer">Portfolio</li>
            <li onClick={() => scrollToSection("contact")} className="hover:text-blue-600 cursor-pointer">Contact</li>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 px-6 py-3 rounded-full 
              bg-gradient-to-r from-fuchsia-600 to-orange-400
              text-white font-medium hover:opacity-90 transition-all duration-300"
            >
              Connect With me
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
