import React from 'react'
import './services.css'
import ServicesData from './ServicesData'


const Services = () => {
  return (
    <>
    <section className="services container section" id='services'>
      <h2 className="section__title">Services</h2>
      <weather />
      <div className="services__container">
        {
          ServicesData.map((value, index)=>{
            return (
              <div className="data" id={value.id}>
                <div className="imgDiv">
                  <img src={value.img} alt="services" />
                </div>
                <h2 className="data__title">{value.title}</h2>
                <p className='data__des'>{value.description}</p>
              </div>
            )
          })
        }
      </div>


     
    </section>
    </>
  )
}

export default Services