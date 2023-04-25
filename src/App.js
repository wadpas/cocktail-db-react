import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cocktail from './pages/Cocktail'
import Error from './pages/Error'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboute" element={<About />} />
        <Route path="/cocktail/:id" element={<Cocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
