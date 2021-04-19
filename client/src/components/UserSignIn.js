import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserSignIn extends Component {
  state = {
    emailAddress: '',
    password: '',
  }

  render() {
    const {
      emailAddress,
      password,
      errors,
    } = this.state

    return (
      <main>
      <div className='form--centered'>
          <h2>Sign In</h2>
          <form onSubmit={this.submit}>
              <label htmlFor='emailAddress'>Email Address</label>
              <input id='emailAddress' name='emailAddress' type='email' value={emailAddress} onChange={this.change} />
              <label htmlFor='password'>Password</label>
              <input id='password' name='password' type='password' value={password} onChange={this.change} />
              <button className='button' type='submit'>Sign In</button><button className='button button-secondary' onClick={this.cancel}>Cancel</button>
          </form>
          <p>Don't have a user account? Click here to <Link to='/signup'>sign up</Link>!</p>
      </div>
      </main>
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
    const { emailAddress, password } = this.state

    context.actions.signIn(emailAddress, password)
      .then((user) => {
        if (user === null) {
          this.setState(() => {
            return { errors: [ 'Sign-in was unsuccessful' ] }
          })
        } else {
          this.props.history.push('/')
        }
      })
      .catch((error) => {
        console.error(error);
        this.props.history.push('/error')
      })
  }

  cancel = () => {
    this.props.history.push('/')
  }
}
