import React from 'react'
import './blog.css'

import BlogData from './BlogData'

const Blog = () => {
  return (
    <section className='blog container section' id='blog'>
      <div className="section__title">My blog Tutorials</div>
      <div className="blog__container">
        {BlogData.map((value, index)=>{
          return(
              <div className="blog__card">
                <div className="blog__thumb">
                  <a href="#"><span className="blog__category">{value.category}</span></a>
                  <div className="blog__img"><a href={value.link}><img src={value.img} alt="img" /></a></div>
                </div>
                <div className="blog__details">
                  <h3 className="blog__title">{value.title}</h3>
                  <div className="blog__meta">
                    <span className='meta'>{value.meta}</span>
                    <div className='sunnymeta'>@Sunny</div>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    </section>
  )
}

export default Blog