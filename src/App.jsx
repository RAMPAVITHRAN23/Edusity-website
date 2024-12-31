import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='OUR PROGRAM' Title='What We Offer'/>
        <Programs />
        <About/>
        <Title subtitle='Gallery' Title='Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' Title='What a Student Says'/>
        <Testimonials/>
        <Title subtitle='Contact Us' Title='Get in Touch'/>
        <Contact/>
      </div>

    </div>
  )
}

export default App