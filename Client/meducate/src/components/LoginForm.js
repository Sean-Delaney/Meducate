import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/login.css'
import axios from 'axios'
const API_URL = 'http://ec2-3-87-93-124.compute-1.amazonaws.com/users'
const crypt = require('crypto-js')

const LoginForm = ( { setLogin, nav } ) => {

  useEffect(()=>{
    nav('hidden');
  },[])

  //References
  const userRef = useRef();
  const errRef = useRef();

  const handleSubmit = async (e) => {
    nav('navbarwrapper');
    e.preventDefault();
    let usr = document.getElementById('username').value;
    let pass = document.getElementById('password').value; 
    localStorage.setItem('name', usr);

    let details = {
      username: usr,
      password: crypt.enc.Base64.stringify(crypt.enc.Utf8.parse(pass))
    }

    await axios.get(API_URL, {params: details}).then((res) => {
      if(res.data.length == 1){
        setLogin('true');
      }
      else{
        setErrormessage();
      }
    })

    function setErrormessage(){
      let space = document.getElementById('errorspace');

      space.innerText = "There was an error logging you in";

      setTimeout(() => {
        space.innerText = '';
      }, 4000);
    }
  }

  return (
    <>
    <div id='loginholder'>
      <div id='login'>
        <form onSubmit={handleSubmit}>
          <div id='titlewrapper'>
            <label id='title'>Log in to your account</label> <br />
          </div>
          <div id='errorholder'>
            <p id='errorspace'></p>
          </div>

            <label className='enter'>Username</label> <br />
            <input 
            type='text' 
            className='box' 
            placeholder='Username...' 
            autoComplete='username' 
            id='username' 
            required
            /> <br />

            <label className='enter'>Password</label> <br />
            <input 
            type='password' 
            className='box' 
            placeholder='Password...' 
            autoComplete='current-password' 
            id='password'
            required
            />

            <button>Login</button>
            <p>Dont have an account? <Link to='/register'>Sign up here</Link> </p>
          </form>
      </div>
    </div>
    </>
  )
}

export default LoginForm