import './index.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SubstanceInfo from './pages/SubstanceInfo'
import Services from './pages/Services'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Logout from './pages/Logout';
import Cocaine from './pages/Cocaine';
import Marijuana from './pages/Marijuana';
import Alcohol from './pages/Alcohol';
import Tobacco from './pages/Tobacco';
import Mdma from './pages/Mdma';
import Ketamine from './pages/Ketamine';
import Twocb from './pages/Twocb';
import Lsd from './pages/Lsd';
import Mushrooms from './pages/Mushrooms';

const App = () => {

  const[nav, showNav] = useState('navbarwrapperanimated');
  const[menuicon, showMenuIcon] = useState('menuiconanimated');
  var login = localStorage.getItem('loggedIn');
  //State control for the animation prop of the Image on the main homepage and text.
  const[logoanimation, setlogoAnimation] = useState('logo');
  const[t1Animation, setT1Animated] = useState('first');
  const[t2Animation, setT2Animated] = useState('second');
  //State control for not showing menu on login/register page
  const[showNavWrap, hideNavWrap] = useState(nav);
  const[success, setSuccess] = useState(login);

  //Function to be passed to Login and Logout components to allow them to set the login status.
  async function changeSuccess(status){
    localStorage.setItem('loggedIn', status);
    setSuccess(localStorage.getItem('loggedIn'));
    window.location.href = '/'
  }

    //Main return for all pages, using react router to redirect to different pages.
    return(
      <>
        <Navigation showNav={showNavWrap} state={nav} icon={menuicon}/>
        {/* Different displays based on login status */}
      <Routes>
          {success == 'true' ? (
          <>
            <Route path='/' element={ <Home status={logoanimation} onChange={setlogoAnimation} text1={t1Animation} 
            t1Change={setT1Animated} text2={t2Animation} t2Change={setT2Animated} 
            shownav={hideNavWrap} state={showNav} icon={showMenuIcon}/> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/info' element={ <SubstanceInfo /> } />
            <Route path='/services' element={ <Services /> } />
            <Route path='/logout' element={ <Logout setLogin={changeSuccess} /> } />
            <Route path='/cocaine' element={ <Cocaine /> } />
            <Route path='/marijuana' element={ <Marijuana /> } />
            <Route path='/alcohol' element={ <Alcohol /> } />
            <Route path='/tobacco' element={ <Tobacco /> } />
            <Route path='/mdma' element={ <Mdma /> } />
            <Route path='/ketamine' element={ <Ketamine /> } />
            <Route path='/2cb' element={ <Twocb /> } />
            <Route path='/lsd' element={ <Lsd /> } />
            <Route path='/magicmushrooms' element={ <Mushrooms /> } />
          </>
          ) : (
            <>
            <Route path='/' element={ <LoginForm setLogin={changeSuccess} nav={showNav}/> } />
            <Route path='/register' element={ <RegisterForm setLogin={changeSuccess} nav={showNav}/> } />
          </>
          )}
        </Routes>
          <Footer />
      </>
    )
};

export default App;