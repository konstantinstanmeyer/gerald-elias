import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'

import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
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
