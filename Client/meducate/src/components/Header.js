import './css/Header.css';
import img from './icons/logo.png'

//States
function Header( { animation , onAnimated}) {

  return (
    <div className="Header">
      <h1 id="first">Welcome to Meducate.</h1>
      <h3 id="second">A non-judgemental space for you to learn.</h3>
      <img src={img} alt="Logo" id={ animation }></img>
    </div>
  );
}

//Default id for the logo to animate
Header.defaultProps = {
  animation : 'logo'
};


export default Header;
