import React from 'react'
import '../styles/index.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header>
      <div className='wrap header--flex'>
        <h1 className='header--logo'><a href='index.html'>Courses</a></h1>
        <nav>
          <ul className='header--signedout'>
            <li><a href='sign-up.html'>Sign Up</a></li>
            <li><Link to='/signin'>Sign In</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
