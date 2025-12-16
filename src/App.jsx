import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero"
import About from './components/about/About';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


export default function App() {
  return (
    <div className='bg-black min-h-screen px-30 py-10'>
   <Navbar/>
     <Hero/>
     <About/>
     <Services/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
  )
}
