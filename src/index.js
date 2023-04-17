import React from 'react'
import ReactDOM from 'react-dom/client'

function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg"
    alt=""
  />
)

const Title = () => <h1>IT STARTS WITH US</h1>
const Author = () => <h2>Colleen Hoover</h2>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
