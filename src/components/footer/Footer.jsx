import React from 'react'
import logo from '../../img/logo.svg'
import youtube from '../../img/youtube.svg'
import instagram from '../../img/instagram.svg'
import facebook from '../../img/facebook.svg'



import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <img src={logo} alt="" />
      <div className='footer-text-dev'>Developed by <p className='footer-developer'>Ulukbek</p></div>
      <div className='footer-img'>
        <img src={youtube} alt="" />
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
      </div>
    </div>
  )
}

export default Footer