import React from 'react'
import '../components/css/logout.css'

const Logout = ( { setLogin } ) => {

  function handleLogout(){
    setLogin('false');
    window.location.href = 'http://localhost:3000/';
  }

  return (
      <div id='logoutHolder'>
        <div id='check'>
          <h1>We are sad to see you go</h1>
          <h2>Are you sure you want to log out ?</h2> <br />
          <button onClick={handleLogout}>Click here to logout</button>
        </div>
      </div>
  )
}

export default Logout