import React from "react";
import profile from "../../assets/profile.jpg";

export default function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="hero"
      className="flex flex-col items-center text-center 
      mt-16 px-4 sm:px-6 md:px-10"
    >
      {/* Profile Image */}
      <img
        className="rounded-full 
        h-40 w-40 sm:h-44 sm:w-44 md:h-52 md:w-52 
        object-cover object-center"
        src={profile}
        alt="profile_img"
      />

      {/* Heading */}
      <h1 className="text-white 
        text-3xl sm:text-4xl md:text-6xl 
        font-bold leading-tight mt-8 sm:mt-10"
      >
        <span className="bg-gradient-to-r from-fuchsia-600 to-orange-400 bg-clip-text text-transparent">
          I'm Khushboo Singh,
        </span>{" "}
        frontend <br />
        developer based in India.
      </h1>

      {/* Description */}
      <p
        className="text-white mt-5 sm:mt-6 
        text-base sm:text-lg md:text-xl 
        max-w-xl md:max-w-3xl"
      >
        I am a frontend developer from Ghaziabad, India with 3 years of
        experience, passionate about building responsive and user-friendly web
        applications.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button
          onClick={scrollToContact}
          className="px-6 py-3 rounded-full 
          bg-gradient-to-r from-fuchsia-600 to-orange-400
          text-white font-medium hover:opacity-90 
          transition-all duration-300 transform 
          hover:-translate-y-1 hover:scale-105"
        >
          Connect With Me
        </button>

        <a
          href="/Khushboo_Resume.pdf"
          download
          className="px-6 py-3 rounded-full 
          text-white font-medium border border-white 
          cursor-pointer hover:border-blue-600 
          transition-all duration-300 transform 
          hover:-translate-y-1 hover:scale-105 
          text-center"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}
