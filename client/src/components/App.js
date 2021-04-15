import React, { useState, useEffect } from 'react'
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import Header from './Header'
import Courses from './Courses'
import CourseDetail from './CourseDetail'
import '../styles/index.css'
import axios from 'axios'

// NOTE: reset.css is being imported in index.html - remove if not needed (clashes with index.css??)

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Courses />} />
          <Route exact path='/course/:id' component={CourseDetail} />
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App
