import React from 'react'
import '../components/css/services.css'

const Services = () => {
  return (
    <div id='servicesholder'>

      <div id='mapholder'>
        <h1>Below is a map of some of the rehabilitation services on offer in Ireland</h1>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1D7LOpOkdGTiZcbEOhPYQMEhk3xkERhbn&ehbc=2E312F" width="640" height="480"></iframe>
      </div>

      <div id='servicesinfo'>
        <h1>While Meducate is all about preventing students from experimenting with drugs , we know that curiosity will get the better of some</h1>
        <p>That's why we believe that one of the most important messages out there is that <br /> </p>
        <p id='slogan'>'It's ok not to be ok'</p>
        <p>If you have experimented with drugs and believe that it may have become a problem for you, please don't be afraid to avail of any of the services listed below.</p>
      </div>

      <div id='serviceslist'>
        <div className='service'>
          <div className='serviceheader'>
            <h1>Drugs.ie</h1>
          </div>
          <div className='servicedescription'>
            <p>Drugs.ie is a national drugs and alcohol helpline. They provide support, information, guidance and refferal for anyone with a question or concern related to drug and alcohol use and/or HIV and sexual health. The service is non-judgemental and offers space to talk about your situation, to explore some options and to consider your needs. During calls/ emails, staff refer to a database of over 400 services nationwide.</p>
          </div>
          <div className='link'>
            <a href='https://www.drugs.ie/'>You can access their wbsite here</a>
          </div>
        </div>

        <div className='service'>
          <div className='serviceheader'>
            <h1>Cuan Mhuire</h1>
          </div>
          <div className='servicedescription'>
            <p>Cuan Mhuire is a charitable drug, alcohol and gambling rehabilitation organisation in Ireland. Cuan Mhuire offers a comprehensive, structured, abstinence based, residential programme to persons suffering from alcohol, other chemical dependencies and gambling.</p>
          </div>
          <div className='link'>
            <a href='https://cuanmhuire.ie/'>You can access their website here</a>
          </div>
        </div>
      </div>

        <div className='service'>
          <div className='serviceheader'>
            <h1>HSE</h1>
          </div>
          <div className='servicedescription'>
            <p>The HSE is a fantastic service available to anyone in Ireland. They have specialist treatment available for almost anything you can think of. In particular, they have an addiction service offering a wide vaeriety of different options. Their services are non-judgemental and offer a space to talk about your situation, to explore some options and to consider your needs.</p>
          </div>
          <div className='link'>
            <a href='https://www.hse.ie/eng/services/list/5/addiction/'>You can access their website here</a>
          </div>
        </div>

      </div>
  )
}

export default Services