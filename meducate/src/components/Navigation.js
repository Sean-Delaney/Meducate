import React from 'react'
import './css/nav.css'
import img from '../favicon.ico'

const Navigation = () => {

  return (
    <>
    <div id="navbarwrapper">
    <img src={img} id="menuicon" alt="Logo"></img>
    <button class = 'about items'>About</button>
    <button class = 'contact-us items'>Contact us</button>
    <button class = 'substance-information items'>Subtance information</button>
    <button class = 'help-services items'>Help services</button>
    </div>
    </>
  )
}

export default Navigation
