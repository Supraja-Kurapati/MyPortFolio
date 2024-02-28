import React from 'react'

const Contact = () => {
  return (
    <div>
      <h4>Get In Touch!!</h4>
      <h2>Contact ME</h2>

      <div className='EMAILANDIN'>
      <p  className='Font-Small'      onClick={()=>window.location='mailto:kurapatisupraja8@gmail.com'}  >Email:kurapatisupraja8@gmail.com</p>
      <br/>
      <p className='Font-Small'><a href='https://www.linkedin.com/in/supraja-kurapati-b56150273?fbclid=PAAaaQFnn0M51Fuu7Z2CWKaTxqGPWA7SKvVJw9l9BhN6A9yAchwXIfHNnJ47g'>Linkedin💬</a></p>
      <br/>
      <p className='Font-Small'>Contact: +91 6309-821-337</p>

      </div>

      <br/>
      <br/><br/><br/><br/><br/>
      <h6>Copyright © 2024 SuprajaKurapati. All Rights Reserved.</h6>
    </div>
  )
}

export default Contact