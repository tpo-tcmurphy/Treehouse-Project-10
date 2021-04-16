import axios from 'axios'
//import UserSignUp from './components/UserSignUp'

const apiBaseUrl = 'http://localhost:5000/api'

export default class Data {
  api (path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = apiBaseUrl + path

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    if (body !== null) {
      options.body = JSON.stringify(body)
    }

    if (requiresAuth) {
      const encodedCredentials = Buffer.from(`${credentials.emailAddress}:${credentials.password}`).toString('base64')
      options.headers.Authorization = `Basic ${encodedCredentials}`
    }
    return axios(url, options)
  }

  // This is being used
  async getUser (emailAddress, password) {
    console.log(emailAddress, password)
    const response = await this.api('/users', 'GET', null, true, { emailAddress, password })
    if (response.status === 200) {
      return response
    } else if (response.status === 401) {
      return null
    } else {
      throw new Error()
    }
  }

  // This is being used
  async createUser (user) {
    console.log('createUserCalled')
    console.log(user)
    const response = await this.api('/users', 'POST', user, false, null)
    console.log('API Response Ran')
    return response
    // if (response.status === 201) {
    //   return []
    // } else if (response.status === 400) {
    //   console.log('responseStatus 400')
    //   return response.json().then(data => {
    //     return data.errors
    //   })
    // } else {
    //   console.log('error thrown')
    //   throw new Error()
    // }
  }

  // TBD
  async createCourse (course, emailAdress, password) {
    const response = await this.api('/courses', 'POST', course)
    if (response.status === 201) {
      return []
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors
      })
    } else {
      throw new Error()
    }
  }

  // TBD
  async updateCourse (courseId, course, emailAddress, password) {
    const response = await this.api('/courses/' + courseId, 'PUT', course, true, { emailAddress, password })
    if (response.status === 204) {
      return []
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors
      })
    } else {
      throw new Error()
    }
  }

  // TBD
  async deleteCourse (courseId, emailAddress, password) {
    const response = await this.api('/courses/' + courseId, 'DELETE', null, true, { emailAddress, password })
    if (response.status === 204) {
      return []
    } else {
      throw new Error()
    }
  }
}
