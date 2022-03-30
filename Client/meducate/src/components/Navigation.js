import React from 'react'
import './css/nav.css'
import img from '../favicon.ico'
import { Link } from 'react-router-dom';

const Navigation = ( { showNav, hideNav, showItems, hideItems, showLogo, hideLogo } ) => {

  return (
    <>
    <div id={showNav}>
    <Link to='/'><img src={img} id={showLogo} alt="Logo"></img></Link>
    <Link to='/about' className={showItems}>About</Link>
    <Link to='/contact' className = {showItems}>Contact us</Link>
    <Link to='/info' className = {showItems}>Drug Info</Link>
    <Link to='/services' className = {showItems}>Help services</Link>
    <Link to='/logout' className = {showItems}>Login</Link>
    </div>
    </>
  );
}


export default Navigation;
