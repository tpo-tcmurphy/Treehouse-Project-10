import React, { Component, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiBaseUrl = 'http://localhost:5000/api'


export default class CreateCourse extends Component {
  state = {
    courseTitle: '',
    courseDescription: '',
    estimatedTime: '',
    materialsNeeded: '',
    userId: ''
  }
  
  
  render() {
  
    return (
      <div className="wrap">
      <h2>Create Course</h2>
      <form onSubmit={this.submit}>
        <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input id="courseTitle" name="courseTitle" ref={this.courseTitle} onChange={this.change} type="text" />
              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" name="courseDescription" ref={this.courseDescription} onChange={this.change}></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input id="estimatedTime" name="estimatedTime" ref={this.estimatedTime} onChange={this.change} type="text" />

              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" name="materialsNeeded" ref={this.materialsNeeded} onChange={this.change}></textarea>
            </div>
          </div>
          <button className="button" type="submit">Create Course</button><button className="button button-secondary" onClick={this.cancel}>Cancel</button>
      </form>    
    </div>
    )
  }

  change = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState(() => {
      return {
        [name]: value
      }
    })
  }


  submit = async (e) => {
    e.preventDefault()
    const { context }  = this.props
    const {courseTitle, courseDescription, estimatedTime, materialsNeeded} = this.state
    const authUser = context.authenticatedUser

    const course = {
      title: courseTitle,
      description: courseDescription,
      estimatedTime,
      materialsNeeded,
      userId: authUser.data.userId
    }

    const authCreds = {
      emailAddress: authUser.data.emailAddress,
      password: authUser.password
    }
    
    // Move below function to Data file?????
    context.data.createCourse(course, authCreds.emailAddress, authCreds.password)
      .then(() => {
        console.log('This course has been created!')
        this.props.history.push('/')
      })
    }
  
  cancel = (e) => {
    e.preventDefault()
    this.props.history.push('/')
  }
}



