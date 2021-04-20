import React from 'react'
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

import '../styles/index.css'


// Components
import Header from './Header'
import PrivateRoute from '../PrivateRoute'
import Courses from './Courses'
import CourseDetail from './CourseDetail'
import UserSignIn from './UserSignIn'
import UserSignOut from './UserSignOut'
import UserSignUp from './UserSignUp'
import CreateCourse from './CreateCourse'
import UpdateCourse from './UpdateCourse'
// Components with Context
import withContext from '../Context'
const HeaderWithContext = withContext(Header)
const CourseDetailWithContext = withContext(CourseDetail)
const UserSignInWithContext = withContext(UserSignIn)
const UserSignOutWithContext = withContext(UserSignOut)
const UserSignUpWithContext = withContext(UserSignUp)
const CreateCourseWithContext = withContext(CreateCourse)
const UpdateCourseWithContext = withContext(UpdateCourse)
// NOTE: reset.css is being imported in index.html - remove if not needed (clashes with index.css??)

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <HeaderWithContext />
        <Switch>
          <Route exact path='/' render={() => <Courses />} />
          <PrivateRoute path='/courses/create' component={CreateCourseWithContext} />
          <PrivateRoute path='/courses/:id/update' component={UpdateCourseWithContext} />
          <Route exact path='/courses/:id' component={CourseDetailWithContext} />
          <Route path='/signin' component={UserSignInWithContext} />
          <Route path='/signout' component={UserSignOutWithContext} />
          <Route path='/signup' component={UserSignUpWithContext} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
