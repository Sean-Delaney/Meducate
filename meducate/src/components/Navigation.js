import React from 'react'
import './css/nav.css'
import img from '../favicon.ico'

const Navigation = () => {
  return (
    <>
    <div id="navbarwrapper">
    <img src={img} id="menuicon" alt="Logo"></img>
    <h2 class = 'about items'>About</h2>
    <h2 class = 'contact-us items'>Contact us</h2>
    <h2 class = 'substance-information items'>Subtance information</h2>
    <h2 class = 'help-services items'>Help services</h2>
    </div>
    </>
  )
}

export default Navigation
