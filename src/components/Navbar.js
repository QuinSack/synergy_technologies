import React from 'react'
import '../styles/nav.css'
import logo from '../images/synergy_tech_logo.png'

const Navbar = () => {
  return (
    <div className='nav'>
        <img src={logo} alt='Synergy Technologies Logo' />
        <div className='midsection'>
            <h3>Home</h3>
            <h3>About Us</h3>
            <h3>Services</h3>
            <h3>Case Studies</h3>
            <h3>Blog</h3>
            <h3>How it Works</h3>
            <h3>Hire</h3>
        </div>
        <button><strong>Contact us</strong></button>
    </div>
  )
}

export default Navbar