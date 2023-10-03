import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'

import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
