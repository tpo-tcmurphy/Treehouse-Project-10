import React, { Component } from 'react'
import Cookies from 'js-cookie'
import Data from './Data'

const Context = React.createContext()

export class Provider extends Component {

  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null
  }

  constructor () {
    super()
    this.data = new Data()
  }

  signIn = async (emailAddress, password) => {
    const user = await this.data.getUser(emailAddress, password)
    console.log('THIS IS DA USER', user)
    if (user !== null) {
      this.setState(() => {
        user.password = password
        return {
          authenticatedUser: user,
        }
      })
      Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1})
    }
    return user
  }

  signOut = () => {
    this.setState({ authenticatedUser: null })
    Cookies.remove('authenticatedUser')
  }

  testFunction = () => {
    console.log('test function working wtf')
  }

  render() {
    const { authenticatedUser } = this.state

    const value = {
      authenticatedUser,
      testFunction: this.testFunction,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut
      },
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    )
  }
}

export const Consumer = Context.Consumer

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    )
  }
}