import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero"
import About from './components/about/About';
import Services from './components/services/services';
import Work from './components/work/Work';


export default function App() {
  return (
    <div className='bg-black min-h-screen px-40 py-10'>
   <Navbar/>
     <Hero/>
     <About/>
     <Services/>
    <Work/>
    </div>
  )
}
