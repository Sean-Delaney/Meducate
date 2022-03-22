import './css/Header.css';
import img from './icons/logo.png'
var classnme = 'logo'

function Header() {

  setTimeout(5000, () => {
    classnme = 'animated'
  })

  return (
    <div className="Header">
      <h1 id="first">Welcome to Meducate.</h1>
      <h3 id="second">A non-judgemental space for you to learn.</h3>
      <img src={img} alt="Logo" id={classnme}></img>
    </div>
  );
}

export default Header;
