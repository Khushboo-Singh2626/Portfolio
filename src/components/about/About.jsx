import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile2 from "../../assets/profile2.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col gap-16 mt-24 md:mt-36 relative px-4 sm:px-6 md:px-12"
    >
      {/* Heading */}
      <div className="text-center relative inline-block mx-auto">
        <img
          src={theme_pattern}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 -bottom-4 
          w-32 sm:w-40 md:w-48 -z-0"
        />
        <h1 className="relative z-10 text-white text-4xl sm:text-5xl md:text-6xl font-bold">
          About me
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
        {/* Image */}
        <img
          className="h-56 w-56 sm:h-64 sm:w-64 md:h-65 md:w-65 rounded-xl object-cover"
          src={profile2}
          alt="profile_image"
        />

        {/* Text + Skills */}
        <div className="w-full">
          <p className="text-white text-base sm:text-lg md:text-xl">
            I am a motivated Frontend Developer and third year B.Tech CSE student,
            actively building projects and sharpening my skills. I enjoy
            collaborating on ideas and continuously learning to create clean,
            responsive, user friendly web experiences.
          </p>

          <p className="text-white text-base sm:text-lg md:text-xl mt-4">
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-col gap-4">
            {[
              ["HTML & CSS", "w-1/2"],
              ["Javascript", "w-2/3"],
              ["React Js", "w-[58%]"],
              ["Node Js", "w-1/2"],
            ].map(([skill, width], i) => (
              <div
                key={i}
                className="transition-all duration-300 transform
                hover:-translate-y-2 hover:scale-105 cursor-pointer
                flex items-center gap-4 sm:gap-8"
              >
                <p className="text-white text-base sm:text-lg md:text-xl min-w-[110px]">
                  {skill}
                </p>
                <div
                  className={`h-2 ${width} rounded-full 
                  bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0 p-3">
        {[
          ["5+", "PROJECTS BUILD"],
          ["10+", "TECH SKILLS"],
          ["100+", "HOURS OF CODING"],
        ].map(([num, label], i) => (
          <React.Fragment key={i}>
            <div
              className="text-center transition-all duration-300 
              transform hover:-translate-y-2 hover:scale-105"
            >
              <h1 className="text-4xl sm:text-5xl font-bold 
              bg-gradient-to-r from-pink-500 to-fuchsia-500 
              bg-clip-text text-transparent">
                {num}
              </h1>
              <p className="text-white text-base sm:text-lg">
                {label}
              </p>
            </div>

            {i < 2 && (
              <div className="hidden sm:block w-0.5 h-20 bg-white"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
 