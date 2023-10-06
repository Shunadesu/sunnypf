import React from 'react'
import './contact.css'
import {FiFacebook} from 'react-icons/fi'

const Contact = () => {

  function toast({duration = 3000}){
    const sunny = document.querySelector('.contact');
    if(sunny){
      const toasti = document.createElement('div');
      const delay = (duration/1000).toFixed(2);


      toasti.classList.add('toast');
      toasti.style.animation = `slideIn ease .5s, fadeOut linear 1s ${delay}s forwards `;

      toasti.innerHTML=
      `
            <div class="toast__icon">
            <i class="fa-sharp fa-solid fa-circle-check"></i>

            </div>
            <div class="toast__body">
                <h3 class="toast__title">This messages was be send!</h3>
                </div>
            <div class="toast__close">
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
  
            </div>`; 
      sunny.appendChild(toasti);

      const autoRemove = setTimeout(function(){
        sunny.removeChild(toasti); 
      }, duration + 1000);

      const sunnyclose = document.querySelector('.toast__close');
      sunnyclose.onclick = function(){
          sunny.removeChild(toasti);
          clearTimeout(autoRemove);
      }

    }
  }

  return (
    <section className="contact container section" id='contact'>
      <div className="section__title">Get in Touch</div>

      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__title">Let's talk about everything!</div>
          <div className="contact__details">Don't like forms? Send me a messages!</div>
          <div className="sunnyinfo"><a href="https://www.facebook.com/Sunny.pnhn" className='sunnyinfo'> <FiFacebook className="icon"/> Sunny.pnhn </a></div>
        </div>

        <form className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className='contact__form-input' placeholder="Insert your name" />
            </div>


            <div className="contact__form-div">
              <input type="email" className='contact__form-input' placeholder="Insert your email" />
            </div>
          </div>
          
            <div className="contact__form-div">
              <input type="text" className='contact__form-input' placeholder="Insert your subject" />
            </div>

            <div className="contact__form-div">
              <textarea name="" id="" cols="30" rows="10" className='contact__form-input contact__form-area' placeholder='Write your messages'></textarea>
            </div>

            <div style={{cursor: 'pointer'}} onClick={() => toast({duration: 5000})} className='btn btn-toast'>Send Messages</div>
          
        </form>
      </div>
    </section>
  )
}

export default Contact