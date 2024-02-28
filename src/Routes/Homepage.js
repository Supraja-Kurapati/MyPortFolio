import React from 'react'
import linkedin  from '../Images/linkedin.png'
import { NavLink } from 'react-router-dom'
import myimg from '../Images/Supraja.jpg'
const Homepage = () => {
  return (
    <div className='ProfileWrapper'>
    <div className='ProfileImg'>
      <div className='imgWrapper'>
      <img src={myimg} alt='Not Found' id='aboutImg'/>

      </div>
       {/* <img/> */}
       {/* <img src={myimg} alt='Not Found' id='aboutImg'/> */}

    </div>
    <div className='Details'>
      <h6 style={{fontSize:'1em'}}>Hello, I'm</h6>
      <h3 className='baumans-regular'>Supraja Kurapati</h3>
      <h5 style={{fontSize:'1.2em'}}>MERN Stack Developer</h5>

      <button className='btn dbtn' 
><a href='https://blue-barbara-44.tiiny.site'>Review CV</a></button>

      <button className='btn Cbtn'><NavLink to='/contact'>Contact Info</NavLink></button>
      
      <div className='Social'>
      <div className='linkedin'>
    <a href='https://www.linkedin.com/in/supraja-kurapati-b56150273?fbclid=PAAaaQFnn0M51Fuu7Z2CWKaTxqGPWA7SKvVJw9l9BhN6A9yAchwXIfHNnJ47g' >
        <img src={linkedin} alt='Linkedin' className='linkedinimg'/></a> 
        </div>
      <div className='Github'>
        <a href='https://github.com/Supraja-Kurapati?tab=repositories'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='GitHub' className='Githubimg'/>
        </a>
        </div> 
      </div>
      <h6>Copyright © 2024 SuprajaKurapati. All Rights Reserved.</h6>

    </div>
    
  </div>
  )
}

export default Homepage




