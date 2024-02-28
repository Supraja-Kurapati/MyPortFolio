import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import Projects from './Projects'
import Homepage from './Homepage'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Routing


