import React, { useState, useEffect } from 'react'
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

import '../styles/index.css'
// import axios from 'axios'

// Components
import Header from './Header'
import Courses from './Courses'
import CourseDetail from './CourseDetail'

// Components with Context
import withContext from '../Context'
const HeaderWithContext = withContext(Header)
const CourseDetailWithContext = withContext(CourseDetail)

// NOTE: reset.css is being imported in index.html - remove if not needed (clashes with index.css??)

function App () {
  return (
    <>
      <BrowserRouter>
        <HeaderWithContext />
        <Switch>
          <Route exact path='/' render={() => <Courses />} />
          <Route exact path='/courses/:id' component={CourseDetailWithContext} />
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App
