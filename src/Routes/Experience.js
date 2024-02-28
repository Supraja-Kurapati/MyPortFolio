import React from 'react'
import tick from '../Images/hand_drawn_tick.jpg'
const Experience = () => {
  return (
    <div>
      <h5>Explore MY</h5>
      <h2>Experience</h2>
      <br/>
   <div className='EntireWrapperExp'>

    <div className='FNDDEVWrapper'>
      <h3>FrontEnd Development</h3>
      <br/>
      <table>
        <tr>
          <td ><img src={tick} alt='NOT FOUNd' className='Tickimg'/></td>
          <td>HTML</td></tr>
          <tr>
          <td colSpan={2}>Experienced</td></tr>
      </table>
      
      <hr/>

      <table>
        <tr>
          <td><img src={tick} alt='NOT FOUNd' className='Tickimg'/></td>
          <td>CSS</td></tr>
          <tr>
          <td colSpan={2}>Experienced</td></tr>
      </table>
      <hr/>

      <table>
        <tr>
          <td><img src={tick} alt='NOT FOUNd' className='Tickimg'/></td>
          <td>Javascript</td></tr>
          <tr>
          <td colSpan={2}>Moderate</td></tr>
      </table>
      <hr/>

      <table>
        <tr>
          <td><img src={tick} alt='NOT FOUNd' className='Tickimg'/></td>
          <td>React.js</td></tr>
          <tr>
          <td colSpan={2}>Experienced</td></tr>
      </table>




    </div>

    <div className='BCKNDDEVWrapper'>
    <h3>BackEnd Development</h3>
<br/>
    <table>
        <tr>
          <td><img src={tick} alt='NOT FOUNd' className='Tickimg'/></td>
          <td>Node.js</td></tr>
          <tr>
          <td colSpan={2}>Experienced</td></tr>
      </table>
      <hr/>

      <table>
        <tr>
          <td><img src={tick} alt='NOT FOUNd' className='Tickimg'/></td>
          <td>Express.js</td></tr>
          <tr>
          <td colSpan={2}>Experienced</td></tr>
      </table>
      <hr/>


      <table>
        <tr>
          <td><img src={tick} alt='NOT FOUNd' className='Tickimg'/></td>
          <td>MongoDB/Mongoose</td></tr>
          <tr>
          <td colSpan={2}>Moderate</td></tr>
      </table>
      <hr/>



    </div>

   </div>

<h6>Copyright © 2024 SuprajaKurapati. All Rights Reserved.</h6>

    </div>
  )
}

export default Experience