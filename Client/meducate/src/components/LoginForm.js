import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/login.css'
import axios from 'axios'
const API_URL = 'http://localhost:3001/users'

const LoginForm = ( { setLogin } ) => {
  //References
  const userRef = useRef();
  const errRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let usr = document.getElementById('username').value;
    let pass = document.getElementById('password').value; 
    let fetchedUser;

    let details = {
      username: usr,
      password: pass
    }

    await axios.get(API_URL, {params: details}).then((res) => {
      if(res.data.length == 1){
        fetchedUser = res.data;
        setLogin('true');
      }
      else{
        setErrormessage();
      }
    }).then(()=>{
      console.log(fetchedUser[0].username);
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