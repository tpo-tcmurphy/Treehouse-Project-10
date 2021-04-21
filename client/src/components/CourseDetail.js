import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/index.css'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'

function CourseDetail (props) {
  const { context } = props
  const authUser = context.authenticatedUser
  const { id } = useParams()
  const [dataState, setDataState] = useState([])
  const [user, setUser] = useState('')

  useEffect(() => {
    axios(`http://localhost:5000/api/courses/${id}`)
      .then((response) => {
        setDataState(response.data)
        setUser(`${response.data.User.firstName} ${response.data.User.lastName}`)
      })
      .catch((error) => {
        if (error.status !== 500) {
          props.history.push('/notfound')
        } else {
          props.history.push('/error')
        }
      })
  }, [id, props.history])

  const handleDelete = (e) => {
    e.preventDefault()
    context.data.deleteCourse(id, authUser.data.emailAddress, authUser.password)
      .then(() => {
        props.history.push('/')
      })
  }

  return (
    <main>
      <div className='actions--bar'>
        <div className='wrap'>
          {
            authUser && dataState.User && authUser.data.emailAddress === dataState.User.emailAddress ?
              <>
                <Link className='button' props={dataState.id} to={'/courses/' + dataState.id + '/update'}>Update Course</Link>
                <Link className='button' onClick={handleDelete} to='/'>Delete Course</Link>
              </>
              : false
          }
          <Link className='button button-secondary' to='/'>Return to List</Link>
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
              <ReactMarkdown source={dataState.description} />
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
