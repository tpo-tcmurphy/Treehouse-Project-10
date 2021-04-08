import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [dataState, setDataState] = useState([])
  const [routePath, setRoutePath] = useState('courses')

  useEffect(() => {
    axios(`http://localhost:5000/api/${routePath}`)
      .then(response => response.data)
      .then(data => setDataState(data))
    return () => {
      console.log('cleanup')
    }
  }, [routePath])

  return (
    <>
      <h2>{routePath}</h2>
      {dataState.map(data => {
        return <li key={JSON.stringify(data.title)}>{JSON.stringify(data.title)}</li>
      })}
    </>
  );
}

export default App;
