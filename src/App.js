import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Birthdays from './components/birthdays/Birthdays'
import Tours from './components/tours/Tours'
import Review from './components/review/Review'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="random-btn" to="/birthdays">
          Birthdays
        </Link>
        <Link className="random-btn" to="/tours">
          Tours
        </Link>
        <Link className="random-btn" to="/">
          Review
        </Link>
      </header>
      <Routes>
        <Route path="/birthdays" element={<Birthdays />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/" element={<Review />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
