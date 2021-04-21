import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// CONVERT TO HOOK
// ALSO NEED TO ADD LOGIC FOR CONFIRM PASSWORD
export default class UserSignUp extends Component {
  
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: null,
    errors: null
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
    const {firstName, lastName, emailAddress, password, userId } = this.state
    
    const user = {
      firstName,
      lastName,
      emailAddress,
      password,
      userId
    }
    // Move below function to Data file?????
    try {
      let pass
      if (password == null) {
        pass = ''
      } else {
        pass = password
      }
      await axios.post('http://localhost:5000/api/users', { firstName, lastName, emailAddress, pass })
      context.actions.signIn(emailAddress, password)
      console.log('This user has been created and is signed in!')
      this.props.history.push('/');
    } catch (error) {
      const validationErrors = error.response.data.validationErrors
      const validationErrorMessages = validationErrors.map((err, index) => <li key={index}>{err}</li>)
      this.setState({errors: <p>{validationErrorMessages}</p>})
    }
  }  

  cancel = (e) => {
    e.preventDefault()
    this.props.history.push('/')
  }
  render() {
    const {errors} = this.state
    return (
      <div className='form--centered'>
      <ul>{errors}</ul>
      <form onSubmit={this.submit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" onChange={this.change} />
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" onChange={this.change} />
      <label htmlFor="emailAddress">Email Address</label>
      <input id="emailAddress" name="emailAddress" type="email" onChange={this.change} />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" onChange={this.change}/>
      {/* <label htmlFor="confirmPassword">Confirm Password</label>
      <input id="confirmPassword" name="confirmPassword" type="password" onChange={this.change} /> */}
      <button className="button" type="submit">Sign Up</button><button className="button button-secondary" onClick={this.cancel}>Cancel</button>
    </form>
    <p>Already have a user account? Click here to <Link to="/signin">sign in</Link></p>
    </div>
    )
  }

  
}
