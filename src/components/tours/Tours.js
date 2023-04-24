import React, { useEffect, useState } from 'react'
import Tour from './Tour'
import './index.css'
const url = 'https://course-api.com/react-tours-project'

const Tours = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return loading ? (
    <section className="section loading">
      <h2>loading...</h2>
    </section>
  ) : !tours.length ? (
    <div className="title">
      <h2>No tourse</h2>
      <button onClick={fetchTours} className="btn">
        Find tours
      </button>
    </div>
  ) : (
    <section className="section">
      <div className="title">
        <h2>Tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => (
        <Tour {...tour} removeTour={removeTour} key={tour.id} />
      ))}
    </section>
  )
}
export default Tours
