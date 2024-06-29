import React from 'react'
// import myimg from '../Images/Supraja.jpg'
const About = () => {
  return (
    <div>
       <div className='AboutMeWrapper'>
  <div className='KnowMoreTxt'>
   <h4>Get to Know More</h4>
   <h3>About Me</h3>
   </div>

 <div className='ALLWrap'>
   <div className='aboutImg'>
   {/* <img src={myimg} alt='Not Found' id='aboutImg'/> */}

   </div>

 <div className='abexp abbox'>
  <img src='https://static.thenounproject.com/png/4679201-200.png' className='img' alt='Exp'/>
  <h3 style={{marginTop:"5px"}}> Experience</h3>
  <h4>Fresher in IT Field.</h4>
<h5>0.11 Months Exp in IT Recruitment Field </h5>

 </div>

 <div className='abed abbox'>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rwDnE-u-2T14DxVi4GTH5aClzJfatsShNQ&usqp=CAU' alt='Edu' className='img'/>
 <h3 style={{marginTop:"5px"}}>  Education</h3>
<h4>Bsc (mscs)</h4>
<h5>Bachelor's Degree in Computer Science</h5>
 </div>
 </div>
 <p className='abli'>
  <ol><li>Passionate Web Developer(MERN Stack Developer) Completed course at Prepbytes -Seeking Oppoutunites related to the Skills <b style={{color:"brown" ,wordBreak:'break-all'}}>MongoDB,Node.js,React.js,Javascript,HTML,CSS</b> Skilled in Using GITHUB and git Commands , React-redux ,Debugging.</li>
  <li>Builded Projects as Assessments given by Prepbytes for Practicing and Learning to build the<b> user Friendly and User-Interactive Websites</b>.</li>
  <br/>
  <li><b>Computer Science Graduate </b>from Rao's Degree College affiliated to Vikarama Simhapuri university<b>(BSC mscs) </b>with CGPA- <b>9.34</b></li> 
  <br/>
  <li>Done<b> MPC </b>from Krishna chaitanya junior College from with CGPA- <b>8.37</b></li> 
<br/>
<li>Passed 10th from <b>Board of Secondary Education</b> with CGPA- <b>8.7</b></li> 
<br/>
<li>Certification of <b>Javascript Fundamentals </b>from _ <b>SoloLearn</b></li>
<br/>
<li><b>Artificial Intelligence Certificate</b> from _<b>My Captain</b></li>
<br/>
<li>Participated in activities during Education.</li>
  </ol>
</p>
 </div>

    </div>
  )
}

export default About