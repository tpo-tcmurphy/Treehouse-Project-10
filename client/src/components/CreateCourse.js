import React, { Component, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// function CreateCourse (props) {
//   const [courseTitle, setCourseTitle] = useState('')
//   const [courseDescription, setDescription] = useState('')
//   const [estimatedTime, setEstimatedTime] = useState('')
//   const [materialsNeeded, setMaterialsNeeded] = useState('')
//   const [userId, setUserId] = useState('')

//   const titleInput = useRef(null);
//   const descriptionInput = useRef(null);
//   const timeInput = useRef(null);
//   const materialsInput = useRef(null);
  
//   function change (event) {
//     setCourseTitle(titleInput.current.value);
//     setDescription(descriptionInput.current.value);
//     setEstimatedTime(timeInput.current.value);
//     setMaterialsNeeded(materialsInput.current.value);
//   }

//   function submit (e) {
//     e.preventDefault()
//     const { context } = props

//     const course = {
//       courseTitle,
//       courseDescription,
//       estimatedTime,
//       materialsNeeded,
//       userId: context.data.authenticatedUser.id
//     }
//     console.log(context.data.authenticatedUser)
//     console.log(course)
//     axios.post('http://localhost:5000/api/courses', course, context.data.authenticatedUser.emailAddress, context.data.authenticatedUser.password)
//       .then(() => {
//         console.log('This course has been created!')
//         this.props.history.push('/');
//       });
//   }

//   function cancel (e) {
//     e.preventDefault()
//     props.history.push('/')
//   }

//   return (
//     <div className="wrap">
//     <h2>Create Course</h2>
//     <form onSubmit={submit}>
//       <div className="main--flex">
//           <div>
//             <label htmlFor="courseTitle">Course Title</label>
//             <input id="courseTitle" name="courseTitle" ref={titleInput} onChange={change} type="text" />
//             <label htmlFor="courseDescription">Course Description</label>
//             <textarea id="courseDescription" name="courseDescription" ref={descriptionInput} onChange={change}></textarea>
//           </div>
//           <div>
//             <label htmlFor="estimatedTime">Estimated Time</label>
//             <input id="estimatedTime" name="estimatedTime" ref={timeInput} onChange={change} type="text" />

//             <label htmlFor="materialsNeeded">Materials Needed</label>
//             <textarea id="materialsNeeded" name="materialsNeeded" ref={materialsInput} onChange={change}></textarea>
//           </div>
//         </div>
//         <button className="button" type="submit">Create Course</button><button className="button button-secondary" onClick={cancel}>Cancel</button>
//     </form>    
//   </div>
//   )
// }

// export default CreateCourse


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
    const {courseTitle, courseDescription, estimatedTime, materialsNeeded, userId} = this.state
    const authUser = context.authenticatedUser

    const course = {
      courseTitle,
      courseDescription,
      estimatedTime,
      materialsNeeded,
      userId
    }

    const authCreds = {
      emailAddress: authUser.data.emailAddress,
      password: authUser.password,
      userId: authUser.userId
    }

    console.log(course)
    
    console.log(authUser.data.emailAddress, authUser.password)
    // Move below function to Data file?????

    context.data.createCourse(course, authCreds.emailAddress, authCreds.password)
    .then(() => {
      console.log('This course has been created!')
      
      this.props.history.push('/')})
    }

    // .then((user) => {
    //   if (user === null) {
    //     this.setState(() => {
    //       return { errors: [ 'Sign-in was unsuccessful' ] }
    //     })
    //   } else {
    //     this.props.history.push('/')
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    //   this.props.history.push('/error')
    // })

    // await axios.post('http://localhost:5000/api/courses', authCreds, course )
      // .then(() => {
      //   console.log('This course has been created!')
        
      //   this.props.history.push('/');
    //   });
    // .then(errors => {
    //   if (errors.length) {
    //     this.setState({ errors });
    //   } else {
        
    // }
    
  
    //  .catch((error) => {
    //    console.error(error);
    //     this.props.history.push('/')
    //   })
  
  cancel = (e) => {
    e.preventDefault()
    this.props.history.push('/')
  }

  
}
