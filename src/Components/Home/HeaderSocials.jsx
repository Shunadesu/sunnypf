import React from 'react'
import {AiOutlineFacebook, AiOutlineGoogle, AiOutlineGithub, AiOutlineLinkedin, AiOutlinePhone} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.facebook.com/Sunny.pnhn" className='home__social-link' target='_blank'> <AiOutlineFacebook className='icon'/> </a>
        <a href="mailto:namp280918@gmail.com" className='home__social-link' target='_blank'> <AiOutlineGoogle className='icon'/> </a>
        <a href="https://github.com/Shunadesu" className='home__social-link' target='_blank'> <AiOutlineGithub className='icon'/> </a>
        <a href="https://www.linkedin.com/in/nam-ph%E1%BA%A1m-a00a67230" className='home__social-link' target='_blank'> <AiOutlineLinkedin className='icon'/> </a>
        <a href="tel:0523372202" className='home__social-link' target='_blank'> <AiOutlinePhone className='icon'/> </a>
    </div>
  )
}

export default HeaderSocials