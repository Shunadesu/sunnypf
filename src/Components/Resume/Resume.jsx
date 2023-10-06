import React from 'react'
import './resume.css'
import ResumeDta from './ResumeData'
import Card from './Card'
const Resume = () => {
  return (
    <>
      <section id="resume" className="resume container section">
        <div className="section__title">Experience</div>

        <div className="resume__container">
          <div className="timeline">
            {
              ResumeDta.map((value, index)=>{
                  if(value.category === "education"){
                    return(
                      <Card key={index} icon={value.icon} title={value.title} year={value.year} decs={value.decs} />
                    )
                  }   
              })
            }
          </div>
          
          

          <div className="timeline">
            {
              ResumeDta.map((value, index)=>{
                  if(value.category === "experience"){
                    return(
                      <Card key={index} icon={value.icon} title={value.title} year={value.year} decs={value.decs} />
                    )
                  }   
              })
            }
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Resume