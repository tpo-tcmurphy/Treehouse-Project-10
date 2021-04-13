import React, { useState, useEffect } from 'react'
import Header from './Header'
import Courses from './Courses'
import CourseDetail from './CourseDetail'
import '../styles/index.css'
import axios from 'axios'

// NOTE: reset.css is being imported in index.html - remove if not needed (clashes with index.css??)

function App () {
  return (
    <>
      <Header />
      <Courses />
      <CourseDetail />
    </>
  )
}

export default App
