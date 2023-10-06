import React from 'react';
import TestiData from './TestiData'
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Weather from './Weather';



const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <div className="section__title">Something specials</div>
      
      <Swiper className="testimonials__container"
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true
       }}
      loop={true}
      grabCursor={true}      
      >
        {
          TestiData.map((value, index)=>{
            return (
              <>
              <SwiperSlide className="testimonials__item">
                <div className="thumb">
                  <div className="imgDiv">
                    <img src={value.image} alt="logo" />
                  </div>
                  <h3 className="test__title">{value.title}</h3>
                  <span className="subtitle">{value.subtitle}</span>
                  <div className="comment">{value.comment}</div>
                </div>
              </SwiperSlide>
              </>
            )
          })
        }
      </Swiper>

      <Weather />
    </section>
  );
}

export default Testimonials

