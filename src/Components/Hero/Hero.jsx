import React from 'react'
import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Your Favourite Food Delivered Hot & Fresh</h1>
        <p>A Landmark for all things vegetarian,traditional and delicious.</p>      
         <button className='btn'>Order Now <img src={white_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
