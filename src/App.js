import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CV from './components/cv/CV'
import Tours from './components/tours/Tours'
import Review from './components/review/Review'
import Accordion from './components/accordion/Accordion'
import Caffe from './components/caffe/Caffe'

function App() {
  return (
    <BrowserRouter>
      <div className="title">
        <Link className="random-btn" to="/cv">
          CV
        </Link>
        <Link className="random-btn" to="/tours">
          Tours
        </Link>
        <Link className="random-btn" to="/review">
          Review
        </Link>
        <Link className="random-btn" to="/accordion">
          Accordion
        </Link>
        <Link className="random-btn" to="/">
          Caffe
        </Link>
      </div>
      <Routes>
        <Route path="/cv" element={<CV />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/review" element={<Review />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/" element={<Caffe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
