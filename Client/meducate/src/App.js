import './index.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SubstanceInfo from './pages/SubstanceInfo'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register';
import axios from 'axios';
import UserStore from './stores/UserStore';

const App = () =>{
  //State to hold all the users for checking against login
  const [allUsers, setUsers] = useState([]);

  async function work(){
    await axios.get('http://localhost:3001/users',{
      params:{
        "username" : "User2"
      }
    }).then((res)=>{
      console.log(res.data);
    })
  }
  work();

  


  //State control for the animation prop of the Image on the main homepage and text.
  const[logoanimation, setlogoAnimation] = useState('logo');
  const[t1Animation, setT1Animated] = useState('first');
  const[t2Animation, setT2Animated] = useState('second');

  //Main return for all pages, using react router to redirect to different pages.
  return(
    //Nav bar and footer present on every page.
    <>
    <Navigation />
    <Routes>
      <Route exact path='/home' element={ <Home status={logoanimation} onChange={setlogoAnimation} text1={t1Animation} t1Change={setT1Animated} text2={t2Animation} t2Change={setT2Animated} /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/info' element={ <SubstanceInfo /> } />
      <Route path='/services' element={ <Services /> } />
      <Route path='/' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
  	</Routes>
      <Footer />
    </>
  )
};

export default App;