import React, { useEffect }from 'react'
import { Link } from 'react-router-dom'
import '../components/css/register.css'
import axios from 'axios'
const API_URL = 'http://ec2-3-87-93-124.compute-1.amazonaws.com/users'
const crypt = require('crypto-js')

const RegisterForm = ( { setLogin, nav } ) => {

  useEffect(()=>{
    nav('hidden');
  },[])

  const handleSubmit = async (e) => {
    //Values for getting the inputs
    let usr = document.getElementById('username').value;
    let pwd1 = document.getElementById('password1').value;
    let pwd2 = document.getElementById('password2').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let error = document.getElementById('errorReg');

    //Stop refresh
    e.preventDefault();

    //Make sure passwords match
    if(pwd1 === pwd2){
      //Store age verification
      var verify = verifyAge(dob);

      //If age has been successfully verified.
      if(verify){
        //Get details to be inserted
        let details = {
          username: usr,
          password: crypt.enc.Base64.stringify(crypt.enc.Utf8.parse(pwd1)),
          email: email
        }
        
        //Attempt to post the new user.
        await axios.post(API_URL, details).then((res) => {
          //Success message set by API.
          if(res.data === "success"){
            backToLogin();
          }

          //Username already exists in the database.
          else{
            error.innerHTML = `<p>The username is already taken. Try another one.</p>`;
  
            setTimeout(()=>{
              error.innerHTML = '';
            }, 4000);
          }
        }) 
      }
      //Else for age verification
      else{
        error.innerHTML = `<p>You must be at least 18 years of age to make an account.`;
        setTimeout(()=>{
          error.innerHTML = '';
        }, 4000);
      }
    }
    //Else for first passwords check
    else{
      error.innerHTML = `<p>Your passwords don't match</p>`;
      setTimeout(()=>{
        error.innerHTML = '';
      }, 4000);
    }
  }

  function backToLogin(){
    window.location.href = '/'
  }

  function verifyAge(dob){
    //Create dates out of the user inputted date and the current date.
    var date = new Date(dob)
    var now = new Date();

    //Get day, month and year for original and current dates to be compared.
    var original_month = date.getMonth();
    var original_day = date.getDate();
    var original_year = date.getFullYear();

    var current_day = now.getDate();
    var current_month = now.getMonth();
    var current_year = now.getFullYear();

    console.log(original_year, current_year, original_month, current_month, original_day, current_day)

    //Check all values to ensure user is older than 18 or at least 18 years old
    if(current_year - original_year >= 18){
      return true;
    }else{
      if(original_month < current_month){
        return true;
      }
      else{
        if(original_day <= current_day && original_month == current_month){
          return true;
        }
        return false;
      }
    }
  }

  return (
    <>
    <div id='registerPage'>
      <div id='registerBox'>
        <form onSubmit={handleSubmit} id='registerform'>

          <div id='titlewrapper'>
            <label id='title'>Sign up for an account</label> <br />
          </div>

          <div id='errorReg'></div>

            <label id='registerEnter'>Enter a username</label> <br />
            <input 
            type='text' 
            className='boxRegister' 
            placeholder='Username...' 
            id='username'
            required
            /> <br />

            <label id='registerEnter'>Enter a password</label> <br />
            <input 
            type='password' 
            className='boxRegister' 
            placeholder='Password...' 
            id='password1'
            required
            /> <br />

            <label id='registerEnter'>Confirm your password</label> <br />
            <input 
            type='password' 
            className='boxRegister' 
            placeholder='Re-type password...'
            id='password2'
            required
            /> <br />

            <label id='registerEnter'>Enter your email</label> <br />
            <input 
            type='email' 
            className='boxRegister' 
            placeholder='Email...' 
            id='email'
            required
            /> <br />

            <label id='registerEnter'>Enter your D.O.B</label> <br />
            <input 
            type='date' 
            className='boxRegister' 
            placeholder='DOB' 
            id='dob'
            required
            /> <br />

            <button>Sign up</button> <br />
            <p>Already have an account? <Link to='/'>Login here</Link> </p>
          </form>
      </div>
    </div>
    </>
  )
}

export default RegisterForm