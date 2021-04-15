
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserSignUp extends Component {
  
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  }

  render() {
    const {
      firstName, 
      lastName,
      emailAddress,
      password,
      errors,
    } = this.state

    return (
      <div className='form--centered'> 
      <form onSubmit={this.submit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" onChange={this.change} />
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" onChange={this.change} />
      <label htmlFor="emailAddress">Email Address</label>
      <input id="emailAddress" name="emailAddress" type="email" onChange={this.change} />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" onChange={this.change}/>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input id="confirmPassword" name="confirmPassword" type="password" onChange={this.change} />
      <button className="button" type="submit">Sign Up</button><button className="button button-secondary" onClick={this.cancel}>Cancel</button>
    </form>
    <p>Already have a user account? Click here to <Link to="/signin">sign in</Link></p>
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

  submit = (e) => {
    e.preventDefault()
    const { context }  = this.props
    const { firstName, lastName, emailAddress, password } = this.state

    context.data.createUser(this.state)
      .then((user) => {
        if (user === null) {
          this.setState(() => {
            return { errors: [ 'Sign-Up was unsuccessful' ] }
          })
        } else {
          this.props.history.push('/')
        }
      })
      .catch((error) => {
        console.error(error);
        this.props.history.push('/')
      })
  }

  cancel = () => {
    this.props.history.push('/')
  }
}
