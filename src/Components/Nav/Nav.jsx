import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <div className='navBar'>
        <div className='logo'>
        <h2><a href='/'>Yemi Ojedapo</a></h2>
        </div>
        <div className='links'>
           <a href='/experience'>Experience</a>
              <a href='/projects'>Projects</a>
                <a href='/notes'> Notes</a>
        </div>
    </div>
  )
}

export default Nav