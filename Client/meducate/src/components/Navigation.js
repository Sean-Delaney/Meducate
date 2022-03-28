import React from 'react'
import './css/nav.css'
import img from '../favicon.ico'
import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <>
    <div id="navbarwrapper">
    <Link to='/'><img src={img} id="menuicon" alt="Logo"></img></Link>
    <Link to='about' className='items'>About</Link>
    <Link to='/contact' className = 'items'>Contact us</Link>
    <Link to='/info' className = 'items'>Drug Info</Link>
    <Link to='/services' className = 'items'>Help services</Link>
    <Link to='/login' className = 'items'>Login</Link>
    </div>
    </>
  );
}


export default Navigation;
