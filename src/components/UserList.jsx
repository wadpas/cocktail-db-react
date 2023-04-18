import { useEffect, useState } from 'react'

export const SetTitle = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value > 0) {
      document.title = `Counter: ${value}`
    }
  }, [value])

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </>
  )
}

export const Cleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  )
}

export const UserList = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users')
    const users = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h3>Users</h3>
      <ul className="users">
        {users.map(({ login, id, avatar_url, html_url }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt="avatar" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}></a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
