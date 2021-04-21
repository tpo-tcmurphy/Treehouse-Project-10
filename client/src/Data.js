import axios from 'axios'
import createConfig from './CreateConfig'

// Make a config/baseURL file to import with below variable:
const apiBaseUrl = 'http://localhost:5000/api'

// CONVERT TO HOOK
export default class Data {
  api (path, method, body = null, requiresAuth = false, credentials = null) {
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

    // Keep this!
    if (requiresAuth) {
      const encodedCredentials = Buffer.from(`${credentials.emailAddress}:${credentials.password}`).toString('base64')
      options.headers.Authorization = `Basic ${encodedCredentials}`
    }
    return axios(url, options)
  }

  // CONVERT TO MATCH FORMAT OF BELOW FUNCTIONS
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

  async createCourse (course, emailAddress, password) {
    const config = createConfig(emailAddress, password, 'http://localhost:5000/api/courses', 'POST', course)
    await axios(config)
  }

  async updateCourse (courseId, course, emailAddress, password) {
    const url = 'http://localhost:5000/api/courses/' + courseId
    const config = createConfig(emailAddress, password, url, 'PUT', course)
    await axios(config)
  }

  async deleteCourse (courseId, emailAddress, password) {
    const url = 'http://localhost:5000/api/courses/' + courseId
    const config = createConfig(emailAddress, password, url, 'DELETE')
    await axios(config)
  }
}
