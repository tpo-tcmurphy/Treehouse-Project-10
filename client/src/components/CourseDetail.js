import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

function CourseDetail () {
  //const { id } = useParams()
  const [dataState, setDataState] = useState([])
  // const [routePath, setRoutePath] = useState(`courses/${id}`)

  useEffect(() => {
    axios(`http://localhost:5000/api/courses/${1}`)
      .then(response => response.data)
      .then(data => setDataState(data))
    return () => {
      setDataState([])
    }
  }, [1])
  return (
    <>
      <Router><Route path='/api/courses/:id'>CourseDetaillink</Route></Router>
      <h2>{1}</h2>

      <li key={JSON.stringify(dataState.title)}>{JSON.stringify(dataState.title)} </li>

    </>
  )
}
export default CourseDetail
