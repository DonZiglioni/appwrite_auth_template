import React from 'react'
import RoutesList from './RoutesList'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  )
}

export default App
