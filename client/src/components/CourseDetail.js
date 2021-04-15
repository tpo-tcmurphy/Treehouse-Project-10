import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/index.css'
import ReactMarkdown from 'react-markdown'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

function CourseDetail (props) {
  const params = useParams()
  const id = params.id
  const [dataState, setDataState] = useState([])
  const [user, setUser] = useState('')
  // const [routePath, setRoutePath] = useState(`courses/${id}`)
  useEffect(() => {
    axios(`http://localhost:5000/api/courses/${id}`)
      .then((response) => {
        setDataState(response.data)
        setUser(`${response.data.User.firstName} ${response.data.User.lastName}`)
      })
  }, [id])

  return (
    <main>
      <div className='actions--bar'>
        <div className='wrap'>
          <a className='button' href='update-course.html'>Update Course</a>
          <a className='button' href='#'>Delete Course</a>
          <a className='button button-secondary' href='index.html'>Return to List</a>
        </div>
      </div>

      <div className='wrap'>
        <h2>Course Detail</h2>
        <form>
          <div className='main--flex'>
            <div>
              <h3 className='course--detail--title'>Course</h3>
              <h4 className='course--name'>{dataState.title}</h4>
              <p>By {user}</p>
            </div>
            <div>
              <h3 className='course--detail--title'>Estimated Time</h3>
              <p>{dataState.estimatedTime}</p>

              <h3 className='course--detail--title'>Materials Needed</h3>
              <ul className='course--detail--list'>
                <ReactMarkdown source={dataState.materialsNeeded} />

              </ul>
            </div>
          </div>
        </form>
      </div>
    </main>

  )
}
export default CourseDetail
