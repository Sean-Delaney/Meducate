import img from './icons/logo.png'

//States
function Header({status, onChange, text1, t1Change, text2, t2Change}) {
  setTimeout(() => {
    onChange('logoanimated');
  }, 5000);

  setTimeout(() => {
    t1Change('firstAnimated');
    t2Change('secondAnimated');
  },11000);

  return (
    <div className="Header">
      <h1 id={text1}>Welcome to Meducate.</h1>
      <h3 id={text2}>A non-judgemental space for you to learn.</h3>
      <img src={img} alt="Logo" id={status}></img>
    </div>
  );
}

//Default id for the logo to animate
Header.defaultProps = {
  animation : 'logo'
};


export default Header;
