import React from 'react'
import hero from '../images/hero_wrapper.png'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='leftpane'>
        <div className='leftinner'>
          <div>
            <h1>Bridging the <a style={{backgroundImage: 'linear-gradient(-90deg, #DE4396 100%, #0D1C9F 0%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Gap</a> between</h1>
            <h1>Technology and <a style={{backgroundImage: 'linear-gradient(#F7666F 100%, #406AFF 0%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Education</a></h1>
          </div>
          <div>
            <h3>We help build and manage world-class tech solutions for</h3>
            <h3>education to meet your needs</h3>
          </div>
          <button>Let's get started!</button>
        </div>
      </div>
      <div className='rightpane'>
        <img src={hero} alt='hero image' style={{objectFit: 'fill'}} />
      </div>
    </div>
  )
}

export default Home