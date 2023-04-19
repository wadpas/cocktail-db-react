import React from 'react'
import { Counter } from './components/Counter'
import { UserList } from './components/UserList'
import { Form } from './components/Form'

function App() {
  return (
    <div className="container">
      <Counter />
      <Form />
      <UserList />
    </div>
  )
}

export default App
