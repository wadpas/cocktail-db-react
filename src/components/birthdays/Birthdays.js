import React, { useState } from 'react'
import data from './data'
import './index.css'

const Birthdays = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3> {people.length} birthday today</h3>
        {people.map((p) => {
          return (
            <article key={p.id} className="person">
              <img src={p.image} alt={p.name} />
              <div>
                <h4>{p.name}</h4>
                <p>{p.age}</p>
              </div>
            </article>
          )
        })}
        <button onClick={() => setPeople([])} className="random-btn">
          Clear
        </button>
      </section>
    </main>
  )
}

export default Birthdays
