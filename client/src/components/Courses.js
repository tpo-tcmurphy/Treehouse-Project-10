import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/index.css'

// TODO: Pull in course detail component to have unique keys be course ID

function Courses () {
  const [dataState, setDataState] = useState([])
  const [routePath, setRoutePath] = useState('courses')

  useEffect(() => {
    axios(`http://localhost:5000/api/${routePath}`)
      .then(response => response.data)
      .then(data => setDataState(data))
    return () => {
      setDataState([])
    }
  }, [routePath])

  return (
    <main>
      <div className='wrap main--grid'>
        {dataState.map(data => {
          return (
            <a className='course--module course--link' href='course-detail.html' key={JSON.stringify(data.title)}>
              <h2 className='course--label' key={JSON.stringify(data.title)}>Course</h2>
              <h3 className='course--title' key={JSON.stringify(data.title)}>{JSON.stringify(data.title)}</h3>
            </a>
          )
        })}
        <a className='course--module course--add--module' href='create-course.html'>
          <span className='course--add--title'>
            <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='add'>
              <polygon points='7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 ' />
            </svg>
            New Course
          </span>
        </a>
      </div>
    </main>
  )
}

export default Courses
