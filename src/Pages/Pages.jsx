import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Resume from '../Components/Resume/Resume'
import Porforlio from '../Components/Porforlio/Porforlio'
import Testimonials from '../Components/Testimonials/Testimonials'
import Blog from '../Components/Blog/Blog'
import Contact from '../Components/Contact/Contact'
import Services from '../Components/Services/Services'


const Pages = () => (
  <>
    <Sidebar />
    <div className="main">
      <Home />
      <About />
      <Services />
      <Resume />
      <Porforlio />
      <Testimonials />
      <Blog />
      <Contact />
    </div>

  </>
)

export default Pages