import React from 'react'
import profile from '../../assets/profile.jpg'
export default function () {
    const scrollToContact = () => {
  const section = document.getElementById("contact");
  section?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <div id='hero' className='flex flex-col items-center text-center mt-16'>
        <img className='rounded-full h-52 w-52 object-cover object-center' src={profile} alt="profile_img" />
      <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-10">
       
        <span className="bg-gradient-to-r from-fuchsia-600 to-orange-400 bg-clip-text text-transparent">
          I'm Khushboo Singh,
        </span> frontend <br />
        developer based in India.
     </h1>
        <p className='text-white mt-6 text-xl'>I am a frontend developer from Ghaziabad, India with 3 years of experience,<br /> passionate about building responsive and user-friendly web applications.</p>
        <div className='mt-6 flex gap-6 '>
            <button onClick={scrollToContact} className='px-5 py-3 rounded-full 
             bg-gradient-to-r from-fuchsia-600 to-orange-400
              text-white font-medium hover:opacity-90 transition cursor-pointer transition-all duration-300 transform 
  hover:-translate-y-1 hover:scale-105 '>Connect With Me</button>
          <a
            href="/Khushboo_Resume.pdf"
            download
             className='px-5 py-3 rounded-full text-white font-medium border border-white 
             cursor-pointer transition hover:border-blue-600 
             transition-all duration-300 transform 
             hover:-translate-y-1 hover:scale-105'
>
  My Resume
</a>

        </div>
    </div>
  )
}
