import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt='' className='banner-img' />
        <div className="hero_caption">
          <img src={hero_title} alt='' className='caption-img' />
        </div>
      </div>
    </div>
  )
}

export default Home
