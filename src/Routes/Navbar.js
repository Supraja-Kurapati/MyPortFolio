import React from 'react'
import { NavLink } from 'react-router-dom'
import MobNav from '../MobNav'
// import home from '../Images/preview_edited.jpg'
const Navbar = () => {
  return (
    <div>
              <header className="App-header">
        <nav className='nav'>
        <div><h4 className='baumans-regular'><NavLink to='/'>Supraja Kurapati</NavLink></h4></div>
        <div className='navright'>
         <ul>
            {/* <li><NavLink to='/'><img src={home} className='img'/></NavLink></li> */}
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/experience'>Experience</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
          <li><NavLink to='/contact'>contact</NavLink></li>
         </ul>
        </div>
        </nav>
        <MobNav/>
</header>
    </div>
  )
}

export default Navbar