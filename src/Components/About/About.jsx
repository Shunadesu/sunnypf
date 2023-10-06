import React from 'react'
import './about.css'
import aboutLogo from '../../assets/img/sunnyaboutlogo.jpg'
import SunnyMusic from './SunnyMusic'
import CVPhamNam from '../../assets/music/CVSunny.pdf'


const skillsData =[
  {
    name: 'Developer',
    per: '90%',
  },
  {
    name: 'UI/UX Design',
    per: '70%',
  },
  {
    name: 'Coding',
    per: '80%',
  }
]


const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className="about__container">
        <div className="divImg">
          <img src={aboutLogo} alt="about_me" />
        </div>
        <div className="about__data">
          <div className="about__info">
            <p className="about__desc">I am Sunny Pham Nam, I am looking for a internship Web Developer in HCM City. I have many experience in website Design and Customization.</p>
            <a href={CVPhamNam} download="CVPhamNam" target='_blank' className="btn">Download CV</a>
          </div>
          <div className="about__skills">
            {
              skillsData.map((value, index)=>{
                return(
                  <div className="skills__data" id ={index}>
                    <div className="skills__titles">
                        <h3 className='skills__name'>{value.name}</h3>
                        <span className='skills__number '>{value.per}</span>
                    </div>
                    <div className="skills__bar">
                      <span style={{width: value.per}} className='skills__percentage'></span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <SunnyMusic />  
      
    </section>
  )
}

export default About