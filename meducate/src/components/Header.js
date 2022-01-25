import './css/Header.css';
import img from './icons/logo.png'

function Header() {
  return (
    <div className="Header">
      <h1 id="first">Welcome to Meducate.</h1>
      <h3 id="second">A non judgemental space for you to learn.</h3>
      <img src={img} alt="Logo" id='logo'></img>
    </div>
  );
}

export default Header;
