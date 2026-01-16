import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <div className='navBar'>
        <div className='logo'>
        <h2><a href='/'>Yemi Ojedapo</a></h2>
        </div>
        <div className='links'>
            <ul>
                <li><a href='/experience'>Experience</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/notes'>Technical Notes</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav