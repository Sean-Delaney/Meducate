import axios from 'axios'
import React from 'react'
const crypt = require('crypto-js')
const API_URL = 'http://ec2-3-87-93-124.compute-1.amazonaws.com/users'

const Passwordchange = () => {

  async function handleSubmit(){
    //Values to be used
    const usr = document.getElementById('usr').value;
    const origpwd = document.getElementById('origpwd').value;
    const newpwd1 = document.getElementById('newpwd1').value;
    const newpwd2 = document.getElementById('newpwd2').value;

    //Password confirmation must be the same
    if(newpwd1 !== newpwd2){
      setError('Passwords must match!', 4000);
      return;
    }
    //Make sure password is 6 characters minimum
    else if(!newpwd1.length > 6){
      setError('Password must be 6 or more characters', 4000);
      return;
    }

    //See if the user exists first and the password is correct
    await axios.get(API_URL,
    {params:{
      username : usr,
      password: crypt.enc.Base64.stringify(crypt.enc.Utf8.parse(origpwd))
    }})
    .then((res)=>{
      //If a user was found
      if(res.data.length > 0){
        //Update the user
        axios.put(API_URL,
        {params:{

          usr: usr,
          pwd: crypt.enc.Base64.stringify(crypt.enc.Utf8.parse(newpwd1))

        }}).then((res)=>{
          //If update worked
          if(res.data == 'success'){
            setError('Password Updated', 2000)
          }
          //Update didn't work
          else{
            setError('Password reset was unsuccessful')
          }
        })
        //Username and password combination not found
      }else{
        setError('The username or password you provided doesnt exist', 4000)
      }
    })
  }

  function setError(message, time){
    const err = document.getElementById('error');

    //Set the message
    err.innerHTML = message;

    //Remove the message
    setTimeout(()=>{
      err.innerHTML =''
    }, time);
  }

  return (
    <div id='pwdChangePge'>
      <div id='changeholder'>
        <form>
          <div id='error'></div>
          <label>Enter your username</label> <br />
          <input type='text' id='usr' placeholder='Username'></input> <br />

          <label>Enter your current password</label> <br />
          <input type='password' id='origpwd' placeholder='Current password'></input> <br />

          <label>Enter a new password</label> <br />
          <input type='password' id='newpwd1' placeholder='New password'></input> <br />

          <label>Re-type password</label> <br />
          <input type='password' id='newpwd2' placeholder='Re-type password'></input> <br />
        </form>
        <button onClick={handleSubmit}>Change password!</button>
      </div>
    </div>
  )
}

export default Passwordchange