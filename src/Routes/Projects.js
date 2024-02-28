import React from 'react'
import tourism from '../Images/39369.jpg'
import ecart from '../Images/logo-white.png'
import siren from '../Images/siren.png'
import TODOJS from '../Images/TODOJS.jpg'
import clock from '../Images/Clock.jpg'
import todocss from'../Images/todocss.jpg'
import htmlblog from '../Images/HTML Blog.jpg'
const Projects = () => {
  return (
    <div>
      <div style={{margin:'40px'}}><h4 style={{color:'lightblack'}}>Check Out My Projects!!</h4></div>
      <div className='AssessmentProjects'>
        <div className='AllProjectsWrapper'>


          <div className='ProjectCard'>
            <div className='Projimg'>
              <img src={tourism} alt='INDIA TOURISM' className='imgPr'/>
            </div>

            <div className='ProjectTitle'>India Tourism Clone APP</div>

            <div className='btns'>
              <div className='prbtn'><a href='https://thriving-syrniki-07f81e.netlify.app/'>Overview</a></div>
              <div className='prbtn'><a href='https://github.com/Supraja-Kurapati?tab=repositories'>Github</a></div>
            </div>
          </div>



          <div className='ProjectCard'>
            <div className='Projimg'>
            <img src={ecart} alt='E-CART' className='imgPr'/>

            </div>

            <div className='ProjectTitle'>ECommerce APP</div>

            <div className='btns'>
              <div className='prbtn'><a href='https://thunderous-sfogliatella-f3b108.netlify.app/'>Overview</a></div>
              <div className='prbtn'><a href='https://github.com/Supraja-Kurapati?tab=repositories'>Github</a></div>
            </div>
          </div>



          <div className='ProjectCard'>
            <div className='Projimg'>
            <img src={siren} alt='Siren Blog' className='imgPr'/>
            </div>

            <div className='ProjectTitle'>BLOG Backend APP</div>

            <div className='btns'>
              <div className='prbtn'><a href='https://jovial-starburst-e92a85.netlify.app/'>Overview</a></div>
              <div className='prbtn'><a href='https://github.com/Supraja-Kurapati?tab=repositories'>Github</a></div>
            </div>
          </div>


          <div className='ProjectCard'>
            <div className='Projimg'>
            <img src={siren} alt='Siren Blog' className='imgPr'/>
            </div>

            <div className='ProjectTitle'>BLOG Frontend APP</div>

            <div className='btns'>
              <div className='prbtn'>
                <a href='https://effervescent-frangollo-fa7e75.netlify.app/'>Overview</a></div>
              <div className='prbtn'><a href='https://github.com/Supraja-Kurapati?tab=repositories'>Github</a></div>
            </div>
          </div>


          <div className='ProjectCard'>
            <div className='Projimg'>
            <img src={TODOJS} alt='TO DO JS' className='imgPr'/>
            </div>

            <div className='ProjectTitle'>To Do JS APP</div>

            <div className='btns'>
              <div className='prbtn'>
                <a href='https://supraja-kurapati.github.io/todojs_app/'>Overview</a></div>
              <div className='prbtn'><a href='https://github.com/Supraja-Kurapati?tab=repositories'>Github</a></div>
            </div>
          </div>


          <div className='ProjectCard'>
            <div className='Projimg'>
            <img src={clock} alt='CLOCK' className='imgPr'/>
            </div>

            <div className='ProjectTitle'>Clock APP</div>

            <div className='btns'>
              <div className='prbtn'>
                <a href='https://supraja-kurapati.github.io/DigitalClock_Mq/'>Overview</a></div>
              <div className='prbtn'><a href='https://github.com/Supraja-Kurapati?tab=repositories'>Github</a></div>
            </div>
          </div>


          <div className='ProjectCard'>
            <div className='Projimg'>
            <img src={todocss} alt='TO DO CSS' className='imgPr'/>
            </div>

            <div className='ProjectTitle'>TO DO APP-CSS</div>

            <div className='btns'>
              <div className='prbtn'>
                <a href='https://supraja-kurapati.github.io/e0cssp1/'>Overview</a></div>
              <div className='prbtn'><a href='https://github.com/Supraja-Kurapati?tab=repositories'>Github</a></div>
            </div>
          </div>


          <div className='ProjectCard'>
            <div className='Projimg'>
            <img src={htmlblog} alt='HTML BLOG' className='imgPr'/>
            </div>

            <div className='ProjectTitle'>HTML BLOG PAGE </div>

            <div className='btns'>
              <div className='prbtn'>
                <a href='https://supraja-kurapati.github.io/blogpage/'>Overview</a></div>
              <div className='prbtn'><a href='https://github.com/Supraja-Kurapati?tab=repositories'>Github</a></div>
            </div>
          </div>




        </div>
      </div>      <h6>Copyright © 2024 SuprajaKurapati. All Rights Reserved.</h6>

    </div>
  )
}

export default Projects