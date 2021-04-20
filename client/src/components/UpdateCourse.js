import React, { Component, useState, useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

function UpdateCourse (props) {
  // const params = useParams()
  const id = props.match.params.id
  const [dataState, setDataState] = useState([])
  const [user, setUser] = useState('')

  useEffect(() => {
    console.log(id)
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then((response) => {
        setDataState(response.data)
        setUser(`${response.data.User.firstName} ${response.data.User.lastName}`)
      })
  }, [id])

  const change = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState(() => {
      return {
        [name]: value
      }
    })
  }


  const submit = async (e) => {
    // e.preventDefault()
    // const { context } = this.props
    // const authUser = context.authenticatedUser
    

    // const course = {
    //   id,
    //   title,
    //   description,
    //   estimatedTime: time,
    //   materialsNeeded: materials
    // }

    // const authCreds = {
    //   emailAddress: authUser.data.emailAddress,
    //   password: authUser.password
    // }

    // Move below function to Data file?????
    // context.data.updateCourse(id, course, authCreds.emailAddress, authCreds.password)
    //   .then(() => {
    //     console.log('This course has been updated!')
    //     this.props.history.push(`/courses/${id}`)
    //   })
  }

  const cancel = (e) => {
    e.preventDefault()
    this.props.history.push('/')
  }
  return (
    <div className='wrap'>
      <h2>Update Course</h2>
      <form onSubmit={submit}>
        <div className='main--flex'>
          <div>
            <label htmlFor='courseTitle'>Course Title</label>
            <input id='courseTitle' name='courseTitle' type='text' onChange={change} value={dataState.title} />

            <label htmlFor='courseAuthor'>Course Author</label>
            <input id='courseAuthor' name='courseAuthor' type='text' readOnly value={user} />

            <label htmlFor='courseDescription'>Course Description</label>
            <textarea id='courseDescription' name='courseDescription' value={dataState.description} onChange={change}> </textarea>
          </div>
          <div>
            <label htmlFor='estimatedTime'>Estimated Time</label>
            <input id='estimatedTime' name='estimatedTime' type='text' value={dataState.estimatedTime} />

            <label htmlFor='materialsNeeded'>Materials Needed</label>
            <textarea id='materialsNeeded' name='materialsNeeded' value={dataState.materialsNeeded} onChange={change}> </textarea>
          </div>
        </div>
        <button className='button' type='submit'>Update Course</button><button className='button button-secondary' onClick={cancel}>Cancel</button>
      </form>
    </div>
  )
}

export default UpdateCourse
