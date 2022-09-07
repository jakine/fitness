import React from 'react'
import Header from '../Header/Header'
import heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_black from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import './Hero.css'
function Hero() {
  return (
    <div className="hero">
      {/* <span style={{color:'white'}} ></span> */}
      <div className="left-h">

        <Header />
        {/* the best add */}
        <div className="the-best-add">
          <div className='the-best-add-slider' ></div>
          <span>the best fitness club in the town </span>
          {/* change it to eshkollori */}
        </div>
        <div className="hero-text">

          <div>
            <span className='stroke-text' >Shape </span>
            <span> Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div className='span'>
            <span>

              In here we will help you build your ideal body
              and live to the fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span> export coaches</span>
          </div>
          <div>
            <span> 978 </span>
            <span>member </span>
          </div>
          <div>
            <span>50</span>
            <span> fitnes programs </span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn"> Learn more</button>
        </div>

      </div>


      <div className="right-h">
        <button className="btn">
          Join Now
        </button>
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate </span><span>100 bpm</span>
        </div>

        <img src={hero_image} className='hero_image' />
        <img src={hero_image_black} className='hero_image_back' />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span className="caloriesS1">calorie burn</span>
            <span className="caloriesS2"> 200kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero