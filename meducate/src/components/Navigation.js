import React from 'react'
import './css/nav.css'
import img from '../favicon.ico'

const Navigation = () => {

  return (
    <>
    <div id="navbarwrapper">
    <img src={img} id="menuicon" alt="Logo"></img>
    <button className = 'items' onClick={alertme}>About</button>
    <button className = 'items'>Contact us</button>
    <button className = 'items'>Subtance information</button>
    <button className = 'items'>Help services</button>
    </div>
    </>
  );

  function alertme(){
    alert("Working now you handicap")
  } 
}


export default Navigation;
