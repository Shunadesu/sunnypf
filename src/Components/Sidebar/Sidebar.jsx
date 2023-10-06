import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../assets/img/sunnylogo.jpg'
import {HiOutlineHome, HiOutlineBriefcase} from 'react-icons/hi'
import {AiOutlineUser, AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai'
import {LuGraduationCap, LuLayers, LuStickyNote} from 'react-icons/lu'
import {BsChatHeart} from 'react-icons/bs'


const Sidebar = () => {


  const [active,setActive] = useState('nav__menusunny');
  const [menu, setMenu] = useState(true);
  const openBtn = () =>{
    setActive('nav__menusunny');
    setMenu(true);
  }

  const closeBtn = () =>{
    setActive('nav__closesunny');
    setMenu(false);
  }


  return (
  <>
    <aside style={{
          left: menu ? '0' : '-110px',
        }} className='aside'>
      <a href="#home" className='nav__logo'>
        <div className="imgDiv">
          <img src={Logo} alt="" />
        </div>
      </a>

      <nav className='nav'>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className='nav__link'><HiOutlineHome onClick={()=>{closeBtn();}} className='icon'/></a>
            </li>
            <li className="nav__item">
              <a href="#about" className='nav__link'><AiOutlineUser onClick={()=>{closeBtn();}}  className='icon'/></a>
            </li>
            <li className="nav__item">
              <a href="#services" className='nav__link'><HiOutlineBriefcase onClick={()=>{closeBtn();}}  className='icon'/></a>
            </li>
            <li className="nav__item">
              <a href="#resume" className='nav__link'><LuGraduationCap onClick={()=>{closeBtn();}}  /></a>
            </li>
            <li className="nav__item">
              <a href="#porforlio" className='nav__link'><LuLayers onClick={()=>{closeBtn();}}  /></a>
            </li>
            <li className="nav__item">
              <a href="#blog" className='nav__link'><LuStickyNote onClick={()=>{closeBtn();}}  /></a>
            </li>
            <li className="nav__item">
              <a href="#contact" className='nav__link'><BsChatHeart onClick={()=>{closeBtn();}}  /></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyRight">
          &copy; 2022-2023
        </span>
      </div>


    </aside>
    <div onClick={()=>{menu ? closeBtn() : openBtn()}} className={active}>
     {menu ? 
     <AiOutlineCloseCircle className='icon'/> 
     : 
     <AiOutlineMenu className='icon'/>}
    </div>
  </>
  )
}

export default Sidebar