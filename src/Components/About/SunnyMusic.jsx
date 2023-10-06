import React,{useState} from 'react'
import sunny from '../../assets/music/Sunny.mp4'
import {AiOutlinePlayCircle, AiOutlinePauseCircle} from 'react-icons/ai'

const SunnyMusic = () => {
  const shirovideo = document.querySelector('video');
  const [isActive, setIsActive] = useState(true);
  const playSound = function(){
    shirovideo?.play();
  }

  const pauseSound = function(){
    shirovideo.pause();
  }

  return (
    <div className="musicbox">
        <video src={sunny} loop type="video/mp4"></video>
        <div onClick={()=>{
          isActive ? setIsActive(false) : setIsActive(true)
        }} className="playbtn">
          {
            isActive ? 
            <AiOutlinePlayCircle onClick={playSound} className='icon'/> 
            : 
            <AiOutlinePauseCircle onClick={pauseSound} className='icon'/>
          }
          
        </div>
    </div>
  )
  
}

export default SunnyMusic