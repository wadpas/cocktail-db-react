import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Experience from './components/experience/Experience'
import Tours from './components/tours/Tours'
import Accordion from './components/accordion/Accordion'
import Caffe from './components/caffe/Caffe'
// import Team from './components/team/Team'

function App() {
  const buttons = ['caffe', 'tours', 'experience', 'accordion']

  return (
    <BrowserRouter>
      <div className="title">
        {buttons.map((button, index) => {
          return (
            <Link className="filter-btn" to={`/${button}`} key={index}>
              {button.toUpperCase()}
            </Link>
          )
        })}
      </div>

      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/caffe" element={<Caffe />} />
        <Route path="/" element={<Caffe />} />
        {/* <Route path="/team" element={<Team />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
