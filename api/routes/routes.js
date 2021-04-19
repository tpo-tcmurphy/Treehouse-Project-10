const express = require('express')
const router = express.Router()
const User = require('../models').User
const Course = require('../models').Course
const { authenticateUser } = require('../middleware/user-auth')
const { asyncHandler } = require('../middleware/async-handler')

/**********************************************************
 * USER ROUTES
/**********************************************************/

// A /api/users GET route that will return the currently authenticated user along with a 200 HTTP status code
// Note: 200 HTTP status code is default
router.get('/api/users', authenticateUser, asyncHandler(async (req, res) => {
  const user = req.currentUser

  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddress: user.emailAddress,
    userId: user.id
  })

  console.log(user.id)
}))

// A /api/users POST route that will create a new user, set the Location header to "/",
// and return a 201 HTTP status code and no content
router.post('/api/users', asyncHandler(async (req, res, next) => {
  try {
    await User.create(req.body)
    res.location('/').status(201).end()
  } catch (error) {
    next(error)
  }
}))

/**********************************************************
 * COURSES ROUTES
/**********************************************************/

// A /api/courses GET route that will return a list of all courses including the User that owns each course
// and a 200 HTTP status code (note: 200 HTTP status code is default)
router.get('/api/courses', asyncHandler(async (req, res, next) => {
  const courses = await Course.findAll({
    attributes: [
      'id',
      'title',
      'description',
      'estimatedTime',
      'materialsNeeded',
      'userId'
    ],
    include: [
      {
        model: User,
        attributes: [
          'firstName',
          'lastName',
          'emailAddress'
        ]
      }
    ]
  })

  // Conditional that forwards error to global error handler if appropriate
  if (courses) {
    res.json(courses)
  } else {
    const error = new Error('Courses Not Found')
    error.status = 404
    next(error)
  }
}))

// A /api/courses/:id GET route that will return the corresponding course along with the User that owns that course
// and a 200 HTTP status code. (note: 200 HTTP status code is default)
router.get('/api/courses/:id', asyncHandler(async (req, res, next) => {
  const course = await Course.findByPk(req.params.id, {
    attributes: [
      'id',
      'title',
      'description',
      'estimatedTime',
      'materialsNeeded',
      'userId'
    ],
    include: [
      {
        model: User,
        attributes: [
          'firstName',
          'lastName',
          'emailAddress'
        ]
      }
    ]
  })

  // Conditional that forwards error to global error handler if appropriate
  if (course) {
    res.json(course)
  } else {
    const error = new Error('Course Not Found')
    error.status = 404
    next(error)
  }
}))

// A /api/courses POST route that will create a new course, set the Location header to the URI for the newly
// created course, and return a 201 HTTP status code and no content
router.post('/api/courses', authenticateUser, asyncHandler(async (req, res, next) => {
  try {
    const course = await Course.create(req.body)
    res.location('/api/courses/' + course.id).status(201).end()
  } catch (error) {
    next(error)
  }
}))

// A /api/courses/:id PUT route that will update the corresponding course and return a 204 HTTP status code and no
// content
router.put('/api/courses/:id', authenticateUser, asyncHandler(async (req, res, next) => {
  const course = await Course.findByPk(req.params.id)
  const user = req.currentUser
  try {
    if (user.id === course.userId) {
      await course.update(req.body)
      res.status(204).end()
    } else {
      res.status(403).end()
    }
  } catch (error) {
    next(error)
  }
}
))

// A /api/courses/:id DELETE route that will delete the corresponding course and return a 204 HTTP status code and no
// content
router.delete('/api/courses/:id', authenticateUser, asyncHandler(async (req, res, next) => {
  const course = await Course.findByPk(req.params.id)
  const user = req.currentUser
  try {
    if (user.id === course.userId) {
      await course.destroy()
      res.status(204).end()
    } else {
      res.status(403).end()
    }
  } catch (error) {
    res.status(400)
    next(error)
  }
}))

// Exported for use in app.js (line 34)
module.exports = router
