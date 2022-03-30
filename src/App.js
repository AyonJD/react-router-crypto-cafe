import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Homepage></Homepage> }></Route>
      </Routes>
    </div>
  )
}

export default App
