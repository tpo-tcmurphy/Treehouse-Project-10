import React, { useState, useEffect } from 'react'
import Courses from './Courses'
import CourseDetail from './CourseDetail'
import '../styles/index.css'
import axios from 'axios'

// NOTE: reset.css is being imported in index.html - remove if not needed (clashes with index.css??)

function App () {
  return (
    <>
      <header>
        <div className='wrap header--flex'>
          <h1 className='header--logo'><a href='index.html'>Courses</a></h1>
          <nav>
            <ul className='header--signedout'>
              <li><a href='sign-up.html'>Sign Up</a></li>
              <li><a href='sign-in.html'>Sign In</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <Courses />
      <CourseDetail />
    </>
  )
}

export default App
