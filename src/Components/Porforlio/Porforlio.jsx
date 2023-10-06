import React, { useState } from 'react'
import './porforlio.css'
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'

import PorData from './PorData'

const Porforlio = () => {
  const [Items, setItems] = useState(PorData);
  
  const filterItem = (categoryItem) =>{
    const updatedItem = PorData.filter((curE)=>{
      return curE.category === categoryItem;
    });

    setItems(updatedItem);
  }

  return (
    <section className="work container section" id="porforlio">
      <h2 className="section__title">Recent Project</h2>

      <div className="work__filters">
        <div className="work__item sunny" onClick={
          ()=>{
            setItems(PorData)
          }}>All</div>
        <div className="work__item sunny_set" onClick={
          ()=> filterItem("Landing")
          }>Landing Page</div>
        <div className="work__item sunny_set" onClick={
          ()=> filterItem("Pages")
          }>Pages</div>
        <div className="work__item sunny_set" onClick={
          ()=> filterItem("Design")
          }>Design</div>
        <div className="work__item sunny_set" onClick={
          ()=> filterItem("Ecomerce")
          }>Ecomerce</div>
      </div>
      <div className="work__container">
        {
        Items.map((element) => {
          const{id, image, title, category, source, demo} = element;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumb">
                <div className="imgDiv">
                  <img src={image} alt="work" />
                </div>

                <div className="work__mask"></div>
                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <div className="divButton">
                  <a href={demo} className="work__button">
                    <AiOutlineLink className="icon" />
                  </a>

                  <a href={source} className="work__button">
                    <AiFillGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </section>
  )
}

export default Porforlio