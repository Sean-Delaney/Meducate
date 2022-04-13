import React from 'react'
import { Link } from 'react-router-dom';
import '../components/css/logout.css'

const Logout = ( { setLogin } ) => {

  function handleLogout(){
    setLogin('false');
    window.location.href = '/';
  }

  const name = localStorage.getItem('name');

  return (
      <div id='logoutHolder'>
        <div id='check'>
          <h1>Welcome to your profile, {name}</h1>
          <h2>What would you like to do ?</h2> <br />
          <div id='profilebuttons'>
            <button className='profilebutton' id='logoutbtn' onClick={handleLogout}>Click here to logout</button>
            <Link to='/changepassword'><button className='profilebutton' id='changepwdbtn'>Click here to change your password</button></Link>
          </div>
        </div>
      </div>
  )
}

export default Logout