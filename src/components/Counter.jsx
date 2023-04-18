import { useState } from 'react'
import { data } from '../data.js'

export const Counter = () => {
  const [value, setValue] = useState(0)

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((initValue) => {
        return initValue + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem' }}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increese
        </button>
        <button className="btn" onClick={complexIncrease}>
          Increese Later
        </button>
      </section>
    </>
  )
}

export const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                removeItem(person.id)
              }}>
              Delete
            </button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear
      </button>
    </>
  )
}

export const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 33,
    message: 'message',
  })

  const changeMessage = () => {
    let newMessage = 'new message'
    setPerson({ ...person, message: newMessage })
  }

  return (
    <>
      <div className="item">
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
      </div>
      <button className="btn" onClick={changeMessage}>
        Change
      </button>
    </>
  )
}
