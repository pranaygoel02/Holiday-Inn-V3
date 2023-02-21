import React from 'react'
import NavProvider from './context/NavContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Landing from './pages/Landing/Landing'

function App() {
  return (
  <NavProvider>
    <div className='flex flex-col'>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      </Routes>
    </Router>
    </div>
  </NavProvider>
  )
}

export default App