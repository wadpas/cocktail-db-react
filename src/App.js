import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Birthdays from './components/birthdays/Birthdays'
import Tours from './components/tours/Tours'
import Review from './components/review/Review'
import Accordion from './components/accordion/Accordion'

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
        <Link className="random-btn" to="/review">
          Review
        </Link>
        <Link className="random-btn" to="/">
          Accordion
        </Link>
      </header>
      <Routes>
        <Route path="/birthdays" element={<Birthdays />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/review" element={<Review />} />
        <Route path="/" element={<Accordion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
