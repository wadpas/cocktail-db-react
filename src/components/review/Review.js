import React, { useState } from 'react'
import people from './data'
import './index.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    setIndex(randomNumber)
  }

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Review</h2>
          <article className="review">
            <div className="img-container">
              <img src={image} alt={name} className="person-img" />
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            <div className="button-container">
              <button
                className="prev-btn"
                onClick={() => {
                  if (index === 0) return
                  setIndex(index - 1)
                }}>
                <FaChevronLeft />
              </button>
              <button
                className="next-btn"
                onClick={() => {
                  if (index + 1 === people.length) return
                  setIndex(index + 1)
                }}>
                <FaChevronRight />
              </button>
              <button className="random-btn" onClick={randomPerson}>
                Suprise me
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Review
