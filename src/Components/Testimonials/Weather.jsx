import React, { useState } from 'react'
import {FcSearch} from 'react-icons/fc'
import clear__icon from '../../assets/imgweather/Assets/clear.png'
import cloud__icon from '../../assets/imgweather/Assets/cloud.png'
import drizzle__icon from '../../assets/imgweather/Assets/drizzle.png'
import rain__icon from '../../assets/imgweather/Assets/rain.png'
import snow__icon from '../../assets/imgweather/Assets/snow.png'
import wind__icon from '../../assets/imgweather/Assets/wind.png'
import humidity__icon from '../../assets/imgweather/Assets/humidity.png'


const Weather = () => {
  let api_key = "c16aba0633abbfb22fe20753fe509c58";
  const [wicon, setWicon] = useState(cloud__icon);
  const Search = async ()=>{
    const e = document.getElementsByClassName('inputCity');
    try{
      if(e[0].value==="")
      {
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${e[0].value}&units=Metric&appid=${api_key}`;    
      let response = await fetch(url);  
      let data = await response.json();
      
      const hu = document.getElementsByClassName('humidity__percent');
      const wind = document.getElementsByClassName('wind__rate');
      const temp = document.getElementsByClassName('weather__temp');
      const location = document.getElementsByClassName('weather__location');
  
      hu[0].innerHTML = data.main.humidity + " %";
      wind[0].innerHTML = data.wind.speed +" km/h";
      temp[0].innerHTML= data.main.temp + " °c";
      location[0].innerHTML = data.name;
  
      if(data.weather[0].icon ==="01d" || data.weather[0].icon ==="01n" ){
        setWicon(clear__icon);
      }
      else if (data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n" ){
        setWicon(cloud__icon);
      }
      else if (data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n" ){
        setWicon(drizzle__icon);
      }
      else if (data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n" ){
        setWicon(cloud__icon);
      }
      else if (data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n" ){
        setWicon(rain__icon);
      }
      else if (data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n" ){
        setWicon(cloud__icon);
      }
      else if (data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n" ){
        setWicon(snow__icon);
      }
      else{
        setWicon(clear__icon);
      }
    } catch(error){
      alert('The City Name was wrong!');
    }
  }

  return (
    <div className="weather__container">
      <h3 className='weather__title'>Current Weather</h3>
      <div className="weather__topbar">
        <input type="text" class="inputCity" /> 
        <label class="label" for="input">Search</label>
        <div className="label__icon"><FcSearch onClick={()=>{Search()}}/></div>
        <div class="topline"></div>
        <div class="underline"></div>      
      </div>
      <div className="weather__img">
        <img src={wicon} alt="" />
      </div>
      <div className="weather__temp">28°c</div>
      <div className="weather__location">Ho Chi Minh City</div>
      <div className="weather__data">

        <div className="data__element">
          <img src={humidity__icon} alt="" />
          <div className="data">
            <div className="humidity__percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="data__element">
        <img src={wind__icon} alt="" />
        <div className="data">
          <div className="wind__rate">10km/h</div>
          <div className="text">Wing Speed</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Weather