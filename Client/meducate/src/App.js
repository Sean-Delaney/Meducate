import './index.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SubstanceInfo from './pages/SubstanceInfo'
import Services from './pages/Services'
import Register from './pages/Register';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  
  var isLoggedIn = false;
  //State to hold all the users for checking against login
  const [allUsers, setUsers] = useState([]);
  //State control for the animation prop of the Image on the main homepage and text.
  const[logoanimation, setlogoAnimation] = useState('logo');
  const[t1Animation, setT1Animated] = useState('first');
  const[t2Animation, setT2Animated] = useState('second');
  //State control for not showing menu on login/register page
  const[showNavWrap, hideNavWrap] = useState('hiddenwrap');
  const[showItems, hideItems] = useState('hiddenitems');
  const[showLogo, hideLogo] = useState('hiddenicon')

  const[success, setSuccess] = useState(false);

  function logMeIn(){
    console.log("wont work");
    setSuccess(true);
  }

  //Function to retrieve all users from database
  async function getUsers(query){
    await axios.get('http://localhost:3001/users', {params: query}).then((res)=>{
      setUsers(res.data);
      logData(res.data);
    })
  }

  function logData(data){
    console.log(data);
  }
    //Main return for all pages, using react router to redirect to different pages.
    return(
      <>
        <Navigation showNav={showNavWrap} hideNav={hideNavWrap} showItems={showItems} hideItems={hideItems} showLogo={showLogo} hideLogo={hideLogo}/>
      <Routes>
          {success ? (
          <>
            <Route path='/' element={ <Home status={logoanimation} onChange={setlogoAnimation} text1={t1Animation} 
            t1Change={setT1Animated} text2={t2Animation} t2Change={setT2Animated} 
            shownav={hideNavWrap} showitems={hideItems} showlogo={hideLogo}/> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/info' element={ <SubstanceInfo /> } />
            <Route path='/services' element={ <Services /> } />
          </>
          ) : (
            <>
            <Route path='/' element={ <LoginForm func={logMeIn}/> } />
            <Route path='/register' element={ <RegisterForm /> } />
          </>
          )}
        </Routes>
          <Footer />
      </>
    )
};

export default App;