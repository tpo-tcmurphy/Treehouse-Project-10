import axios from 'axios'
import createConfig from './CreateConfig'

// Make a config/baseURL file to import with below variable:
const apiBaseUrl = 'http://localhost:5000/api'

// Make api function authorization header specific (remove other portions) and then pass into
// axios.post (etc.) requests where needed
export default class Data {
  api (path, method, body = null, requiresAuth = false, credentials = null) {
    const url = apiBaseUrl + path

    const options = {
      method,
      // Might still need headers?
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    if (body !== null) {
      options.body = JSON.stringify(body)
    }

    // Keep this!
    if (requiresAuth) {
      const encodedCredentials = Buffer.from(`${credentials.emailAddress}:${credentials.password}`).toString('base64')
      options.headers.Authorization = `Basic ${encodedCredentials}`
    }
    return axios(url, options)
  }

  // This is being used
  async getUser (emailAddress, password) {
    const response = await this.api('/users', 'GET', null, true, { emailAddress, password })
    if (response.status === 200) {
      return response
    } else if (response.status === 401) {
      return null
    } else {
      throw new Error()
    }
  }

  // TBD
  async createCourse (course, emailAddress, password) {
    const config = createConfig(emailAddress, password, 'http://localhost:5000/api/courses', 'POST', course)
    const response = await axios(config)
  }

  // TBD
  async updateCourse (courseId, course, emailAddress, password) {
    const url = 'http://localhost:5000/api/courses/' + courseId
    const config = createConfig(emailAddress, password, url, 'PUT', course)
    const response = await axios(config)
  }

  // TBD
  async deleteCourse (courseId, emailAddress, password) {
    const url = 'http://localhost:5000/api/courses/' + courseId
    const config = createConfig(emailAddress, password, url, 'DELETE')
    const response = await axios(config)
  }
}
