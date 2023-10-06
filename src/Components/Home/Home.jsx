import React from 'react'
import './home.css'
import avar from '../../assets/img/sunnyavar.jpg'
import HeaderSocials from './HeaderSocials'
import {AiOutlineAppstore, AiOutlineClose} from 'react-icons/ai'
import {BiAdjust} from 'react-icons/bi'
import {FcSynchronize} from 'react-icons/fc'

import Clock from './Clock'


const DataName = [
  {
    avar: avar,
    name: 'Pham Nam',
    sub: 'Im a Front-End Developer',
  }
]


const Home = () => {

  // const [Active, setActive] = useState(false);

  function changeRed(){
    
    document.querySelector("#root").style.backgroundColor = "hsla(353, 100%, 65%, 0.547)";
    document.querySelector("#root").style.color ="white";
    document.querySelector(".home__scroll-name").style.color ="white";
    document.querySelector(".wheel").style.backgroundColor = 'white';

    document.querySelector(".section__title").style.color ="white";
  }

  function changeYellow(){
    document.querySelector("#root").style.backgroundColor = 'hsla(59, 100%, 65%, 0.518)';
    document.querySelector("#root").style.color ="black";
    document.querySelector(".home__scroll-name").style.color ="black";
    document.querySelector(".wheel").style.backgroundColor = 'black';
    document.querySelector(".section__title").style.color ="black";

  }

  function changeBlue(){
    document.querySelector("#root").style.backgroundColor = 'hsla(209, 100%, 65%, 0.182)';
    document.querySelector("#root").style.color ="black";
    document.querySelector(".home__scroll-name").style.color ="black";
    document.querySelector(".wheel").style.backgroundColor = 'black';
    document.querySelector(".section__title").style.color ="black";

  }
  function changePurple(){
    document.querySelector("#root").style.backgroundColor = 'hsla(309, 100%, 65%, 0.282)';
    document.querySelector("#root").style.color ="white";
    document.querySelector(".home__scroll-name").style.color ="white";
    document.querySelector(".wheel").style.backgroundColor = 'white';
        document.querySelector(".section__title").style.color ="white";

  }
  function changeBrown(){
    document.querySelector("#root").style.backgroundColor = 'hsla(32, 100%, 65%, 0.774)';
    document.querySelector("#root").style.color ="white";
    document.querySelector(".home__scroll-name").style.color ="white";
    document.querySelector(".wheel").style.backgroundColor = 'white';
    document.querySelector(".section__title").style.color ="white";
  }

  function changeDarkBlue(){
    document.querySelector("#root").style.backgroundColor = 'darkblue';
    document.querySelector("#root").style.color ="white";
    document.querySelector(".home__scroll-name").style.color ="white";
    document.querySelector(".wheel").style.backgroundColor = 'white';
    document.querySelector(".section__title").style.color ="white";
  }
  // 

  function changeWhite(){
    document.querySelector("#root").style.backgroundColor = 'white';
    document.querySelector("#root").style.color ="black";
    document.querySelector(".home__scroll-name").style.color ="black";
    document.querySelector(".wheel").style.backgroundColor = 'black';
    document.querySelector(".section__title").style.color ="black";
  }


  function block(){
    document.querySelector(".home__background-chose").style.display = "block";
  }

  function none(){
    document.querySelector(".home__background-chose").style.display = "none";
  }
  
  return (
    <section className='home container' id='home'>
        <div className="home__background">
          <div 
          onClick={()=>{
                block();
              }} 
              className="background__heading">
            <AiOutlineAppstore className='icon'/>
              <h4>Theme</h4>
          </div>
           
           <div className="home__background-chose">
            <div className="chooseColor">
            
              <div onClick={()=>{
                none();
              }} className="closebtn">
                <AiOutlineClose className='icon'/>
                
              </div>
              
              <div onClick={()=>{
                  changeRed();
                  none();
                }}>
              
                  <span className='pink'>
                    <BiAdjust className='icon'/>
                  </span>
                  
              </div>

              <div onClick={()=>{
                  changeYellow();
                  none();
                }}>
              
                  <span className='yellow'>
                    <BiAdjust className='icon'/>
                  </span>
                  
              </div>

              <div onClick={()=>{
                  changeBlue();
                  none();
                }}>
              
                  <span className='blue'>
                    <BiAdjust className='icon'/>
                  </span>
                  
              </div>

              <div onClick={()=>{
                  changePurple();
                  none();
                }}>
              
                  <span className='purple'>
                    <BiAdjust className='icon'/>
                  </span>
                  
              </div>

              <div onClick={()=>{
                  changeBrown();
                  none();
                }}>
              
                  <span className='brown'>
                    <BiAdjust className='icon'/>
                  </span>
                  
              </div>
              <div onClick={()=>{
                  changeDarkBlue();
                  none();
                }}>
              
                  <span className='darkblue'>
                    <BiAdjust className='icon'/>
                  </span>
                  
              </div>

              <div onClick={()=>{
                  changeWhite();
                  none();
                }}>
              
                  <span>
                    <FcSynchronize className='icon'/>
                  </span>
                  
              </div>
            </div>    
           </div>
        </div>
        
        {
        DataName.map((value, index) => { 
          return(
            <div className="intro">
              <div className="imgDiv">
                <img src={value.avar} alt="sunny" className="home__img" />
              </div>
            <h1 className="home__name">{value.name}</h1>
            <span className="home__education">{value.sub}</span>
          </div>)
        })
        }
        <HeaderSocials />
        <Clock />
        <a href="#contact" className="btn" onClick={()=>{
          changeWhite();
        }}>Hire Sunny</a>
        <div className="scroll__down">
          <a href="#about" className="mouse__wrapper">
            <span className="home__scroll-name">
              Scroll Down
            </span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </div>
    </section>
  )
}

export default Home