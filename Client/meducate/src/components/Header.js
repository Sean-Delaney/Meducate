import { useState } from 'react';
import './css/Header.css';
import img from './icons/logo.png'

//States
function Header({status, onChange}) {
  setTimeout(() => {
    onChange('logoanimated');
  }, 5000);

  return (
    <div className="Header">
      <h1 id="first">Welcome to Meducate.</h1>
      <h3 id="second">A non-judgemental space for you to learn.</h3>
      <img src={img} alt="Logo" id={status}></img>
    </div>
  );
}

//Default id for the logo to animate
Header.defaultProps = {
  animation : 'logo'
};


export default Header;
