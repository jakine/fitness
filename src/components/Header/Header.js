import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'


function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt='' className='logo'/>

      <ul className='header-menu'>
        <li>home</li>
        <li>programs</li>
        <li>why use</li>
        <li>plans</li>
        <li> testimonial</li>


      </ul>
    </div>
  )
}

export default Header
