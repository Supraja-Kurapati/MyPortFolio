import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const MobNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  

   
  return (
     <nav id='hamburgernav'>
  <div><h4 className='baumans-regular'><NavLink to='/'>Supraja Kurapati</NavLink></h4></div>

  <div className='hamMenu'>
   <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span className="line top"></span>
      <span className="line middle"></span>
      <span className="line bottom"></span>
      <span className="cross" style={{ display: isMenuOpen ? 'block' : 'none' }}>
      <div id='menu'>
      <ul className={isMenuOpen ? 'visible' : 'hidden'}>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/experience'>Experience</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/contact'>contact</NavLink></li>
      </ul>
        </div>

        {/* <span className="cross-line left"></span>
        <span className="cross-line right"></span> */}
       </span> 
    </div> 
</div>





</nav> 

  )
}

export default MobNav