import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class UserSignUp extends Component {
  
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: null,
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
    const {firstName, lastName, emailAddress, password } = this.state
    
    const user = {
      firstName,
      lastName,
      emailAddress,
      password
    };
    console.log(user)
    await axios.post('http://localhost:5000/api/users', { firstName, lastName, emailAddress, password })
    // .then(errors => {
    //   if (errors.length) {
    //     this.setState({ errors });
    //   } else {
    //     context.actions.signIn(emailAddress, password)
    //       .then(() => {
    //         console.log('This user has been created and is signed in!')
    //         this.props.history.push('/');
    //       });
      }
    
  
    //  .catch((error) => {
    //    console.error(error);
    //     this.props.history.push('/')
    //   })
  

  cancel = (e) => {
    e.preventDefault()
    this.props.history.push('/')
  }
  render() {
  
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
      {/* <label htmlFor="confirmPassword">Confirm Password</label>
      <input id="confirmPassword" name="confirmPassword" type="password" onChange={this.change} /> */}
      <button className="button" type="submit">Sign Up</button><button className="button button-secondary" onClick={this.cancel}>Cancel</button>
    </form>
    <p>Already have a user account? Click here to <Link to="/signin">sign in</Link></p>
    </div>
    )
  }

  
}
