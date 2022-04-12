import React from 'react'
import '../components/css/contact.css'

//Contact page
const Contact = () => {
  //HTML to be rendered
  return (
    <div id='contactholder'>
      <div id='contactformholder'>

        <div id='contactleft'>

          <div className='contactform'>
            <form className='substanceform' action='mailto:seanrdelaney17@gmail.com?subject=Meducate question.' method='post' encType='text/plain'>
              <h2>Have any questions or comments?</h2>
              <h3>Drop them down below with your details!</h3>

              <input type='text' placeholder='Name' name='Name' required/> <br />

              <input type='text' placeholder='Email' name='Email' mrequired/> <br />

              <input type='text' placeholder='Question / Comment' name='Question' required />

              <button>Ask!</button>
            </form>
          </div>

        </div>

        <div id='contactright'>

          <div className='contactform'>
            <form className='substanceform' action='mailto:seanrdelaney17@gmail.com?subject=Meducate substance suggestion' method='post' encType='text/plain'>
              <h2>Any substances you want to see added ?</h2>
              <h3>Enter your details here along with the substance!</h3>

              <input type='text' placeholder='Name' name='Name' required/> <br />

              <input type='text' placeholder='Email' name='Email' required/> <br />

              <input type='text' placeholder='Enter any substance' className='lastinput' name='Substance' required/>

              <button>Send!</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact