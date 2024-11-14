import React from 'react'
import './contact.css'
import contactImg from '../../Images/contactImg.jpeg'
import List from '../List'

const Contact = () => {
  return (
    // <div className='contactDisplay'>
    <div className='contactPage'>
    
    <div className='contactDiv'>

        <div className='contactText'>    
         <h2>Let's talk</h2>

      <p> Reach me via email @yemiojedapo1@gmail.com </p>
      </div>
        <div className='contactImg'>
            <img src={contactImg} />
        </div>
    </div>
    {/* <div className='listDiv'>
    <List/>

    </div> */}
    </div>
    // </div>
  )
}

export default Contact